import { ReactElement } from "react";
import FavoriteCatalog from "../../components/Catalogs/FavoriteCatalog/FavoriteCatalog";
import ProfileSettings from "../../components/ProfileSettings/ProfileSettings";
import styles from "./Profile.module.scss";

function ProfileItem(): ReactElement {
  return (
    <div>
      <h1 className={[styles.title, "wrapperM"].join(" ")}>Profile</h1>
      <ProfileSettings />
      <FavoriteCatalog />
    </div>
  );
}

export default ProfileItem;
