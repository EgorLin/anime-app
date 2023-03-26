import { ReactElement } from "react";
import ArtPlayer from "../../components/ArtPlayer/ArtPlayer";
import Details from "../../components/Details/Details";
import SliderPanel from "../../components/SliderPanel/SliderPanel";
import EpisodeCard from "../../components/UI/EpisodeCard/EpisodeCard";
import RecommendationCard from "../../components/UI/RecommendationCard/RecommendationCard";
import RelationCard from "../../components/UI/RelationCard/RelationCard";
import { RequestStatuses } from "../../const/requestStatuses";
import { IEpisode } from "../../types/IAnimeEpisode";
import { IAnimeInfo } from "../../types/IAnimeInfo";
import { IRecommendation } from "../../types/IAnimeRecommendation";
import { IRelation } from "../../types/IAnimeRelation";
import styles from "./AnimePage.module.scss";

interface IProps {
  animeStatus: string;
  animeError: string;
  animeInfo: IAnimeInfo;
  relations: IRelation[];
}

function AnimePageItem({
  animeStatus,
  animeInfo,
  animeError,
  relations,
}: IProps): ReactElement {
  const episodes: IEpisode[] = animeInfo.episodes;
  const recommendations: IRecommendation[] = animeInfo.recommendations;

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
      content = <div>loading...</div>;
      break;
    case RequestStatuses.FAILED:
      content = <div>{animeError}</div>;
      break;
  }

  return <div>{content}</div>;
}

export default AnimePageItem;
