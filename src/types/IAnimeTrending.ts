import { ILanguageTitles } from "./ILanguageTitles";
import { IPages } from "./IPages";
import { ITrailerInfo } from "./ITrailerInfo";

export interface ISingleAnimeTrending {
  id: string;
  malId: number;
  title: ILanguageTitles;
  image: string;
  trailer: ITrailerInfo;
  description: string;
  status: string;
  cover: string;
  rating: string;
  genres: string[];
  totalEpisodes: number;
  duration: number;
  type: string;
}

export interface IAnimeTrending extends IPages<ISingleAnimeTrending> { }
