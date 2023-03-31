import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  fetchAnimeTrending,
  selectAnimeTrending,
} from "../../../store/reducers/AnimeTrendingSlice";
import TrendingCard from "../../UI/Cards/TrendingCard/TrendingCard";
import EmptySliderPanel from "../EmptySliderPanel/EmptySliderPanel";

function TrendingSliderPanel() {
  const dispatch = useAppDispatch();
  const trending = useAppSelector(selectAnimeTrending);

  useEffect(() => {
    dispatch(fetchAnimeTrending());
  }, []);

  return (
    <EmptySliderPanel
      status={trending.status}
      error={trending.error}
      elements={trending.data.results.map((result) => (
        <TrendingCard
          key={result.id}
          id={result.id}
          title={result.title}
          image={result.image}
          genres={result.genres}
          date={result.releaseDate}
        />
      ))}
    />
  );
}

export default TrendingSliderPanel;
