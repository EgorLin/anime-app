import { ReactElement, useState } from "react";
import SearchInputItem from "./SearchInputItem";

function SearchInput(): ReactElement {
  const [query, setQuery] = useState("");

  function updateQuery(newQuery: string): void {
    setQuery(newQuery);
  }

  return <SearchInputItem query={query} updateQuery={updateQuery} />;
}

export default SearchInput;
