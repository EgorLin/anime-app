import { RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "../components/UI/Spinner/Spinner";

const Root = lazy(() => import("../pages/Root/Root"));
const Home = lazy(() => import("../pages/Home/Home"));
const Search = lazy(() => import("../pages/Search/Search"));
const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));
const AnimePage = lazy(() => import("../pages/AnimePage/AnimePage"));
const LogIn = lazy(() => import("../pages/LogIn/LogIn"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const About = lazy(() => import("../pages/About/About"));

export enum RouteNames {
  HOME = "/",
  SEARCH = "/search",
  ANITITLE = "/anititle/",
  ANITITLE_DIRTY = "/anititle/:id",
  LOGIN = "/login",
  SINGUP = "/signup",
  PROFILE = "/profile",
  ABOUT = "/about",
}

export const publicRoutes: RouteObject[] = [
  {
    path: RouteNames.HOME,
    element: (
      <Suspense fallback={<Spinner />}>
        <Root />
      </Suspense>
    ),
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
        path: RouteNames.ANITITLE_DIRTY,
        element: <AnimePage />,
      },
      {
        path: RouteNames.ABOUT,
        element: <About />,
      },
    ],
  },
  {
    path: RouteNames.LOGIN,
    element: (
      <Suspense fallback={<Spinner />}>
        <LogIn />
      </Suspense>
    ),
  },
  {
    path: RouteNames.SINGUP,
    element: (
      <Suspense fallback={<Spinner />}>
        <SignUp />
      </Suspense>
    ),
  },
];

export const privateRoutes: RouteObject[] = [
  {
    path: RouteNames.HOME,
    element: (
      <Suspense fallback={<Spinner />}>
        <Root />
      </Suspense>
    ),
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
        path: RouteNames.ANITITLE_DIRTY,
        element: <AnimePage />,
      },
      {
        path: RouteNames.PROFILE,
        element: <Profile />,
      },
      {
        path: RouteNames.ABOUT,
        element: <About />,
      },
    ],
  },
];
