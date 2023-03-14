import axios, { AxiosError } from "axios";
import { ReactElement, useEffect, useState } from "react";
import AnimePageItem from "./AnimePageItem";

interface ILanguageTitles {
  romaji: string;
  english: string;
  native: string;
  userPreferred?: string;
}

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

interface IRecomendation {
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

interface IEpisode {
  id: string;
  title: string;
  description: string;
  number: number;
  image: string;
  airDate: Date;
}

interface IMapping {
  mal: number;
  anidb: number;
  kitsu: number;
  anilist: number;
  thetvdb: number;
  anisearch: number;
  livechart: number;
  "notify.moe": string;
  "anime-planet": string;
}

interface IRelation {
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

interface IName {
  first: string;
  last: string | null;
  full: string;
  native?: string | null;
  userPreferred?: string;
}

interface IVoiceActor {
  id: number;
  language: string;
  name: IName;
  image: string;
}

interface ICharacter {
  id: number;
  role: string;
  name: IName;
  image: string;
  voiceActors: IVoiceActor[];
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
  recomedations: IRecomendation[];
  characters: ICharacter[];
  mappings: IMapping[];
  relations: IRelation[];
  episodes: IEpisode[];
}

function AnimePage(): ReactElement {
  const [animeInfo, setAnimeInfo] = useState<IAnimeInfo | null>(null);
  const url = "https://api.consumet.org/meta/anilist/info/127230";
  const data = async () => {
    try {
      const { data } = await axios.get<IAnimeInfo>(url, {
        params: { provider: "gogoanime" },
      });
      setAnimeInfo(data);
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.code === "ECONNABORTED" || err.code === "ERR_NETWORK") {
          console.log(err.message);
        } else {
          console.log(err);
        }
      }
    }
  };

  useEffect(() => {
    data();
  }, []);

  return <AnimePageItem animeInfo={animeInfo} />;
}

export default AnimePage;
