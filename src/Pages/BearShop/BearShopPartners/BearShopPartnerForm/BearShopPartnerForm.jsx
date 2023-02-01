import React from "react";

const PartnerForm = ({ partner, index, handelOnChangePartner }) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>

        <td>
          <div className="form-control">
            <input
              type="text"
              name="partnerName"
              value={partner.partnerName}
              onChange={(e) => handelOnChangePartner(e, index)}
              className="dailyReportInput"
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              name="debit"
              value={partner.debit}
              onChange={(e) => handelOnChangePartner(e, index)}
              className="dailyReportInput"
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              name="deposit"
              value={partner.deposit}
              onChange={(e) => handelOnChangePartner(e, index)}
              className="commonSmallForm"
            />
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              <input
                type="text"
                name="remaining_debit"
                value={partner.remaining_debit}
                onChange={(e) => handelOnChangePartner(e, index)}
                className="commonSmallForm"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="remaining"
                value={partner.remaining}
                onChange={(e) => handelOnChangePartner(e, index)}
                className="commonSmallForm"
              />
            </div>
          </div>
        </td>
        {/* ============= कुल योग ================ */}
      </tr>
    </>
  );
};

export default PartnerForm;
