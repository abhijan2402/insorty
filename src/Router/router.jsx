import { createBrowserRouter } from "react-router-dom";
import AdminMain from "../Components/Admin/AdminMain";
import FontPage from "../Components/FontPage/FontPage";
import Login from "../Auth/Login/Login";
import SubadminMain from "../Components/Subadmin/SubadminMain";
import UserMain from "../Components/User/UserMain";
import Register from "../Auth/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FontPage></FontPage>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/admin",
    element: <AdminMain></AdminMain>,
  },
  {
    path: "/subadmin",
    element: <SubadminMain></SubadminMain>,
  },
  {
    path: "/user",
    element: <UserMain></UserMain>,
  },
]);

export default router;
