import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import RegPage from "../pages/RegPage";
import AllPlacePage from "../pages/AllPlacePage";
import CoworkingDetailPage from "../pages/CoworkingDetailPage";


import {
    HOME_PAGE_ROUTE,
    AUTH_PAGE_ROUTE,
    REG_PAGE_ROUTE,
    ALL_PLACES_PAGE_ROUTE,
    COWORKING_DETAIL_PAGE_ROUTE
  } from "./constsRoutes";

  export const routes = [
    {
      path: HOME_PAGE_ROUTE,
      element: HomePage,
    },
    {
      path: AUTH_PAGE_ROUTE,
      element: AuthPage,
    },
    {
      path: REG_PAGE_ROUTE,
      element: RegPage,
    },
    {
      path: ALL_PLACES_PAGE_ROUTE,
      element: AllPlacePage,
    },
    {
      path: COWORKING_DETAIL_PAGE_ROUTE,
      element: CoworkingDetailPage,
    },
  ]