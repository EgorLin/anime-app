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

interface IRecommendation {
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
  recommendations: IRecommendation[];
  characters: ICharacter[];
  mappings: IMapping[];
  relations: IRelation[];
  episodes: IEpisode[];
}

interface IStreamSource {
  url: string;
  isM3U8: boolean;
  quality: string;
}

export interface IStreamInfo {
  download: string;
  headers: Object;
  sources: IStreamSource[];
}

function AnimePage(): ReactElement {
  const [animeInfo, setAnimeInfo] = useState<IAnimeInfo | null>(null);
  const [streamInfo, setStreamInfo] = useState<IStreamInfo | null>(null);

  async function getAnimeInfo() {
    // const url = "https://api.consumet.org/meta/anilist/info/127230";
    const url = "https://api.consumet.org/meta/anilist/info/16498";
    try {
      const { data } = await axios.get<IAnimeInfo>(url, {
        params: { provider: "gogoanime" },
      });
      return data;
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.code === "ECONNABORTED" || err.code === "ERR_NETWORK") {
          console.log(err.message);
        } else {
          console.log(err);
        }
      }
    }
  }

  async function getStreamInfo(id: string) {
    const url = "https://api.consumet.org/meta/anilist/watch/" + id;
    try {
      const { data } = await axios.get<IStreamInfo>(url);
      return data;
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.code === "ECONNABORTED" || err.code === "ERR_NETWORK") {
          console.log(err.message);
        } else {
          console.log(err);
        }
      }
    }
  }

  async function fetchData() {
    const info = await getAnimeInfo();
    setAnimeInfo(info ? info : null);
    const streams = await getStreamInfo(info ? info?.episodes[0].id : "");
    setStreamInfo(streams ? streams : null);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <AnimePageItem animeInfo={animeInfo} streamInfo={streamInfo} />;
}

export default AnimePage;
