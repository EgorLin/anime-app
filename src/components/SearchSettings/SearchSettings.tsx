import { ReactElement, useEffect } from "react";
import {
  AnimeFormat,
  AnimeSeason,
  AnimeStatus,
  ItemGenre,
} from "../../const/animeConsts";
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
  setSearchGenres,
  setSearchSeason,
  setSearchStatus,
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
  const seasonList = Object.entries(AnimeSeason);
  const statusList = Object.entries(AnimeStatus);
  const genresList = Object.entries(ItemGenre);

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

  function changeSeason(newSeason: string) {
    dispatch(setSearchSeason(newSeason));
  }

  function changeStatus(newStatus: string) {
    dispatch(setSearchStatus(newStatus));
  }

  function changeGenres(newGenre: string) {
    const isExist = genres.some((genre) => newGenre === genre);
    let newGenres = [...genres];
    if (isExist) {
      newGenres = genres.filter((genre) => genre !== newGenre);
    } else {
      newGenres.push(newGenre);
    }
    dispatch(setSearchGenres(newGenres));
  }

  console.log(genres);

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
      seasonList={seasonList}
      statusList={statusList}
      genresList={genresList}
      changeFormat={changeFormat}
      changeSeason={changeSeason}
      changeStatus={changeStatus}
      changeGenres={changeGenres}
    />
  );
}

export default SearchSettings;
