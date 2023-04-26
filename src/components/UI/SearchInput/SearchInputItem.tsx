import { ReactElement } from "react";
import Input from "../Input/Input";
import SearchButton from "../SearchButton/SearchButton";
import styles from "./SearchInput.module.scss";

interface IProps {
  query: string;
  updateQuery: (newQuery: string) => void;
  isSearchPage: boolean;
}

function SearchInputItem({
  query,
  updateQuery,
  isSearchPage,
}: IProps): ReactElement {
  return (
    <div className={styles.search}>
      <Input
        type=""
        inputType=""
        className={!isSearchPage ? styles.input : ""}
        value={query}
        changeValue={updateQuery}
      />

      {!isSearchPage && <SearchButton />}
    </div>
  );
}

export default SearchInputItem;
