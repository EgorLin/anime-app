import "./styles/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactElement, useEffect, useState } from "react";
import { privateRoutes, publicRoutes } from "./router";
import { useAppDispatch } from "./hooks/redux";
import { setCurrentUser } from "./store/reducers/CurrentUserSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Spinner from "./components/UI/Spinner/Spinner";
import FirebaseService from "./api/FirebaseService";

function App(): ReactElement {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const router = createBrowserRouter(
    auth.currentUser ? privateRoutes : publicRoutes
  );

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
  }, []);

  return <>{isLoading ? <Spinner /> : <RouterProvider router={router} />}</>;
}

export default App;
