import React from "react";
import { Link } from "react-router-dom";

const BeerStock = () => {
  return (
    <section>
      <div className="title">
        <div className="flex gap-4 items-center">
          <h2 className="font-bold text-[1.5rem]">Beer Stock</h2>
          <Link to="/" className="commonBtn ">
            Wine Stock
          </Link>
        </div>
        <div className="divider my-2"></div>
      </div>
      <div className="flex gap-4 items-center justify-center ">
        <div className="form-control">
          <input
            type="date"
            className="input mb-2"
            style={{
              border: "1px solid #e5e7eb",
            }}
          />
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-full m-2">
          <thead>
            <tr>
              <th>S.no</th>
              <th>ब्राण्ड/ Brand Name </th>
              <th>स्टॉक / stock</th>
              <th>Avg. Rate / रेट</th>
              <th>Total / योग</th>
              <th>कुल योग/ Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <div className="form-control"></div>
              </td>
              <td>
                <div className="flex gap-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">650ml</span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">550ml</span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">330ml</span>
                    </label>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">650ml</span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">550ml</span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">330ml</span>
                    </label>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">650ml</span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">550ml</span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">330ml</span>
                    </label>
                  </div>
                </div>
              </td>
              <td>
                <div className="form-control"></div>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>
                <div className="form-control">Brnad Name</div>
              </td>
              <td>
                <div className="flex gap-2">
                  <div className="form-control">
                    <input type="number" disabled className="smallinput" />
                  </div>

                  <div className="form-control">
                    <input type="number" disabled className="smallinput" />
                  </div>

                  <div className="form-control">
                    <input type="number" disabled className="smallinput" />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2">
                  <div className="form-control">
                    <input type="number" disabled className="smallinput" />
                  </div>

                  <div className="form-control">
                    <input type="number" disabled className="smallinput" />
                  </div>

                  <div className="form-control">
                    <input type="number" disabled className="smallinput" />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2">
                  <div className="form-control">
                    <input type="number" disabled className="smallinput" />
                  </div>

                  <div className="form-control">
                    <input type="number" disabled className="smallinput" />
                  </div>

                  <div className="form-control">
                    <input type="number" disabled className="smallinput" />
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td colSpan="5">Total</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <div className="flex gap-4 overflow-x-auto my-4 ">
          <div>
            <table className="table w-full m-2">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>ब्राण्ड/ Brand Name </th>
                  <th>स्टॉक / stock</th>
                  <th>Avg. Rate / रेट</th>
                  <th>Total / योग</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Brand Name</td>
                  <td> 400</td>
                  <td> 654</td>
                  <td> 1000</td>
                </tr>
                <tr>
                  <td colSpan="4">Total</td>
                  <td>1000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <textarea
              className="textarea textarea-accent h-40 "
              placeholder="Type Here ...."
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeerStock;
