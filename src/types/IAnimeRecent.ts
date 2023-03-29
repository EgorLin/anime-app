import { IDataFetch } from "./IDataFetch";
import { ILanguageTitles } from "./ILanguageTitles";

export interface ISingleAnimeRecent {
  id: string;
  malId: number;
  title: ILanguageTitles;
  image: string;
  rating: number;
  color: string;
  episodeId: string;
  episodeTitle: string;
  episodeNumber: string;
  genres: string;
  type: string;
}

export interface IAnimeRecent extends IDataFetch<ISingleAnimeRecent> { }
