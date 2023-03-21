import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IAnimeInfo } from "../types/IAnimeInfo";

export const fetchAnimeInfo = createAsyncThunk(
  "animeInfo/fetch",
  async (_, thunkAPI) => {
    const url = "https://api.consumet.org/meta/anilist/info/16498";
    const response = await axios.get<IAnimeInfo>(url, {
      params: { provider: "gogoanime" },
    });
    return response.data;
  }
);
