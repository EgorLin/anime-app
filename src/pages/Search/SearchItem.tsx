import { ReactElement } from "react";
import Catalog from "../../components/Catalog/Catalog";
import SearchSettings from "../../components/SearchSettings/SearchSettings";

function SearchItem(): ReactElement {
  return (
    <div>
      <SearchSettings />
      <Catalog />
    </div>
  );
}

export default SearchItem;
