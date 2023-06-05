import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import theme from "./theme.js";

import { AuthProvider } from "./context/AuthProvider";
import Homepage from "./components/homepage/Homepage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Loader from "./utils/Loader.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider value={theme}>
        <Loader>
          <RouterProvider router={router} />
        </Loader>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
