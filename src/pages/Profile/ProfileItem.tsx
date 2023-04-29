import { ReactElement } from "react";
import FavoriteCatalog from "../../components/Catalogs/FavoriteCatalog/FavoriteCatalog";
import ProfileSettings from "../../components/ProfileSettings/ProfileSettings";
import UserSettings from "../../components/UserSettings/UserSettings";
import { ProfileTabs } from "./Profile";
import styles from "./Profile.module.scss";

interface IProps {
  activeTab: string;
  changeTab: (tab: string) => void;
}

function ProfileItem({ activeTab, changeTab }: IProps): ReactElement {
  let catalog;
  switch (activeTab) {
    case ProfileTabs.FAVORITES:
      catalog = <FavoriteCatalog />;
      break;
    case ProfileTabs.SETTINGS:
      catalog = <UserSettings />;
      break;
  }
  return (
    <div>
      <h1 className={[styles.title, "wrapperM"].join(" ")}>Profile</h1>
      <ProfileSettings activeTab={activeTab} changeTab={changeTab} />
      {catalog}
    </div>
  );
}

export default ProfileItem;
