import { ReactElement } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../../../assets/icons/SearchIcon/SearchIcon";
import { RouteNames } from "../../../router";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Input from "../Input/Input";
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
        className={!isSearchPage ? styles.input : ""}
        value={query}
        changeValue={updateQuery}
      />

      {!isSearchPage && (
        <Link to={RouteNames.SEARCH}>
          <ButtonIcon className={styles.button}>
            <SearchIcon />
          </ButtonIcon>
        </Link>
      )}
    </div>
  );
}

export default SearchInputItem;
