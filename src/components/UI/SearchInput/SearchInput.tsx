import { ReactElement, useRef, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import useDebounce from "../../../hooks/useDebounce";
import { fetchAnimeSearch } from "../../../store/reducers/AnimeSearchSlice";
import SearchInputItem from "./SearchInputItem";

function SearchInput(): ReactElement {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  const dcb = useDebounce(() => {
    console.log("sended");
    dispatch(fetchAnimeSearch(query));
  }, 500);

  function updateQuery(newQuery: string): void {
    setQuery(newQuery);
    dcb();
  }

  return <SearchInputItem query={query} updateQuery={updateQuery} />;
}

export default SearchInput;
