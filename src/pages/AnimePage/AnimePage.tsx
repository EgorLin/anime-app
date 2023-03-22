import { ReactElement, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchAnimeInfo, fetchStreamInfo } from "../../store/ActionCreators";
import AnimePageItem from "./AnimePageItem";

function AnimePage(): ReactElement {
  const dispatch = useAppDispatch();
  const {
    animeInfo,
    error: animeError,
    isLoading: isLoadingAnime,
  } = useAppSelector((state) => state.animeInfo);
  const {
    streamInfo,
    error: streamError,
    isLoading: isLoadingStream,
  } = useAppSelector((state) => state.streamInfo);

  useEffect(() => {
    dispatch(fetchAnimeInfo());
    dispatch(fetchStreamInfo());
  }, []);

  return (
    <AnimePageItem
      isLoadingAnime={isLoadingAnime}
      animeError={animeError}
      isLoadingStream={isLoadingStream}
      streamError={streamError}
      animeInfo={animeInfo}
      streamInfo={streamInfo}
    />
  );
}

export default AnimePage;
