import { ReactElement } from "react";
import Catalog from "../../components/Catalog/Catalog";
import SliderPanel from "../../components/SliderPanel/SliderPanel";
import ImageCard from "../../components/UI/ImageCard/ImageCard";
import Spinner from "../../components/UI/Spinner/Spinner";
import VideoCard from "../../components/UI/VideoCard/VideoCard";
import { RequestStatuses } from "../../const/requestStatuses";
import { IAnimeRecent } from "../../types/IAnimeRecent";
import { IAnimeTrending } from "../../types/IAnimeTrending";
import { IDataFetch } from "../../types/IDataFetch";

interface IProps {
  trending: IDataFetch<IAnimeTrending>;
  recent: IDataFetch<IAnimeRecent>;
}

function HomeItem({ trending, recent }: IProps): ReactElement {
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

  let recentContent;
  switch (recent.status) {
    case RequestStatuses.IDLE:
      recentContent = <></>;
      break;
    case RequestStatuses.LOADING:
      recentContent = (
        <div>
          <Spinner />
        </div>
      );
      break;
    case RequestStatuses.SUCCEEDED:
      recentContent = (
        <Catalog
          title="Recent releases"
          elements={recent.data.results.map((anime) => (
            <VideoCard
              id={anime.id}
              title={anime.title.english}
              image={anime.image}
              genres={anime.genres}
              lastEpisode={anime.episodeNumber}
            />
          ))}
        />
      );
      break;
    case RequestStatuses.FAILED:
      recentContent = <div>{recent.error}</div>;
      break;
  }
  return (
    <div>
      {trendingContent} {recentContent}
    </div>
  );
}

export default HomeItem;
