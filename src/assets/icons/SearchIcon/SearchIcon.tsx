import { ReactElement } from "react";
import styles from "./SearchIcon.module.scss";

function SearchIcon(): ReactElement {
  return (
    <svg className={styles.image} viewBox="0 0 1024 1024">
      <path
        className={styles.magnifier}
        d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
      />
    </svg>
  );
}

export default SearchIcon;
