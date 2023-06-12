import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login.jsx";
import "./index.css";

import { createBrowserRouter } from "react-router-dom";

import Homepage from "./components/homepage/Homepage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Profile from "./components/Profile/Profile.jsx";
import AllStudies from "./components/Profile/AllStudies.jsx";
import AllJobs from "./components/Profile/AllJobs.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/profile/:id/studies",
    element: <AllStudies />,
  },
  {
    path: "/profile/:id/works",
    element: <AllJobs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <App router={router} />
);
