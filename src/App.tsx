import './styles/app.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Root from './pages/Root/Root'
import { ReactElement } from 'react'
import Search from './pages/Search/Search'
import Home from './pages/Home/Home'

function App(): ReactElement {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: 'search',
          element: <Search />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
