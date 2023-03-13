import { ReactElement } from "react";
import Checkbox from "../UI/Checkbox/Checkbox";
import styles from "./SearchSettings.module.scss";

function SearchSettingsItem(): ReactElement {
  return (
    <div className={[styles.container, "wrapperM"].join(" ")}>
      <span>releaseDate</span>
      <span>genres</span>
      <Checkbox />
      <span>subOrDub</span>
      <span>status</span>
    </div>
  );
}

export default SearchSettingsItem;
