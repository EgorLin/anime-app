import { MouseEvent, ReactElement, useEffect } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { selectCurrentUserFavorites } from "../../../store/reducers/CurrentUserSlice";
import BookmarkItem from "./BookmarkItem";

interface IProps {
  className?: string;
  isBooked: boolean;
  onClick: () => void;
}

function Bookmark({ className, isBooked, onClick }: IProps): ReactElement {
  const favorite = useAppSelector(selectCurrentUserFavorites);
  function handleClick(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    onClick();
  }

  useEffect(() => { }, [favorite]);

  return (
    <BookmarkItem
      className={className}
      isBooked={isBooked}
      handleClick={handleClick}
    />
  );
}

export default Bookmark;
