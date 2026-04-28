import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import NotFoundPage from "../pages/NotFoundPage";

// luego añadimos: ServicePage
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
        { index: true, element: <HomePage /> },
        { path: "servicios/:slug", element: <ServicePage /> },
    ],
  },
]);