import { IDataFetch } from "../../types/IDataFetch";
import { IAnimeSearch } from "../../types/IAnimeSearch";
import { RequestStatuses } from "../../const/requestStatuses";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { hostUrl, UrlPaths } from "../../const/urlConsts";
import axios from "axios";
import { RootState } from "../store";

const initialState: IDataFetch<IAnimeSearch> = {
  status: RequestStatuses.IDLE,
  error: "",
  data: {
    currentPage: 1,
    hasNextPage: false,
    totalPages: 1,
    totalResults: 0,
    results: [],
  },
};

export const fetchAnimeSearch = createAsyncThunk(
  "animeSearch/fetch",
  async (query?: string) => {
    const url = hostUrl + UrlPaths.SEARCH;
    const responce = await axios.get<IAnimeSearch>(url, {
      params: {
        query,
      },
    });
    return responce.data;
  }
);

export const AnimeSearchSlice = createSlice({
  name: "animeSearch",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAnimeSearch.pending, (state) => {
        state.status = RequestStatuses.LOADING;
      })
      .addCase(fetchAnimeSearch.fulfilled, (state, action) => {
        state.status = RequestStatuses.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(fetchAnimeSearch.rejected, (state, action) => {
        state.status = RequestStatuses.FAILED;
        state.error = action.error.message + "";
      });
  },
});

export default AnimeSearchSlice.reducer;

export const selectAnimeSearch = (store: RootState) => store.animeSearch;
