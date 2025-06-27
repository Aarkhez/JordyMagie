import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ListServices from "./pages/ListServices.tsx";
import Contact from "./pages/Contact.tsx";
import Service from "./pages/Service.tsx";
import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/listServices", element: <ListServices /> },
      { path: "/contact", element: <Contact /> },
      { path: "/service/:id", element: <Service /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
