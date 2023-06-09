import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login.jsx";
import "./index.css";

import { createBrowserRouter } from "react-router-dom";

import Homepage from "./components/homepage/Homepage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Profile from "./components/Profile/Profile.jsx";
import App from "./App.jsx";

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
  {
    path: "/profile/:id",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <App router={router} />
);
