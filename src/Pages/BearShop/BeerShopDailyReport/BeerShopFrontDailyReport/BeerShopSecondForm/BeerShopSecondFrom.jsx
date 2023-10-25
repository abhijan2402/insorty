import React from "react";

const SecondFrom = ({ addOneSecondFormState, handelSeconFormOnChange }) => {
  return (
    <>
      <tr>
        <th>1</th>
        <td>
          <div className="form-control">
            <h1 className="font-bold">90ml</h1>
          </div>
        </td>
        {/* ======== MRP Input ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="averageRate"
              value={addOneSecondFormState.averageRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="startingStock"
              value={addOneSecondFormState.startingStock}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="incomingPurchase"
              value={addOneSecondFormState.incomingPurchase}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="buyRate"
              value={addOneSecondFormState.buyRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="incomePurchase"
              value={addOneSecondFormState.incomePurchase}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="purchaseRate"
              value={addOneSecondFormState.purchaseRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="inflowCredit"
              value={addOneSecondFormState.inflowCredit}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== भेजान ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="sending"
              value={addOneSecondFormState.sending}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="sumRemainder"
              value={addOneSecondFormState.sumRemainder}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="closingStock"
              value={addOneSecondFormState.closingStock}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= बिक्री ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="sales"
              value={addOneSecondFormState.sales}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= रेट ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="mainRate"
              value={addOneSecondFormState.mainRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="total"
              value={addOneSecondFormState.total}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= कुल योग ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="grandTotal"
              value={addOneSecondFormState.grandTotal}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
      </tr>

      {/* ============= 2 ================ */}
      <tr>
        <th>2</th>
        <td>
          <div className="form-control">
            <h1 className="font-bold">90ml</h1>
          </div>
        </td>
        {/* ======== MRP Input ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="averageRate"
              value={addOneSecondFormState.averageRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="startingStock"
              value={addOneSecondFormState.startingStock}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="incomingPurchase"
              value={addOneSecondFormState.incomingPurchase}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="buyRate"
              value={addOneSecondFormState.buyRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="incomePurchase"
              value={addOneSecondFormState.incomePurchase}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="purchaseRate"
              value={addOneSecondFormState.purchaseRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="inflowCredit"
              value={addOneSecondFormState.inflowCredit}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== भेजान ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="sending"
              value={addOneSecondFormState.sending}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="sumRemainder"
              value={addOneSecondFormState.sumRemainder}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="closingStock"
              value={addOneSecondFormState.closingStock}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= बिक्री ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="sales"
              value={addOneSecondFormState.sales}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= रेट ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="mainRate"
              value={addOneSecondFormState.mainRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="total"
              value={addOneSecondFormState.total}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= कुल योग ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="grandTotal"
              value={addOneSecondFormState.grandTotal}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
      </tr>

      {/* ============= 3 =============== */}
      <tr>
        <th>3</th>
        <td>
          <div className="form-control">
            <h1 className="font-bold">90ml</h1>
          </div>
        </td>
        {/* ======== MRP Input ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="averageRate"
              value={addOneSecondFormState.averageRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="startingStock"
              value={addOneSecondFormState.startingStock}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="incomingPurchase"
              value={addOneSecondFormState.incomingPurchase}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="buyRate"
              value={addOneSecondFormState.buyRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="incomePurchase"
              value={addOneSecondFormState.incomePurchase}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="purchaseRate"
              value={addOneSecondFormState.purchaseRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="inflowCredit"
              value={addOneSecondFormState.inflowCredit}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== भेजान ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="sending"
              value={addOneSecondFormState.sending}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="sumRemainder"
              value={addOneSecondFormState.sumRemainder}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="closingStock"
              value={addOneSecondFormState.closingStock}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= बिक्री ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="sales"
              value={addOneSecondFormState.sales}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= रेट ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="mainRate"
              value={addOneSecondFormState.mainRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="total"
              value={addOneSecondFormState.total}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= कुल योग ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="grandTotal"
              value={addOneSecondFormState.grandTotal}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
      </tr>
      {/* ============= 4 =============== */}
      <tr>
        <th>1</th>
        <td>
          <div className="form-control">
            <h1 className="font-bold">90ml</h1>
          </div>
        </td>
        {/* ======== MRP Input ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="averageRate"
              value={addOneSecondFormState.averageRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="startingStock"
              value={addOneSecondFormState.startingStock}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="incomingPurchase"
              value={addOneSecondFormState.incomingPurchase}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="buyRate"
              value={addOneSecondFormState.buyRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="incomePurchase"
              value={addOneSecondFormState.incomePurchase}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="purchaseRate"
              value={addOneSecondFormState.purchaseRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="inflowCredit"
              value={addOneSecondFormState.inflowCredit}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== भेजान ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="sending"
              value={addOneSecondFormState.sending}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="sumRemainder"
              value={addOneSecondFormState.sumRemainder}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="closingStock"
              value={addOneSecondFormState.closingStock}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= बिक्री ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="sales"
              value={addOneSecondFormState.sales}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= रेट ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="mainRate"
              value={addOneSecondFormState.mainRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="total"
              value={addOneSecondFormState.total}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= कुल योग ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="grandTotal"
              value={addOneSecondFormState.grandTotal}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
      </tr>
      {/* ============= 5 =============== */}
      <tr>
        <th>1</th>
        <td>
          <div className="form-control">
            <h1 className="font-bold">90ml</h1>
          </div>
        </td>
        {/* ======== MRP Input ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="averageRate"
              value={addOneSecondFormState.averageRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="startingStock"
              value={addOneSecondFormState.startingStock}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="incomingPurchase"
              value={addOneSecondFormState.incomingPurchase}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="buyRate"
              value={addOneSecondFormState.buyRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="incomePurchase"
              value={addOneSecondFormState.incomePurchase}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="purchaseRate"
              value={addOneSecondFormState.purchaseRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="inflowCredit"
              value={addOneSecondFormState.inflowCredit}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== भेजान ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="sending"
              value={addOneSecondFormState.sending}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="sumRemainder"
              value={addOneSecondFormState.sumRemainder}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="closingStock"
              value={addOneSecondFormState.closingStock}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= बिक्री ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="sales"
              value={addOneSecondFormState.sales}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= रेट ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="mainRate"
              value={addOneSecondFormState.mainRate}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="total"
              value={addOneSecondFormState.total}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
        {/* ============= कुल योग ================ */}
        <td>
          <div className="form-control">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              className="semiSmallInput"
              name="grandTotal"
              value={addOneSecondFormState.grandTotal}
              onChange={(e) => handelSeconFormOnChange(e)}
            />
          </div>
        </td>
      </tr>
      {/* ============= 6 =============== */}
    </>
  );
};

export default SecondFrom;
