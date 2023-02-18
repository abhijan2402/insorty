import React from "react";

const EnglishBearForm = ({index,liquors,englishBear,total}) => {
  // console.log(englishBear.sizes)
  const quan750 = englishBear.sizes.find((element) => element.quantityInML === 750)
  const quan330 = englishBear.sizes.find((element) => element.quantityInML === 330)
  const quan180 = englishBear.sizes.find((element) => element.quantityInML === 180)

  

  total  += (quan750?.currentStock * Number(quan750?.averageRate.$numberDecimal)) + (quan330?.currentStock * Number(quan750?.averageRate.$numberDecimal)) + (quan180?.currentStock * Number(quan750?.averageRate.$numberDecimal))
  console.log(total)
  

  return (
    <>
      <tr>
        <th>{index+1}</th>
        <td>
          <input type="text" value={englishBear.brandName} className="semiSmallInput" />
        </td>
        <td>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              value={quan750?.currentStock}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={quan330?.currentStock}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={quan180?.currentStock}
              readOnly
              className="commonSmallForm"
            />
          </div>
        </td>
        <td>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              value={quan750?.averageRate.$numberDecimal || 0}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={quan330?.averageRate.$numberDecimal}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={quan180?.averageRate.$numberDecimal}
              readOnly
              className="commonSmallForm"
            />
          </div>
        </td>
        <td>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              value={quan750?.currentStock * Number(quan750?.averageRate.$numberDecimal)}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={quan330?.currentStock * Number(quan330?.averageRate.$numberDecimal)}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={quan180?.currentStock * Number(quan180?.averageRate.$numberDecimal)}
              readOnly
              className="commonSmallForm"
            />
          </div>
        </td>
        <td>
          <input type="text"
            value={(quan750?.currentStock * Number(quan750?.averageRate.$numberDecimal)) + (quan330?.currentStock * Number(quan750?.averageRate.$numberDecimal)) + (quan180?.currentStock * Number(quan750?.averageRate.$numberDecimal))}
          className="semiSmallInput" />
        </td>
      </tr>
    </>
  );
};

export default EnglishBearForm;
