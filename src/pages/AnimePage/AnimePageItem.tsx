import { ReactElement } from "react";
import ArtPlayer from "../../components/ArtPlayer/ArtPlayer";
import Details from "../../components/Details/Details";
import SliderPanel from "../../components/SliderPanel/SliderPanel";
import EpisodeCard from "../../components/UI/EpisodeCard/EpisodeCard";
import RecommendationCard from "../../components/UI/RecommendationCard/RecommendationCard";
import RelationCard from "../../components/UI/RelationCard/RelationCard";
import { proxyUrl } from "../../const/corsProxy";
import { IEpisode } from "../../types/IAnimeEpisode";
import { IAnimeInfo } from "../../types/IAnimeInfo";
import { IRecommendation } from "../../types/IAnimeRecommendation";
import { IRelation } from "../../types/IAnimeRelation";
import { IStreamInfo } from "../../types/IStreamInfo";
import styles from "./AnimePage.module.scss";

interface IProps {
  isLoadingAnime: boolean;
  isLoadingStream: boolean;
  animeError: string;
  streamError: string;
  animeInfo: IAnimeInfo;
  streamInfo: IStreamInfo;
}

function AnimePageItem({
  isLoadingAnime,
  isLoadingStream,
  animeError,
  streamError,
  animeInfo,
  streamInfo,
}: IProps): ReactElement {
  const episodes: IEpisode[] = animeInfo?.episodes;
  const relations: IRelation[] = animeInfo?.relations.filter((relation) =>
    relation.type.match(/TV|MOVIE|OVA/)
  );
  const recommendations: IRecommendation[] = animeInfo?.recommendations;

  console.log("anime page rerender");
  console.log("STREAM INFO!!!!!!!!!!!!!", streamInfo);
  return (
    <div>
      {!isLoadingAnime ? (
        <>
          <Details animeInfo={animeInfo} />
          {!isLoadingStream ? (
            <ArtPlayer
              option={{
                url: proxyUrl + streamInfo?.sources[3].url,
                container: ".artplayer-container",
                poster: proxyUrl + animeInfo?.episodes[0].image,
                quality: streamInfo?.sources
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

          {episodes.length ? (
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
          ) : null}

          {relations.length ? (
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
          ) : null}

          {recommendations.length ? (
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
          ) : null}
        </>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default AnimePageItem;
