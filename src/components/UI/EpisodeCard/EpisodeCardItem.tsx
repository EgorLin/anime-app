import Bookmark from "../Bookmark/Bookmark";
import styles from "./EpisodeCard.module.scss";
import { proxyUrl } from "../../../const/corsProxy";
import EpisodeBox from "../EpisodeBox/EpisodeBox";

interface IProps {
  id: string;
  title: string;
  number: number;
  image: string;
  className?: string;
}

function EpisodeCardItem({ id, title, number, image, className }: IProps) {
  return (
    <div id={id} className={[styles.container, className].join(" ")}>
      <img className={styles.img} src={proxyUrl + image} alt={id} />
      <Bookmark className={styles.bookmark} />
      <EpisodeBox className={styles.episode}>{number}</EpisodeBox>
      <span className={styles.title}>{title}</span>
    </div>
  );
}

export default EpisodeCardItem;
