import { ReactElement } from "react";
import Input from "../Input/Input";
import SearchButton from "../SearchButton/SearchButton";
import styles from "./SearchInput.module.scss";

interface IProps {
  className?: string;
  query: string;
  updateQuery: (newQuery: string) => void;
  isSearchPage: boolean;
}

function SearchInputItem({
  query,
  updateQuery,
  isSearchPage,
  className,
}: IProps): ReactElement {
  return (
    <div className={[styles.search, className].join(" ")}>
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
