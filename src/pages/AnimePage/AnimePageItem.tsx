import { ReactElement } from "react";
import ArtPlayer from "../../components/ArtPlayer/ArtPlayer";
import Details from "../../components/Details/Details";
import SliderPanel from "../../components/SliderPanel/SliderPanel";
import EpisodeCard from "../../components/UI/EpisodeCard/EpisodeCard";
import RecommendationCard from "../../components/UI/RecommendationCard/RecommendationCard";
import RelationCard from "../../components/UI/RelationCard/RelationCard";
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
          <ArtPlayer
            animeId={animeInfo.episodes[0].id}
            poster={animeInfo.episodes[0].image}
            className={[styles.player, "wrapperM"].join(" ")}
            spinnerContainerSize={styles.spinnerPlayerSize}
          />

          {episodes.length > 0 && (
            <SliderPanel
              title="Episodes"
              elements={episodes.map((episode) => (
                <EpisodeCard
                  id={episode.id}
                  title={episode.title}
                  number={episode.number}
                  image={episode.image}
                />
              ))}
            />
          )}

          {relations.length > 0 && (
            <SliderPanel
              title="Relations"
              elements={relations.map((relation) => (
                <RelationCard
                  id={relation.id + ""}
                  title={relation.title.english}
                  type={relation.type}
                  image={relation.image}
                  relationType={relation.relationType}
                />
              ))}
            />
          )}

          {recommendations.length > 0 && (
            <SliderPanel
              title="Recommendations"
              elements={recommendations.map((recommendation) => (
                <RecommendationCard
                  id={recommendation.id + ""}
                  title={recommendation.title.english}
                  type={recommendation.type}
                  image={recommendation.image}
                  rating={recommendation.rating}
                />
              ))}
            />
          )}
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
