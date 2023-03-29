import { ReactElement } from "react";
import Catalog from "../../components/Catalog/Catalog";
import SliderPanel from "../../components/SliderPanel/SliderPanel";
import ImageCard from "../../components/UI/ImageCard/ImageCard";
import Spinner from "../../components/UI/Spinner/Spinner";
import VideoCard from "../../components/UI/VideoCard/VideoCard";
import { RequestStatuses } from "../../const/requestStatuses";
import { IAnimeTrending } from "../../types/IAnimeTrending";
import { IDataFetch } from "../../types/IDataFetch";

interface IProps {
  trending: IDataFetch<IAnimeTrending>;
}

function HomeItem({ trending }: IProps): ReactElement {
  console.log(trending.data.results);
  let trendingContent;
  switch (trending.status) {
    case RequestStatuses.IDLE:
      trendingContent = <></>;
      break;
    case RequestStatuses.LOADING:
      trendingContent = (
        <div>
          <Spinner />
        </div>
      );
      break;
    case RequestStatuses.SUCCEEDED:
      trendingContent = (
        <SliderPanel
          elements={trending.data.results.map((result) => (
            <ImageCard
              key={result.id}
              title={result.title.english}
              id={result.id}
              image={result.image}
              genres={result.genres}
              data={result.releaseDate}
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
      {trendingContent}
      <Catalog
        title="Recent releases"
        elements={[
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
        ]}
      />
    </div>
  );
}

export default HomeItem;
