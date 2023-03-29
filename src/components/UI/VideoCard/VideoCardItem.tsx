import { ReactElement } from "react";
import Bookmark from "../Bookmark/Bookmark";
import EpisodeBox from "../EpisodeBox/EpisodeBox";
import PlayIcon from "../PlayIcon/PlayIcon";
import styles from "./VideoCard.module.scss";

interface IProps {
  id?: string;
  title?: string;
  image?: string;
  lastEpisode?: string;
  genres?: string[];
  className?: string;
}

function VideoCardItem({
  id,
  title,
  image,
  lastEpisode,
  genres,
  className,
}: IProps): ReactElement {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.imageContainer}>
        <PlayIcon className={styles.playButton} />
        <img className={styles.img} src={image} alt="" />
      </div>
      <Bookmark className={styles.bookmark} />
      <EpisodeBox className={styles.lastEpisode}>{lastEpisode}</EpisodeBox>
      <span className={styles.title}>{title}</span>
      <span className={styles.genres}>
        {genres?.map((genre) => (
          <span className={styles.genre}>{genre}</span>
        ))}
      </span>
    </div>
  );
}

export default VideoCardItem;
