import { ILanguageTitles } from "./ILanguageTitles";

export interface IRecommendation {
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
