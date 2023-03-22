import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStreamInfo } from "../../types/IStreamInfo";
import { fetchStreamInfo } from "../ActionCreators";

interface IStreamInfoFetch {
  streamInfo: IStreamInfo;
  error: string;
  isLoading: boolean;
}

const initialState: IStreamInfoFetch = {
  streamInfo: {
    download: "",
    headers: "",
    sources: [],
  },
  error: "",
  isLoading: true,
};

export const StreamInfoSlice = createSlice({
  name: "streamInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStreamInfo.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchStreamInfo.fulfilled.type]: (
      state,
      action: PayloadAction<IStreamInfo>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.streamInfo = action.payload;
    },

    [fetchStreamInfo.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default StreamInfoSlice.reducer;
