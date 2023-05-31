import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { hostUrl, UrlPaths } from "../const/urlConsts";
import { stringifyArrays } from "../helpers/stringifyArrays";
import { IAnimeInfo } from "../types/IAnimeInfo";
import { IAnimeRecent } from "../types/IAnimeRecent";
import { ISearchSettings, ISingleAnimeSearch } from "../types/IAnimeSearch";
import { IAnimeTrending } from "../types/IAnimeTrending";
import { IPages } from "../types/IPages";
import { IStreamInfo } from "../types/IStreamInfo";

export default class AnimeService {
  static async getSearchedAnime(
    params: ISearchSettings
  ): Promise<AxiosResponse<IPages<ISingleAnimeSearch>>> {
    const parsedParams = stringifyArrays(params);
    const conf: AxiosRequestConfig = {
      params: parsedParams,
    };
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
