import { ILanguageTitles } from "./ILanguageTitles";

export interface IAnimeRecommendation {
  id: number;
  mailId: number;
  title: ILanguageTitles;
  status: string;
  episodes: number;
  image: string;
  cover: string;
  rating: number;
  type: string;
}
