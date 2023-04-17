import { selectCurrentUserFavorites } from "../store/reducers/CurrentUserSlice";
import { useAppSelector } from "./redux";

export function useFavorite(id: string) {
  const favorites = useAppSelector(selectCurrentUserFavorites);
  return favorites.some((fav) => fav === id);
}
