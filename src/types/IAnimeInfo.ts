import { ICharacter } from "./IAnimeCharacter";
import { IEpisode } from "./IAnimeEpisode";
import { IMapping } from "./IAnimeMapping";
import { IRecommendation } from "./IAnimeRecommendation";
import { IRelation } from "./IAnimeRelation";
import { ILanguageTitles } from "./ILanguageTitles";

interface ITrailerInfo {
  id: string;
  site: string;
  thumbnail: string;
}

interface IAnimeDate {
  year: number;
  month: number;
  day: number;
}
export interface IAnimeInfo {
  id: string;
  title: ILanguageTitles;
  malId: number;
  synonyms: string[];
  isLicensed: boolean;
  isAdult: boolean;
  countryOfOrigin: string;
  trailer: ITrailerInfo;
  image: string;
  popularity: number;
  color: string;
  cover: string;
  description: string;
  status: string;
  releaseDate: string;
  startDate: IAnimeDate;
  endDate: IAnimeDate;
  totalEpisodes: number;
  currentEpisode: number;
  rating: number;
  duration: number;
  genres: string[];
  season: string;
  studios: string[];
  subOrDub: string;
  type: string;
  recommendations: IRecommendation[];
  characters: ICharacter[];
  mappings: IMapping[];
  relations: IRelation[];
  episodes: IEpisode[];
}
