import axios, { AxiosResponse } from "axios";
import { hostUrl, UrlPaths } from "../const/urlConsts";
import { ISearchSettings, ISingleAnimeSearch } from "../types/IAnimeSearch";
import { IPages } from "../types/IPages";

export default class AnimeService {
  static async getSearchedAnime(
    settings: ISearchSettings
  ): Promise<AxiosResponse<IPages<ISingleAnimeSearch>>> {
    return axios.get<IPages<ISingleAnimeSearch>>(hostUrl + UrlPaths.SEARCH, {
      params: {
        // ...settings,
        query: settings.query,
        // type: settings.type,
        // id: settings.id,
        // format: settings.format,
      },
    });
  }
}
