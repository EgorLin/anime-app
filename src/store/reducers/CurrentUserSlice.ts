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
  imageUrl: "",
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
      state.imageUrl = action.payload.imageUrl;
    },
    setUserFavorites(state, action) {
      state.favorites = action.payload;
    },
    clearUserData(state) {
      state.isAuth = false;
      state.username = "";
      state.email = "";
      state.favorites = [];
      state.imageUrl = "";
    },
  },
});

export default CurrentUserSlice.reducer;

export const { setCurrentUser, setUserFavorites, clearUserData } =
  CurrentUserSlice.actions;

export const selectCurrentUser = (store: RootState) => store.currentUser;
export const selectCurrentUserFavorites = (store: RootState) =>
  store.currentUser.favorites;
export const selectCurrentUserUsername = (store: RootState) =>
  store.currentUser.username;
export const selectCurrentUserImageUrl = (store: RootState) =>
  store.currentUser.imageUrl;
