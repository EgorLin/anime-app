import { ReactElement, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  fetchAnimeTrending,
  selectAnimeTrending,
} from "../../store/reducers/AnimeTrendingSlice";
import HomeItem from "./HomeItem";

function Home(): ReactElement {
  const dispatch = useAppDispatch();
  const trending = useAppSelector(selectAnimeTrending);

  useEffect(() => {
    dispatch(fetchAnimeTrending());
  }, []);

  return <HomeItem trending={trending} />;
}

export default Home;
