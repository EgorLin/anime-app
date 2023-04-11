import "./styles/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactElement, useEffect, useState } from "react";
import { privateRoutes, publicRoutes } from "./router";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import {
  selectCurrentUser,
  setCurrentUser,
} from "./store/reducers/CurrentUserSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firestoreDB } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { IUserData } from "./types/IUserData";
import Spinner from "./components/UI/Spinner/Spinner";

function App(): ReactElement {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(selectCurrentUser);
  const [isLoading, setIsLoading] = useState(true);

  const router = createBrowserRouter(isAuth ? privateRoutes : publicRoutes);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoading(true);
        const docRef = doc(firestoreDB, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          dispatch(setCurrentUser(docSnap.data() as IUserData));
        }
      }
      setIsLoading(false);
    });
  }, []);

  return <>{isLoading ? <Spinner /> : <RouterProvider router={router} />}</>;
}

export default App;
