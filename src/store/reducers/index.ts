import { combineReducers } from "@reduxjs/toolkit";
import AnimeInfoSlice from "./AnimeInfoSlice";
import StreamInfoSlice from "./StreamInfoSlice";

export const rootReducer = combineReducers({
  animeInfo: AnimeInfoSlice,
  streamInfo: StreamInfoSlice,
});
