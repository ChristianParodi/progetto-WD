import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import theme from "./theme.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider value={theme}>
        <Login />
      </ThemeProvider>
    ),
  },
  {
    path: "/login",
    element: (
      <ThemeProvider value={theme}>
        <Login />
      </ThemeProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
