import { useContext } from "react";
import { DataContextApi } from "../../../../../Context/DataContext";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../../Components/Loader/Loader";
import jwtDecode from "jwt-decode";

const FinalReport = ({ beerTotal, rmlTotal, udhaariTotal, commisionTotal }) => {
  const { intoAccountState, setintoAccountState } = useContext(DataContextApi);
  const { paidDues, setPaidDues } = useContext(DataContextApi);
  const token = localStorage.getItem("token");
  const shopType = jwtDecode(token).shopType
  console.log(shopType)

  localStorage.setItem("beerTotal", JSON.stringify(beerTotal));
  localStorage.setItem("rmlTotal", JSON.stringify(rmlTotal));

  localStorage.setItem("udhaariTotal", JSON.stringify(udhaariTotal));
  localStorage.setItem("commisionTotal", JSON.stringify(commisionTotal));
  localStorage.setItem("pichlaBakaya", JSON.stringify(0));
  


  const firstformData = JSON.parse(localStorage.getItem("firstFrontTotal"));
  const beerSecond = JSON.parse(localStorage.getItem("beerFormTotal"));
  const secondFront = JSON.parse(localStorage.getItem("mlFormTotal"));
  const pegTotal = JSON.parse(localStorage.getItem("pegFormTotal"))
  const smallPegTotal = JSON.parse(localStorage.getItem("smallPegFormTotal"))
  const barSuplementsTotal = JSON.parse(localStorage.getItem("barSuplementsTotal"))
  const vegitableAndOtherTotal = JSON.parse(localStorage.getItem("vegitableAndOtherTotal"))
  const beerFirst = JSON.parse(localStorage.getItem("totalFirstBack"))
  
  const { data: leftDues, isLoading } = useQuery({
    queryKey: ["extraData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-backend-clone.vercel.app/shop/getFinalReportData",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  

  if (isLoading) return <Loader></Loader>;

  const len = leftDues.length;
  const pichla = Number(
    leftDues.length > 0 ? leftDues[len - 1].restAmount.$numberDecimal : 0
  );
  localStorage.setItem("pichlaBakaya", JSON.stringify(pichla));

  return (
    <section>
      <div className="overflow-x-auto">
        <table className={shopType==="SHOP" ? "table" : "displayHidden"}>
          <thead>
            <tr>
              <th> क्र. सं.</th>
              <th>Reason / विवरण</th>
              <th>total</th>
            </tr>
          </thead>

          <tbody className="finalTableBody">
            <tr>
              <th>1</th>
              <td>अंग्रेजी</td>
              <td>{firstformData + secondFront}</td>
            </tr>

           

            {/* 02 */}
            <tr >
              <th>2</th>
              <td>बीयर</td>
              <td>
                {Number(JSON.parse(localStorage.getItem("totalFirstBack"))) +
                  beerSecond}
              </td>
            </tr>

            {/* 03 */}
            <tr >
              <th>3</th>
              <td>देशी/RML</td>
              <td>{Number(rmlTotal?rmlTotal:0)}</td>
            </tr>
            

           
            {/* 04 */}
            <tr>
              <th>4</th>
              <td>कुल बिक्री</td>
              <td>
                {Number(rmlTotal?rmlTotal:0) +
                  Number(JSON.parse(localStorage.getItem("totalFirstBack"))) +
                  firstformData +
                  secondFront +
                  beerSecond}
              </td>
            </tr>
            {/* 05 */}
            <tr>
              <th>5</th>
              <td>पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति</td>
              <td>{Number(localStorage.getItem("totalPaymentsRecieved"))}</td>
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
                  required
                  min={0}
                  value={intoAccountState}
                  onChange={(e) => setintoAccountState(e.target.value)}
                />
              </td>
            </tr>
            {/* 07 */}
            <tr>
              <th>7</th>
              <td>उधारी/नामे</td>
              <td>{Number(udhaariTotal ? udhaariTotal : 0)}</td>
            </tr>
            {/* 08 */}
            <tr>
              <th>8</th>
              <td>कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि</td>
              <td>{Number(commisionTotal ? commisionTotal : 0)}</td>
            </tr>
            {/* 09 */}
            <tr>
              <th>9</th>
              <td>पिछला बकाया</td>
              <td>{pichla}</td>
            </tr>
            {/* 10 */}

            <tr >
              <th>10</th>
              <td>total</td>
              <td >
                {Number(rmlTotal?rmlTotal:0) +
                  Number(JSON.parse(localStorage.getItem("totalFirstBack"))) +
                  firstformData +
                  secondFront +
                  beerSecond +
                  Number(localStorage.getItem("totalPaymentsRecieved")) -
                  intoAccountState -
                  Number(udhaariTotal ? udhaariTotal : 0) -
                  Number(commisionTotal ? commisionTotal : 0) +
                  pichla}
              </td>
            </tr>

           
            <tr>
              <th>11</th>
              <td>आज भुगतान</td>
              <td>
                <input
                  type="number"
                  required
                  min={0}
                  className="commonSmallForm"
                  name="intoAccountState"
                  value={paidDues}
                  onChange={(e) => setPaidDues(e.target.value)}
                />
              </td>
            </tr>
            {/* 11 */}
            <tr>
              <th>12</th>
              <td>शेष रकम</td>
              <td>
                {Number(rmlTotal?rmlTotal:0) +
                  Number(JSON.parse(localStorage.getItem("totalFirstBack"))) +
                  firstformData +
                  secondFront +
                  beerSecond +
                  Number(localStorage.getItem("totalPaymentsRecieved")) -
                  Number(intoAccountState) -
                  Number(udhaariTotal ? udhaariTotal : 0) -
                  Number(commisionTotal ? commisionTotal : 0) +
                  pichla -
                  Number(paidDues)}
              </td>
            </tr>
          </tbody>
        </table>

        {/* <------------------------BAR FINAL REPORT-----------------------> */}
        <table className={shopType==="BAR" ? "table" : "displayHidden"}>
          <thead>
            <tr>
              <th> क्र. सं.</th>
              <th>Reason / विवरण</th>
              <th>total</th>
            </tr>
          </thead>

          <tbody className="finalTableBody">
            

            <tr>
              <th>1</th>
              <td>अंग्रेजी</td>
              <td>{Number(pegTotal? pegTotal : 0) + Number(smallPegTotal ? smallPegTotal : 0)}</td>
            </tr>

            {/* 02 */}
            <tr >
              <th>2</th>
              <td>बीयर</td>
              <td>
                {Number(beerFirst ? beerFirst: 0) +
                  Number(beerSecond ? beerSecond : 0)}
              </td>
            </tr>

            {/* 03 */}
            
            

            <tr >
              <th>3</th>
              <td>bar suplements</td>
              <td>{Number(barSuplementsTotal?barSuplementsTotal:0)}</td>
            </tr>
            <tr >
              <th>4</th>
              <td>Food/Veg etc</td>
              <td>{Number(vegitableAndOtherTotal ? vegitableAndOtherTotal : 0)}</td>
            </tr>
            {/* 04 */}
            <tr>
              <th>4</th>
              <td>कुल बिक्री</td>
              <td>
                {Number(pegTotal? pegTotal : 0) + Number(smallPegTotal ? smallPegTotal : 0) +
                  Number(beerFirst ? beerFirst: 0) +
                  Number(beerSecond ? beerSecond : 0) +
                  Number(barSuplementsTotal?barSuplementsTotal:0) -
                  Number(vegitableAndOtherTotal ? vegitableAndOtherTotal : 0)}
              </td>
            </tr>
            {/* 05 */}
            <tr>
              <th>5</th>
              <td>पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति</td>
              <td>{Number(localStorage.getItem("totalPaymentsRecieved"))}</td>
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
                  required
                  min={0}
                  value={intoAccountState}
                  onChange={(e) => setintoAccountState(e.target.value)}
                />
              </td>
            </tr>
            {/* 07 */}
            <tr>
              <th>7</th>
              <td>उधारी/नामे</td>
              <td>{Number(udhaariTotal ? udhaariTotal : 0)}</td>
            </tr>
            {/* 08 */}
            <tr>
              <th>8</th>
              <td>कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि</td>
              <td>{Number(commisionTotal ? commisionTotal : 0)}</td>
            </tr>
            {/* 09 */}
            <tr>
              <th>9</th>
              <td>पिछला बकाया</td>
              <td>{pichla}</td>
            </tr>
            {/* 10 */}

            

            <tr >
              <th>10</th>
              <td>total</td>
              <td >
                {
                  Number(pegTotal? pegTotal : 0) + Number(smallPegTotal ? smallPegTotal : 0) +
                  Number(beerFirst ? beerFirst: 0) +
                  Number(beerSecond ? beerSecond : 0) +
                  Number(barSuplementsTotal?barSuplementsTotal:0) -
                  Number(vegitableAndOtherTotal ? vegitableAndOtherTotal : 0) +
                  Number(localStorage.getItem("totalPaymentsRecieved")) -
                  intoAccountState -
                  Number(udhaariTotal ? udhaariTotal : 0) -
                  Number(commisionTotal ? commisionTotal : 0) +
                  pichla}
              </td>
            </tr>

            <tr>
              <th>11</th>
              <td>आज भुगतान</td>
              <td>
                <input
                  type="number"
                  required
                  min={0}
                  className="commonSmallForm"
                  name="intoAccountState"
                  value={paidDues}
                  onChange={(e) => setPaidDues(e.target.value)}
                />
              </td>
            </tr>
            {/* 11 */}
            <tr>
              <th>12</th>
              <td>शेष रकम</td>
              <td>
                {Number(pegTotal? pegTotal : 0) + Number(smallPegTotal ? smallPegTotal : 0) +
                  Number(beerFirst ? beerFirst: 0) +
                  Number(beerSecond ? beerSecond : 0) +
                  Number(barSuplementsTotal?barSuplementsTotal:0) -
                  Number(vegitableAndOtherTotal ? vegitableAndOtherTotal : 0) +
                  Number(localStorage.getItem("totalPaymentsRecieved")) -
                  Number(intoAccountState) -
                  Number(udhaariTotal ? udhaariTotal : 0) -
                  Number(commisionTotal ? commisionTotal : 0) +
                  pichla -
                  Number(paidDues)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FinalReport;
