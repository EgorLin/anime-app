import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import AnimeService from "../../api/AnimeService";
import { RequestStatuses } from "../../const/requestStatuses";
import { hostUrl, UrlPaths } from "../../const/urlConsts";
import { IAnimeTrending } from "../../types/IAnimeTrending";
import { IDataFetch } from "../../types/IDataFetch";
import { RootState } from "../store";

const initialState: IDataFetch<IAnimeTrending> = {
  error: "",
  status: RequestStatuses.IDLE,
  data: {
    currentPage: 1,
    hasNextPage: false,
    results: [],
  },
};

export const fetchAnimeTrending = createAsyncThunk(
  "animeTrending/fetch",
  async () => {
    const response = await AnimeService.getAnimeTrending();
    return response.data;
  }
);

export const AnimeTrendingSlice = createSlice({
  name: "animeTrending",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAnimeTrending.pending, (state) => {
        state.status = RequestStatuses.LOADING;
      })
      .addCase(fetchAnimeTrending.fulfilled, (state, action) => {
        state.status = RequestStatuses.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(fetchAnimeTrending.rejected, (state, action) => {
        state.status = RequestStatuses.FAILED;
        state.error = action.error.message + "";
      });
  },
});

export default AnimeTrendingSlice.reducer;

export const selectAnimeTrending = (store: RootState) => store.animeTrending;
