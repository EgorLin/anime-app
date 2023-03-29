import { ReactElement, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  fetchAnimeRecent,
  selectAnimeRecent,
} from "../../store/reducers/AnimeRecentSlice";
import {
  fetchAnimeTrending,
  selectAnimeTrending,
} from "../../store/reducers/AnimeTrendingSlice";
import HomeItem from "./HomeItem";

function Home(): ReactElement {
  const dispatch = useAppDispatch();
  const trending = useAppSelector(selectAnimeTrending);
  const recent = useAppSelector(selectAnimeRecent);

  useEffect(() => {
    dispatch(fetchAnimeTrending());
    dispatch(fetchAnimeRecent());
  }, []);

  return <HomeItem trending={trending} recent={recent} />;
}

export default Home;
