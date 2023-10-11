import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import { paths } from "../utils/paths/paths";
import { Suspense } from "react";
import { LazyHomepage } from "./LazyPages";

const routes: RouteObject[] = [
  {
    path: paths.root,
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={paths.home} replace />,
      },
      {
        path: paths.home,
        element: (
          <Suspense>
            <LazyHomepage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
