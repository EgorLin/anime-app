import { getAuth, signOut } from "firebase/auth";
import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  clearUserData,
  selectCurrentUser,
} from "../../store/reducers/CurrentUserSlice";
import ProfileSettingsItem from "./ProfileSettingsItem";

function ProfileSettings(): ReactElement {
  const dispatch = useAppDispatch();
  const { username } = useAppSelector(selectCurrentUser);

  function logOut() {
    const auth = getAuth();
    signOut(auth);
    dispatch(clearUserData());
  }

  return <ProfileSettingsItem username={username} logOut={logOut} />;
}

export default ProfileSettings;
