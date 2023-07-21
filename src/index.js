import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Team } from "./screens/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "team",
        element: <Team/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
