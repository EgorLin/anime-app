import axios, { AxiosError } from "axios";
import { ReactElement, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchAnimeInfo } from "../../store/ActionCreators";
import { IAnimeInfo } from "../../types/IAnimeInfo";
import { IStreamInfo } from "../../types/IStreamInfo";
import AnimePageItem from "./AnimePageItem";

function AnimePage(): ReactElement {
  // const [animeInfo, setAnimeInfo] = useState<IAnimeInfo | null>(null);
  const [streamInfo, setStreamInfo] = useState<IStreamInfo | null>(null);
  const dispatch = useAppDispatch();
  const { animeInfo, error, isLoading } = useAppSelector(
    (state) => state.animeInfo
  );

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
    // const info = await getAnimeInfo();
    // setAnimeInfo(info ? info : null);
    // const streams = await getStreamInfo(info ? info?.episodes[0].id : "");
    // setStreamInfo(streams ? streams : null);
  }

  useEffect(() => {
    dispatch(fetchAnimeInfo());

    fetchData();
  }, []);

  return (
    <AnimePageItem
      isLoading={isLoading}
      error={error}
      animeInfo={animeInfo}
      streamInfo={streamInfo}
    />
  );
}

export default AnimePage;
