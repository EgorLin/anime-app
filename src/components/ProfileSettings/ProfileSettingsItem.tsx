import { ReactElement } from "react";
import LogOutIcon from "../../assets/icons/LogOutIcon/LogOutIcon";
import { RouteNames } from "../../router";
import SmallButton from "../UI/SmallButton/SmallButton";
import styles from "./ProfileSettings.module.scss";

interface IProps {
  username: string;
  logOut: () => void;
}

function ProfileSettingsItem({ username, logOut }: IProps): ReactElement {
  return (
    <div className={[styles.container, "wrapperM"].join(" ")}>
      <span className={styles.username}>{username}</span>
      <SmallButton
        text="Log out"
        to={RouteNames.HOME}
        onClick={logOut}
        icon={<LogOutIcon />}
      />
    </div>
  );
}

export default ProfileSettingsItem;
