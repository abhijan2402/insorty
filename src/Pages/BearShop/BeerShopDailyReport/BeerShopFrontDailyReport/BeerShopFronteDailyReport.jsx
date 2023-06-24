import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AddOneFristForm from "./BeerShopFirstForm/AddOneFristForm/AddOneFristForm";
import UseBeerShopFront from "../../BeerHooks/DailyReportHooks/UseBeerShopFront/UseBeerShopFront";
import AddOneFristFromBack from "../../../Users/DailyReport/BackDailyReport/FristFormBack/AddOneFristFromBack/AddOneFristFromBack";
import AddOneSecondFormBack from "../../../Users/DailyReport/BackDailyReport/FristFormBack/AddOneFristFromBack/AddOneSecondFormBack";
import useFristFormAdd from "../../../../Hooks/useFristFormAdd";
import { Autocomplete, TextField } from "@mui/material";
import useLiquors from "../../../../Hooks/useLiquors";
import axios from "axios";
import useHandleSubmiBeerShopFront from "../../BeerShopHooks/SendDailyReportFront/useHandleSubmiBeerShopFront";
import { DataContextApi } from "../../../../Context/DataContext";
import DatePicker from "react-datepicker";
import swal from "sweetalert";

const FronteDailyReport = () => {
  const {
    fristFormAddOne,
    removeFristForm,
    fristFormOnChange,
    beerShopFrontFrist,
    thirdFormAddOne,
    beerShopFrontThird,
    beerShopMid,
    midFormOnChange,
    midFormAddOne,
    thirdFormOnChange,
    removeMidForm,
    hasMoreBig,
    hasMoreSmall,
    removeThirdForm
  } = UseBeerShopFront();

  const token = localStorage.getItem("token");
  const { brandsLoaded, liquors } = useLiquors();
  const { salesMan, setSalesMan, drDate, setDrDate } =
    useContext(DataContextApi);

  const [options, setOptions] = useState([]);

  const fetchOptions = async (query) => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}/shop/getAllParentLiquors?q=${query}&page=0&pagesize=30`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
    })
      .then((response) => {
        setOptions(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (event, value) => {
    fetchOptions(value);
  };

  const {
    fristFormState,
    onChangeFristBackFormHandler,
    addOneSecondFormState,
    addOneInFristFormHandler,
    addOneSecondFormHandler,
    handelSeconFormOnChange,
    handleRemoveFieldsBack,
    handleRemoveFieldsBeer,
    hasMoreBeer,
    hasMoreBeerSmall
  } = useFristFormAdd();

  //=============== add One second form ================

  const { handelSubmit, isLoadingSubmit } = useHandleSubmiBeerShopFront();

  return (
    <section className="mx-2">
      <div className="flex justify-center items-center flex-col">
        <div className="my-4 flex gap-4 items-center">
          <h1 className="font-bold text-2xl">अंग्रेजी </h1>
          <Link to="/user/bearshop/dailyreport/back" className="commonBtn">
            बीयर
          </Link>
          <Link to="/user/bearshop/details" className="commonBtn">
            पर्चा
          </Link>
        </div>

        <div className="flex gap-4 justify-center items-center ">
          <div className="flex gap-4 justify-center items-center ">
            <h1 className="font-bold ">सेल्समेन का नाम:- </h1>
            <input
              type="text"
              value={salesMan}
              onChange={(e) => {
                setSalesMan(e.target.value);
                localStorage.setItem("salesMan", e.target.value);
              }}
              className="semiSmallInput"
              style={{ width: "24rem" }}
            />
          </div>

          <div>
            <DatePicker
              selected={new Date(drDate)}
              name="year"
              onChange={(data) => {
                setDrDate(new Date(data));
              
              }}
              dateFormat="dd/MM/yyyy"
              className="inputBox date"
              placeholderText={"dd/mm/yyyy"}
            />
          </div>
        </div>
      </div>

      <div className="py-6">
        <div>
          <>
            <div className="overflow-x-auto">
              <table className="table commonTable">
                <thead>
                  <tr>
                    <th> क्र. सं.</th>
                    <th></th>
                    <th>ब्राण्ड</th>
                    <th>एवरेज रेट</th>
                    <th>प्रारम्भिक स्टॉक</th>
                    <th>आमद(खरीद)-दु</th>
                    <th>खरीद रेट - दुु</th>
                    <th>/आमद(खरीद)बा</th>
                    <th>खरीद रेट - बा.</th>
                    <th>आमद (उधारी)</th>
                    <th>भेजान</th>
                    <th>योग - शेष</th>
                    <th>अन्तिम स्टॉक</th>
                    <th>बिक्री</th>
                    <th> रेट</th>
                    <th>योग</th>
                    <th>कुल योग</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th></th>
                    <th></th>
                    <td>
                      <div className="form-control"></div>
                    </td>
                    {/* ======== MRP Input ========= */}
                    <td>
                      <div className="flex justify-around	">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">750ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">375ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
                          </label>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex justify-around	">

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
                          </label>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">750ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">375ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label ">
                            <span className="label-text wd-9 text-center">30ml</span>
                          </label>
                        </div>
                      </div>
                    </td>
                    {/* ======== प्रारम्भिक स्टॉक ========= */}
                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text wd-9 text-center">750ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text wd-9 text-center">375ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text wd-8 text-center">180ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text ">30ml</span>
                          </label>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">750ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">375ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text wd-9 text-center">30ml</span>
                          </label>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text wd-9 text-center">750ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text wd-9 text-center">375ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text wd-8 text-center">180ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
                          </label>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">750ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">375ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text wd-9 text-center">30ml</span>
                          </label>
                        </div>
                      </div>
                    </td>

                    {/* ============खरीद रेट - बा. =============  */}
                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">750ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">375ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text wd-9 text-center">30ml</span>
                          </label>
                        </div>
                      </div>
                    </td>

                    {/* ======== आमद (उधारी) ========= */}

                    <td>
                      <div className="flex justify-around	">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text ">30ml</span>
                          </label>
                        </div>
                      </div>
                    </td>
                    {/* ======== भेजान ========= */}

                    <td>
                      <div className="flex justify-around	">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
                          </label>
                        </div>
                      </div>
                    </td>
                    {/* ======== योग/शेष ========= */}
                    <td>
                      <div className="flex justify-around	">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
                          </label>
                        </div>
                      </div>
                    </td>
                    {/* ======== अन्तिम स्टॉक ========= */}
                    <td>
                      <div className="flex justify-around	">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
                          </label>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-around	 ">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
                          </label>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="form-control"></div>
                    </td>
                  </tr>
                  {beerShopFrontFrist.map((beerFront, index) => {
                    return (
                      <AddOneFristForm
                        key={index}
                        index={index}
                        beerFront={beerFront}
                        fristFormOnChange={fristFormOnChange}
                        removeFristForm={removeFristForm}
                      ></AddOneFristForm>
                    );
                  })}
                  <tr>
                    <th>
                      <button
                        className="btn bg-[#AA237A] btn-sm"
                        onClick={() => fristFormAddOne()}
                      >
                        ADD
                      </button>
                    </th>
                    <th></th>
                    <td>Total</td>
                    {/* ======== MRP Input ========= */}
                    <td></td>
                    {/* ======== प्रारम्भिक स्टॉक ========= */}
                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput wd-9"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.openingStock750)),
                              0
                            )}
                            name="openingstock"
                          />
                        </div>
                      </div>
                    </td>

                    {/* ======== आमद (खरीद)-दु. ========= */}

                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.inflowShop750)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.inflowShop375)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.inflowShop180)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput wd-9"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.inflowShop30)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                      </div>
                    </td>

                    <td></td>

                    {/* ======== आमद (खरीद)-बा. ========= */}

                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.inflowOut750)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.inflowOut375)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.inflowOut180)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput wd-9"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.inflowOut30)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                      </div>
                    </td>

                    {/*================ खरीद रेट - बा. ==================  */}
                    <td></td>

                    {/* ======== आमद (उधारी) ========= */}

                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.inflowCredit750)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.inflowCredit375)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.inflowCredit180)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput wd-9"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.inflowCredit30)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                      </div>
                    </td>
                    {/* ======== भेजान ========= */}
                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.send750)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.send375)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.send180)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput wd-9"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.send30)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                      </div>
                    </td>
                    {/* ======== योग/शेष ========= */}
                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput wd-8"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.sumRemaining30)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                      </div>
                    </td>
                    {/* ======== अन्तिम स्टॉक ========= */}
                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput wd-8"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.closingStock30)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput wd-8"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.sales30)),
                              0
                            )}
                            name="averageRate"
                          />
                        </div>
                      </div>
                    </td>

                    <td></td>
                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput wd-9"
                            name="averageRate"
                            value={beerShopFrontFrist.reduce(
                              (total, curr) =>
                                (total = total + Number(curr.total30)),
                              0
                            )}
                          />
                        </div>
                      </div>
                    </td>
                    {/* ============= कुल योग ================ */}
                    <td>
                      <div className="form-control">
                        <input
                          type="number"
                          disabled
                          className="semiSmallInput"
                          name="grandTotal"
                          value={beerShopFrontFrist.reduce(
                            (total, curr) =>
                              (total = total + Number(curr.grandTotal)),
                            0
                          )}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={hasMoreBig===true ? '' : 'displayHidden'}>Loading data...</div>
            </div>
          </>
        </div>

        <div>
          <div className="overflow-x-auto my-6">
            <table className="table commonTable">
              <thead>
                <tr>
                  <th>क्र. सं.</th>
                  <th></th>
                  <th>ब्राण्ड</th>
                  <th>ml</th>
                  <th>एवरेज रेट </th>
                  <th>प्रारम्भिक स्टॉक </th>
                  <th>आमद (खरीद)-बार </th>
                  <th>खरीद रेट-बार </th>
                  <th>आमद (खरीद)-बाहर से </th>
                  <th>खरीद रेट बाहर </th>
                  <th>आमद (उधारी) </th>
                  <th > भेजान </th>
                  <th> योग/शेष</th>
                  <th> अन्तिम स्टॉक</th>
                  <th> बिक्री</th>
                  <th> रेट</th>
                  <th>योग</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <div className="form-control"></div>
                  </th>
                  <th>
                    <div className="form-control"></div>
                  </th>

                  <td>
                    <div className="form-control"></div>
                  </td>
                  <td>
                    <div className="form-control"></div>
                  </td>

                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Other ML</span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">30ml</span>
                        </label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Other ML</span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">30ml</span>
                        </label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Other ML</span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">30ml</span>
                        </label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Other ML</span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">30ml</span>
                        </label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Other ML</span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">30ml</span>
                        </label>
                      </div>
                    </div>
                  </td>

                  {/* ============खरीद रेट - बा. =============  */}
                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Other ML</span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">30ml</span>
                        </label>
                      </div>
                    </div>
                  </td>

                  {/* ======== आमद (उधारी) ========= */}

                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Other ML</span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">30ml</span>
                        </label>
                      </div>
                    </div>
                  </td>
                  {/* ======== भेजान ========= */}

                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Other ML</span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">30ml</span>
                        </label>
                      </div>
                    </div>
                  </td>
                  {/* ======== योग/शेष ========= */}
                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">30ml</span>
                        </label>
                      </div>
                    </div>
                  </td>
                  {/* ======== अन्तिम स्टॉक ========= */}
                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">30ml</span>
                        </label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">30ml</span>
                        </label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">30ml</span>
                        </label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="form-control"></div>
                  </td>
                </tr>
                {beerShopMid.map((item, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <th
                          className="cross"
                          onClick={() => {
                            swal({
                              title: "Are you sure?",
                              text: `Once deleted, you will not be able to recover row ${index + 1
                                }`,
                              icon: "warning",
                              buttons: true,
                              dangerMode: true,
                            }).then((willDelete) => {
                              if (willDelete) {
                                removeMidForm(index);
                                swal(`row ${index + 1}  has been deleted!`, {
                                  icon: "success",
                                });
                              } else {
                                swal("Your row is safe!");
                              }
                            });
                          }}
                        >
                          X
                          <input type="button" value="" autoFocus />
                        </th>

                        <td>
                          <Autocomplete
                            id="autocomplete"
                            size="small"
                            style={{
                              width: "20rem",
                              border:"1px solid black",
              borderRadius:"5px"
                            }}
                            options={options}
                            getOptionLabel={(option) =>
                              option ? option.brandName : ""
                            }
                            onChange={(event, value) => {
                              if (value) {
                                item.brandName = value.brandName;
                                item.liquorID = value._id;
                                item.size = value;
                              } else {
                                item.brandName = "";
                                item.liquorID = "";
                              }
                              midFormOnChange(event, index);
                            }}
                            renderInput={(params) => (
                              <TextField
                                required
                                size="small"
                                {...params}
                                // value={beerFront.brandName}
                                inputProps={{
                                  ...params.inputProps,
                                  value: item.brandName,
                                }}
                                onChange={(e) => {
                                  handleInputChange(e, e.target.value);
                                  item.brandName = e.target.value;
                                }}
                              />
                            )}
                          />
                        </td>

                        <td>
                          <div className="form-control ">
                            <select
                              className="semiSmallInput wd-9"
                              name="ml"
                              value={item.ml}
                              onChange={(e) => midFormOnChange(e, index)}
                              required
                            >
                              <option selected value={750}>
                                750ml
                              </option>
                              <option value={700}>700ml</option>
                              <option value={650}>650ml</option>
                              <option value={550}>550ml</option>
                              <option value={500}>500ml</option>
                              <option value={375}>375ml</option>
                              <option value={330}>330ml</option>
                              <option value={275}>275ml</option>
                              <option value={250}>250ml</option>
                              <option value={200}>200ml</option>
                              <option value={180}>180ml</option>
                              <option selected value={90}>
                                90ml
                              </option>
                              <option value={60}>60ml</option>
                              <option value={50}>50ml</option>
                            </select>
                          </div>
                        </td>
                        {/* ======== MRP Input ========= */}
                        <td>
                          <div className="flex ">
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                required
                                min={0}
                                name="averageRateOtherMl"
                                value={Number(item.averageRateOtherMl).toFixed(2)}
                                disabled
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                required
                                min={0}
                                name="averageRate30"
                                value={Number(item.averageRate30).toFixed(2)}
                                disabled
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                          </div>
                        </td>
                        {/* ======== प्रारम्भिक स्टॉक ========= */}
                        <td>
                          <div className="flex ">
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput wd"
                                required
                                min={0}
                                disabled
                                name="openingStockOtherMl"
                                value={Number(item.openingStockOtherMl).toFixed(2)}
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput  wd-8"
                                required
                                min={0}
                                disabled
                                name="openingStock30"
                                value={Number(item.openingStock30).toFixed(2)}
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                          </div>
                        </td>

                        {/* ======== आमद (खरीद)-दु. ========= */}

                        <td>
                          <div className="flex ">
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                required
                                min={0}
                                name="inflowPurchaseOtherMl"
                                value={item.inflowPurchaseOtherMl}
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput  wd-8"
                                required
                                min={0}
                                name="inflowPurchase30 "
                                value={Number(item.inflowPurchase30).toFixed(2)}
                                disabled
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="flex ">
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                required
                                min={0}
                                name="buyRateShopBarOtherMl"
                                value={item.buyRateShopBarOtherMl}
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                required
                                min={0}
                                name="buyRateShopBar30"
                                value={Number(item.buyRateShopBar30).toFixed(2)}
                                disabled
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                          </div>
                        </td>

                        {/* ======== आमद (खरीद)-बा. ========= */}

                        <td>
                          <div className="flex ">
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                required
                                min={0}
                                name="inflowPurchaseFromOutsideOtherMl"
                                value={item.inflowPurchaseFromOutsideOtherMl}
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput  wd-8"
                                required
                                min={0}
                                name="inflowPurchaseFromOutside30"
                                value={Number(item.inflowPurchaseFromOutside30).toFixed(2)}
                                disabled
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                          </div>
                        </td>

                        {/*================ खरीद रेट - बा. ==================  */}
                        <td>
                          <div className="flex ">
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                required
                                min={0}
                                name="buyRateShopOutOtherMl"
                                value={item.buyRateShopOutOtherMl}
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                required
                                min={0}
                                name="buyRateShopOut30"
                                value={Number(item.buyRateShopOut30).toFixed(2)}
                                disabled
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="flex ">
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                required
                                min={0}
                                name="inflowCreditOtherMl"
                                value={item.inflowCreditOtherMl}
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput  wd-8"
                                required
                                min={0}
                                name="inflowCredit30"
                                value={Number(item.inflowCredit30).toFixed(2)}
                                disabled
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                          </div>
                        </td>
                        {/* ======== भेजान ========= */}

                        <td>
                          <div className="flex ">
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                required
                                min={0}
                                name="sendOtherMl"
                                value={item.sendOtherMl}
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput  wd-8"
                                required
                                min={0}
                                disabled
                                name="send30"
                                value={Number(item.send30).toFixed(2)}
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                          </div>
                        </td>
                        {/* ======== योग/शेष ========= */}
                        <td>
                          <div className="flex ">
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput  wd-8"
                                required
                                min={0}
                                name="sumRemaining30"
                                value={Number(item.sumRemaining30).toFixed(2)}
                                disabled
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                          </div>
                        </td>
                        {/* ======== अन्तिम स्टॉक ========= */}
                        <td>
                          <div className="flex ">
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput  wd-8"
                                required
                                min={0}
                                name="closingStock30"
                                value={item.closingStock30}
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex ">
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput  wd-8"
                                required
                                min={0}
                                name="sale30"
                                value={Number(item.sale30).toFixed(2)}
                                disabled
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex ">
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                required
                                min={0}
                                name="rate30"
                                value={item.rate30}
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                          </div>
                        </td>
                        {/* ============= कुल योग ================ */}

                        <td>
                          <div className="form-control">
                            <input
                              type="number"
                              className="semiSmallInput  wd-9"
                              required
                              min={0}
                              name="total"
                              value={Number(item.total).toFixed(2)}
                              disabled
                              onChange={(e) => midFormOnChange(e, index)}
                            />
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
                <tr>
                  <th>
                    <button
                      className="btn bg-[#AA237A] btn-sm"
                      onClick={() => midFormAddOne()}
                    >
                      ADD
                    </button>
                  </th>
                  <td></td>
                  {/* ======== MRP Input ========= */}
                  <td></td>
                  <td></td>
                  <td></td>
                  {/* ======== प्रारम्भिक स्टॉक ========= */}
                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="openingStockOtherMl"
                          value={beerShopMid.reduce(
                            (total, curr) =>
                            (total =
                              total + Number(curr.openingStockOtherMl)),
                            0
                          )}
                          disabled
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput  wd-8"
                          name="openingStock30"
                          value={beerShopMid.reduce(
                            (total, curr) =>
                              (total = total + Number(curr.openingStock30)),
                            0
                          )}
                          disabled
                        />
                      </div>
                    </div>
                  </td>

                  {/* ======== आमद (खरीद)-दु. ========= */}

                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="inflowPurchaseOtherMl"
                          value={beerShopMid.reduce(
                            (total, curr) =>
                            (total =
                              total + Number(curr.inflowPurchaseOtherMl)),
                            0
                          )}
                          disabled
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput  wd-8"
                          name="inflowPurchase30"
                          value={beerShopMid.reduce(
                            (total, curr) =>
                              (total = total + Number(curr.inflowPurchase30)),
                            0
                          )}
                          disabled
                        />
                      </div>
                    </div>
                  </td>

                  <td></td>

                  {/* ======== आमद (खरीद)-बा. ========= */}

                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="inflowPurchaseFromOutsideOtherMl
                          "
                          value={beerShopMid.reduce(
                            (total, curr) =>
                            (total =
                              total +
                              Number(curr.inflowPurchaseFromOutsideOtherMl)),
                            0
                          )}
                          disabled
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput  wd-8"
                          name="inflowPurchaseFromOutside30"
                          value={beerShopMid.reduce(
                            (total, curr) =>
                            (total =
                              total +
                              Number(curr.inflowPurchaseFromOutside30)),
                            0
                          )}
                          disabled
                        />
                      </div>
                    </div>
                  </td>

                  {/*================ खरीद रेट - बा. ==================  */}
                  <td></td>

                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="inflowCreditOtherMl"
                          value={beerShopMid.reduce(
                            (total, curr) =>
                            (total =
                              total + Number(curr.inflowCreditOtherMl)),
                            0
                          )}
                          disabled
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput  wd-8"
                          name="inflowCredit30"
                          value={beerShopMid.reduce(
                            (total, curr) =>
                              (total = total + Number(curr.inflowCredit30)),
                            0
                          )}
                          disabled
                        />
                      </div>
                    </div>
                  </td>
                  {/* ======== भेजान ========= */}
                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="sending30"
                          value={beerShopMid.reduce(
                            (total, curr) =>
                              (total = total + Number(curr.sendOtherMl)),
                            0
                          )}
                          disabled
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput  wd-8"
                          name="sending30"
                          value={beerShopMid.reduce(
                            (total, curr) =>
                              (total = total + Number(curr.send30)),
                            0
                          )}
                          disabled
                        />
                      </div>
                    </div>
                  </td>
                  {/* ======== योग/शेष ========= */}
                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput  wd-8"
                          name="sumRemainder30"
                          value={beerShopMid.reduce(
                            (total, curr) =>
                              (total = total + Number(curr.sumRemaining30)),
                            0
                          )}
                          disabled
                        />
                      </div>
                    </div>
                  </td>
                  {/* ======== अन्तिम स्टॉक ========= */}
                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput  wd-8"
                          name="closingStock30"
                          value={beerShopMid.reduce(
                            (total, curr) =>
                              (total = total + Number(curr.closingStock30)),
                            0
                          )}
                          disabled
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput  wd-8"
                          name="sale30"
                          value={beerShopMid.reduce(
                            (total, curr) =>
                              (total = total + Number(curr.sale30)),
                            0
                          )}
                          disabled
                        />
                      </div>
                    </div>
                  </td>
                  <td></td>
                  {/* ============= कुल योग ================ */}
                  <td>
                    <div className="form-control">
                      <input
                        type="number"
                        className="semiSmallInput  wd-9"
                        name="total"
                        value={beerShopMid.reduce(
                          (total, curr) => (total = total + Number(curr.total)),
                          0
                        )}
                        disabled
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={hasMoreSmall===true ? '' : 'displayHidden'}>Loading data...</div>
          </div>
          <div>English Total:- {Number(localStorage.getItem("pegFormTotal")) + Number(localStorage.getItem('smallPegFormTotal'))}</div>
        </div>

        <div>
          <div>
            <>
              <div className="mt-6 ">
                <div className="overflow-x-auto flex ">
                  <div className="py-6">
                    <h1 className="my-4">
                      <span className="font-bold titleText">
                      बीयर रिपोर्ट
                      </span>
                    </h1>

                    <table className="table commonTable">
                      <thead>
                        <tr>
                          <th> क्र. सं.</th>
                          <th></th>
                          <th>Brand Name/ ब्राण्ड</th>
                          <th>औसत दर</th>
                          <th>प्रारम्भिक स्टॉक</th>
                          <th>आमद (खरीद)-दु.</th>
                          <th>खरीद रेट - दु</th>
                          <th>आमद (खरीद)-बा.</th>
                          <th>खरीद रेट - बा.</th>
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
                          <th></th>
                          <td>
                            <div className="form-control"></div>
                          </td>
                          {/* ======== MRP Input ========= */}
                          <td></td>
                          {/* ======== प्रारम्भिक स्टॉक ========= */}
                          <td>
                            <div className="flex justify-evenly">
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
                            <div className="flex ">
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
                            <div className="flex ">
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
                            <div className="flex justify-evenly">
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

                          {/* ============खरीद रेट - बा. =============  */}
                          <td>
                            <div className="flex ">
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

                          {/* ======== आमद (उधारी) ========= */}

                          <td>
                            <div className="flex justify-evenly">
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
                          {/* ======== भेजान ========= */}

                          <td>
                            <div className="flex ">
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
                          {/* ======== योग/शेष ========= */}
                          <td>
                            <div className="flex ">
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
                          {/* ======== अन्तिम स्टॉक ========= */}
                          <td>
                            <div className="flex ">
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
                          {/* ============= बिक्री ================ */}
                          <td>
                            <div className="flex ">
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
                          {/* ============= रेट ================ */}
                          <td>
                            <div className="flex ">
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
                          {/* ============= योग ================ */}
                          <td>
                            <div className="flex ">
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
                            <div className="flex justify-evenly ">
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
                          {/* ============= कुल योग ================ */}
                          <td>
                            <div className="form-control"></div>
                          </td>
                        </tr>

                        {fristFormState.map((item, index) => {
                          return (
                            <AddOneFristFromBack
                              handleRemoveFieldsBack={handleRemoveFieldsBack}
                              key={index}
                              onChangeFristBackFormHandler={
                                onChangeFristBackFormHandler
                              }
                              fristFormState={fristFormState}
                              item={item}
                              index={index}
                              brands={liquors}
                              liquors={liquors}
                              brandsLoaded={brandsLoaded}
                            ></AddOneFristFromBack>
                          );
                        })}

                        <tr>
                          <th>
                            <button
                              className="btn bg-[#AA237A] btn-sm"
                              onClick={() => {
                                addOneInFristFormHandler()
                                thirdFormAddOne();
                              }}
                            >
                              ADD
                            </button>
                          </th>
                          <td></td>
                          <td>Total</td>
                          {/* ======== MRP Input ========= */}
                          <td>
                            <div className="flex ">
                              <div className="form-control"></div>

                              <div className="form-control"></div>

                              <div className="form-control"></div>
                            </div>
                          </td>
                          {/* ======== प्रारम्भिक स्टॉक ========= */}
                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.startingStock650)),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  className="smallinput"
                                  disabled
                                  type="number"
                                  name="startingStock"
                                />
                              </div>

                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.startingStock550)),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  disabled
                                  name="startingStock"
                                />
                              </div>

                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.startingStock330)),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  disabled
                                  name="startingStock"
                                />
                              </div>
                            </div>
                          </td>

                          {/* ======== आमद (खरीद)-दु. ========= */}

                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(
                                        currentItem.incomingPurchase650
                                      )),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  disabled
                                  className="smallinput"
                                  name="incomingPurchase"
                                />
                              </div>

                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(
                                        currentItem.incomingPurchase550
                                      )),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  disabled
                                  name="incomingPurchase"
                                />
                              </div>

                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(
                                        currentItem.incomingPurchase330
                                      )),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  disabled
                                  name="incomingPurchase"
                                />
                              </div>
                            </div>
                          </td>

                          <td>
                            <div className="flex ">
                              <div className="form-control"></div>

                              <div className="form-control"></div>

                              <div className="form-control"></div>
                            </div>
                          </td>

                          {/* ======== आमद (खरीद)-बा. ========= */}

                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.incomePurchase650)),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  name="incomePurchase"
                                  disabled
                                />
                              </div>

                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.incomePurchase550)),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  disabled
                                  name="incomePurchase"
                                />
                              </div>

                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.incomePurchase330)),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  name="incomePurchase"
                                  disabled
                                />
                              </div>
                            </div>
                          </td>

                          {/*================ खरीद रेट - बा. ==================  */}
                          <td>
                            <div className="flex ">
                              <div className="form-control"></div>

                              <div className="form-control"></div>

                              <div className="form-control"></div>
                            </div>
                          </td>

                          {/* ======== आमद (उधारी) ========= */}

                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.inflowCredit650)),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  name="inflowCredit"
                                  disabled
                                />
                              </div>

                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.inflowCredit550)),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  name="inflowCredit"
                                  disabled
                                />
                              </div>

                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.inflowCredit330)),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  name="inflowCredit"
                                  disabled
                                />
                              </div>
                            </div>
                          </td>
                          {/* ======== भेजान ========= */}
                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total + Number(currentItem.sending650)),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  name="sending"
                                  disabled
                                />
                              </div>

                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total + Number(currentItem.sending550)),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  name="sending"
                                  disabled
                                />
                              </div>

                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total + Number(currentItem.sending330)),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  disabled
                                  className="smallinput"
                                  name="sending"
                                />
                              </div>
                            </div>
                          </td>
                          {/* ======== योग/शेष ========= */}
                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total + currentItem.sumRemainder650),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  name="sumRemainder"
                                  disabled
                                />
                              </div>

                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total + currentItem.sumRemainder550),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  name="sumRemainder"
                                  disabled
                                />
                              </div>

                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total + currentItem.sumRemainder330),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  name="sumRemainder"
                                  disabled
                                />
                              </div>
                            </div>
                          </td>
                          {/* ======== अन्तिम स्टॉक ========= */}
                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.closingStock650)),
                                    0
                                  )}
                                  type="number"
                                  className="smallinput"
                                  name="closingStock"
                                  disabled
                                />
                              </div>

                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.closingStock550)),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  name="closingStock"
                                  disabled
                                />
                              </div>

                              <div className="form-control">
                                <input
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.closingStock330)),
                                    0
                                  )}
                                  type="number"
                                  className="smallinput"
                                  name="closingStock"
                                  disabled
                                />
                              </div>
                            </div>
                          </td>
                          {/* ============= बिक्री ================ */}
                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                      (total = total + currentItem.sales650),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  name="sales"
                                  disabled
                                />
                              </div>

                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                      (total = total + currentItem.sales550),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  name="sales"
                                  disabled
                                />
                              </div>

                              <div className="form-control">
                                <input
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                      (total = total + currentItem.sales330),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                  type="number"
                                  className="smallinput"
                                  name="sales"
                                  disabled
                                />
                              </div>
                            </div>
                          </td>
                          {/* ============= रेट ================ */}
                          <td>
                            <div className="flex ">
                              <div className="form-control"></div>

                              <div className="form-control"></div>

                              <div className="form-control"></div>
                            </div>
                          </td>
                          {/* ============= योग ================ */}
                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="smallinput wd-6"
                                  name="total650"
                                  disabled
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.sales650) *
                                      Number(currentItem.mainRate650)),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                />
                              </div>
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="smallinput wd-6"
                                  name="total330"
                                  disabled
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.sales550) *
                                      Number(currentItem.mainRate550)),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                />
                              </div>
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="smallinput wd-6"
                                  name="total330"
                                  disabled
                                  value={fristFormState.reduce(
                                    (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.sales330) *
                                      Number(currentItem.mainRate330)),
                                    0
                                  )}
                                  onChange={(event) =>
                                    onChangeFristBackFormHandler(event)
                                  }
                                />
                              </div>
                            </div>
                          </td>
                          {/* ============= कुल योग ================ */}
                          <td>
                            <div className="form-control">
                              <input
                                type="number"
                                disabled
                                className="smallinput wd-7"
                                name="grandTotal"
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                  (total =
                                    total +
                                    Number(currentItem.sales650) *
                                    Number(currentItem.mainRate650) +
                                    Number(currentItem.sales550) *
                                    Number(currentItem.mainRate550) +
                                    Number(currentItem.sales330) *
                                    Number(currentItem.mainRate330)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className={hasMoreBeer===true ? '' : 'displayHidden'}>Loading data...</div>
                  </div>

                  <div className="py-6">
                    <h1 className="my-4">
                      <span className="font-bold titleText">
                        पानी, नमकीन, सिगरेट, पुड़िया आदि
                      </span>
                    </h1>
                    <table className="table commonTable">
                      <thead>
                        <tr></tr>
                        <tr></tr>
                        {/* <tr className="col-span-10">
                        <th>पानी, नमकीन, सिगरेट, पुड़िया आदि</th>
                      </tr> */}
                        <tr>
                          <th> क्र. सं.</th>
                          <th></th>
                          <th> सामान का विवरण</th>
                          <th> खरीद रेट</th>
                          <th>प्राम्भिक स्टॉक</th>
                          <th>आमद</th>
                          <th>योग</th>
                          <th>अंतिम स्टॉक</th>
                          <th>बिक्री</th>
                          <th>रेट</th>
                          <th>योग</th>
                        </tr>
                      </thead>

                      <tbody>
                        {beerShopFrontThird.map((beerBarthird, index) => {
                          return (
                            <tr key={index}>
                              <th>{index + 1}</th>
                              
                              <th
          className="cross"
          onClick={() => {
            swal({
              title: "Are you sure?",
              text: `Once deleted, you will not be able to recover row ${
                index + 1
              }`,
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willDelete) => {
              if (willDelete) {
                removeThirdForm(index);
                swal(`row ${index + 1}  has been deleted!`, {
                  icon: "success",
                });
              } else {
                swal("Your row is safe!");
              }
            });
          }}
        >
          X
        </th>

                              <td>
                                <input
                                  type="text"
                                  className="dailyReportInput"
                                  required
                                  min={0}
                                  name="description"
                                  value={beerBarthird.description}
                                  onChange={(event) =>
                                    thirdFormOnChange(event, index)
                                  }
                                />
                              </td>
                              <td>
                                <div className="flex ">
                                  <div className="form-control">
                                    <input
                                      type="number"
                                      required
                                      min={0}
                                      className="dailyReportInput"
                                      name="buyingPrice"
                                      value={beerBarthird.buyingPrice}
                                      onChange={(event) =>
                                        thirdFormOnChange(event, index)
                                      }
                                    />
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div className="flex ">
                                  <div className="form-control">
                                    <input
                                      type="text"
                                      className="dailyReportInput"
                                      name="openingStock"
                                      required
                                      min={0}
                                      value={beerBarthird.openingStock}
                                      onChange={(event) =>
                                        thirdFormOnChange(event, index)
                                      }
                                    />
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div className="flex ">
                                  <div className="form-control">
                                    <input
                                      type="number"
                                      className="dailyReportInput"
                                      name="infllow"
                                      required
                                      min={0}
                                      value={beerBarthird.infllow}
                                      onChange={(event) =>
                                        thirdFormOnChange(event, index)
                                      }
                                    />
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div className="flex ">
                                  <div className="form-control">
                                    <input
                                      type="number"
                                      className="dailyReportInput"
                                      name="sum"
                                      required
                                      min={0}
                                      value={beerBarthird.sum}
                                      disabled
                                      onChange={(event) =>
                                        thirdFormOnChange(event, index)
                                      }
                                    />
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div className="flex ">
                                  <div className="form-control">
                                    <input
                                      type="number"
                                      className="dailyReportInput"
                                      name="closingStock"
                                      required
                                      min={0}
                                      value={beerBarthird.closingStock}
                                      onChange={(event) =>
                                        thirdFormOnChange(event, index)
                                      }
                                    />
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div className="flex ">
                                  <div className="form-control">
                                    <input
                                      type="number"
                                      className="dailyReportInput"
                                      name="sales"
                                      required
                                      min={0}
                                      value={beerBarthird.sales}
                                      disabled
                                      onChange={(event) =>
                                        thirdFormOnChange(event, index)
                                      }
                                    />
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="flex ">
                                  <div className="form-control">
                                    <input
                                      type="number"
                                      className="dailyReportInput"
                                      name="rates"
                                      required
                                      min={0}
                                      value={beerBarthird.rates}
                                      onChange={(event) =>
                                        thirdFormOnChange(event, index)
                                      }
                                    />
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div className="flex ">
                                  <div className="form-control">
                                    <input
                                      type="number"
                                      className="dailyReportInput"
                                      name="sumreminder"
                                      required
                                      min={0}
                                      value={beerBarthird.sumreminder}
                                      disabled
                                      onChange={(event) =>
                                        thirdFormOnChange(event, index)
                                      }
                                    />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                        <tr>
                          <th></th>
                          <td></td>
                          <td></td>

                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  type="text"
                                  className="dailyReportInput"
                                  value={beerShopFrontThird.reduce(
                                    (total, curr) =>
                                    (total =
                                      total + Number(curr.openingStock)),
                                    0
                                  )}
                                  name="OpeningStock"
                                  disabled
                                />
                              </div>
                            </div>
                          </td>
                          

                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="dailyReportInput"
                                  value={beerShopFrontThird.reduce(
                                    (total, curr) =>
                                      (total = total + Number(curr.infllow)),
                                    0
                                  )}
                                  name="infllow"
                                  disabled
                                />
                              </div>
                            </div>
                          </td>

                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="dailyReportInput"
                                  value={beerShopFrontThird.reduce(
                                    (total, curr) =>
                                      (total = total + Number(curr.sum)),
                                    0
                                  )}
                                  name="sum"
                                  disabled
                                />
                              </div>
                            </div>
                          </td>

                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="dailyReportInput"
                                  name="closingStock"
                                  value={beerShopFrontThird.reduce(
                                    (total, curr) =>
                                    (total =
                                      total + Number(curr.closingStock)),
                                    0
                                  )}
                                  disabled
                                />
                              </div>
                            </div>
                          </td>

                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="dailyReportInput"
                                  value={beerShopFrontThird.reduce(
                                    (total, curr) =>
                                      (total = total + Number(curr.sales)),
                                    0
                                  )}
                                  name="sales"
                                  disabled
                                />
                              </div>
                            </div>
                          </td>
                          <td></td>

                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="dailyReportInput"
                                  value={beerShopFrontThird.reduce(
                                    (total, curr) =>
                                    (total =
                                      total + Number(curr.sumreminder)),
                                    0
                                  )}
                                  name="sumreminder"
                                  disabled
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>

      <div>
        <>
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="table commonTable ">
                <thead>
                  <tr>
                    <th> क्र. सं.</th>
                    <th></th>
                    <th> ब्राण्ड</th>
                    <th>ml</th>
                    <th>औसत दर</th>
                    <th>प्रारम्भिक स्टॉक</th>
                    <th>आमद (खरीद)-दु.</th>
                    <th>खरीद रेट - दु</th>
                    <th>आमद (खरीद)-बा.</th>
                    <th>खरीद रेट - बा.</th>
                    <th>आमद (उधारी)</th>
                    <th>भेजान</th>
                    <th>योग/शेष</th>
                    <th>अन्तिम स्टॉक</th>
                    <th>बिक्री</th>
                    <th>रेट</th>
                    <th>योग</th>
                    {/* <th>कुल योग</th> */}
                  </tr>
                </thead>

                <tbody>
                  {addOneSecondFormState.map((item, index) => {
                    return (
                      <AddOneSecondFormBack
                        handelSeconFormOnChange={handelSeconFormOnChange}
                        handleRemoveFieldsBeer={handleRemoveFieldsBeer}
                        addOneSecondFormState={addOneSecondFormState}
                        key={index}
                        index={index}
                        item={item}
                      ></AddOneSecondFormBack>
                    );
                  })}

                  <tr>
                    <th className="sticky">
                      <button
                        className="btn bg-[#AA237A] btn-sm"
                        onClick={() => addOneSecondFormHandler()}
                      >
                        ADD
                      </button>
                    </th>
                    <td></td>
                    <td>TOTAL</td>
                    <td>
                      <div className="form-control"></div>
                    </td>
                    {/* ======== MRP Input ========= */}
                    <td></td>
                    <td>
                      <div className="form-control items-center	">
                        <input
                          type="number"
                          className="smallinput"
                          disabled
                          name="startingStock"
                          value={addOneSecondFormState.reduce(
                            (total, currentItem) =>
                            (total =
                              total + Number(currentItem.startingStock)),
                            0
                          )}
                          onChange={(e) => handelSeconFormOnChange(e)}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-control items-center	">
                        <input
                          type="number"
                          className="smallinput"
                          disabled
                          name="incomingPurchase"
                          value={addOneSecondFormState.reduce(
                            (total, currentItem) =>
                            (total =
                              total + Number(currentItem.incomingPurchase)),
                            0
                          )}
                          onChange={(e) => handelSeconFormOnChange(e)}
                        />
                      </div>
                    </td>
                    {/* ======== प्रारम्भिक स्टॉक ========= */}
                    <td></td>

                    {/* ======== आमद (खरीद)-दु. ========= */}

                    <td>
                      <div className="form-control items-center	">
                        <input
                          type="number"
                          className="smallinput"
                          name="incomePurchase"
                          disabled
                          value={addOneSecondFormState.reduce(
                            (total, currentItem) =>
                            (total =
                              total + Number(currentItem.incomePurchase)),
                            0
                          )}
                          onChange={(e) => handelSeconFormOnChange(e)}
                        />
                      </div>
                    </td>

                    <td></td>

                    <td>
                      <div className="form-control items-center	">
                        <input
                          type="number"
                          className="smallinput"
                          disabled
                          name="inflowCredit"
                          value={addOneSecondFormState.reduce(
                            (total, currentItem) =>
                            (total =
                              total + Number(currentItem.inflowCredit)),
                            0
                          )}
                          onChange={(e) => handelSeconFormOnChange(e)}
                        />
                      </div>
                    </td>
                    {/* ======== भेजान ========= */}
                    <td>
                      <div className="form-control items-center	">
                        <input
                          type="number"
                          className="smallinput"
                          disabled
                          name="sending"
                          value={addOneSecondFormState.reduce(
                            (total, currentItem) =>
                              (total = total + Number(currentItem.sending)),
                            0
                          )}
                          onChange={(e) => handelSeconFormOnChange(e)}
                        />
                      </div>
                    </td>
                    {/* ======== योग/शेष ========= */}
                    <td>
                      <div className="form-control items-center	">
                        <input
                          type="number"
                          className="smallinput"
                          name="sumRemainder"
                          value={addOneSecondFormState.reduce(
                            (total, currentItem) =>
                            (total =
                              total + Number(currentItem.sumRemainder)),
                            0
                          )}
                          onChange={(e) => handelSeconFormOnChange(e)}
                          disabled
                        />
                      </div>
                    </td>
                    {/* ======== अन्तिम स्टॉक ========= */}
                    <td>
                      <div className="form-control items-center	">
                        <input
                          type="number"
                          className="smallinput"
                          disabled
                          name="closingStock"
                          value={addOneSecondFormState.reduce(
                            (total, currentItem) =>
                            (total =
                              total + Number(currentItem.closingStock)),
                            0
                          )}
                          onChange={(e) => handelSeconFormOnChange(e)}
                        />
                      </div>
                    </td>
                    {/* ============= बिक्री ================ */}
                    <td>
                      <div className="form-control items-center	">
                        <input
                          type="number"
                          className="smallinput"
                          disabled
                          name="sales"
                          value={addOneSecondFormState.reduce(
                            (total, currentItem) =>
                              (total = total + Number(currentItem.sales)),
                            0
                          )}
                          onChange={(e) => handelSeconFormOnChange(e)}
                        />
                      </div>
                    </td>
                    {/* ============= रेट ================ */}
                    <td></td>
                    {/* ============= योग ================ */}
                    <td>
                      <div className="form-control items-center	">
                        <input
                          type="number"
                          className="smallinput wd-7"
                          name="total"
                          value={addOneSecondFormState.reduce(
                            (total, currentItem) =>
                              (total = total + Number(currentItem.total)),
                            0
                          )}
                          onChange={(e) => handelSeconFormOnChange(e)}
                          disabled
                        />
                      </div>
                    </td>
                    {/* ============= कुल योग ================ */}
                  </tr>
                </tbody>
              </table>
              <div className={hasMoreBeerSmall===true ? '' : 'displayHidden'}>Loading data...</div>
            </div>
            <div style={{ height: '90px', marginTop: "50px" }}>
              <p>Beer Total:- {Number(localStorage.getItem('totalFirstBack')) + Number(localStorage.getItem('beerFormTotal'))}</p>
            </div>
          </div>
        </>
      </div>

      <div className="flex my-9 ">
        {isLoadingSubmit ? (
          <>
            <button
              type="button"
              className=" inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-[#AA237A] transition duration-150 ease-in-out border-2 border-[#AA237A] rounded-md shadow cursor-not-allowed"
              disabled=""
            >
              <svg
                className="w-5 h-5 mr-3 -ml-1 text-[#AA237A] animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading...
            </button>
          </>
        ) : (
          <>
            <input
              type="submit"
              className="dailyReportBtn"
              onClick={() => handelSubmit()}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default FronteDailyReport;
