import { ReactElement } from "react";
import ArtPlayer from "../../components/ArtPlayer/ArtPlayer";
import Details from "../../components/Details/Details";
import { proxyUrl } from "../../const/corsProxy";
import { IAnimeInfo, IStreamInfo } from "./AnimePage";
import styles from "./AnimePage.module.scss";

interface IProps {
  animeInfo: IAnimeInfo | null;
  streamInfo: IStreamInfo | null;
}

function AnimePageItem({ animeInfo, streamInfo }: IProps): ReactElement {
  console.log(animeInfo?.episodes[0].image);
  return (
    <div>
      <Details animeInfo={animeInfo} />
      {streamInfo ? (
        <ArtPlayer
          option={{
            url: proxyUrl + streamInfo.sources[3].url,
            container: ".artplayer-container",
            poster: animeInfo?.episodes[0].image,
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
    </div>
  );
}

export default AnimePageItem;
