import { ReactElement } from "react";
import SearchCatalog from "../../components/Catalogs/SearchCatalog/SearchCatalog";
import SearchSettings from "../../components/SearchSettings/SearchSettings";

function SearchItem(): ReactElement {
  return (
    <div>
      <SearchSettings />
      <SearchCatalog />
    </div>
  );
}

export default SearchItem;
