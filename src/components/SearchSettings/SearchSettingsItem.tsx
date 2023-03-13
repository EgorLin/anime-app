import { ReactElement } from "react";
import Checkbox from "../UI/Checkbox/Checkbox";
import RangeBoxItem from "../UI/RangeBox/RangeBoxItem";
import styles from "./SearchSettings.module.scss";

function SearchSettingsItem(): ReactElement {
  return (
    <div className={[styles.container, "wrapperM"].join(" ")}>
      <div className={styles.leftHand}>
        <Checkbox title={"Custom genres"} />
        <Checkbox title={"Custom status"} />
        <Checkbox title={"Custom subOrDub"} />
      </div>
      <RangeBoxItem />
    </div>
  );
}

export default SearchSettingsItem;
