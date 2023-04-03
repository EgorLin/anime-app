import { ILanguageTitles } from "./ILanguageTitles";
import { IPages } from "./IPages";

export interface ISingeAnimeSearch {
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

export interface IAnimeSearch extends IPages<IAnimeSearch> { }
