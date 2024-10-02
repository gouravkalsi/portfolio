import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Works from './Pages/Works/Works'

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/works",
      element: <Works />,
    },
  ]);
  return  <RouterProvider router={router} />;
}
