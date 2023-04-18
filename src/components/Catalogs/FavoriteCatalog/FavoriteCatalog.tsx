import { AxiosResponse } from "axios";
import { ReactElement, useEffect, useState } from "react";
import AnimeService from "../../../api/AnimeService";
import { RequestStatuses } from "../../../const/requestStatuses";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  fetchAnimeSearch,
  increaseSearchPage,
  selectAnimeSearchData,
  selectAnimeSearchDataHasNextPage,
  selectAnimeSearchSettingsPage,
} from "../../../store/reducers/AnimeSearchSlice";
import { selectCurrentUserFavorites } from "../../../store/reducers/CurrentUserSlice";
import { IAnimeInfo } from "../../../types/IAnimeInfo";
import SearchCard from "../../UI/Cards/SearchCard/SearchCard";
import EmptyCatalog from "../EmptyCatalog/EmptyCatalog";

function FavoriteCatalog(): ReactElement {
  const favorites = useAppSelector(selectCurrentUserFavorites);
  const [favoritesData, setFavoritesData] = useState<
    AxiosResponse<IAnimeInfo>[]
  >([]);

  // const currentPage = useAppSelector(selectAnimeSearchSettingsPage);
  // const hasNextPage = useAppSelector(selectAnimeSearchDataHasNextPage);

  // function loadNextItems() {
  //   if (hasNextPage) {
  //     dispatch(increaseSearchPage());
  //   }
  // }
  //
  async function fetchData() {
    const promises = [];
    for (const favorite of favorites) {
      promises.push(await AnimeService.getAnimeInfo(favorite));
    }
    Promise.all(promises).then(
      (results) => {
        setFavoritesData(results);
      },
      (error) => console.log(error)
    );
  }
  // cannot change bookmark state!!!!!!!!!!!!!!!!!
  function loadNextItems() { }

  useEffect(() => {
    fetchData();
    // if (search.status === RequestStatuses.IDLE) {
    // dispatch(fetchAnimeSearch());

    // return () => {
    //   dispatch(clearSearchResults);
    // };
    // }
  }, [
    favorites,
    /* currentPage */
  ]);

  // return <div>catalog</div>;

  return (
    <>
      {favoritesData.length > 0 ? (
        <EmptyCatalog
          title="Favorites"
          status={RequestStatuses.SUCCEEDED}
          error={""}
          handleTrigger={loadNextItems}
          elements={favoritesData.map(
            (element) =>
              element && (
                <SearchCard
                  key={element.data.id}
                  title={element.data.title}
                  id={element.data.id}
                  image={element.data.image}
                  genres={element.data.genres}
                  lastEpisode={element.data.currentEpisode + ""}
                />
              )
          )}
        />
      ) : (
        <div>No results</div>
      )}
    </>
  );
}

export default FavoriteCatalog;
