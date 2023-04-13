import { createBrowserRouter } from "react-router-dom";
import LayOut from "../components/Static/LayOut";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import ResetPassword from "../pages/Auth/ResetPassword";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/register",
        index: true,
        element: <Register />,
      },
      {
        path: "/login",
        index: true,
        element: <Login />,
      },
      {
        path: "/reset-password",
        index: true,
        element: <ResetPassword />,
      },
    ],
  },
]);
