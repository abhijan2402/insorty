import jwtDecode from "jwt-decode";
import React from "react";

const FinalReport = ({ data, date }) => {
  const token = localStorage.getItem("token")
  const shopType = jwtDecode(token).shopType
  
  return (
    <>
 <table className={shopType==="SHOP" ? "table commonTable" : "displayHidden"}>
                      <thead>
                        <tr>
                       
                <td className="tg-baqh">क्र.सं.</td>
                <td className="tg-baqh" >
                  विवरण
                </td>
                <td className="tg-baqh" >
                  रकम
                </td>
              </tr>
                      
                      </thead>      <tr>
        <td className="tg-0lax">1</td>
        <td className="tg-0lax" >
          अंग्रेजी
        </td>
        <td className="tg-0lax" >
          {data.english}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">2</td>
        <td className="tg-0lax" >
          बीयर
        </td>
        <td className="tg-0lax" >
          {data.beer}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">3</td>
        <td className="tg-0lax" >
          देशी/RML
        </td>
        <td className="tg-0lax" >
          {data.RML}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">4</td>
        <td className="tg-0lax" >
          कुल बिक्री
        </td>
        <td className="tg-0lax" >
          {data.totalSell}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">5</td>
        <td className="tg-0lax" >
          पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
        </td>
        <td className="tg-0lax" >
          {data.borrowedCashReturn}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">6</td>
        <td className="tg-0lax" >
          खाते में (फोन पे आदि)
        </td>
        <td className="tg-0lax" >
          {data.intoAccount}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">7</td>
        <td className="tg-0lax" >
          उधारी/नामे
        </td>
        <td className="tg-0lax" >
          {data.borrowed}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">8</td>
        <td className="tg-0lax" >
          कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि
        </td>
        <td className="tg-0lax" >
          {data.commission}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">9</td>
        <td className="tg-0lax" >
          पिछला बकाया
        </td>
        <td className="tg-0lax" >
          {data.previousDues}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">10</td>
        <td className="tg-0lax" >
          आज भुगतान
        </td>
        <td className="tg-0lax" >
          {data.todaysPayment}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">11</td>
        <td className="tg-0lax" >
          शेष रकम
        </td>
        <td className="tg-0lax" >
          {data?.restAmount?.$numberDecimal}
        </td>
      </tr>
    </table>


    <table className={shopType==="BAR" ? "table commonTable" : "displayHidden"}>
                      <thead>
                      <tr >
                      <td colSpan={26}>
                      फाईनल रिपोर्ट
                      </td>
                    </tr>
                        <tr>
                          <th> क्र. सं.</th>
                          <th> विवरण</th>
                          <th>Total</th>
                        </tr>
                      </thead>
    
      <tr>
        <td className="tg-0lax">1</td>
        <td className="tg-0lax">
          अंग्रेजी
        </td>
        <td className="tg-0lax">
          {Number(data.englishBar).toFixed(2)}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">2</td>
        <td className="tg-0lax">
          बीयर
        </td>
        <td className="tg-0lax">
          {Number(data.beerBar).toFixed(2)}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">3</td>
        <td className="tg-0lax">
        खाना आदि
        </td>
        <td className="tg-0lax">
          {Number(data.food).toFixed(2)}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">4</td>
        <td className="tg-0lax">
        पानी, नमकीन, सिगरेट, पुड़िया आदि
        </td>
        <td className="tg-0lax">
          {Number(data.barSupplements).toFixed(2)}
        </td>
      </tr>
     
      <tr>
        <td className="tg-0lax">5</td>
        <td className="tg-0lax">
          कुल बिक्री
        </td>
        <td className="tg-0lax">
          {Number(data.totalSell).toFixed(2)}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">6</td>
        <td className="tg-0lax">
          पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
        </td>
        <td className="tg-0lax">
          {Number(data.borrowedCashReturn).toFixed(2)}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">7</td>
        <td className="tg-0lax">
          खाते में (फोन पे आदि)
        </td>
        <td className="tg-0lax">
          {Number(data.intoAccount).toFixed(2)}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">8</td>
        <td className="tg-0lax">
          उधारी/नामे
        </td>
        <td className="tg-0lax">
          {Number(data.borrowed).toFixed(2)}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">9</td>
        <td className="tg-0lax">
          कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि
        </td>
        <td className="tg-0lax">
          {Number(data.commission).toFixed(2)}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">10</td>
        <td className="tg-0lax">
        राशन/सब्जी आदि खरीद
        </td>
        <td className="tg-0lax">
          {Number(data.extraThings).toFixed(2)}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">11</td>
        <td className="tg-0lax">
          पिछला बकाया
        </td>
        <td className="tg-0lax">
          {Number(data.previousDues).toFixed(2)}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">12</td>
        <td className="tg-0lax">
          आज भुगतान
        </td>
        <td className="tg-0lax">
          {Number(data.todaysPayment).toFixed(2)}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">13</td>
        <td className="tg-0lax">
          शेष रकम
        </td>
        <td className="tg-0lax">
          {Number(data?.restAmount?.$numberDecimal).toFixed(2)}
        </td>
      </tr>
</table>
    </>
  );
};

export default FinalReport;
