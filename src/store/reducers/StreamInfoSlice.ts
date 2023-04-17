import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import AnimeService from "../../api/AnimeService";
import { RequestStatuses } from "../../const/requestStatuses";
import { hostUrl, UrlPaths } from "../../const/urlConsts";
import { IDataFetch } from "../../types/IDataFetch";
import { IStreamInfo } from "../../types/IStreamInfo";

const initialState: IDataFetch<IStreamInfo> = {
  data: {
    download: "",
    headers: "",
    sources: [],
  },
  error: "",
  status: RequestStatuses.IDLE,
};

export const fetchStreamInfo = createAsyncThunk(
  "streamInfo/fetch",
  async (animeId: string) => {
    const response = await AnimeService.getStreamInfo(animeId);
    return response.data;
  }
);

export const StreamInfoSlice = createSlice({
  name: "streamInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStreamInfo.pending, (state) => {
        state.status = RequestStatuses.LOADING;
      })
      .addCase(fetchStreamInfo.fulfilled, (state, action) => {
        state.status = RequestStatuses.SUCCEEDED;
        state.error = "";
        state.data = action.payload;
      })
      .addCase(fetchStreamInfo.rejected, (state, action) => {
        state.status = RequestStatuses.FAILED;
        state.error = action.error.message + "";
      });
  },
});

export default StreamInfoSlice.reducer;
