import { ReactElement, useState } from "react";
import ProfileItem from "./ProfileItem";

export enum ProfileTabs {
  FAVORITES = "favorites",
  SETTINGS = "settings",
}

function Profile(): ReactElement {
  const [tab, setTab] = useState(String(ProfileTabs.FAVORITES));

  function changeTab(newTab: string) {
    setTab(newTab);
  }

  return <ProfileItem activeTab={tab} changeTab={changeTab} />;
}

export default Profile;
