import { useContext } from "react";
import { DataContextApi } from "../../../../../Context/DataContext";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../../Components/Loader/Loader";
import jwtDecode from "jwt-decode";

const FinalReport = ({ beerTotal, rmlTotal, udhaariTotal, commisionTotal }) => {
  const { intoAccountState, setintoAccountState } = useContext(DataContextApi);
  const { paidDues, setPaidDues } = useContext(DataContextApi);
  const { food, setFood } = useContext(DataContextApi);
  const token = localStorage.getItem("token");
  const shopType = jwtDecode(token).shopType

  shopType==="SHOP" ? localStorage.setItem("beerTotal", JSON.stringify(beerTotal)): localStorage.setItem("beerTotal", JSON.stringify(0));
  shopType==="SHOP" ? localStorage.setItem("rmlTotal", JSON.stringify(rmlTotal)) : localStorage.setItem("rmlTotal", JSON.stringify(0));

  localStorage.setItem("udhaariTotal", JSON.stringify(udhaariTotal));
  localStorage.setItem("commisionTotal", JSON.stringify(commisionTotal));
  localStorage.setItem("pichlaBakaya", JSON.stringify(0));
  


  const firstformData = JSON.parse(localStorage.getItem("firstFrontTotal"));
  const secondFront = JSON.parse(localStorage.getItem("mlFormTotal"));
  const beerSecond = JSON.parse(localStorage.getItem("beerFormTotal"));
  const pegTotal = JSON.parse(localStorage.getItem("pegFormTotal"))
  const smallPegTotal = JSON.parse(localStorage.getItem("smallPegFormTotal"))
  const barSuplementsTotal = JSON.parse(localStorage.getItem("barSuplementsTotal"))
  const vegitableAndOtherTotal = JSON.parse(localStorage.getItem("vegitableAndOtherTotal"))
  const beerFirst = JSON.parse(localStorage.getItem("totalFirstBack"))
  
  const { data: leftDues, isLoading } = useQuery({
    queryKey: ["extraData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getFinalReportData",
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
      <div className="overflow-x-auto ">
        <table className={shopType==="SHOP" ? "table" : "displayHidden"}>
          <thead>
            <tr>
              <th> क्र. सं.</th>
              <th> विवरण</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody className="">
            <tr>
              <th>1</th>
              <td  >अंग्रेजी</td>
              <td>{Number(firstformData + secondFront).toFixed(2)}</td>
            </tr>

           

            {/* 02 */}
            <tr >
              <th>2</th>
              <td  >बीयर</td>
              <td  >
                {Number(Number(JSON.parse(localStorage.getItem("totalFirstBack"))) +
                  beerSecond).toFixed(2)}
              </td>
            </tr>

            {/* 03 */}
            <tr >
              <th>3</th>
              <td  >देशी/RML</td>
              <td  >{Number(rmlTotal?rmlTotal:0).toFixed(2)}</td>
            </tr>
            

           
            {/* 04 */}
            <tr>
              <th>4</th>
              <td  >कुल बिक्री</td>
              <td  >
                {Number(Number(rmlTotal?rmlTotal:0) +
                  Number(JSON.parse(localStorage.getItem("totalFirstBack"))) +
                  firstformData +
                  secondFront +
                  beerSecond).toFixed(2)}
              </td>
            </tr>
            {/* 05 */}
            <tr>
              <th>5</th>
              <td  >पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति</td>
              <td>{Number(localStorage.getItem("totalPaymentsRecieved")).toFixed(2)}</td>
            </tr>
            {/* 06 */}
            <tr>
              <th>6</th>
              <td  >खाते में (फोन पे आदि)</td>
              <td>
                <input
                  type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                  className="commonSmallForm wd-9"
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
              <td  >उधारी/नामे</td>
              <td  >{Number(udhaariTotal ? udhaariTotal : 0).toFixed(2)}</td>
            </tr>
            {/* 08 */}
            <tr>
              <th>8</th>
              <td  >कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि</td>
              <td  >{Number(commisionTotal ? commisionTotal : 0).toFixed(2)}</td>
            </tr>
            {/* 09 */}
            <tr>
              <th>9</th>
              <td  >पिछला बकाया</td>
              <td  >{pichla}</td>
            </tr>
            {/* 10 */}

            <tr >
              <th>10</th>
              <td  >Total</td>
              <td   >
                {Number(Number(rmlTotal?rmlTotal:0) +
                  Number(JSON.parse(localStorage.getItem("totalFirstBack"))) +
                  firstformData +
                  secondFront +
                  beerSecond +
                  Number(localStorage.getItem("totalPaymentsRecieved")) -
                  intoAccountState -
                  Number(udhaariTotal ? udhaariTotal : 0) -
                  Number(commisionTotal ? commisionTotal : 0) +
                  pichla).toFixed(2)}
              </td>
            </tr>

           
            <tr>
              <th>11</th>
              <td  >आज भुगतान</td>
              <td>
                <input
                  type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                  required
                  min={0}
                  className="commonSmallForm wd-9"
                  name="intoAccountState"
                  value={paidDues}
                  onChange={(e) => setPaidDues(e.target.value)}
                />
              </td>
            </tr>
            {/* 11 */}
            <tr>
              <th>12</th>
              <td  >शेष रकम</td>
              <td  >
                {Number(Number(rmlTotal?rmlTotal:0) +
                  Number(JSON.parse(localStorage.getItem("totalFirstBack"))) +
                  firstformData +
                  secondFront +
                  beerSecond +
                  Number(localStorage.getItem("totalPaymentsRecieved")) -
                  Number(intoAccountState) -
                  Number(udhaariTotal ? udhaariTotal : 0) -
                  Number(commisionTotal ? commisionTotal : 0) +
                  pichla -
                  Number(paidDues)).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>

        {/* <------------------------BAR FINAL REPORT-----------------------> */}
        <table className={shopType==="BAR" ? "table" : "displayHidden"}>
          <thead>
            <tr>
              <th> क्र. सं.</th>
              <th>विवरण</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody className="">
            

            <tr>
              <th>1</th>
              <td  >अंग्रेजी</td>
              <td  >{Number(Number(pegTotal? pegTotal : 0) + Number(smallPegTotal ? smallPegTotal : 0)).toFixed(2)}</td>
            </tr>

            {/* 02 */}
            <tr >
              <th>2</th>
              <td  >बीयर</td>
              <td  >
                {Number(Number(beerFirst ? beerFirst: 0) +
                  Number(beerSecond ? beerSecond : 0)).toFixed(2)}
              </td>
            </tr>

            {/* 03 */}
            
            

            <tr >
              <th>3</th>
              <td  >खाना आदि</td>
              <td><input
                  type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                  className="commonSmallForm wd-9"
                  name="food"
                  required
                  min={0}
                  value={food}
                  onChange={(e) => {setFood(e.target.value)
                  localStorage.setItem('food',JSON.stringify(e.target.value))
                  }}
                /></td>
            </tr>

            <tr >
              <th>4</th>
              <td  >पानी, नमकीन, सिगरेट, पुड़िया आदि</td>
              <td  >{Number(barSuplementsTotal?barSuplementsTotal:0).toFixed(2)}</td>
            </tr>

            <tr>
              <th>5</th>
              <td  >कुल बिक्री</td>
              <td  >
                {Number(Number(food ? food : 0 ) + Number(pegTotal? pegTotal : 0) + Number(smallPegTotal ? smallPegTotal : 0) +
                  Number(beerFirst ? beerFirst: 0) +
                  Number(beerSecond ? beerSecond : 0) +
                  Number(barSuplementsTotal?barSuplementsTotal:0) 
                  ).toFixed(2)}
              </td>
            </tr>


           
            {/* 04 */}
           
            {/* 05 */}
            <tr>
              <th>6</th>
              <td  >पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति</td>
              <td  >{Number(localStorage.getItem("totalPaymentsRecieved")).toFixed(2)}</td>
            </tr>
            {/* 06 */}
            <tr>
              <th>7</th>
              <td  >खाते में (फोन पे आदि)</td>
              <td>
                <input
                  type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                  className="commonSmallForm wd-9"
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
              <th>8</th>
              <td  >उधारी/नामे</td>
              <td  >{Number(udhaariTotal ? udhaariTotal : 0).toFixed(2)}</td>
            </tr>
            {/* 08 */}
            <tr>
              <th>9</th>
              <td  >कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि</td>
              <td  >{Number(commisionTotal ? commisionTotal : 0).toFixed(2)}</td>
            </tr>

            <tr >
              <th>10</th>
              <td  >राशन/सब्जी आदि खरीद</td>
              <td  >{Number(vegitableAndOtherTotal ? vegitableAndOtherTotal : 0).toFixed(2)}</td>
            </tr>

            {/* 09 */}
            <tr>
              <th>11</th>
              <td  >पिछला बकाया</td>
              <td  >{Number(pichla).toFixed(2)}</td>
            </tr>
            {/* 10 */}

            

            <tr >
              <th>12</th>
              <td  >Total</td>
              <td   >
                {
                 Number( Number(food ? food : 0 ) + Number(pegTotal? pegTotal : 0) + Number(smallPegTotal ? smallPegTotal : 0) +
                  Number(beerFirst ? beerFirst: 0) +
                  Number(beerSecond ? beerSecond : 0) +
                  Number(barSuplementsTotal?barSuplementsTotal:0) -
                  Number(vegitableAndOtherTotal ? vegitableAndOtherTotal : 0) +
                  Number(localStorage.getItem("totalPaymentsRecieved")) -
                  intoAccountState -
                  Number(udhaariTotal ? udhaariTotal : 0) -
                  Number(commisionTotal ? commisionTotal : 0) +
                  pichla).toFixed(2)}
              </td>
            </tr>

            <tr>
              <th>13</th>
              <td  >आज भुगतान</td>
              <td>
                <input
                  type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                  required
                  min={0}
                  className="commonSmallForm wd-9"
                  name="intoAccountState"
                  value={paidDues}
                  onChange={(e) => setPaidDues(e.target.value)}
                />
              </td>
            </tr>
            {/* 11 */}
            <tr>
              <th>14</th>
              <td  >शेष रकम</td>
              <td  >
                {Number(Number(food ? food : 0 ) + Number(pegTotal? pegTotal : 0) + Number(smallPegTotal ? smallPegTotal : 0) +
                  Number(beerFirst ? beerFirst: 0) +
                  Number(beerSecond ? beerSecond : 0) +
                  Number(barSuplementsTotal?barSuplementsTotal:0) -
                  Number(vegitableAndOtherTotal ? vegitableAndOtherTotal : 0) +
                  Number(localStorage.getItem("totalPaymentsRecieved")) -
                  Number(intoAccountState) -
                  Number(udhaariTotal ? udhaariTotal : 0) -
                  Number(commisionTotal ? commisionTotal : 0) +
                  pichla -
                  Number(paidDues)).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FinalReport;
