import { useContext } from "react";
import { DataContextApi } from "../../../../../Context/DataContext";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../../Components/Loader/Loader";

const FinalReport = ({
  beerTotal,
  rmlTotal,
  udhaariTotal,
  commisionTotal,
}) => {
  const { intoAccountState, setintoAccountState } = useContext(DataContextApi);
  const { paidDues, setPaidDues } = useContext(DataContextApi);
  const token = localStorage.getItem('token')

  localStorage.setItem("beerTotal", JSON.stringify(beerTotal));
  localStorage.setItem("rmlTotal", JSON.stringify(rmlTotal));
  // localStorage.setItem("cashTotal", JSON.stringify(Number(localStorage.getItem('totalPaymentsRecieved'))));
  localStorage.setItem("udhaariTotal", JSON.stringify(udhaariTotal));
  localStorage.setItem("commisionTotal", JSON.stringify(commisionTotal));
  localStorage.setItem('pichlaBakaya', JSON.stringify(0))

  // localStorage.setItem("paymentRecieved", JSON.stringify(paymentRecieved));


  const firstformData = JSON.parse(localStorage.getItem("firstFrontTotal"));
  const secondFront = JSON.parse(localStorage.getItem("mlFormTotal"));

  const { data: leftDues, isLoading } = useQuery({
    queryKey: ["extraData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getFinalReportData",
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

  const len = leftDues.length
  const pichla = leftDues.length > 0 ? leftDues[len - 1].restAmount.$numberDecimal : 0
  localStorage.setItem('pichlaBakaya', JSON.stringify(pichla))


  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Reason / विवरण</th>
              <th>total</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>1</th>
              <td>अंग्रेजी</td>
              <td>{firstformData + secondFront}</td>
            </tr>

            {/* 02 */}
            <tr>
              <th>2</th>
              <td>बीयर</td>
              <td>{Number(localStorage.getItem('totalFirstBack'))}</td>
            </tr>

            {/* 03 */}
            <tr>
              <th>3</th>
              <td>देशी/RML</td>
              <td>{rmlTotal}</td>
            </tr>
            {/* 04 */}
            <tr>
              <th>4</th>
              <td>कुल बिक्री</td>
              <td>{rmlTotal + Number(localStorage.getItem('totalFirstBack')) + firstformData + secondFront}</td>
            </tr>
            {/* 05 */}
            <tr>
              <th>5</th>
              <td>पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति</td>
              <td>{Number(localStorage.getItem('totalPaymentsRecieved'))}</td>
            </tr>
            {/* 06 */}
            <tr>
              <th>6</th>
              <td>खाते में (फोन पे आदि)</td>
              <td>
                <input
                  type="number"
                  className="commonSmallForm"
                  name="intoAccountState"
                  value={intoAccountState}
                  onChange={(e) => setintoAccountState(e.target.value)}
                />
              </td>
            </tr>
            {/* 07 */}
            <tr>
              <th>7</th>
              <td>उधारी/नामे</td>
              <td>{udhaariTotal}</td>
            </tr>
            {/* 08 */}
            <tr>
              <th>8</th>
              <td>कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि</td>
              <td>{commisionTotal}</td>
            </tr>
            {/* 09 */}
            <tr>
              <th>9</th>
              <td>पिछला बकाया</td>
              <td>{pichla}</td>
            </tr>
            {/* 10 */}

            <tr>
              <th>10</th>
              <td>total</td>
              <td>{rmlTotal + Number(localStorage.getItem('totalFirstBack')) + firstformData + secondFront + Number(localStorage.getItem('totalPaymentsRecieved')) - intoAccountState - udhaariTotal - commisionTotal + pichla}</td>
            </tr>
            <tr>
              <th>11</th>
              <td>आज भुगतान</td>
              <td><input
                type="number"
                className="commonSmallForm"
                name="intoAccountState"
                value={paidDues}
                onChange={(e) => setPaidDues(e.target.value)}
              /></td>
            </tr>
            {/* 11 */}
            <tr>
              <th>12</th>
              <td>शेष रकम</td>
              <td>{rmlTotal + Number(localStorage.getItem('totalFirstBack')) + firstformData + secondFront + Number(localStorage.getItem('totalPaymentsRecieved')) - Number(intoAccountState) - udhaariTotal - commisionTotal + pichla - Number(paidDues)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FinalReport;
