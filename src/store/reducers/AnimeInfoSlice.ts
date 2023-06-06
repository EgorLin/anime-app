import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AnimeService from "../../api/AnimeService";
import { AnimeFormat } from "../../const/animeConsts";
import { RequestStatuses } from "../../const/requestStatuses";
import { IAnimeInfo } from "../../types/IAnimeInfo";
import { IAnimeRelation } from "../../types/IAnimeRelation";
import { IDataFetch } from "../../types/IDataFetch";
import { RootState } from "../store";

const initialState: IDataFetch<IAnimeInfo> = {
  data: {
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
  status: RequestStatuses.IDLE,
};

export const fetchAnimeInfo = createAsyncThunk(
  "animeInfo/fetch",
  async (id: string = "1") => {
    const response = await AnimeService.getAnimeInfo(id);
    return response.data;
  }
);

export const AnimeInfoSlice = createSlice({
  name: "animeInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimeInfo.pending, (state) => {
        state.status = RequestStatuses.LOADING;
      })
      .addCase(fetchAnimeInfo.fulfilled, (state, action) => {
        state.status = RequestStatuses.SUCCEEDED;
        state.error = "";
        state.data = action.payload;
      })
      .addCase(fetchAnimeInfo.rejected, (state, action) => {
        state.status = RequestStatuses.FAILED;
        state.error = action.error.message + "";
      });
  },
});

export default AnimeInfoSlice.reducer;

export const selectAnimeInfo = (store: RootState) => store.animeInfo;

export const selectAnimeRelations = (store: RootState): IAnimeRelation[] => {
  const str = `${AnimeFormat.TV}|${AnimeFormat.MOVIE}|${AnimeFormat.OVA}`;
  const reg = new RegExp(str);
  const relations = store.animeInfo.data.relations;
  return relations.filter((relation) => relation.type?.match(reg));
};
