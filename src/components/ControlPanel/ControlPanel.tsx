import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { ReactElement, useEffect } from "react";
import { firestoreDB } from "../../firebase";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  clearUserData,
  selectCurrentUser,
  setCurrentUser,
} from "../../store/reducers/CurrentUserSlice";
import { IUserData } from "../../types/IUserData";
import ControlPanelItem from "./ControlPanelItem";

function ControlPanel(): ReactElement {
  const dispatch = useAppDispatch();
  const { isAuth, username, email } = useAppSelector(selectCurrentUser);

  function logOut() {
    const auth = getAuth();
    signOut(auth);
    dispatch(clearUserData());
  }
  return (
    <ControlPanelItem isAuth={isAuth} username={username} logOut={logOut} />
  );
}

export default ControlPanel;
