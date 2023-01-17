import React from "react";

const Extra = () => {
  return (
    <section className="my-2">
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">Extra /राशन सब्जी आदि खरीद</h2>
        <div className="flex gap-8 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">सेल्समेन का नाम</h2>
          <h2 className="font-bold text-[1.5rem]">12/12/2022</h2>
        </div>
        <div className="divider my-2"></div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>S.No</th>
                <th>दिनांक / Date </th>
                <th>रकम/ price</th>
                <th>विवरण/ Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>
                  <input
                    type="text"
                    name="date"
                    readOnly
                    className="semiSmallInput"
                    value={new Date().toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="price"
                    readOnly
                    className="semiSmallInput"
                    value={4574748}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="details"
                    readOnly
                    className="dailyReportInput"
                    value="बाहर के बिल का फोर्मेट"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Extra;
