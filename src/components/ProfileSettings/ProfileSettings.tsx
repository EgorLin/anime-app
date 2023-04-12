import { getAuth, signOut } from "firebase/auth";
import { ReactElement } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { clearUserData } from "../../store/reducers/CurrentUserSlice";
import ProfileSettingsItem from "./ProfileSettingsItem";

function ProfileSettings(): ReactElement {
  const dispatch = useAppDispatch();

  function logOut() {
    const auth = getAuth();
    signOut(auth);
    dispatch(clearUserData());
  }

  return <ProfileSettingsItem logOut={logOut} />;
}

export default ProfileSettings;
