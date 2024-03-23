import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPageLayout from "../layouts/ErrorPageLayout";
import JobDetails from "../pages/Home/JobDetails";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPageLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails />,
        loader: () => axios("jobs.json"),
      },
    ],
  },
]);

export default router;
