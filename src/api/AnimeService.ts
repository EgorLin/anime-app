import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { hostUrl, UrlPaths } from "../const/urlConsts";
import { IAnimeInfo } from "../types/IAnimeInfo";
import { IAnimeRecent } from "../types/IAnimeRecent";
import { ISingleAnimeSearch } from "../types/IAnimeSearch";
import { IAnimeTrending } from "../types/IAnimeTrending";
import { IPages } from "../types/IPages";
import { IStreamInfo } from "../types/IStreamInfo";

export default class AnimeService {
  static async getSearchedAnime(
    params: Object
  ): Promise<AxiosResponse<IPages<ISingleAnimeSearch>>> {
    const conf: AxiosRequestConfig = { params };
    return axios.get<IPages<ISingleAnimeSearch>>(
      hostUrl + UrlPaths.SEARCH,
      conf
    );
  }

  static async getAnimeInfo(
    id: string
  ): Promise<AxiosResponse<IAnimeInfo, any>> {
    return await axios.get<IAnimeInfo>(hostUrl + UrlPaths.INFO + id, {
      params: { provider: "gogoanime" },
    });
  }

  static async getAnimeRecent(
    page: number
  ): Promise<AxiosResponse<IAnimeRecent, any>> {
    return await axios.get<IAnimeRecent>(hostUrl + UrlPaths.RECENT, {
      params: { page },
    });
  }

  static async getAnimeTrending(): Promise<AxiosResponse<IAnimeTrending, any>> {
    return await axios.get<IAnimeTrending>(hostUrl + UrlPaths.TRENDING);
  }

  static async getStreamInfo(
    id: string
  ): Promise<AxiosResponse<IStreamInfo, any>> {
    return await axios.get<IStreamInfo>(hostUrl + UrlPaths.STREAM + id);
  }
}
