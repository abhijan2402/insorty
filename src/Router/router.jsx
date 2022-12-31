import { createBrowserRouter } from "react-router-dom";
import DailyReport from "../Pages/DailyReport/DailyReport";
import DashboardLayout from "../Layouts/DashboardLayout";
import FronteDailyReport from "../Pages/DailyReport/FrontDailyReport/FronteDailyReport";
import BackDailyReport from "../Pages/DailyReport/BackDailyReport/BackDailyReport";

const router = createBrowserRouter([
  // Home Routes
  {
    path: "/",
    element: (
      <div>
        <DashboardLayout></DashboardLayout>
      </div>
    ),
    children: [
      {
        path: "/dailyReport",
        element: <DailyReport></DailyReport>,
      },
      {
        path: "/forntDailyReport",
        element: <FronteDailyReport></FronteDailyReport>,
      },
      {
        path: "/backDailyReport",
        element: <BackDailyReport></BackDailyReport>,
      }
    ],
  },
]);

export default router;
