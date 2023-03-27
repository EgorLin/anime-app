import { ICharacter } from "./IAnimeCharacter";
import { IAnimeEpisode } from "./IAnimeEpisode";
import { IMapping } from "./IAnimeMapping";
import { IAnimeRecommendation } from "./IAnimeRecommendation";
import { IAnimeRelation } from "./IAnimeRelation";
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
  recommendations: IAnimeRecommendation[];
  characters: ICharacter[];
  mappings: IMapping[];
  relations: IAnimeRelation[];
  episodes: IAnimeEpisode[];
}
