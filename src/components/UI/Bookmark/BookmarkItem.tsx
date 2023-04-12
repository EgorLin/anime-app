import { MouseEvent, ReactElement } from "react";
import BookmarkIcon from "../../../assets/icons/BookmarkIcon/BookmarkIcon";
import styles from "./Bookmark.module.scss";

interface IProps {
  className?: string;
  handleClick: (e: MouseEvent<HTMLDivElement>) => void;
  isBooked: boolean;
}

function BookmarkItem({
  isBooked,
  handleClick,
  className,
}: IProps): ReactElement {
  return (
    <div
      className={[styles.container, className].join(" ")}
      onClick={(e) => handleClick(e)}
    >
      <BookmarkIcon isBooked={isBooked} />
    </div>
  );
}

export default BookmarkItem;
