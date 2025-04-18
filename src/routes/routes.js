import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import RegPage from "../pages/RegPage";
import AllPlacePage from "../pages/AllPlacePage";
import CoworkingDetailPage from "../pages/CoworkingDetailPage";
import ProfilePage from "../pages/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";

import {
    HOME_PAGE_ROUTE,
    AUTH_PAGE_ROUTE,
    REG_PAGE_ROUTE,
    ALL_PLACES_PAGE_ROUTE,
    COWORKING_DETAIL_PAGE_ROUTE,
    PROFILE_PAGE_ROUTE,
    NOT_FOUND_PAGE_ROUTE,
} from "./constsRoutes";

export const routes = [
    {
      path: HOME_PAGE_ROUTE,
      element: HomePage,
      protected: false,
    },
    {
      path: AUTH_PAGE_ROUTE,
      element: AuthPage,
      protected: false,
    },
    {
      path: REG_PAGE_ROUTE,
      element: RegPage,
      protected: false,
    },
    {
      path: ALL_PLACES_PAGE_ROUTE,
      element: AllPlacePage,
      protected: false,
    },
    {
      path: COWORKING_DETAIL_PAGE_ROUTE,
      element: CoworkingDetailPage,
      protected: false,
    },
    {
      path: PROFILE_PAGE_ROUTE,
      element: ProfilePage,
      protected: true,
    },
    {
      path: NOT_FOUND_PAGE_ROUTE,
      element: NotFoundPage,
      protected: false,
    },
    {
      path: "*",
      element: NotFoundPage,
      protected: false,
    },
];
