import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "/library", element: <span></span> }],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
