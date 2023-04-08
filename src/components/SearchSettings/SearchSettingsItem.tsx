import { ReactElement } from "react";
import Checkbox from "../UI/Checkbox/Checkbox";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import styles from "./SearchSettings.module.scss";

interface IProps {
  sort: string[];
  year: string;
  format: string;
  genres: string[];
  season: string;
  status: string;
  changeYear: (newYear: string) => void;
  formatList: string[][];
  seasonList: string[][];
  statusList: string[][];
  genresList: string[][];
  changeFormat: (newFormat: string) => void;
  changeSeason: (newSeason: string) => void;
  changeStatus: (newStatus: string) => void;
  changeGenres: (newGenre: string) => void;
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
  seasonList,
  statusList,
  genresList,
  changeSeason,
  changeStatus,
  changeGenres,
}: IProps): ReactElement {
  return (
    <div className={[styles.container, "wrapperM"].join(" ")}>
      <div className={styles.leftHand}></div>
      <Checkbox
        title="Genres"
        data={genresList}
        activeList={genres}
        onChange={changeGenres}
      />
      <Select
        title="Anime format"
        data={formatList}
        value={format}
        onChange={changeFormat}
      />
      <Select
        title="Anime season"
        data={seasonList}
        value={season}
        onChange={changeSeason}
      />
      <Select
        title="Anime status"
        data={statusList}
        value={status}
        onChange={changeStatus}
      />
      <Input className={styles.input} value={year} changeValue={changeYear} />
    </div>
  );
}

export default SearchSettingsItem;
