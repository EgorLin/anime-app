import { ReactElement } from "react";
import ButtonIcon from "../UI/ButtonIcon/ButtonIcon";
import styles from "./ControlPanel.module.scss";
import { RouteNames } from "../../router";
import { Link } from "react-router-dom";
import AccountIcon from "../../assets/icons/AccountIcon/AccountIcon";
import LogInIcon from "../../assets/icons/LogInIcon/LogInIcon";
import SmallButton from "../UI/SmallButton/SmallButton";

interface IProps {
  isAuth: boolean;
  username: string;
}

function ControlPanelItem({ isAuth, username }: IProps): ReactElement {
  let content;

  if (isAuth) {
    content = (
      <SmallButton
        text={username}
        icon={<AccountIcon />}
        to={RouteNames.PROFILE}
      />
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
