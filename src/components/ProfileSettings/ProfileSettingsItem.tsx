import { ReactElement } from "react";
import LogInIcon from "../../assets/icons/LogInIcon/LogInIcon";
import LogOutIcon from "../../assets/icons/LogOutIcon/LogOutIcon";
import { RouteNames } from "../../router";
import SmallButton from "../UI/SmallButton/SmallButton";
import styles from "./ProfileSettings.module.scss";

interface IProps {
  logOut: () => void;
}

function ProfileSettingsItem({ logOut }: IProps): ReactElement {
  return (
    <div className={[styles.container, "wrapperM"].join(" ")}>
      <span className={styles.username}>name</span>
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
