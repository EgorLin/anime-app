import { getAuth } from "firebase/auth";
import { ReactElement } from "react";
import { useAppSelector } from "../../hooks/redux";
import { selectCurrentUserUsername } from "../../store/reducers/CurrentUserSlice";
import ControlPanelItem from "./ControlPanelItem";

function ControlPanel(): ReactElement {
  const user = getAuth().currentUser;
  const username = useAppSelector(selectCurrentUserUsername);

  return <ControlPanelItem isAuth={!!user} username={username} />;
}

export default ControlPanel;
