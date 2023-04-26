import React from "react";

const BeerStockTopData = ({ item, index, total }) => {
  const quan650 = item.sizes.find((element) => element.quantityInML === 650);
  const quan550 = item.sizes.find((element) => element.quantityInML === 500);
  const quan330 = item.sizes.find((element) => element.quantityInML === 330);

  console.log(item)

  total +=
    quan650?.currentStock * Number(quan650?.averageRate.$numberDecimal) +
    quan550?.currentStock * Number(quan650?.averageRate.$numberDecimal) +
    quan330?.currentStock * Number(quan650?.averageRate.$numberDecimal);

  const price650 =
    quan650?.currentStock * Number(quan650?.averageRate.$numberDecimal) || 0;
  const price550 =
    quan550?.currentStock * Number(quan550?.averageRate.$numberDecimal) || 0;
  const price330 =
    quan330?.currentStock * Number(quan330?.averageRate.$numberDecimal) || 0;

  if (quan650 && quan550 && quan330){

  return (
    <>
        <td>{index + 1}</td>
        <td>
          <div className="form-control">{item?.brandName}</div>
        </td>
        <td>
            <div className="form-control">
            {quan650?.currentStock}
            </div>
            </td>

            <td>

            <div className="form-control">
            {quan550?.currentStock}
            </div>
            </td>

            <td>

            <div className="form-control">
            {quan330?.currentStock}
            </div>
        </td>


        <td>
            <div className="form-control">
            {Number(quan650?.averageRate?.$numberDecimal).toFixed(2)}
            </div>
          </td>

          <td>
            <div className="form-control">
            {Number(quan550?.averageRate?.$numberDecimal).toFixed(2)}
            </div>

            </td>

            <td>

            <div className="form-control">
            {Number(quan330?.averageRate?.$numberDecimal).toFixed(2)}
            </div>
        </td>


        <td>
            <div className="form-control">
            {Number(price650).toFixed(2)}
            </div>
            </td>

            <td>

            <div className="form-control">
            {Number(price550).toFixed(2)}
            </div>

          </td>

          <td>

            <div className="form-control">
            {Number(price330).toFixed(2)}
            </div>
        </td>
        <td>{Number(price330 + price550 + price650).toFixed(2)}</td>
    </>
  );}
};

export default BeerStockTopData;
