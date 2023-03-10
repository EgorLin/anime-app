import "./styles/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactElement } from "react";
import { publicRoutes } from "./router";

function App(): ReactElement {
  const router = createBrowserRouter(publicRoutes);

  return <RouterProvider router={router} />;
}

export default App;
