import { ReactElement } from "react";
import LogOutIcon from "../../assets/icons/LogOutIcon/LogOutIcon";
import { RouteNames } from "../../router";
import SmallButton from "../UI/SmallButton/SmallButton";
import styles from "./ProfileSettings.module.scss";

interface IProps {
  username: string;
  imageUrl: string;
  tabs: string[];
  activeTab: string;
  changeTab: (value: string) => void;
  logOut: () => void;
}

function ProfileSettingsItem({
  username,
  imageUrl,
  tabs,
  activeTab,
  changeTab,
  logOut,
}: IProps): ReactElement {
  const navs = tabs.map((tab) => {
    return (
      <span
        key={tab}
        className={[styles.tab, tab === activeTab ? styles.activeTab : ""].join(
          " "
        )}
        onClick={() => changeTab(tab)}
      >
        {tab}
      </span>
    );
  });
  return (
    <div className={[styles.container, "wrapperM"].join(" ")}>
      <img src={imageUrl} className={styles.profileImage} />
      <span className={styles.username}>{username}</span>
      <div>{navs}</div>
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
