import { getAuth, signOut } from "firebase/auth";
import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  clearUserData,
  selectCurrentUser,
} from "../../store/reducers/CurrentUserSlice";
import ControlPanelItem from "./ControlPanelItem";

function ControlPanel(): ReactElement {
  const dispatch = useAppDispatch();
  const { isAuth, username } = useAppSelector(selectCurrentUser);

  function logOut() {
    const auth = getAuth();
    signOut(auth);
    dispatch(clearUserData());
  }
  return <ControlPanelItem isAuth={isAuth} username={username} />;
}

export default ControlPanel;
