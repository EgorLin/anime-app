import { ReactElement } from "react";
import ArtPlayer from "../../components/ArtPlayer/ArtPlayer";
import Details from "../../components/Details/Details";
import SliderPanel from "../../components/SliderPanel/SliderPanel";
import EpisodeCard from "../../components/UI/EpisodeCard/EpisodeCard";
import RecommendationCard from "../../components/UI/RecommendationCard/RecommendationCard";
import RelationCard from "../../components/UI/RelationCard/RelationCard";
import { proxyUrl } from "../../const/corsProxy";
import { IAnimeInfo } from "../../types/IAnimeInfo";
import { IStreamInfo } from "../../types/IStreamInfo";
import styles from "./AnimePage.module.scss";

interface IProps {
  animeInfo: IAnimeInfo | null;
  streamInfo: IStreamInfo | null;
}

function AnimePageItem({ animeInfo, streamInfo }: IProps): ReactElement {
  return (
    <div>
      <Details animeInfo={animeInfo} />
      {streamInfo ? (
        <ArtPlayer
          option={{
            url: proxyUrl + streamInfo.sources[3].url,
            container: ".artplayer-container",
            poster: proxyUrl + animeInfo?.episodes[0].image,
            quality: streamInfo.sources
              .filter((source) => source.quality.match(/\d[p]/))
              .map((source) => {
                return {
                  html: source.quality,
                  url: proxyUrl + source.url,
                };
              }),
          }}
          getInstance={(art) => console.log(art)}
          className={[styles.player, "wrapperM"].join(" ")}
        />
      ) : null}
      {animeInfo ? (
        <SliderPanel
          title="Episodes"
          elements={animeInfo?.episodes.map((episode) => (
            <EpisodeCard
              id={episode.id}
              title={episode.title}
              number={episode.number}
              image={episode.image}
            />
          ))}
        />
      ) : null}
      {animeInfo ? (
        <SliderPanel
          title="Relations"
          elements={animeInfo?.relations
            .filter((relation) => relation.type.match(/TV|MOVIE|OVA/))
            .map((relation) => (
              <RelationCard
                id={relation.id + ""}
                title={relation.title.english}
                type={relation.type}
                image={relation.image}
                relationType={relation.relationType}
              />
            ))}
        />
      ) : null}
      {animeInfo ? (
        <SliderPanel
          title="Recommendations"
          elements={animeInfo?.recommendations.map((recommendation) => (
            <RecommendationCard
              id={recommendation.id + ""}
              title={recommendation.title.english}
              type={recommendation.type}
              image={recommendation.image}
              rating={recommendation.rating}
            />
          ))}
        />
      ) : null}
    </div>
  );
}

export default AnimePageItem;
