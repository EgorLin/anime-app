import { AxiosResponse } from "axios";
import { ReactElement, useEffect, useState } from "react";
import AnimeService from "../../../api/AnimeService";
import { RequestStatuses } from "../../../const/requestStatuses";
import { useAppSelector } from "../../../hooks/redux";
import { selectCurrentUserFavorites } from "../../../store/reducers/CurrentUserSlice";
import { IAnimeInfo } from "../../../types/IAnimeInfo";
import SearchCard from "../../UI/Cards/SearchCard/SearchCard";
import EmptyCatalog from "../EmptyCatalog/EmptyCatalog";

function FavoriteCatalog(): ReactElement {
  const favorites = useAppSelector(selectCurrentUserFavorites);
  const [favoritesData, setFavoritesData] = useState<
    AxiosResponse<IAnimeInfo>[]
  >([]);

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
  function loadNextItems() { }

  useEffect(() => {
    fetchData();
  }, [favorites]);

  return (
    <>
      {favoritesData.length > 0 && (
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
      )}
    </>
  );
}

export default FavoriteCatalog;
