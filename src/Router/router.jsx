import { createBrowserRouter } from "react-router-dom";
import AdminMain from "../Components/Admin/AdminMain";
import DailyReport from "../Pages/DailyReport/DailyReport";
import Login from "../Auth/Login/Login";
import SubadminMain from "../Components/Subadmin/SubadminMain";
import UserMain from "../Components/User/UserMain";
import Register from "../Auth/Register/Register";
import Home from "../Pages/Home/Home";
import HomeUser from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>,
//   },
//   {
//     path: "/login",
//     element: <Login></Login>,
//   },
//   {
//     path: "/register",
//     element: <Register></Register>,
//   },
//   {
//     path: "/admin",
//     element: <AdminMain></AdminMain>,
//   },
//   {
//     path: "/subadmin",
//     element: <SubadminMain></SubadminMain>,
//   },
//   {
//     path: "/user",
//     element: <UserMain></UserMain>,
//   },
//   {
//     path: "/homeUser",
//     element: <HomeUser></HomeUser>,
//   },

//   {
//     path: "/dailyReport",
//   },

//   {
//     path: "/dailyReport",
//     element: <DailyReport></DailyReport>,
//   },
// ]);

const router = createBrowserRouter([
  // Home Routes
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dailyReport",
        element: <DailyReport></DailyReport>,
      },
    ],
  },
  // Auth Routes
]);

export default router;
