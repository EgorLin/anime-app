import { ComponentType, ReactNode } from 'react'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Search from '../pages/Search/Search'
import Home from '../pages/Home/Home'
import { RouteObject } from 'react-router-dom'
import Root from '../pages/Root/Root'

export enum RouteNames {
  HOME = '/',
  SEARCH = '/search',
}

export const publicRoutes: RouteObject[] = [
  {
    path: RouteNames.HOME,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: RouteNames.HOME, element: <Home /> },
      {
        path: RouteNames.SEARCH,
        element: <Search />,
      },
    ],
  },
]
