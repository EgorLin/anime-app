import { ReactElement, useEffect, useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);

  function changePage() {
    if (recent.data.hasNextPage) {
      setCurrentPage((CP) => CP + 1);
    }
  }

  useEffect(() => {
    dispatch(fetchAnimeRecent(currentPage));
  }, [currentPage]);

  return (
    <EmptyCatalog
      title="Recent releases"
      status={recent.status}
      error={recent.error}
      handleTrigger={changePage}
      elements={recent.data.results.map((anime) => (
        <RecentCard
          key={anime.id + anime.episodeNumber}
          id={anime.id}
          title={anime.title}
          image={anime.image}
          genres={anime.genres}
          lastEpisode={anime.episodeNumber}
        />
      ))}
    />
  );
}

export default RecentReleasesCatalog;
