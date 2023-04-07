import { ReactElement, useEffect } from "react";
import { AnimeFormat } from "../../const/animeConsts";
import { RequestStatuses } from "../../const/requestStatuses";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import useDebounce from "../../hooks/useDebounce";
import {
  clearSearchResults,
  fetchAnimeSearch,
  selectAnimeSearch,
  selectAnimeSearchData,
  selectAnimeSearchSettings,
  selectAnimeSearchSettingsFormat,
  selectAnimeSearchSettingsGenres,
  selectAnimeSearchSettingsSeason,
  selectAnimeSearchSettingsSort,
  selectAnimeSearchSettingsStatus,
  selectAnimeSearchSettingsYear,
  setSearchFormat,
  setSearchYear,
} from "../../store/reducers/AnimeSearchSlice";
import SearchSettingsItem from "./SearchSettingsItem";

function SearchSettings(): ReactElement {
  const dispatch = useAppDispatch();
  const year = useAppSelector(selectAnimeSearchSettingsYear);
  const sort = useAppSelector(selectAnimeSearchSettingsSort);
  const format = useAppSelector(selectAnimeSearchSettingsFormat);
  const genres = useAppSelector(selectAnimeSearchSettingsGenres);
  const season = useAppSelector(selectAnimeSearchSettingsSeason);
  const status = useAppSelector(selectAnimeSearchSettingsStatus);
  const { status: fetchStatus } = useAppSelector(selectAnimeSearchData);
  const formatList = Object.entries(AnimeFormat);

  const debounce = useDebounce(() => {
    dispatch(clearSearchResults());
    dispatch(fetchAnimeSearch());
  }, 1000);

  function changeYear(newYear: string) {
    dispatch(setSearchYear(newYear));
  }

  function changeFormat(newFormat: string) {
    dispatch(setSearchFormat(newFormat));
  }

  useEffect(() => {
    if (fetchStatus === RequestStatuses.SUCCEEDED) {
      debounce();
    }
  }, [sort, year, format, genres, season, status]);

  return (
    <SearchSettingsItem
      sort={sort}
      year={year}
      format={format}
      genres={genres}
      season={season}
      status={status}
      changeYear={changeYear}
      formatList={formatList}
      changeFormat={changeFormat}
    />
  );
}

export default SearchSettings;
