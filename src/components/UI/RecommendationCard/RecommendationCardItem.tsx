import { ReactElement } from "react";
import Bookmark from "../Bookmark/Bookmark";
import PlayIcon from "../PlayIcon/PlayIcon";
import StarIcon from "../StarIcon/StarIcon";
import styles from "./RecommendationCard.module.scss";

interface IProps {
  id: string;
  title: string;
  type: string;
  image: string;
  rating: number;
  className?: string;
}

function RecommendationCardItem({
  id,
  title,
  type,
  image,
  rating,
  className,
}: IProps): ReactElement {
  return (
    <div id={id} className={[styles.container, className].join(" ")}>
      <div className={styles.imageContainer}>
        <PlayIcon className={styles.playButton} />
        <img className={styles.img} src={image} alt="" />
      </div>
      <Bookmark className={styles.bookmark} />
      <span className={styles.rating}>
        <StarIcon />
        {rating}
      </span>
      <span className={styles.title}>{title}</span>
      <span className={styles.type}>{type}</span>
    </div>
  );
}

export default RecommendationCardItem;
