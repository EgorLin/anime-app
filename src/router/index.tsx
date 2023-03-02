import { RouteObject } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const Root = lazy(() => import('../pages/Root/Root'))
const Home = lazy(() => import('../pages/Home/Home'))
const Search = lazy(() => import('../pages/Search/Search'))
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPage'))

export enum RouteNames {
  HOME = '/',
  SEARCH = '/search',
}

export const publicRoutes: RouteObject[] = [
  {
    path: RouteNames.HOME,
    element: (
      <Suspense>
        <Root />
      </Suspense>
    ),
    errorElement: (
      <Suspense>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: RouteNames.HOME,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: RouteNames.SEARCH,
        element: (
          <Suspense>
            <Search />
          </Suspense>
        ),
      },
    ],
  },
]
