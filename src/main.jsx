import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MainRouter } from "./Routes/MainRoutes";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={MainRouter} />
  </React.StrictMode>
);
