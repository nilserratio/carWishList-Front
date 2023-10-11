import { lazy } from "react";

export const LazyHomepage = lazy(() => import("../pages/Homepage/Homepage"));

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
