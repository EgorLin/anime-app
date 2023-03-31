import React, { useEffect } from "react";
import { RequestStatuses } from "../../../const/requestStatuses";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  fetchAnimeTrending,
  selectAnimeTrending,
} from "../../../store/reducers/AnimeTrendingSlice";
import TrendingCard from "../../UI/Cards/TrendingCard/TrendingCard";
import Spinner from "../../UI/Spinner/Spinner";
import EmptySliderPanel from "../EmptySliderPanel/EmptySliderPanel";

function TrendingSliderPanel() {
  const dispatch = useAppDispatch();
  const trending = useAppSelector(selectAnimeTrending);

  useEffect(() => {
    dispatch(fetchAnimeTrending());
  }, []);

  let trendingContent;
  switch (trending.status) {
    case RequestStatuses.IDLE:
      trendingContent = <></>;
      break;
    case RequestStatuses.LOADING:
      trendingContent = <Spinner />;
      break;
    case RequestStatuses.SUCCEEDED:
      trendingContent = (
        <EmptySliderPanel
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
      break;
    case RequestStatuses.FAILED:
      trendingContent = <div>{trending.error}</div>;
      break;
  }
  return <div>{trendingContent}</div>;
}

export default TrendingSliderPanel;
