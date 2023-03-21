import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAnimeInfo } from "../../types/IAnimeInfo";
import { fetchAnimeInfo } from "../ActionCreators";

interface IAnimeInfoFetch {
  animeInfo: IAnimeInfo;
  error: string;
  isLoading: boolean;
}

const initialState: IAnimeInfoFetch = {
  animeInfo: {
    id: "",
    title: { romaji: "", english: "", native: "" },
    malId: 0,
    synonyms: [],
    isLicensed: false,
    isAdult: false,
    countryOfOrigin: "",
    trailer: {
      id: "",
      site: "",
      thumbnail: "",
    },
    image: "",
    popularity: 0,
    color: "",
    cover: "",
    description: "",
    status: "",
    releaseDate: "",
    startDate: {
      year: 0,
      month: 0,
      day: 0,
    },
    endDate: {
      year: 0,
      month: 0,
      day: 0,
    },
    totalEpisodes: 0,
    currentEpisode: 0,
    rating: 0,
    duration: 0,
    genres: [],
    season: "",
    studios: [],
    subOrDub: "",
    type: "",
    recommendations: [],
    characters: [],
    mappings: [],
    relations: [],
    episodes: [],
  },
  error: "",
  isLoading: false,
};

export const AnimeInfoSlice = createSlice({
  name: "animeInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAnimeInfo.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchAnimeInfo.fulfilled.type]: (
      state,
      action: PayloadAction<IAnimeInfo>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.animeInfo = action.payload;
    },

    [fetchAnimeInfo.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default AnimeInfoSlice.reducer;
