import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AddOneFristForm from "./BeerShopFirstForm/AddOneFristForm/AddOneFristForm";
import UseBeerShopFront from "../../BeerHooks/DailyReportHooks/UseBeerShopFront/UseBeerShopFront";
import AddFristForm from "../../../Users/DailyReport/FrontDailyReport/FirstForm/AddOneFristForm/AddOneFristForm";
import { DataContextApi } from "../../../../Context/DataContext";
import useFormulasFristFormFront from "../../../../Hooks/useFormulas/useFormulasFristFormFront";
import useSecondFormFront from "../../../../Hooks/useSecondFormFront";
import { useQuery } from "@tanstack/react-query";
import useFristFormSubmitAPIFront from "../../../../Hooks/useFristFormSubmitAPIFront/useFristFormSubmitAPIFront";
import AddOneSecondForm from "../../../Users/DailyReport/FrontDailyReport/SecondForm/AddOneSecondForm/AddOneSecondForm";

const FronteDailyReport = () => {
  const {
    handelFristFormSubmit,
    fristFormAddOne,
    fristFormOnChange,
    beerShopFrontFrist,
    beerShopFrontSecond,
    beerShopFrontThird,
    addOne,
    beerShopMid,
    midFormOnChange,
    midFormAddOne,
    thirdFormOnChange,
  } = UseBeerShopFront();

  const token = localStorage.getItem("token");
  const first = localStorage.getItem("firstFrontTotal")
    ? localStorage.getItem("firstFrontTotal")
    : 0;
  const second = localStorage.getItem("mlFormTotal")
    ? localStorage.getItem("mlFormTotal")
    : 0;

  const { salesMan, setSalesMan, drDate, setDrDate } =
    useContext(DataContextApi);

  const {
    addOneFristFormState,
    addOneFristFormHandler,
    handelFristFormOnChange,
    setAddOneFristFormState,
    myOptions,
    handleRemoveFields,
  } = useFormulasFristFormFront();

  //=============== add One second form ================

  const {
    addOneSecondFormState,
    addOneSecondFormHandler,
    handelSeconFormOnChange,
    handleRemoveFieldsSecond,
  } = useSecondFormFront();

  const { submitFristFormHandler, isLoadingSubmit } =
    useFristFormSubmitAPIFront();

  const { data: sujestedData, isLoading } = useQuery({
    queryKey: ["sujestedData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllLiquors",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const onSearch = (searchTerm) => {
    setAddOneFristFormState(searchTerm);
    console.log("search ", searchTerm);
  };

  return (
    <section className="mx-2">
      <div className="flex justify-center items-center flex-col">
        <div className="my-4 flex gap-4 items-center">
          <h1 className="font-bold text-2xl">Daily Report / दैनिक रिपोर्ट </h1>
          <Link to="/user/bearshop/dailyreport/back" className="commonBtn">
            Back
          </Link>
        </div>
        <div className="flex gap-4 ">
          <h1 className="font-bold ">सेल्समेन का नाम</h1>
          <input type="text" className="semiSmallInput" />
          <input type="date" name="" id="" className="semiSmallInput" />
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
                            <span className="label-text">30ml</span>
                          </label>
                        </div>
                      </div>
                    </td>
                    {/* ======== प्रारम्भिक स्टॉक ========= */}
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

                    {/* ======== आमद (उधारी) ========= */}

                    <td>
                      <div className="flex ">
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
                    <td>Total</td>
                    {/* ======== MRP Input ========= */}
                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                      </div>
                    </td>
                    {/* ======== प्रारम्भिक स्टॉक ========= */}
                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
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
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
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
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                      </div>
                    </td>

                    {/* ======== आमद (खरीद)-बा. ========= */}

                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                      </div>
                    </td>

                    {/*================ खरीद रेट - बा. ==================  */}
                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                      </div>
                    </td>

                    {/* ======== आमद (उधारी) ========= */}

                    <td>
                      <div className="flex ">
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
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
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
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
                            className="smallinput"
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
                            className="smallinput"
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
                            className="smallinput"
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
                            className="smallinput"
                            name="averageRate"
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
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        </div>

        <div>
          <div className="overflow-x-auto my-6">
            <table className="table commonTable">
              <thead>
                <tr>
                  <th>क्र. सं.</th>
                  <th>ब्राण्ड</th>
                  <th>एवरेज रेट </th>
                  <th>प्रारम्भिक स्टॉक </th>
                  <th>आमद (खरीद)-बार </th>
                  <th>खरीद रेट-बार </th>
                  <th>आमद (खरीद)-बाहर से </th>
                  <th>खरीद रेट बाहर </th>
                  <th>आमद (उधारी) </th>
                  <th> भेजान </th>
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
                        <td>
                          <input
                            type="text"
                            name="BrandName"
                            required
                            min={0}
                            className="dailyReportInput"
                            value={item.BrandName}
                            onChange={(e) => midFormOnChange(e, index)}
                          />
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
                                value={item.averageRateOtherMl}
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
                                value={item.averageRate30}
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
                                className="smallinput"
                                required
                                min={0}
                                name="openingStockOtherMl"
                                value={item.openingStockOtherMl}
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                required
                                min={0}
                                name="openingStock30"
                                value={item.openingStock30}
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
                                className="smallinput"
                                required
                                min={0}
                                name="inflowPurchase30"
                                value={item.inflowPurchase30}
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
                                name="purchaseRateBarOtherMl"
                                value={item.purchaseRateBarOtherMl}
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                required
                                min={0}
                                name="purchaseRateBar30"
                                value={item.purchaseRateBar30}
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
                                className="smallinput"
                                required
                                min={0}
                                name="inflowPurchaseFromOutside30"
                                value={item.inflowPurchaseFromOutside30}
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
                                name="purchaseRateOutOtherMl"
                                value={item.purchaseRateOutOtherMl}
                                onChange={(e) => midFormOnChange(e, index)}
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                required
                                min={0}
                                name="purchaseRateOut30"
                                value={item.purchaseRateOut30}
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
                                className="smallinput"
                                required
                                min={0}
                                name="inflowCredit30"
                                value={item.inflowCredit30}
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
                                name="sending30"
                                value={item.sending30}
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
                                className="smallinput"
                                required
                                min={0}
                                name="sumRemainder30"
                                value={item.sumRemainder30}
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
                                className="smallinput"
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
                                className="smallinput"
                                required
                                min={0}
                                name="sale30"
                                value={item.sale30}
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
                              className="semiSmallInput"
                              required
                              min={0}
                              name="Yoga"
                              value={item.Yoga}
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
                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="averageRateOtherMl"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="averageRate30"
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
                          className="smallinput"
                          name="openingStockOtherMl"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="openingStock30"
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
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="inflowPurchase30"
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
                          name="purchaseRateBarOtherMl"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="purchaseRateBar30"
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
                          name="inflowPurchaseFromOutsideOtherMl"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="inflowPurchaseFromOutside30"
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
                          name="purchaseRateOutOtherMl"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="purchaseRateOut30"
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
                          name="inflowCreditOtherMl"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="inflowCredit30"
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
                          className="smallinput"
                          name="sumRemainder30"
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
                          className="smallinput"
                          name="closingStock30"
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
                          name="sale30"
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
                          name="rate30"
                        />
                      </div>
                    </div>
                  </td>
                  {/* ============= कुल योग ================ */}
                  <td>
                    <div className="form-control">
                      <input
                        type="number"
                        className="semiSmallInput"
                        name="Yoga"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div>
            <>
              <div className="mt-6 ">
                <div className="overflow-x-auto flex ">
                  <table className="table commonTable">
                    <thead>
                      <tr>
                        <th> क्र. सं.</th>
                        <th></th>
                        <th>Brand Name/ ब्राण्ड</th>
                        <th>Average Rate</th>
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
                        <td>
                          <div className="flex  justify-evenly">
                            <div className="form-control"></div>
                            <div className="form-control"></div>
                            <div className="form-control"></div>
                          </div>
                        </td>
                        <td>
                          <div className="flex  justify-evenly">
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
                          </div>
                        </td>
                        {/* ======== प्रारम्भिक स्टॉक ========= */}
                        <td>
                          <div className="flex  justify-evenly">
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
                          </div>
                        </td>

                        <td>
                          <div className="flex  justify-evenly">
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
                          </div>
                        </td>

                        <td>
                          <div className="flex  justify-evenly">
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
                          </div>
                        </td>

                        <td>
                          <div className="flex  justify-evenly">
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
                          </div>
                        </td>

                        {/* ============खरीद रेट - बा. =============  */}
                        <td>
                          <div className="flex justify-evenly ">
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
                          </div>
                        </td>

                        {/* ======== आमद (उधारी) ========= */}

                        <td>
                          <div className="flex  justify-evenly">
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
                          </div>
                        </td>
                        {/* ======== भेजान ========= */}

                        <td>
                          <div className="flex  justify-evenly">
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
                          </div>
                        </td>
                        {/* ======== योग/शेष ========= */}
                        <td>
                          <div className="flex  justify-evenly">
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
                          </div>
                        </td>
                        {/* ======== अन्तिम स्टॉक ========= */}
                        <td>
                          <div className="flex  justify-evenly">
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
                          </div>
                        </td>
                        {/* ============= बिक्री ================ */}
                        <td>
                          <div className="flex  justify-evenly">
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
                          </div>
                        </td>
                        {/* ============= रेट ================ */}
                        <td>
                          <div className="flex  justify-evenly">
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
                          </div>
                        </td>
                        {/* ============= योग ================ */}

                        <td>
                          <div className="flex flex-2 justify-evenly">
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
                          </div>
                        </td>

                        {/* ============= कुल योग ================ */}
                        <td>
                          <div className="form-control"></div>
                        </td>
                      </tr>

                      {/* ============ ============== */}
                      {addOneFristFormState.map((addOneFirst, index) => {
                        return (
                          <AddFristForm
                            key={index}
                            addOneFirst={addOneFirst}
                            index={index}
                            myOptions={myOptions}
                            onSearch={onSearch}
                            sujestedData={sujestedData}
                            setAddOneFristFormState={setAddOneFristFormState}
                            addOneFristFormState={addOneFristFormState}
                            handelFristFormOnChange={handelFristFormOnChange}
                            handleRemoveFields={handleRemoveFields}
                          ></AddFristForm>
                        );
                      })}

                      {/* ============ =========== */}

                      <tr>
                        <th>
                          <div>
                            <button
                              className="btn bg-[#AA237A] btn-sm"
                              onClick={() => addOneFristFormHandler()}
                            >
                              ADD
                            </button>
                          </div>
                        </th>
                        <td></td>
                        <td>Total</td>
                        {/* ======== MRP Input ========= */}
                        <td>
                          <div className="flex">
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
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.startingStock750)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
                                }
                                className="smallinput"
                                disabled
                                type="number"
                                name="startingStock"
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.startingStock330)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
                                }
                                type="number"
                                className="smallinput"
                                disabled
                                name="startingStock"
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.startingStock180)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
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
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.incomingPurchase750)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
                                }
                                type="number"
                                disabled
                                className="smallinput"
                                name="incomingPurchase"
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.incomingPurchase330)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
                                }
                                type="number"
                                className="smallinput"
                                disabled
                                name="incomingPurchase"
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.incomingPurchase180)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
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
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.incomePurchase750)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
                                }
                                type="number"
                                className="smallinput"
                                name="incomePurchase"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.incomePurchase330)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
                                }
                                type="number"
                                className="smallinput"
                                disabled
                                name="incomePurchase"
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.incomePurchase180)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
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
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.inflowCredit750)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
                                }
                                type="number"
                                className="smallinput"
                                name="inflowCredit"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.inflowCredit330)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
                                }
                                type="number"
                                className="smallinput"
                                name="inflowCredit"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.inflowCredit180)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
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
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total + Number(currentItem.sending750)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
                                }
                                type="number"
                                className="smallinput"
                                name="sending"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total + Number(currentItem.sending330)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
                                }
                                type="number"
                                className="smallinput"
                                name="sending"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total + Number(currentItem.sending180)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
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
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total + currentItem.sumRemainder750),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
                                }
                                type="number"
                                className="smallinput"
                                name="sumRemainder"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total + currentItem.sumRemainder330),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
                                }
                                type="number"
                                className="smallinput"
                                name="sumRemainder"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total + currentItem.sumRemainder180),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
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
                                  handelFristFormOnChange(event)
                                }
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.closingStock750)),
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
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.closingStock330)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
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
                                  handelFristFormOnChange(event)
                                }
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.closingStock180)),
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
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total = total + currentItem.sales750),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
                                }
                                type="number"
                                className="smallinput"
                                name="sales"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total = total + currentItem.sales330),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
                                }
                                type="number"
                                className="smallinput"
                                name="sales"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total = total + currentItem.sales180),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
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
                                name="total750"
                                disabled
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.sales750) *
                                        Number(currentItem.mainRate750)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
                                }
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput wd-6"
                                name="total375"
                                disabled
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.sales330) *
                                        Number(currentItem.mainRate330)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
                                }
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput wd-6"
                                name="total180"
                                disabled
                                value={addOneFristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.sales180) *
                                        Number(currentItem.mainRate180)),
                                  0
                                )}
                                onChange={(event) =>
                                  handelFristFormOnChange(event)
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
                              value={addOneFristFormState.reduce(
                                (total, currentItem) =>
                                  (total =
                                    total +
                                    Number(currentItem.sales750) *
                                      Number(currentItem.mainRate750) +
                                    Number(currentItem.sales330) *
                                      Number(currentItem.mainRate330) +
                                    Number(currentItem.sales180) *
                                      Number(currentItem.mainRate180)),
                                0
                              )}
                              onChange={(event) =>
                                handelFristFormOnChange(event)
                              }
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="table commonTable">
                    <thead>
                      <tr className="col-span-10">
                        <th>पानी, नमकीन, सिगरेट, पुड़िया आदि</th>
                      </tr>
                      <tr>
                        <th> क्र. सं.</th>
                        <th>Description/ सामान का विवरण</th>
                        <th>Buying price/ खरीद रेट</th>
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
                                    name="OpeningStock"
                                    required
                                    min={0}
                                    value={beerBarthird.OpeningStock}
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
                        <td>
                          <input
                            type="text"
                            className="dailyReportInput"
                            name="description"
                          />
                        </td>
                        <td>
                          <div className="flex ">
                            <div className="form-control">
                              <input
                                type="number"
                                className="dailyReportInput"
                                name="buyingPrice"
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
                                name="OpeningStock"
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
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
              <table className="table commonTable">
                <thead>
                  <tr>
                    <th> क्र. सं.</th>
                    <th></th>
                    <th>Brand Name/ ब्राण्ड</th>
                    <th>ml</th>
                    <th>Average Rate</th>
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
                  </tr>
                </thead>

                <tbody>
                  {addOneSecondFormState.map((item, index) => {
                    return (
                      <AddOneSecondForm
                        handelSeconFormOnChange={handelSeconFormOnChange}
                        addOneSecondFormState={addOneSecondFormState}
                        key={index}
                        index={index}
                        item={item}
                        handleRemoveFieldsSecond={handleRemoveFieldsSecond}
                      ></AddOneSecondForm>
                    );
                  })}

                  <tr>
                    <th className="sticky">
                      <div>
                        <button
                          className="btn bg-[#AA237A] btn-sm"
                          onClick={() => addOneSecondFormHandler()}
                        >
                          ADD
                        </button>
                      </div>
                    </th>
                    <td></td>
                    <td>TOTAL</td>
                    <td>
                      <div className="form-control"></div>
                    </td>
                    {/* ======== MRP Input ========= */}
                    <td>
                      <div className="form-control"></div>
                    </td>
                    <td>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="startingStock"
                          disabled
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
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="incomingPurchase"
                          disabled
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
                    <td>
                      <div className="form-control"></div>
                    </td>

                    {/* ======== आमद (खरीद)-दु. ========= */}

                    <td>
                      <div className="form-control">
                        <input
                          type="number"
                          disabled
                          className="smallinput"
                          name="incomePurchase"
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
                    {/* ======== आमद (खरीद)-बा. ========= */}

                    <td>
                      <div className="form-control"></div>
                    </td>
                    {/* ======== आमद (उधारी) ========= */}

                    <td>
                      <div className="form-control">
                        <input
                          type="number"
                          disabled
                          className="smallinput"
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
                      <div className="form-control">
                        <input
                          type="number"
                          disabled
                          className="smallinput"
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
                      <div className="form-control">
                        <input
                          type="number"
                          disabled
                          className="smallinput"
                          name="sumRemainder"
                          value={addOneSecondFormState.reduce(
                            (total, currentItem) =>
                              (total =
                                total + Number(currentItem.sumRemainder)),
                            0
                          )}
                          onChange={(e) => handelSeconFormOnChange(e)}
                        />
                      </div>
                    </td>
                    {/* ======== अन्तिम स्टॉक ========= */}
                    <td>
                      <div className="form-control">
                        <input
                          type="number"
                          disabled
                          className="smallinput"
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
                      <div className="form-control">
                        <input
                          type="number"
                          disabled
                          className="smallinput"
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
                    <td>
                      <div className="form-control"></div>
                    </td>
                    {/* ============= योग ================ */}
                    <td>
                      <div className="form-control">
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
            </div>
          </div>
        </>
      </div>

      <div className="mt-4 flex gap-4">
        <button
          className="dailyReportBtn"
          onClick={() => handelFristFormSubmit()}
          type="submit"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default FronteDailyReport;
