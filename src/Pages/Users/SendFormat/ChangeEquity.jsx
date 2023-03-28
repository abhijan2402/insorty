import React,{useState} from "react";
import Swal from "sweetalert2";

const ChangeEquity = ({data}) => {
    const token = localStorage.getItem("token");

    let list=[]
    
    data.map((partner)=>{
        let obj ={_id:partner._id,equity:partner.equity}
        list.push(obj)
        
    })

    const [listArr,setListArr] = useState([...list])

    const onChange=(value,index)=>{
        let equityData = [...listArr]
        equityData[index].equity = Number(value)
        setListArr([...equityData])
    } 

    const handelSubmit = (e) => {
        e.preventDefault();
       const percent = listArr.reduce(
               (total, currentItem) => (total = total + Number(currentItem.equity)),
               0
           )

           if(percent>100 || percent<100){
               Swal.fire({
                   icon: "error",
                   title: "Oops...",
                   text: "Check total percentage",
               })
           }

           else{
               fetch("https://insorty-api.onrender.com/shop/updatePartnerEquity", {
                   method: "POST",
                   headers: { "Content-Type": "application/json", cookie_token: token },
                   body: JSON.stringify({partners: listArr}),
               })
                   .then((res) => res.json())
                   .then((data) => {
                       if (data.success) {
                           Swal.fire({
                               icon: "success",
                               title: "Partner added successfully",
                               showConfirmButton: false,
                               timer: 1500,
                           });
                           window.location.reload();
                       } else {
                           Swal.fire({
                               icon: "error",
                               title: "Oops...",
                               text: "Something went wrong!",
                           });
                       }
                   });
            console.log(listArr)
           }

    };

    return (
        <section>
            {/* The button to open modal */}
            <input type="checkbox" id="changeShare" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="changeShare"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">Add new partner</h3>
                    <div className="py-4">
                        <form action="" onSubmit={handelSubmit}>

            {data && listArr.map((partner,index)=>{

                return(
                    <div className="flex">
                     <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Partner Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Partner Name"
                                    name="partnerName"
                                    value={data[index].name}
                                    className="input input-bordered"
                                    style={{
                                        width: "100%",
                                        border: "1px solid #e5e7eb",
                                    }}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Balance</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Balance"
                                    name="balance"
                                    value={partner.equity}
                                    className="input input-bordered"
                                    onChange={(e)=>onChange(e.target.value,index)}
                                    
                                />
                            </div>

                    </div>
                )
            })}

           
                    
                           

                            <div>
                                <button className="btn bg-[#AA237A] my-4 px-6" type="submit">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChangeEquity;
