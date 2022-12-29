import { createBrowserRouter } from "react-router-dom";
import DailyReport from "../Pages/DailyReport/DailyReport";
import DashboardLayout from "../Layouts/DashboardLayout";

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
    ],
  },
]);

export default router;
