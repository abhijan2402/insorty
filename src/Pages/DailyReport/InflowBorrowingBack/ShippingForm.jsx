import React from "react";

const ShippingForm = () => {
  return (
    <section className="mx-2">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Party Name/ पार्टी का नाम</th>
              <th>Brand Name/ ब्राण्ड</th>
              <th>संख्या</th>
              <th>टिप्पणी</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>1</th>
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>

              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>

              <td>
                <div className="form-control">
                  <input type="number" className="semiSmallInput" />
                </div>
              </td>

              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
            </tr>

            {/* 02 */}
            <tr>
              <th>2</th>
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
              {/* ======== प्रारम्भिक स्टॉक ========= */}
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>

              {/* ======== आमद (खरीद)-दु. ========= */}

              <td>
                <div className="form-control">
                  <input type="number" className="semiSmallInput" />
                </div>
              </td>
              {/* ======== आमद (खरीद)-बा. ========= */}

              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
              {/* ======== आमद (उधारी) ========= */}
            </tr>

            {/* 03 */}
            <tr>
              <th>3</th>
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
              {/* ======== प्रारम्भिक स्टॉक ========= */}
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>

              {/* ======== आमद (खरीद)-दु. ========= */}

              <td>
                <div className="form-control">
                  <input type="number" className="semiSmallInput" />
                </div>
              </td>
              {/* ======== आमद (खरीद)-बा. ========= */}

              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
              {/* ======== आमद (उधारी) ========= */}
            </tr>
            {/* 04 */}
            <tr>
              <th>4</th>
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
              {/* ======== प्रारम्भिक स्टॉक ========= */}
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>

              {/* ======== आमद (खरीद)-दु. ========= */}

              <td>
                <div className="form-control">
                  <input type="number" className="semiSmallInput" />
                </div>
              </td>
              {/* ======== आमद (खरीद)-बा. ========= */}

              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
              {/* ======== आमद (उधारी) ========= */}
            </tr>
            {/* 05 */}
            <tr>
              <th>5</th>
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
              {/* ======== प्रारम्भिक स्टॉक ========= */}
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>

              {/* ======== आमद (खरीद)-दु. ========= */}

              <td>
                <div className="form-control">
                  <input type="number" className="semiSmallInput" />
                </div>
              </td>
              {/* ======== आमद (खरीद)-बा. ========= */}

              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
              {/* ======== आमद (उधारी) ========= */}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ShippingForm;
