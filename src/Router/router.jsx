import { createBrowserRouter } from "react-router-dom";
import DailyReport from "../Pages/DailyReport/DailyReport";
import UserLayouts from "../Layouts/UserLayouts";
import FronteDailyReport from "../Pages/DailyReport/FrontDailyReport/FronteDailyReport";
import BackDailyReport from "../Pages/DailyReport/BackDailyReport/BackDailyReport";
import Login from "../Auth/Login/Login";
import AdminLayout from "../Layouts/AdminLayout";
import SubAdminLayout from "../Layouts/SubAdminLayouts";

const router = createBrowserRouter([
  // Home Routes
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/admin",
    element: <AdminLayout />,
  },
  {
    path: "/subadmin",
    element: <SubAdminLayout />,
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
    ],
  },
]);

export default router;
