import "./styles/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactElement, useEffect, useState } from "react";
import { privateRoutes, publicRoutes } from "./router";
import { useAppDispatch } from "./hooks/redux";
import {
  selectCurrentUser,
  setCurrentUser,
} from "./store/reducers/CurrentUserSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Spinner from "./components/UI/Spinner/Spinner";
import FirebaseService from "./api/FirebaseService";
import { useSelector } from "react-redux";

function App(): ReactElement {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { isAuth } = useSelector(selectCurrentUser);

  const router = createBrowserRouter(isAuth ? privateRoutes : publicRoutes);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoading(true);
        const data = await FirebaseService.getUserData(user.uid);
        if (data) {
          dispatch(setCurrentUser(data));
        }
      }
      setIsLoading(false);
    });
  }, [auth]);

  return <>{isLoading ? <Spinner /> : <RouterProvider router={router} />}</>;
}

export default App;
