import React, { useState } from "react";
import Swal from "sweetalert2";

const ChangeEquity = ({ data }) => {
  const token = localStorage.getItem("token");

  let list = [];

  data.map((partner) => {
    let obj = { _id: partner._id, equity: partner.equity };
    list.push(obj);
  });

  const [listArr, setListArr] = useState([...list]);

  const onChange = (value, index) => {
    let equityData = [...listArr];
    equityData[index].equity = (value);
    setListArr([...equityData]);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const percent = listArr.reduce(
      (total, currentItem) => (total = total + Number(currentItem.equity)),
      0
    );

    if (percent > 100 || percent < 100) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Check total percentage",
      });
    } else {

      let equityData = [...listArr];
      // equityData[index].equity = (value);
      // setListArr([...equityData]);
      equityData.map((partner)=>{
        partner.equity = Number(partner.equity) || 0

      })

      
      fetch("https://insorty-api.onrender.com/shop/updatePartnerEquity", {
        method: "POST",
        headers: { "Content-Type": "application/json", cookie_token: token },
        body: JSON.stringify({ partners: equityData }),
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
      console.log(listArr);
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
          <h3 className="text-lg font-bold">शेयर बदलें</h3>
          <div className="py-4">
            <form action="" onSubmit={handelSubmit}>
              {data &&
                listArr.map((partner, index) => {
                  return (
                    <div className="flex">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">पार्टनर नाम</span>
                        </label>
                        <input
                          type="text"
                          name="partnerName"
                          value={data[index].name}
                          disabled
                          className="input input-bordered"
                          style={{
                            width: "100%",
                            border: "1px solid #e5e7eb",
                          }}
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">हिस्सा</span>
                        </label>
                        <input
                          type="number"
                          placeholder="Balance"
                          name="balance"
                          value={partner.equity}
                          required
                          className="input input-bordered"
                          onChange={(e) => onChange(e.target.value, index)}
                        />
                      </div>
                    </div>
                  );
                })}

              <div>
                <button className="btn commonBtn " type="submit">
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
