import { ReactElement } from "react";
import ControlPanel from "../ControlPanel/ControlPanel";
import styles from "./ProfileSettings.module.scss";

function ProfileSettingsItem(): ReactElement {
  return (
    <div className={[styles.container, "wrapperM"].join(" ")}>
      <span className={styles.username}>name</span>
      <ControlPanel />
    </div>
  );
}

export default ProfileSettingsItem;
