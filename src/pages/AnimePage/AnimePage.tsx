import { ReactElement, useEffect } from "react";
import { useParams } from "react-router-dom";
import { compareId } from "../../helpers/compareFunctions";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  fetchAnimeInfo,
  selectAnimeInfo,
  selectAnimeRelations,
} from "../../store/reducers/AnimeInfoSlice";
import AnimePageItem from "./AnimePageItem";

function AnimePage(): ReactElement {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const {
    data: animeInfo,
    error: animeError,
    status: animeStatus,
  } = useAppSelector(selectAnimeInfo);
  const relations = useAppSelector(
    selectAnimeRelations,
    compareId // to prevent re-renders
  );
  // const relations = animeInfo.relations;

  useEffect(() => {
    dispatch(fetchAnimeInfo(String(id)));
  }, [id]);

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
