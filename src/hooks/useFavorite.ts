import { useState } from "react";
import { selectCurrentUserFavorites } from "../store/reducers/CurrentUserSlice";
import { useAppSelector } from "./redux";

export function useFavorite(id: string) {
  const [isBooked, setIsBooked] = useState(false);
  const favorites = useAppSelector(selectCurrentUserFavorites);
  if (favorites.some((fav) => fav === id) !== isBooked) {
    setIsBooked((ib) => !ib);
  }
  return isBooked;
}
