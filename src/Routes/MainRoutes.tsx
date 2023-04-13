import { createBrowserRouter } from "react-router-dom";
import LayOut from "../components/Static/LayOut";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import ResetPassword from "../pages/Auth/ResetPassword";
import React from "react";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <Register />,
      },
      {
        path: "/login",

        element: <Login />,
      },
      {
        path: "/reset-password",

        element: <ResetPassword />,
      },
    ],
  },
]);
