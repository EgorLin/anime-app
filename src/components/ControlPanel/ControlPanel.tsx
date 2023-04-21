import { ReactElement } from "react";
import { useAppSelector } from "../../hooks/redux";
import { selectCurrentUser } from "../../store/reducers/CurrentUserSlice";
import ControlPanelItem from "./ControlPanelItem";

function ControlPanel(): ReactElement {
  const { isAuth, username } = useAppSelector(selectCurrentUser);

  return <ControlPanelItem isAuth={isAuth} username={username} />;
}

export default ControlPanel;
