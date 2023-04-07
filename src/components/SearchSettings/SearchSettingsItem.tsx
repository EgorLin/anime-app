import { ReactElement } from "react";
import { AnimeFormat } from "../../const/animeConsts";
import Checkbox from "../UI/Checkbox/Checkbox";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import styles from "./SearchSettings.module.scss";

interface IProps {
  sort: string[];
  year: string;
  format: string;
  genres: string | string[];
  season: string;
  status: string;
  changeYear: (newYear: string) => void;
  formatList: string[][];
  changeFormat: (newFormat: string) => void;
}

function SearchSettingsItem({
  sort,
  year,
  format,
  genres,
  season,
  status,
  changeYear,
  formatList,
  changeFormat,
}: IProps): ReactElement {
  return (
    <div className={[styles.container, "wrapperM"].join(" ")}>
      <div className={styles.leftHand}>
        <Checkbox title={"Custom genres"} />
        <Checkbox title={"Custom status"} />
        <Checkbox title={"Custom subOrDub"} />
      </div>
      <Select
        title="Anime format"
        data={formatList}
        value={format}
        onChange={changeFormat}
      />
      <Input className={styles.input} value={year} changeValue={changeYear} />
    </div>
  );
}

export default SearchSettingsItem;
