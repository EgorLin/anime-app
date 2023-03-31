import { ReactElement } from "react";
import RecentReleasesCatalog from "../../components/Catalogs/RecentReleasesCatalog/RecentReleasesCatalog";
import SliderPanel from "../../components/SliderPanel/SliderPanel";
import TrendingCard from "../../components/UI/Cards/TrendingCard/TrendingCard";
import Spinner from "../../components/UI/Spinner/Spinner";
import { RequestStatuses } from "../../const/requestStatuses";
import { IAnimeTrending } from "../../types/IAnimeTrending";
import { IDataFetch } from "../../types/IDataFetch";

interface IProps {
  trending: IDataFetch<IAnimeTrending>;
}

function HomeItem({ trending }: IProps): ReactElement {
  const isLoading = trending.status === RequestStatuses.LOADING;

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
        <SliderPanel
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

  return (
    <div>
      {trendingContent} <RecentReleasesCatalog />
    </div>
  );
}

export default HomeItem;
