import { combineReducers } from "@reduxjs/toolkit";
import AnimeInfoSlice from "./AnimeInfoSlice";
import AnimeRecentSlice from "./AnimeRecentSlice";
import AnimeSearchSlice from "./AnimeSearchSlice";
import AnimeTrendingSlice from "./AnimeTrendingSlice";
import CurrentUserSlice from "./CurrentUserSlice";
import StreamInfoSlice from "./StreamInfoSlice";

export const rootReducer = combineReducers({
  animeInfo: AnimeInfoSlice,
  streamInfo: StreamInfoSlice,
  animeTrending: AnimeTrendingSlice,
  animeRecent: AnimeRecentSlice,
  animeSearch: AnimeSearchSlice,
  currentUser: CurrentUserSlice,
});
