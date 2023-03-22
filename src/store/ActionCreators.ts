import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IAnimeInfo } from "../types/IAnimeInfo";
import { IStreamInfo } from "../types/IStreamInfo";

export const fetchAnimeInfo = createAsyncThunk(
  "animeInfo/fetch",
  async (_, thunkAPI) => {
    const url = "https://api.consumet.org/meta/anilist/info/127230";
    // const url = "https://api.consumet.org/meta/anilist/info/16498";
    const response = await axios.get<IAnimeInfo>(url, {
      params: { provider: "gogoanime" },
    });
    return response.data;
  }
);

export const fetchStreamInfo = createAsyncThunk(
  "streamInfo/fetch",
  async (_, thunkAPI) => {
    console.log("i'm working");
    const url =
      "https://api.consumet.org/meta/anilist/watch/chainsaw-man-episode-1";
    // "https://api.consumet.org/meta/anilist/watch/shingeki-no-kyojin-episode-1";
    const response = await axios.get<IStreamInfo>(url);
    return response.data;
  }
);
