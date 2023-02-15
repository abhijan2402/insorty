import { createBrowserRouter } from "react-router-dom";
import DailyReport from "../Pages/Users/DailyReport/DailyReport";
import UserLayouts from "../Layouts/UserLayouts";
import FronteDailyReport from "../Pages/Users/DailyReport/FrontDailyReport/FronteDailyReport";
import BackDailyReport from "../Pages/Users/DailyReport/BackDailyReport/BackDailyReport";
import Login from "../Auth/Login/Login";
import AdminLayout from "../Layouts/AdminLayout";
import SubAdminLayout from "../Layouts/SubAdminLayouts";
import CreateSubAdmin from "../Pages/Admin/CreateSubAdmin/CreateSubAdmin";
import CreateUser from "../Pages/Admin/CreateUser/CreateUser";
import ManegSubAdmin from "../Pages/Admin/ManegSubAdmin/ManegSubAdmin";
import ManegUser from "../Pages/SubAdmin/ManegUser/ManegUser";
import CreateUserSubAdmin from "../Pages/SubAdmin/CreateUser/CreateUser";
import Branch from "../Pages/Users/Branch/BranchName/BranchName";
import BranchFrom from "../Pages/Users/Branch/BranchForm/BranchFrom";
import Commision from "../Pages/Users/Commision/Commision/Commision";
import Borrow from "../Pages/Users/Borrow/Borrow/Borrow";
import FinalReport from "../Pages/Users/FinalReport/FinalReport/FinalReport";
import Partnar from "../Pages/Users/Partners/Partners/Partners";
import Payments from "../Pages/Users/Payments/Payment/Payments";
import Salary from "../Pages/Users/Salary/SalaryList/SalaryList";
import SalaryForm from "../Pages/Users/Salary/SalaryForm/SalaryForm";
import OutBill from "../Pages/Users/OutBill/OutBill/OutBill";
import SelfBill from "../Pages/Users/SelfBill/SelfBill/SelfBill";
import Extra from "../Pages/Users/Extra/Extra/Extra";
import MainInvestment from "../Pages/Users/MainInvestment/MainInvestment/MainInvestment";
import EnglishBear from "../Pages/Users/EnglishBear/EnglishBear/EnglishBear";
import StockLanding from "../Pages/Users/StockLanding/StockLanding/StockLanding";
import StockLandingForm from "../Pages/Users/StockLanding/StockLandingForm/StockLandingForm";
import FrontDetailsReport from "../Pages/Users/DailyReport/DetailsReports/FullDetailsReport/FrontDetailsReport/FrontDetailsReport/FrontDetailsReport";
import BearShopLayout from "../Layouts/BearShopLayouts";
import routerImport from "./routerImport";
import BackDetailReport from "../Pages/Users/DailyReport/DetailsReports/FullDetailsReport/BackDetailReport/BackDetailsReport/BackDetailReport";
// import BackReport from "../Pages/Users/DailyReport/DetailsReports/BackDetailsReport/BackDetailsReport";
import FrontDetailsReport2 from "../Pages/Users/DailyReport/DetailsReports/FrontDetailsReport/FrontDetailsReport";

const {
  BearShopBranch,
  BearShopBranchForm,
  BearShopCommison,
  BearShopBorrow,
  BearShopFinalReport,
  BearShopPartners,
  BearShopPayments,
  BearShopSalary,
  BearShopSalaryForm,
  BearShopOutbill,
  BearShopSelfBill,
  BearShopExtra,
  BearShopMainInvestment,
  // BearShopMainInvestmentForm,
  BearShopEnglishBear,
  BearShopStockLanding,
  BearShopStockLandingForm,
} = routerImport();

const token = localStorage.getItem("token");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/createsubadmin",
        element: <CreateSubAdmin />,
      },
      {
        path: "/admin/createuser",
        element: <CreateUser />,
      },
      {
        path: "/admin/manegsubadmin",
        element: <ManegSubAdmin />,
      },
    ],
  },
  {
    path: "/subadmin",
    element: <SubAdminLayout />,
    children: [
      {
        path: "/subadmin/createuser",
        element: <CreateUserSubAdmin />,
      },
      {
        path: "/subadmin/maneguser",
        element: <ManegUser />,
      },
    ],
  },
  {
    path: "/user",
    element: <UserLayouts />,
    children: [
      {
        path: "/user/dailyreport",
        element: <DailyReport />,
      },
      {
        path: "/user/dailyreport/front",
        element: <FronteDailyReport />,
      },
      {
        path: "/user/dailyreport/back",
        element: <BackDailyReport />,
      },
      {
        path: "/user/branch",
        element: <Branch />,
      },
      {
        path: "/user/branch/from/:branchId",
        loader: ({ params }) =>
          fetch(`https://insorty-api.onrender.com/shop/getBranchTransactions`, {
            method: "POST",
            body: JSON.stringify({
                branchId: params.branchId,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
        }),
        element: <BranchFrom />,
      },
      {
        path: "/user/commision",
        element: <Commision />,
      },
      {
        path: "/user/borrow",
        element: <Borrow />,
      },
      {
        path: "/user/finalreport",
        element: <FinalReport />,
      },
      {
        path: "/user/partners",
        element: <Partnar />,
      },
      {
        path: "/user/payments",
        element: <Payments />,
      },
      {
        path: "/user/salary",
        element: <Salary />,
      },

      {
        path: "/user/salary/from/:employeeId",
        loader: ({ params }) =>
          fetch(`https://insorty-api.onrender.com/shop/getEmployeeSalaryData`, {
            method: "POST",
            body: JSON.stringify({
              employeeId: params.employeeId,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }),
        element: <SalaryForm />,
      },
      {
        path: "/user/outbill",
        element: <OutBill />,
      },
      {
        path: "/user/selfbill",
        element: <SelfBill />,
      },
      {
        path: "/user/extra",
        element: <Extra />,
      },
      {
        path: "/user/maininvestment",
        element: <MainInvestment />,
      },
      {
        path: "/user/englishbear",
        element: <EnglishBear />,
      },
      {
        path: "/user/stocklanding",
        element: <StockLanding />,
      },
      {
        path: "/user/stocklanding/form/:partyId",
        element: <StockLandingForm />,
      },
      {
        path: "/user/frontdailyreport/details",
        element: <FrontDetailsReport />,
      },
      {
        path: "/user/dailyreport/details",
        element: <BackDetailReport />,
      },
      {
        path: "/user/dailyreport/backdetailsreport",
        element: <FrontDetailsReport2 />,
      },
    ],
  },
  {
    path: "/user/bearshop",
    element: <BearShopLayout />,
    children: [
      {
        path: "/user/bearshop/branch",
        element: <BearShopBranch />,
      },
      {
        path: "/user/bearshop/branch/from",
        element: <BearShopBranchForm />,
      },
      {
        path: "/user/bearshop/commision",
        element: <BearShopCommison />,
      },
      {
        path: "/user/bearshop/borrow",
        element: <BearShopBorrow />,
      },
      {
        path: "/user/bearshop/finalreport",
        element: <BearShopFinalReport />,
      },
      {
        path: "/user/bearshop/partners",
        element: <BearShopPartners />,
      },
      {
        path: "/user/bearshop/payments",
        element: <BearShopPayments />,
      },
      {
        path: "/user/bearshop/salary",
        element: <BearShopSalary />,
      },

      {
        path: "/user/bearshop/salary/from/:employeeId",
        loader: ({ params }) =>
          fetch(`https://insorty-api.onrender.com/shop/getEmployeeSalaryData`, {
            method: "POST",
            body: JSON.stringify({
              employeeId: params.employeeId,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }),
        element: <BearShopSalaryForm />,
      },
      {
        path: "/user/bearshop/outbill",
        element: <BearShopOutbill />,
      },
      {
        path: "/user/bearshop/selfbill",
        element: <BearShopSelfBill />,
      },
      {
        path: "/user/bearshop/extra",
        element: <BearShopExtra />,
      },
      {
        path: "/user/bearshop/maininvestment",
        element: <BearShopMainInvestment />,
      },
      {
        path: "/user/bearshop/englishbear",
        element: <BearShopEnglishBear />,
      },
      {
        path: "/user/bearshop/stocklanding",
        element: <BearShopStockLanding />,
      },
      {
        path: "/user/bearshop/stocklanding/form",
        // loader: ({ params }) =>
        //   fetch(`https://insorty-api.onrender.com/shop/getEmployeeSalaryData`, {
        //     method: "POST",
        //     body: JSON.stringify({
        //       employeeId: params.employeeId,
        //     }),
        //     headers: {
        //       "Content-Type": "application/json",
        //       cookie_token: token,
        //     },
        //   }),
        element: <BearShopStockLandingForm />,
      },
    ],
  },
]);

export default router;
