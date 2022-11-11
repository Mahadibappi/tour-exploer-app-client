import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Service/Services";
import Details from "../Pages/Service/Details";
import ServiceDetails from "../Pages/Service/ServiceDetail";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Myreview from "../Pages/Myreview/Myreview";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "home", element: <Home></Home> },

      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("https://travelers-server.vercel.app/services"),
      },

      {
        path: "/service/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`https://travelers-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/detail/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://travelers-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <Myreview></Myreview>
          </PrivateRoute>

        ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
