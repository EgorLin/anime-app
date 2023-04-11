import { createSlice } from "@reduxjs/toolkit";
import { getAuth, signOut } from "firebase/auth";
import { IUserData } from "../../types/IUserData";
import { RootState } from "../store";

interface IAuth extends IUserData {
  isAuth: boolean;
}

const initialState: IAuth = {
  isAuth: false,
  username: "",
  email: "",
};

export const CurrentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.isAuth = true;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    clearUserData(state) {
      state.isAuth = false;
      state.username = "";
      state.email = "";
    },
  },
});

export default CurrentUserSlice.reducer;

export const { setCurrentUser, clearUserData } = CurrentUserSlice.actions;

export const selectCurrentUser = (store: RootState) => store.currentUser;
