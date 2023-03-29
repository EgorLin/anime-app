import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RequestStatuses } from "../../const/requestStatuses";
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
  async () => {
    const url = "https://api.consumet.org/meta/anilist/recent-episodes";
    const response = await axios.get<IAnimeRecent>(url);
    return response.data;
  }
);

export const AnimeRecentSlice = createSlice({
  name: "animeRecent",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAnimeRecent.pending, (state) => {
        state.status = RequestStatuses.LOADING;
      })
      .addCase(fetchAnimeRecent.fulfilled, (state, action) => {
        state.status = RequestStatuses.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(fetchAnimeRecent.rejected, (state, action) => {
        state.status = RequestStatuses.FAILED;
        state.error = action.error.message + "";
      });
  },
});

export default AnimeRecentSlice.reducer;

export const selectAnimeTrending = (store: RootState) => store.animeRecent;
