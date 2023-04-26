import { ReactElement, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import useDebounce from "../../../hooks/useDebounce";
import { RouteNames } from "../../../router";
import {
  clearSearchResults,
  fetchAnimeSearch,
  selectAnimeSearchSettingsQuery,
  setSearchQuery,
} from "../../../store/reducers/AnimeSearchSlice";
import SearchInputItem from "./SearchInputItem";

function SearchInput(): ReactElement {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const query = useAppSelector(selectAnimeSearchSettingsQuery);
  const isSearchPage = location.pathname === RouteNames.SEARCH;

  const sendData = useDebounce(() => {
    dispatch(clearSearchResults());
    dispatch(fetchAnimeSearch());
  }, 500);

  function updateQuery(newQuery: string): void {
    dispatch(setSearchQuery(newQuery));
    if (isSearchPage) {
      sendData();
    }
  }

  return (
    <SearchInputItem
      query={query}
      updateQuery={updateQuery}
      isSearchPage={isSearchPage}
    />
  );
}

export default SearchInput;
