import { ReactElement } from "react";
import ButtonIcon from "../UI/ButtonIcon/ButtonIcon";
import styles from "./ControlPanel.module.scss";
import { RouteNames } from "../../router";
import { Link } from "react-router-dom";
import AccountIcon from "../../assets/icons/AccountIcon/AccountIcon";
import LogInIcon from "../../assets/icons/LogInIcon/LogInIcon";

interface IProps {
  isAuth: boolean;
  username: string;
  logOut: () => void;
}

function ControlPanelItem({ isAuth, username, logOut }: IProps): ReactElement {
  let content;

  if (isAuth) {
    content = (
      <span className={styles.text} onClick={logOut}>
        {username}

        <ButtonIcon className={styles.button}>
          <AccountIcon />
        </ButtonIcon>
      </span>
    );
  } else {
    content = (
      <Link to={RouteNames.LOGIN}>
        <span className={styles.text}>Sign in</span>
        <ButtonIcon className={styles.button}>
          <LogInIcon />
        </ButtonIcon>
      </Link>
    );
  }
  return <div className={styles.container}>{content}</div>;
}

export default ControlPanelItem;
