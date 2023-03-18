import React,{useRef} from "react";
import BorrowForm from "../BorrowForm/BorrowForm";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "react-bootstrap-typeahead";
import { useReactToPrint } from "react-to-print";

const Borrow = () => {
  const token = localStorage.getItem("token");
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });
  const { data: parties, isLoading: partiesLoading, refetch } = useQuery({
    queryKey: ["parties"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllParties",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });
  if (partiesLoading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <button
        className="my-4 btn btn-error text-white font-bold"
        onClick={handlePrint}
      >
        PRINT
      </button>
    <section ref={front} className="py-4">
      <div className="title">
        <h2 className="font-bold md:text-[1.5rem] text-center">
          उधारी (माल व नकद) नामे व जमा
        </h2>
        <div className="divider my-2"></div>
      </div>

      <div>
        <form action="">
          <div className="overflow-x-auto">
            <table className="table ">
              <thead>
                <tr>
                  <th> क्र. सं.</th>
                  <th>Party Name / पार्टी का नाम</th>
                  <th>नामे </th>
                  <th>जमा </th>
                  <th>चालू शेष</th>
                </tr>
              </thead>

              <tbody>
                {(parties &&
                  parties.map(
                    ((cur_sum) => (party, index) => {
                      return (
                        <BorrowForm
                          key={index}
                          index={index}
                          party={{
                            ...party,
                            current_balance: (cur_sum +=
                              party.deposits - party.debits),
                          }}
                        ></BorrowForm>
                      );
                    })(0)
                  )) || (
                  <>
                    <tr>
                      <td>
                        <span className="text-red-500">No Data Found</span>
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </section>
    </>
  );
};

export default Borrow;
