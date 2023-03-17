import { ReactElement } from "react";
import Bookmark from "../Bookmark/Bookmark";
import EpisodeBox from "../EpisodeBox/EpisodeBox";
import PlayIcon from "../PlayIcon/PlayIcon";
import styles from "./RelationCard.module.scss";

interface IProps {
  id: string;
  title: string;
  type: string;
  image: string;
  relationType: string;
  className?: string;
}

function RelationCardItem({
  id,
  title,
  type,
  image,
  relationType,
  className,
}: IProps): ReactElement {
  return (
    <div id={id} className={[styles.container, className].join(" ")}>
      <div className={styles.imageContainer}>
        <PlayIcon className={styles.playButton} />
        <img className={styles.img} src={image} alt="" />
      </div>
      <Bookmark className={styles.bookmark} />
      <span className={styles.title}>{title}</span>
      <span className={styles.genres}>
        <span className={styles.genre}>{type}</span>
        <span className={styles.genre}>{relationType}</span>
      </span>
    </div>
  );
}

export default RelationCardItem;
