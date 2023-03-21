import { combineReducers } from "@reduxjs/toolkit";
import AnimeInfoSlice from "./AnimeInfoSlice";

export const rootReducer = combineReducers({ animeInfo: AnimeInfoSlice });
