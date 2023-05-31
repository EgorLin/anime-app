import {
  IAnimeSearch,
  ISearchSettings,
  ISingleAnimeSearch,
} from "../../types/IAnimeSearch";
import { RequestStatuses } from "../../const/requestStatuses";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  AllItemSort,
  AnimeFormat,
  AnimeSeason,
  AnimeStatus,
} from "../../const/animeConsts";
import AnimeService from "../../api/AnimeService";
import { IPages } from "../../types/IPages";
import { removeEmptyKeys } from "../../helpers/removeEmptyKeys";

const initialState: IAnimeSearch = {
  settings: {
    query: "",
    page: 1,
    perPage: 20,
    season: AnimeSeason.NONE,
    format: AnimeFormat.NONE,
    sort: [AllItemSort.POPULARITY_DESC, AllItemSort.SCORE_DESC],
    genres: [],
    year: "",
    status: AnimeStatus.NONE,
  },
  data: {
    status: RequestStatuses.IDLE,
    error: "",
    data: {
      currentPage: 1,
      hasNextPage: false,
      totalPages: 1,
      totalResults: 0,
      results: [],
    },
  },
};

export const fetchAnimeSearch = createAsyncThunk<
  IPages<ISingleAnimeSearch>,
  void,
  { state: RootState }
>("animeSearch/fetch", async (_, { getState }) => {
  const settings = getState().animeSearch.settings;
  const filtredSettings = removeEmptyKeys(settings) as ISearchSettings;
  const responce = await AnimeService.getSearchedAnime(filtredSettings);

  return responce.data;
});

export const AnimeSearchSlice = createSlice({
  name: "animeSearch",
  initialState,
  reducers: {
    increaseSearchPage(state) {
      state.settings.page += 1;
    },
    setSearchQuery(state, action) {
      state.settings.query = action.payload;
    },
    setSearchYear(state, action) {
      state.settings.year = action.payload;
    },
    setSearchFormat(state, action) {
      state.settings.format = action.payload;
    },
    setSearchStatus(state, action) {
      state.settings.status = action.payload;
    },
    setSearchSeason(state, action) {
      state.settings.season = action.payload;
    },
    setSearchGenres(state, action) {
      state.settings.genres = action.payload;
    },
    setSearchSort(state, action) {
      state.settings.sort = [action.payload, AllItemSort.SCORE_DESC];
    },
    clearSearchResults(state) {
      state.data.data = initialState.data.data;
      state.settings.page = initialState.settings.page;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAnimeSearch.pending, (state) => {
        state.data.status = RequestStatuses.LOADING;
      })
      .addCase(fetchAnimeSearch.fulfilled, (state, action) => {
        state.data.status = RequestStatuses.SUCCEEDED;
        state.data.data = {
          ...action.payload,
          results: state.data.data.results.concat(action.payload.results),
        };
      })
      .addCase(fetchAnimeSearch.rejected, (state, action) => {
        state.data.status = RequestStatuses.FAILED;
        state.data.error = action.error.message + "";
      });
  },
});

export default AnimeSearchSlice.reducer;

export const {
  increaseSearchPage,
  setSearchQuery,
  setSearchYear,
  setSearchFormat,
  setSearchSeason,
  setSearchStatus,
  setSearchGenres,
  setSearchSort,
  clearSearchResults,
} = AnimeSearchSlice.actions;

export const selectAnimeSearch = (store: RootState) => store.animeSearch;
export const selectAnimeSearchData = (store: RootState) =>
  store.animeSearch.data;
export const selectAnimeSearchDataCurrentPage = (store: RootState) =>
  store.animeSearch.data.data.currentPage;
export const selectAnimeSearchDataHasNextPage = (store: RootState) =>
  store.animeSearch.data.data.hasNextPage;
export const selectAnimeSearchSettings = (store: RootState) =>
  store.animeSearch.settings;
export const selectAnimeSearchSettingsQuery = (store: RootState) =>
  store.animeSearch.settings.query;
export const selectAnimeSearchSettingsYear = (store: RootState) =>
  store.animeSearch.settings.year;
export const selectAnimeSearchSettingsSort = (store: RootState) =>
  store.animeSearch.settings.sort;
export const selectAnimeSearchSettingsFormat = (store: RootState) =>
  store.animeSearch.settings.format;
export const selectAnimeSearchSettingsGenres = (store: RootState) =>
  store.animeSearch.settings.genres;
export const selectAnimeSearchSettingsSeason = (store: RootState) =>
  store.animeSearch.settings.season;
export const selectAnimeSearchSettingsStatus = (store: RootState) =>
  store.animeSearch.settings.status;
export const selectAnimeSearchSettingsPage = (store: RootState) =>
  store.animeSearch.settings.page;
