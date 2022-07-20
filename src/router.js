import { Navigate, useRoutes } from "react-router-dom";
import Main from "./pages/Main";
import { MAIN_PAGE } from "./utils/constants";

const routes = [
  {
    path: MAIN_PAGE + '/',
    element: <Main/>
  },
  {
    path: "*",
    element: <Navigate to = "/"/>
  }
];

export const AppRoute = () => useRoutes(routes);
