import { ReactElement } from "react";
import { useAppSelector } from "../../hooks/redux";
import { selectCurrentUser } from "../../store/reducers/CurrentUserSlice";
import ControlPanelItem from "./ControlPanelItem";

interface IProps {
  isWideScreen: boolean;
}

function ControlPanel({ isWideScreen }: IProps): ReactElement {
  const { isAuth, username } = useAppSelector(selectCurrentUser);

  return (
    <ControlPanelItem
      isWideScreen={isWideScreen}
      isAuth={isAuth}
      username={username}
    />
  );
}

export default ControlPanel;
