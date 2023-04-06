import { ReactElement, useCallback, useEffect, useState } from "react";
import { RequestStatuses } from "../../../const/requestStatuses";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  fetchAnimeRecent,
  selectAnimeRecent,
} from "../../../store/reducers/AnimeRecentSlice";
import RecentCard from "../../UI/Cards/RecentCard/RecentCard";
import EmptyCatalog from "../EmptyCatalog/EmptyCatalog";

function RecentReleasesCatalog(): ReactElement {
  const dispatch = useAppDispatch();
  const recent = useAppSelector(selectAnimeRecent);

  const changePage = useCallback(() => {
    if (recent.data.hasNextPage) {
      dispatch(fetchAnimeRecent(+recent.data.currentPage + 1));
    }
  }, [recent.data.hasNextPage, recent.data.currentPage]);

  useEffect(() => {
    if (recent.status === RequestStatuses.IDLE) {
      dispatch(fetchAnimeRecent(recent.data.currentPage));
    }
  }, []);

  return (
    <EmptyCatalog
      title="Recent releases"
      status={recent.status}
      error={recent.error}
      handleTrigger={changePage}
      elements={recent.data.results.map(
        (anime) =>
          anime && (
            <RecentCard
              key={anime.id + anime.episodeNumber}
              id={anime.id}
              title={anime.title}
              image={anime.image}
              genres={anime.genres}
              lastEpisode={anime.episodeNumber}
            />
          )
      )}
    />
  );
}

export default RecentReleasesCatalog;
