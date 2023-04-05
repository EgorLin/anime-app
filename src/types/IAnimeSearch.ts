import { IDataFetch } from "./IDataFetch";
import { ILanguageTitles } from "./ILanguageTitles";
import { IPages } from "./IPages";

export interface ISingleAnimeSearch {
  id: string;
  malId: number;
  title: ILanguageTitles;
  status: string;
  image: string;
  cover: string;
  popularity: number;
  totalEpisodes: number;
  currentEpisode: number;
  countryOfOrigin: string;
  description: string;
  genres: string[];
  rating: number;
  color: string;
  type: string;
  releaseDate: number;
}

export interface ISearchSettings {
  query: string;
  type: string;
  page: number;
  perPage: number;
  season: string;
  format: string;
  sort: string[];
  genres: string[] | string;
  id: string;
  year: string;
  status: string;
}

export interface IAnimeSearchSettings {
  settings: ISearchSettings;
  data: IDataFetch<IPages<ISingleAnimeSearch>>;
}

export interface IAnimeSearch extends IAnimeSearchSettings { }
