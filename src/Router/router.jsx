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

const token = localStorage.getItem("token");
const router = createBrowserRouter([
  // Home Routes
  {
    path: "/",
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
        path: "/user/branch/from",
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
        path: "/user/stocklanding/form/:employeeId",
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
        element: <StockLanding />,
      },
    ],
  },
]);

export default router;
