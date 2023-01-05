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
    ],
  },
]);

export default router;
