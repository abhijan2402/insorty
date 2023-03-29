import React from "react";

const RMLStockData = ({ item, index, total }) => {
  const quan650 = item.sizes.find((element) => element.quantityInML === 650);
  const quan550 = item.sizes.find((element) => element.quantityInML === 550);
  const quan330 = item.sizes.find((element) => element.quantityInML === 330);

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

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>
          <div className="form-control">{item?.brandName}</div>
        </td>
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="number"
                value={quan650?.currentStock}
                disabled
                className="smallinput"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                value={quan550?.currentStock}
                disabled
                className="smallinput"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                value={quan330?.currentStock}
                disabled
                className="smallinput"
              />
            </div>
          </div>
        </td>
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="number"
                value={Number(quan650?.averageRate.$numberDecimal).toFixed(2)}
                disabled
                className="smallinput"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                value={Number(quan550?.averageRate.$numberDecimal).toFixed(2)}
                disabled
                className="smallinput"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                value={Number(quan330?.averageRate.$numberDecimal).toFixed(2)}
                disabled
                className="smallinput"
              />
            </div>
          </div>
        </td>
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="number"
                value={Number(price650).toFixed(2)}
                disabled
                className="smallinput"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                value={Number(price550).toFixed(2)}
                disabled
                className="smallinput"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                value={Number(price330).toFixed}
                disabled
                className="smallinput"
              />
            </div>
          </div>
        </td>
        <td>{Number(price330 + price550 + price650).toFixed(2)}</td>
      </tr>
    </>
  );
};

export default RMLStockData;
