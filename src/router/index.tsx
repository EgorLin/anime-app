import { RouteObject } from "react-router-dom";
import { lazy } from "react";

const Root = lazy(() => import("../pages/Root/Root"));
const Home = lazy(() => import("../pages/Home/Home"));
const Search = lazy(() => import("../pages/Search/Search"));
const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));
const AnimePage = lazy(() => import("../pages/AnimePage/AnimePage"));
const LogIn = lazy(() => import("../pages/LogIn/LogIn"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp"));
const Profile = lazy(() => import("../pages/Profile/Profile"));

export enum RouteNames {
  HOME = "/",
  SEARCH = "/search",
  ANITITLE = "/anititle/:id",
  LOGIN = "/login",
  SINGUP = "/signup",
  PROFILE = "/profile",
}

export const publicRoutes: RouteObject[] = [
  {
    path: RouteNames.HOME,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: RouteNames.HOME,
        element: <Home />,
      },
      {
        path: RouteNames.SEARCH,
        element: <Search />,
      },
      {
        path: RouteNames.ANITITLE,
        element: <AnimePage />,
      },
    ],
  },
  {
    path: RouteNames.LOGIN,
    element: <LogIn />,
  },
  {
    path: RouteNames.SINGUP,
    element: <SignUp />,
  },
];

export const privateRoutes: RouteObject[] = [
  {
    path: RouteNames.HOME,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: RouteNames.HOME,
        element: <Home />,
      },
      {
        path: RouteNames.SEARCH,
        element: <Search />,
      },
      {
        path: RouteNames.ANITITLE,
        element: <AnimePage />,
      },
      {
        path: RouteNames.PROFILE,
        element: <Profile />,
      },
    ],
  },
];
