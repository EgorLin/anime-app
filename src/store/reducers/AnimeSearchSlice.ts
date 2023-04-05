import {
  IAnimeSearch,
  IAnimeSearchSettings,
  ISearchSettings,
  ISingleAnimeSearch,
} from "../../types/IAnimeSearch";
import { RequestStatuses } from "../../const/requestStatuses";
import { CombinedState, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  AnimeFormat,
  AnimeSeason,
  AnimeStatus,
  EntertainmentType,
  ItemGenre,
  ItemSort,
} from "../../const/animeConsts";
import AnimeService from "../../api/AnimeService";
import { IPages } from "../../types/IPages";

const initialState: IAnimeSearch = {
  settings: {
    query: "",
    type: EntertainmentType.ANIME,
    page: 1,
    perPage: 20,
    season: AnimeSeason.NONE,
    format: AnimeFormat.NONE,
    sort: [ItemSort.POPULARITY_DESC, ItemSort.SCORE_DESC],
    genres: ItemGenre.NONE,
    id: "",
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

interface Iobj {
  query?: string;
}

export const fetchAnimeSearch = createAsyncThunk<
  IPages<ISingleAnimeSearch>,
  void,
  { state: RootState }
>("animeSearch/fetch", async (_, { getState }) => {
  const settings = getState().animeSearch.settings;
  const obj: Iobj = {};
  for (const [key, value] of Object.entries(settings)) {
    if (value) {
      Object.defineProperty(obj, key, { value });
    }
  }
  const responce = await AnimeService.getSearchedAnime(settings);
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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAnimeSearch.pending, (state) => {
        state.data.status = RequestStatuses.LOADING;
      })
      .addCase(fetchAnimeSearch.fulfilled, (state, action) => {
        state.data.status = RequestStatuses.SUCCEEDED;
        state.data.data = action.payload;
      })
      .addCase(fetchAnimeSearch.rejected, (state, action) => {
        state.data.status = RequestStatuses.FAILED;
        state.data.error = action.error.message + "";
      });
  },
});

export default AnimeSearchSlice.reducer;

export const { increaseSearchPage, setSearchQuery } = AnimeSearchSlice.actions;

export const selectAnimeSearch = (store: RootState) => store.animeSearch;
export const selectAnimeSearchData = (store: RootState) =>
  store.animeSearch.data;
export const selectAnimeSearchSettings = (store: RootState) =>
  store.animeSearch.settings;
export const selectAnimeSearchSettingsQuery = (store: RootState) =>
  store.animeSearch.settings.query;
