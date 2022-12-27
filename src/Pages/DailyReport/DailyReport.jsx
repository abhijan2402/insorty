import React from "react";
import "./Style/DailyReport.scss";

const DailyReport = () => {
  return (
    <section>
      <div className="my-4">
        <h1 className="font-bold text-2xl">Daily Report / दैनिक रिपोर्ट </h1>
      </div>

      <div>
        <form action="">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Brand Name/ ब्राण्ड</th>
                  <th>MRP</th>
                  <th>प्रारम्भिक स्टॉक</th>
                  <th>आमद (खरीद)-दु.</th>
                  <th>आमद (खरीद)-बा.</th>
                  <th>आमद (उधारी)</th>
                  <th>भेजान</th>
                  <th>योग/शेष</th>
                  <th>अन्तिम स्टॉक</th>
                  <th>बिक्री</th>
                  <th>रेट</th>
                  <th>योग</th>
                  <th>कुल योग</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>1</th>
                  <td>
                    <input type="text" className="dailyReportInput" />
                  </td>
                  <td>
                    <div>
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">Email</span>
                        </label>
                        <input
                          type="text"
                          placeholder="email"
                          class="input input-bordered"
                        />
                      </div>

                      <div></div>
                      <div></div>
                    </div>
                  </td>
                  <td>Blue</td>
                </tr>

                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>

                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DailyReport;
