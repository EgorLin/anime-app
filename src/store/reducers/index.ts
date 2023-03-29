import { combineReducers } from "@reduxjs/toolkit";
import AnimeInfoSlice from "./AnimeInfoSlice";
import AnimeRecentSlice from "./AnimeRecentSlice";
import AnimeTrendingSlice from "./AnimeTrendingSlice";
import StreamInfoSlice from "./StreamInfoSlice";

export const rootReducer = combineReducers({
  animeInfo: AnimeInfoSlice,
  streamInfo: StreamInfoSlice,
  animeTrending: AnimeTrendingSlice,
  animeRecent: AnimeRecentSlice,
});
