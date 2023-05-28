import { ReactElement } from "react";
import styles from "./ControlPanel.module.scss";
import { RouteNames } from "../../router";
import AccountIcon from "../../assets/icons/AccountIcon/AccountIcon";
import LogInIcon from "../../assets/icons/LogInIcon/LogInIcon";
import SmallButton from "../UI/SmallButton/SmallButton";

interface IProps {
  isAuth: boolean;
  username: string;
  isWideScreen: boolean;
}

function ControlPanelItem({
  isWideScreen,
  isAuth,
  username,
}: IProps): ReactElement {
  let content;

  if (isAuth) {
    content = isWideScreen ? (
      <SmallButton
        text={username}
        icon={<AccountIcon />}
        to={RouteNames.PROFILE}
      />
    ) : (
      <SmallButton text={""} icon={<AccountIcon />} to={RouteNames.PROFILE} />
    );
  } else {
    content = isWideScreen ? (
      <SmallButton text="Log In" icon={<LogInIcon />} to={RouteNames.LOGIN} />
    ) : (
      <SmallButton text="" icon={<LogInIcon />} to={RouteNames.LOGIN} />
    );
  }
  return <div className={styles.container}>{content}</div>;
}

export default ControlPanelItem;
