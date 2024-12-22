import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import AdminDashboard from "./pages/Admin/dashboard/index.jsx";
import ForgetPassword from "./pages/AuthenticationScreens/ForgetPassword";
import ResetPassword from "./pages/AuthenticationScreens/ResetPassword";
import Terms from "./pages/PrivatePages/Terms";
import Support from "./pages/PrivatePages/Support";
import Privacy from "./pages/PrivatePages/Privacy";
import Attendance from "./pages/Admin/attendance/index.jsx";
import { NextUIProvider } from '@nextui-org/react'
import Shifts from "./pages/Admin/shift/index.jsx";
import Messenger from "./pages/Admin/messenger/index.jsx";
import Users from "./pages/Admin/users/index.jsx";
import Details from "./pages/Admin/attendance/details.jsx";
import { store } from './redux/store.js'
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import View from "./pages/Admin/attendance/view.jsx";
import CreateUser from "./pages/Admin/users/create.jsx";
import Edituser from "./pages/Admin/users/edit.jsx";
import EmployeeDashboard from "./pages/Employee/dashboard/index.jsx";
import EmployeeAttendance from "./pages/Employee/attendance/index.jsx";
import Timetable from "./pages/Employee/timetable/index.jsx";
import Accounts from "./pages/Mutual/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/attendance",
    element: <Attendance />,
  },
  {
    path: "/admin/attendance/details",
    element: <Details />,
  },
  {
    path: "/admin/attendance/view",
    element: <View />,
  },
  {
    path: "/admin/shifts",
    element: <Shifts />,
  },
  {
    path: "/admin/messenger",
    element: <Messenger />,
  },
  {
    path: "/admin/users",
    element: <Users />,
  },
  {
    path: "/admin/users/create",
    element: <CreateUser />,
  },
  {
    path: "/admin/users/edit",
    element: <Edituser />,
  },
  {
    path: "/employee/dashboard",
    element: <EmployeeDashboard />,
  },
  {
    path: "/employee/attendance",
    element: <EmployeeAttendance />,
  },
  {
    path: "/employee/timetable",
    element: <Timetable />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/privacy-policy",
    element: <Privacy />,
  },
  {
    path: "/user-accounts",
    element: <Accounts />
  },
 
]);

function Application() {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <main className={mode === "light" ? "dark text-foreground bg-background transition-colors" : ""}>
      <RouterProvider router={router} />
    </main>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <Application />
      </Provider>
    </NextUIProvider>
  </React.StrictMode>
);