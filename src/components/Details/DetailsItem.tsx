import { ReactElement } from "react";
import { IAnimeInfo } from "../../pages/AnimePage/AnimePage";
import ArtPlayer from "../ArtPlayer/ArtPlayer";
import PlayIcon from "../UI/PlayIcon/PlayIcon";
import StarIcon from "../UI/StarIcon/StarIcon";
import styles from "./Details.module.scss";

interface IProps {
  animeInfo: IAnimeInfo | null;
}

function DetailsItem({ animeInfo }: IProps): ReactElement {
  return (
    <div className={styles.container}>
      <img src={animeInfo?.cover} alt="" />
      <div className={[styles.content, "wrapperM"].join(" ")}>
        <div className={styles.trailerContainer}>
          <PlayIcon className={styles.trailerIcon} /> <span>Trailer</span>
        </div>
        <h1>{animeInfo?.title.english}</h1>
        <div className={styles.shortDetails}>
          <span className={styles.rating}>
            <StarIcon /> {animeInfo?.rating}
          </span>
          <span className={styles.separator}>|</span>
          <span>{animeInfo?.genres[0]}</span>
          <span className={styles.separator}>|</span>
          <span>{animeInfo?.releaseDate}</span>
          <span className={styles.separator}>|</span>
          <span>{animeInfo?.status}</span>
          <span className={styles.separator}>|</span>
          <span>
            {animeInfo?.currentEpisode + "/" + animeInfo?.totalEpisodes}
          </span>
        </div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: animeInfo?.description ? animeInfo?.description : "",
          }}
        ></div>
        <ArtPlayer />
      </div>
    </div>
  );
}

export default DetailsItem;
