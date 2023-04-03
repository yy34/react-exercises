import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Home } from "./pages/Home/Home";
import { RepoInfos } from "./pages/RepoInfos/RepoInfos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/repositories/:username",
        element: <RepoInfos />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
