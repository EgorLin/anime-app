import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../../assets/icons/SearchIcon/SearchIcon";
import { RouteNames } from "../../../router";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import styles from "./SearchButton.module.scss";

function SearchButton(): ReactElement {
  const navigate = useNavigate();
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        navigate(RouteNames.SEARCH);
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <ButtonIcon className={styles.button}>
      <SearchIcon />
    </ButtonIcon>
  );
}

export default SearchButton;
