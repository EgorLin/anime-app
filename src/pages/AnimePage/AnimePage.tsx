import { ReactElement, useEffect } from "react";
import { compareRelations } from "../../helpers/compareFunctions";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  fetchAnimeInfo,
  selectAnimeInfo,
  selectAnimeRelations,
} from "../../store/reducers/AnimeInfoSlice";
import AnimePageItem from "./AnimePageItem";

function AnimePage(): ReactElement {
  const dispatch = useAppDispatch();

  const {
    data: animeInfo,
    error: animeError,
    status: animeStatus,
  } = useAppSelector(selectAnimeInfo);
  const relations = useAppSelector(
    selectAnimeRelations,
    compareRelations // to prevent re-renders
  );

  useEffect(() => {
    dispatch(fetchAnimeInfo());
  }, []);

  return (
    <AnimePageItem
      animeStatus={animeStatus}
      animeError={animeError}
      animeInfo={animeInfo}
      relations={relations}
    />
  );
}

export default AnimePage;
