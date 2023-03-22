import "./styles/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactElement } from "react";
import { privateRoutes, publicRoutes } from "./router";

function App(): ReactElement {
  const auth = false;
  const router = createBrowserRouter(auth ? privateRoutes : publicRoutes);

  return <RouterProvider router={router} />;
}

export default App;
