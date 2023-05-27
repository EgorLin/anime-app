import { ReactElement } from "react";
import Comments from "../../components/Comments/Comments";
import Details from "../../components/Details/Details";
import EpisodeSection from "../../components/EpisodeSection/EpisodeSection";
import LazyLoadingContainer from "../../components/LazyLoadingContainer/LazyLoadingContainer";
import RecommendationSliderPanel from "../../components/SliderPanels/RecommendationSliderPanel/RecommendationSliderPanel";
import RelationSliderPanel from "../../components/SliderPanels/RelationSliderPanel/RelationSliderPanel";
import Spinner from "../../components/UI/Spinner/Spinner";
import { RequestStatuses } from "../../const/requestStatuses";
import { IAnimeEpisode } from "../../types/IAnimeEpisode";
import { IAnimeInfo } from "../../types/IAnimeInfo";
import { IAnimeRecommendation } from "../../types/IAnimeRecommendation";
import { IAnimeRelation } from "../../types/IAnimeRelation";
import styles from "./AnimePage.module.scss";

interface IProps {
  animeStatus: string;
  animeError: string;
  animeInfo: IAnimeInfo;
  relations: IAnimeRelation[];
}

function AnimePageItem({
  animeStatus,
  animeInfo,
  animeError,
  relations,
}: IProps): ReactElement {
  const episodes: IAnimeEpisode[] = animeInfo.episodes;
  const recommendations: IAnimeRecommendation[] = animeInfo.recommendations;

  let content;
  switch (animeStatus) {
    case RequestStatuses.IDLE:
      content = <></>;
      break;
    case RequestStatuses.SUCCEEDED:
      content = (
        <div>
          <Details animeInfo={animeInfo} />

          {episodes.length > 0 ? (
            <EpisodeSection episodes={[...episodes].reverse()} />
          ) : (
            <div className={styles.sorry}>
              This anime isn't available for watching. We are sorry
            </div>
          )}

          {relations.length > 0 && (
            <LazyLoadingContainer>
              <RelationSliderPanel relations={relations} />
            </LazyLoadingContainer>
          )}

          {recommendations.length > 0 && (
            <LazyLoadingContainer>
              <RecommendationSliderPanel recommendations={recommendations} />
            </LazyLoadingContainer>
          )}

          <LazyLoadingContainer>
            <Comments animeId={animeInfo.id} />
          </LazyLoadingContainer>
        </div>
      );
      break;
    case RequestStatuses.LOADING:
      content = <Spinner containerSize={styles.spinnerHeight} />;
      break;
    case RequestStatuses.FAILED:
      content = <div>{animeError}</div>;
      break;
  }

  return <div>{content}</div>;
}

export default AnimePageItem;
