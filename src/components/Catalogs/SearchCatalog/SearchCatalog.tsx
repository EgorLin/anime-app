import { ReactElement, useEffect } from "react";
import { RequestStatuses } from "../../../const/requestStatuses";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  fetchAnimeSearch,
  selectAnimeSearchData,
} from "../../../store/reducers/AnimeSearchSlice";
import SearchCard from "../../UI/Cards/SearchCard/SearchCard";
import EmptyCatalog from "../EmptyCatalog/EmptyCatalog";

function SearchCatalog(): ReactElement {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectAnimeSearchData);

  useEffect(() => {
    if (search.status === RequestStatuses.IDLE) {
      dispatch(fetchAnimeSearch());
    }
  }, []);

  return (
    <>
      {search.data.results ? (
        <EmptyCatalog
          title="Search"
          status={search.status}
          error={search.error}
          handleTrigger={() => { }}
          elements={search.data.results.map((element) => (
            <SearchCard
              key={element.id}
              title={element.title}
              id={element.id}
              image={element.image}
              genres={element.genres}
              lastEpisode={element.currentEpisode + ""}
            />
          ))}
        />
      ) : (
        <div>No results</div>
      )}
    </>
  );
}

export default SearchCatalog;
