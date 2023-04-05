import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { hostUrl, UrlPaths } from "../const/urlConsts";
import { ISearchSettings, ISingleAnimeSearch } from "../types/IAnimeSearch";
import { IPages } from "../types/IPages";

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
}
