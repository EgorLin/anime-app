import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RequestStatuses } from "../../const/requestStatuses";
import { hostUrl, UrlPaths } from "../../const/urlConsts";
import { IAnimeRecent } from "../../types/IAnimeRecent";
import { IDataFetch } from "../../types/IDataFetch";
import { RootState } from "../store";

const initialState: IDataFetch<IAnimeRecent> = {
  error: "",
  status: RequestStatuses.IDLE,
  data: {
    currentPage: 1,
    hasNextPage: false,
    totalPages: 1,
    totalResults: 1,
    results: [],
  },
};

export const fetchAnimeRecent = createAsyncThunk(
  "animeRecent/fetch",
  async (page: number) => {
    const url = hostUrl + UrlPaths.RECENT;
    const response = await axios.get<IAnimeRecent>(url, {
      params: {
        page: page,
      },
    });
    return response.data;
  }
);

export const AnimeRecentSlice = createSlice({
  name: "animeRecent",
  initialState,
  reducers: {
    clearAnimeRecent(state) {
      state.status = initialState.status;
      state.error = initialState.error;
      state.data = initialState.data;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAnimeRecent.pending, (state) => {
        state.status = RequestStatuses.LOADING;
      })
      .addCase(fetchAnimeRecent.fulfilled, (state, action) => {
        state.status = RequestStatuses.SUCCEEDED;
        state.data = {
          ...action.payload,
          results: state.data.results.concat(action.payload.results),
        };
      })
      .addCase(fetchAnimeRecent.rejected, (state, action) => {
        state.status = RequestStatuses.FAILED;
        state.error = action.error.message + "";
      });
  },
});

export default AnimeRecentSlice.reducer;
export const { clearAnimeRecent } = AnimeRecentSlice.actions;

export const selectAnimeRecent = (store: RootState) => store.animeRecent;
