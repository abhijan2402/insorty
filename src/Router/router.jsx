import { createBrowserRouter } from "react-router-dom";
import DailyReport from "../Pages/Users/DailyReport/DailyReport";
import UserLayouts from "../Layouts/UserLayouts";
import FronteDailyReport from "../Pages/Users/DailyReport/FrontDailyReport/FronteDailyReport";
import BackDailyReport from "../Pages/Users/DailyReport/BackDailyReport/BackDailyReport";
import Login from "../Auth/Login/Login";
import AdminLayout from "../Layouts/AdminLayout";
import SubAdminLayout from "../Layouts/SubAdminLayouts";
import SubAdminList from "../Pages/Admin/SubAdmin/SubAdminList/SubAdminList";
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
import PartyName from "../Pages/Users/AddItems/PartyName/PartyName";
import BrandList from "../Pages/Users/AddItems/BrandList/BrandList";
import BranchNameData from "../Pages/Users/AddItems/BranchName/BranchName";
import BeerStock from "../Pages/Users/AddItems/BeerStock/BeerStock";
import AllItems from "../Pages/Users/AddItems/AddItems/AddItems";
import WineStock from "../Pages/Users/AddItems/WineStock/WineStock";
import SendFormat from "../Pages/Users/SendFormat/SendFormat/SendFormat";
import PartnarDetails from "../Pages/Users/Partners/PartnerDetails/PartnerDetails";
import BearShopDailyReport from "../Pages/BearShop/BeerShopDailyReport/BeerShopDailyReport";
import BeerShopFrontDailyReport from "../Pages/BearShop/BeerShopDailyReport/BeerShopFrontDailyReport/BeerShopFronteDailyReport";
import BeerShopBackDailyReport from "../Pages/BearShop/BeerShopDailyReport/BeerShopBackDailyReport/BeerShopBackDailyReport";
import SubAdminShopList from "../Pages/SubAdmin/Shop/ShopList/ShopList";
import ShopList from "../Pages/Admin/Shop/ShopList/ShopList";
import RmlStock from "../Pages/Users/AddItems/RMLStock/RMLStock";
import Stock from "../Pages/Users/AddItems/Stock/Stock";
import Kharcha from "../Pages/Users/Commision/Kharcha/Kharcha.";
import Fut from "../Pages/Users/Commision/Fut/Fut";
import Burger from "../Pages/Users/Commision/Burger/Burger";
import Monthly from "../Pages/Users/Commision/Monthly/Monthly";
import Penalty from "../Pages/Users/Commision/Penalty/Penalty";
import Others from "../Pages/Users/Commision/Others/Others";
import CommisionRoute from "../Pages/Users/Commision/CommsionRoute/CommsionRoute";
import BorrowDetails from "../Pages/Users/Borrow/BorrowDetails/BorrowDetails";
import PhonePeToday from "../Pages/Users/PhonePeToday/PhonePeToday/PhonePeToday";
import CashReceiveData from "../Pages/Users/CashReciveData/CashReciveData/CashReciveData";
import PartnersMarge from "../Pages/Users/MargePartners/MargePartners";
import WineBill from "../Pages/Users/WineBill/WineBill";
import ShopParmisson from "../Pages/Admin/ShopParmisson/ShopParmisson/ShopParmisson";

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
        path: "/admin/subadminList",
        element: <SubAdminList />,
      },
      {
        path: "/admin/shopList",
        element: <ShopList />,
      },
      {
        path: "/admin/shopParmisson",
        element: <ShopParmisson />,
      },
      {
        path: "/admin/brandlist",
        element: <BrandList />,
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
        path: "/subadmin/manegshop",
        element: <SubAdminShopList />,
      },
      {},
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
        path: "/user/commisionroute",
        element: <CommisionRoute />,
      },
      {
        path: "/user/commisson",
        element: <Commision />,
      },
      {
        path: "/user/kharcha",
        element: <Kharcha />,
      },
      {
        path: "/user/partnersMarge",
        element: <PartnersMarge />,
      },
      {
        path: "/user/fut",
        element: <Fut />,
      },
      {
        path: "/user/begar",
        element: <Burger />,
      },
      {
        path: "/user/monthly",
        element: <Monthly />,
      },
      {
        path: "/user/penalty",
        element: <Penalty />,
      },
      {
        path: "/user/others",
        element: <Others />,
      },

      {
        path: "/user/borrow",
        element: <Borrow />,
      },
      {
        path: "/user/borrow/from/:partyId",
        element: <BorrowDetails />,
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
        path: "/user/partners/from/:partnerId",
        element: <PartnarDetails />,
      },
      {
        path: "/user/payments",
        element: <Payments />,
      },
      {
        path: "/user/phonePay",
        element: <PhonePeToday />,
      },
      {
        path: "/user/salary",
        element: <Salary />,
      },
      {
        path: "/user/cashReceive",
        element: <CashReceiveData />,
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
        path: "/user/winebill",
        element: <WineBill />,
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
        // element: <FrontDetailsReport2 />,
      },
      {
        path: "/user/brandlist",
        element: <BrandList />,
      },
      {
        path: "/user/partyname",
        element: <PartyName />,
      },
      {
        path: "/user/branchname",
        element: <BranchNameData />,
      },
      {
        path: "/user/beerstock",
        element: <BeerStock />,
      },
      {
        path: "/user/winestock",
        element: <WineStock />,
      },
      {
        path: "/user/rmlstock",
        element: <RmlStock />,
      },
      {
        path: "/user/allItems",
        element: <AllItems />,
      },
      {
        path: "/user/stock",
        element: <Stock />,
      },
      {
        path: "/user/sendFormat",
        element: <SendFormat />
      },
    ],
  },
  {
    path: "/user/bearshop",
    element: <BearShopLayout />,
    children: [
      {
        path: "/user/bearshop/dailyreport",
        element: <BearShopDailyReport />,
      },

      {
        path: "/user/bearshop/dailyreport/front",
        element: <BeerShopFrontDailyReport />,
      },
      {
        path: "/user/bearshop/dailyreport/back",
        element: <BeerShopBackDailyReport />,
      },

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
