import { ILanguageTitles } from "./ILanguageTitles";

export interface IAnimeRelation {
  id: number;
  relationType: string;
  malId: number;
  title: ILanguageTitles;
  status: string;
  episodes: number;
  image: string;
  color: string;
  type: string;
  cover: string;
  rating: number;
}
