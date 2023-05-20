import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../../Components/Loader/Loader";
import moment from "moment/moment";

const Extra = () => {
  const token = localStorage.getItem("token");

  const { data: extraData, isLoading } = useQuery({
    queryKey: ["extraData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-backend-clone.vercel.app/shop/getExtraThings",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });


  if (isLoading) return <Loader></Loader>;

  if (!extraData.length) {
    return <h1>No data found</h1>;
  }

  const entriesMainData = extraData?.map((entry) => {
    return entry?.entries;
  });

  return (
    <section className="my-2">
      <div className="title">
        <h2 className="font-bold md:text-[1.5rem] text-center">Extra /राशन सब्जी आदि खरीद</h2>
        <div className="flex gap-8 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">सेल्समेन का नाम</h2>
          <h2 className="font-bold text-[1.5rem]">
            <input
              type="text"
              value={new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            />
          </h2>
        </div>
        <div className="divider my-2"></div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th> क्र. सं.</th>
                <th>दिनांक / Date </th>
                <th>रकम/ price</th>
                <th>विवरण/ Details</th>
              </tr>
            </thead>
            <tbody>
              {(entriesMainData[0] &&
                entriesMainData[0].map((entry, index) => {
                  const { date, cash, comments } = entry;
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>
                        <input
                          type="text"
                          name="date"
                          value={moment(date).format("DD/MM/YYYY")}
                          readOnly
                          className="dailyReportInput"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="price"
                          readOnly
                          className="semiSmallInput"
                          value={cash}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="details"
                          readOnly
                          className="dailyReportInput"
                          value={comments}
                        />
                      </td>
                    </tr>
                  );
                })) || (
                <>
                  <p>
                    <span className="text-red-500">No Data Found</span>
                  </p>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Extra;
