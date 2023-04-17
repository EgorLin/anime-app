import { createSlice } from "@reduxjs/toolkit";
import { IUserData } from "../../types/IUserData";
import { RootState } from "../store";

interface IAuth extends IUserData {
  isAuth: boolean;
}

const initialState: IAuth = {
  isAuth: false,
  username: "",
  email: "",
  favorites: [],
};

export const CurrentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.isAuth = true;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.favorites = action.payload.favorites;
    },
    clearUserData(state) {
      state.isAuth = false;
      state.username = "";
      state.email = "";
      state.favorites = [];
    },
  },
});

export default CurrentUserSlice.reducer;

export const { setCurrentUser, clearUserData } = CurrentUserSlice.actions;

export const selectCurrentUser = (store: RootState) => store.currentUser;
export const selectCurrentUserFavorites = (store: RootState) =>
  store.currentUser.favorites;
