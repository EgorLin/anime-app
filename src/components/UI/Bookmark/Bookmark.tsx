import { MouseEvent, ReactElement } from "react";
import BookmarkItem from "./BookmarkItem";

interface IProps {
  className?: string;
  isBooked: boolean;
  onClick: () => void;
}

function Bookmark({ className, isBooked, onClick }: IProps): ReactElement {
  function handleClick(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    onClick();
  }

  return (
    <BookmarkItem
      className={className}
      isBooked={isBooked}
      handleClick={handleClick}
    />
  );
}

export default Bookmark;
