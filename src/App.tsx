import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Root from './pages/Root/Root'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />
    },
  ])

  return <RouterProvider router={router} />
}

export default App
