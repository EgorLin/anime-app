import Bookmark from "../Bookmark/Bookmark";
import styles from "./ImageCard.module.scss";

interface IProps {
  id: string;
  title: string;
  image: string;
  genres: string[];
  data: number;
  className?: string;
}

function ImageCardItem({ id, title, image, genres, data, className }: IProps) {
  return (
    <div id={id} className={[styles.container, className].join(" ")}>
      <img className={styles.img} src={image} alt="" />
      <Bookmark className={styles.bookmark} />
      <div className={styles.year}>{data}</div>
      <span className={styles.title}>{title}</span>
      <div className={styles.genres}>
        {genres.map((genre) => (
          <span className={styles.genre} key={genre}>
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ImageCardItem;
