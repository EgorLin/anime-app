import { ReactElement } from "react";
import PlayIcon from "../../../../assets/icons/PlayIcon/PlayIcon";
import Bookmark from "../../Bookmark/Bookmark";
import styles from "./EmptyCard.module.scss";

interface IProps {
  isMainContentIn: boolean;
  imgSize: string;
  hasBookmark: boolean;
  hasPlayButton: boolean;
  hasGlowing: boolean;
  rightCornerContent: ReactElement | null;
  visibleRightCorner: boolean;
  title: string;
  image: string;
  list: string[];
  onClick: () => void;
  isBooked: boolean;
  changeBookmark: () => void;
}

function EmptyCardItem({
  isMainContentIn,
  imgSize,
  hasBookmark,
  hasPlayButton,
  hasGlowing,
  rightCornerContent,
  visibleRightCorner,
  list,
  title,
  image,
  onClick,
  isBooked,
  changeBookmark,
}: IProps): ReactElement {
  return (
    <div onClick={() => onClick()} className={styles.container}>
      <div className={[styles.imageContainer].join(" ")}>
        {hasPlayButton && <PlayIcon className={styles.playButton} />}
        <img
          className={[
            styles.img,
            imgSize,
            isMainContentIn ? styles.imgTransperent : "",
            hasGlowing ? styles.glowing : "",
          ].join(" ")}
          src={image}
          alt=""
        />
      </div>

      {hasBookmark && (
        <Bookmark
          className={styles.bookmark}
          isBooked={isBooked}
          onClick={changeBookmark}
        />
      )}
      <div
        className={[
          styles.rightCornerContent,
          visibleRightCorner ? styles.visibleRightCorner : null,
        ].join(" ")}
      >
        {rightCornerContent}
      </div>
      <div className={isMainContentIn ? styles.contentIn : styles.contentOut}>
        <span className={styles.title}>{title}</span>
        <div className={styles.list}>
          {list.map((element) => (
            <span className={styles.listEl} key={element}>
              {element}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmptyCardItem;
