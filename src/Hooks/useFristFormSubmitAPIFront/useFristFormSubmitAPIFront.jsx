import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { DataContextApi } from "../../Context/DataContext";
import moment from "moment";
import swal from "sweetalert";

const useFristFormSubmitAPIFront = () => {
  const token = localStorage.getItem("token");
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const firstFront = JSON.parse(localStorage.getItem("firstFront"));
  const mlForm = JSON.parse(localStorage.getItem("mlForm"));
  const BasedURL = process.env.REACT_APP_API_URL;



  const { salesMan, drDate } = useContext(DataContextApi);

  const submitFristFormHandler = async (e) => {
    setIsLoadingSubmit(true);
    e.preventDefault() 
    
    const dataDetails650 = [];
    for (let index = 0; firstFront ? index < firstFront.length : 0; index++) {
      const element = firstFront[index];
      dataDetails650.push({
        liquor: element.size.sizes.find((elem)=>elem.quantityInML===750)?._id,
        brandName: element.brandName,
        averageRate: element.averageRate750,
        quantityInML: 750,
        openingStock: element.startingStock750,
        purchaseShop: element.incomingPurchase750,
        purchaseShopRate: element.buyRate750,
        purchaseOutSide: element.incomePurchase750,
        purchaseOutSideRate: element.purchaseRate750,
        credits: element.inflowCredit750,
        send: element.sending750,
        remaining: element.sumRemainder750,
        closingStock: element.closingStock750,
        sales: element.sales750,
        sellingRate: element.mainRate750,
        total: Number(element.mainRate750) * Number(element.sales750),
      });
    }

    const dataDetails550 = [];
    for (let index = 0; firstFront ? index < firstFront.length : 0; index++) {
      const element = firstFront[index];
      dataDetails550.push({
        liquor: element.size.sizes.find((elem)=>elem.quantityInML===180)?._id,
        brandName: element.brandName,
        averageRate: element.averageRate180,
        quantityInML: 180,
        openingStock: element.startingStock180,
        purchaseShop: element.incomingPurchase180,
        purchaseShopRate: element.buyRate180,
        purchaseOutSide: element.incomePurchase180,
        purchaseOutSideRate: element.purchaseRate180,
        credits: element.inflowCredit180,
        send: element.sending180,
        remaining: element.sumRemainder180,
        closingStock: element.closingStock180,
        sales: element.sales180,
        sellingRate: element.mainRate180,
        total: Number(element.mainRate180) * Number(element.sales180),
      });
    }

    const dataDetails375 = [];
    for (let index = 0; firstFront ? index < firstFront.length : 0; index++) {
      const element = firstFront[index];
      dataDetails375.push({
        liquor: element.size.sizes.find((elem)=>elem.quantityInML===375)?._id,
        brandName: element.brandName,
        averageRate: element.averageRate330,
        quantityInML: 375,
        openingStock: element.startingStock330,
        purchaseShop: element.incomingPurchase330,
        purchaseShopRate: element.buyRate330,
        purchaseOutSide: element.incomePurchase330,
        purchaseOutSideRate: element.purchaseRate330,
        credits: element.inflowCredit330,
        send: element.sending330,
        remaining: element.sumRemainder330,
        closingStock: element.closingStock330,
        sales: element.sales330,
        sellingRate:element.mainRate330,
        total: Number(element.mainRate330) * Number(element.sales330),
      });
    }

    const addSecondFormData = [];
    for (let index = 0; mlForm ? index < mlForm.length : 0; index++) {
      const element = mlForm[index];
      addSecondFormData.push({
        liquor: element.size.sizes.find((elem)=>elem.quantityInML===Number(element.selectStockVarient))?._id,
        brandName: element.brandName,
        quantityInML: element.selectStockVarient,
        averageRate:element.averageRate,
        openingStock: element.startingStock,
        purchaseShop: element.incomePurchase,
        purchaseShopRate: element.buyRate,
        purchaseOutSide: element.incomingPurchase,
        purchaseOutSideRate: element.purchaseRate,
        credits: element.inflowCredit,
        send: element.sending,
        remaining: element.sumRemainder,
        closingStock: element.closingStock,
        sales: element.sales,
        sellingRate: element.mainRate,
        total: element.total,
      });
    }

    if (salesMan===''){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'Enter Salesman Name',
      });
    }

    else {

      fetch(`${BasedURL}/shop/getFrontPageData?from=${moment(drDate).format('DD MMMM YYYY')}&to=${moment(drDate).format('DD MMMM YYYY')}&page=0&pagesize=200`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          cookie_token: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.success===true){
            
            swal({
              title: "Are you sure?",
              text: `Data already present for same date`,
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willDelete) => {
              if (willDelete) {
                try {
                  const api1 =  fetch(
                    "https://insorty-api.onrender.com/shop/addFrontPageData",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        cookie_token: token,
                      },
                      body: JSON.stringify({
                        date: drDate,
                        salesmen: salesMan,
                        entries: [
                          ...dataDetails650,
                          ...dataDetails550,
                          ...dataDetails375,
                          ...addSecondFormData,
                        ],
                      }),
                    }
                  );
                
                  
                  Promise.all([api1])
                    .then((responses) => Promise.all(responses.map((res) => res.json())))
                    .then((data) => {
                      console.log(data);
                      if (data[0].success) {
                        Swal.fire({
                          icon: "success",
                          title: "Success",
                          text: "Data Added Successfully",
                        });
                      }
                    })
                    .catch((err)=>{
                      const errorMessage = err.message;
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                  });
                    });
                } catch (error) {
                  const errorMessage = error.message;
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                  });
                } finally {
                  setIsLoadingSubmit(false);
                }
              } else {
                setIsLoadingSubmit(false);
                swal("not submitted");
                
              }
            });
          }
          else{
            try {
              const api1 =  fetch(
                "https://insorty-api.onrender.com/shop/addFrontPageData",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    cookie_token: token,
                  },
                  body: JSON.stringify({
                    date: drDate,
                    salesmen: salesMan,
                    entries: [
                      ...dataDetails650,
                      ...dataDetails550,
                      ...dataDetails375,
                      ...addSecondFormData,
                    ],
                  }),
                }
              );
            
              
              Promise.all([api1])
                .then((responses) => Promise.all(responses.map((res) => res.json())))
                .then((data) => {
                  console.log(data);
                  if (data[0].success) {
                    Swal.fire({
                      icon: "success",
                      title: "Success",
                      text: "Data Added Successfully",
                    });
                  }
                })
                .catch((err)=>{
                  const errorMessage = err.message;
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorMessage,
              });
                });
            } catch (error) {
              const errorMessage = error.message;
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorMessage,
              });
            } finally {
              setIsLoadingSubmit(false);
            }
          }
        });
    }
  };

  return {
    isLoadingSubmit,
    submitFristFormHandler,
  };
};

export default useFristFormSubmitAPIFront;

