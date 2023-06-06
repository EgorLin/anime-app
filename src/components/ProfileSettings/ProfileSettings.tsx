import { getAuth, signOut } from "firebase/auth";
import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ProfileTabs } from "../../pages/Profile/Profile";
import {
  clearUserData,
  selectCurrentUser,
} from "../../store/reducers/CurrentUserSlice";
import ProfileSettingsItem from "./ProfileSettingsItem";

interface IProps {
  activeTab: string;
  changeTab: (tab: string) => void;
}

function ProfileSettings({ activeTab, changeTab }: IProps): ReactElement {
  const dispatch = useAppDispatch();
  const { username, imageUrl } = useAppSelector(selectCurrentUser);
  const tabs = Object.values(ProfileTabs).map((value) => {
    const str = String(value);
    return str;
  });

  function logOut() {
    const auth = getAuth();
    signOut(auth);
    dispatch(clearUserData());
  }

  return (
    <ProfileSettingsItem
      username={username}
      imageUrl={imageUrl}
      logOut={logOut}
      tabs={tabs}
      activeTab={activeTab}
      changeTab={changeTab}
    />
  );
}

export default ProfileSettings;
