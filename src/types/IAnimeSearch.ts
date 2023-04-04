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

enum EntertainmentType {
  ANIME = "ANIME",
  MANGA = "MANGA",
}

enum AnimeSeason {
  WINTER = "WINTER",
  SPRING = "SPRING",
  SUMMER = "SUMMER",
  FALL = "FALL",
}

enum AnimeFormat {
  TV = "TV",
  TV_SHORT = "TV_SHORT",
  OVA = "OVA",
  ONA = "ONA",
  MOVIE = "MOVIE",
  SPECIAL = "SPECIAL",
  MUSIC = "MUSIC",
}

export enum ItemSort {
  POPULARITY_DESC = "POPULARITY_DESC",
  POPULARITY = "POPULARITY",
  TRENDING_DESC = "TRENDING_DESC",
  TRENDING = "TRENDING",
  UPDATED_AT_DESC = "UPDATED_AT_DESC",
  UPDATED_AT = "UPDATED_AT",
  START_DATE_DESC = "START_DATE_DESC",
  START_DATE = "START_DATE",
  END_DATE_DESC = "END_DATE_DESC",
  END_DATE = "END_DATE",
  FAVOURITES_DESC = "FAVOURITES_DESC",
  FAVOURITES = "FAVOURITES",
  SCORE_DESC = "SCORE_DESC",
  SCORE = "SCORE",
  TITLE_ROMAJI_DESC = "TITLE_ROMAJI_DESC",
  TITLE_ROMAJI = "TITLE_ROMAJI",
  TITLE_ENGLISH_DESC = "TITLE_ENGLISH_DESC",
  TITLE_ENGLISH = "TITLE_ENGLISH",
  TITLE_NATIVE_DESC = "TITLE_NATIVE_DESC",
  TITLE_NATIVE = "TITLE_NATIVE",
  EPISODES_DESC = "EPISODES_DESC",
  EPISODES = "EPISODES",
  ID = "ID",
  ID_DESC = "ID_DESC",
}

export enum ItemGenre {
  ACTION = "Action",
  ADVENTURE = "Adventure",
  CARS = "Cars",
  COMEDY = "Comedy",
  DRAMA = "Drama",
  FANTASY = "Fantasy",
  HORROR = "Horror",
  MAHOU_SHOUJO = "Mahou Shoujo",
  MECHA = "Mecha",
  MUSIC = "Music",
  MYSTERY = "Mystery",
  PHYCHOLOGICAL = "Psychological",
  ROMANCE = "Romance",
  SCI_FI = "Sci-Fi",
  SLICE_OF_LIFE = "Slice of Life",
  SPORTS = "Sports",
  SUPERNATURAL = "Supernatural",
  THRILLER = "Thriller",
}

export enum AnimeStatus {
  RELEASING = "RELEASING",
  NOT_YET_RELEASED = "NOT_YET_RELEASED",
  FINISHED = "FINISHED",
  CANCELLED = "CANCELLED",
  HIATUS = "HIATUS",
}

export interface IAnimeSearchSettings {
  query: string;
  type: string;
  page: number;
  perPage: number;
  season: string;
  format: string;
  sort: string[];
  genres: string[];
  id: string;
  year: string;
  status: string;
}

export interface IAnimeSearch extends IPages<ISingeAnimeSearch> { }
