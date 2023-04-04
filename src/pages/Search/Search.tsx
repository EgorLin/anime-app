import { ReactElement, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  fetchAnimeSearch,
  selectAnimeSearch,
} from "../../store/reducers/AnimeSearchSlice";
import SearchItem from "./SearchItem";

function Search(): ReactElement {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectAnimeSearch);

  useEffect(() => {
    dispatch(fetchAnimeSearch());
  }, []);

  return (
    <div>
      <SearchItem
        data={search.data}
        error={search.error}
        status={search.status}
      />
    </div>
  );
}

export default Search;
