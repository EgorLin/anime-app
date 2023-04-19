import { ReactElement, useCallback } from "react";
import EmptyCardItem from "./EmptyCardItem";
import styles from "./EmptyCard.module.scss";
import { ILanguageTitles } from "../../../../types/ILanguageTitles";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/redux";
import { getAuth } from "firebase/auth";
import { setUserFavorites } from "../../../../store/reducers/CurrentUserSlice";
import { RouteNames } from "../../../../router";
import { useFavorite } from "../../../../hooks/useFavorite";
import FirebaseService from "../../../../api/FirebaseService";

export enum CardSizes {
  WIDE = "wide",
  AUTO = "auto",
  SMALL = "small",
}

interface IProps {
  list?: string[];
  isMainContentIn?: boolean;
  imageSize?: string;
  hasBookmark?: boolean;
  hasPlayButton?: boolean;
  hasGlowing?: boolean;
  rightCornerContent?: ReactElement | null;
  visibleRightCorner?: boolean;
  title: ILanguageTitles;
  image: string;
  onClick: () => void;
  animeId: string;
}

function EmptyCard({
  title,
  image,
  onClick,
  isMainContentIn = false,
  imageSize = CardSizes.SMALL,
  hasBookmark = false,
  hasPlayButton = false,
  hasGlowing = false,
  rightCornerContent = null,
  visibleRightCorner = false,
  list = [],
  animeId,
}: IProps): ReactElement {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isBooked = useFavorite(animeId);

  let imgSize = "";
  if (imageSize === CardSizes.WIDE) {
    imgSize = styles.wideSize;
  } else if (imageSize === CardSizes.AUTO) {
    imgSize = styles.autoSize;
  } else if (imageSize === CardSizes.SMALL) {
    imgSize = styles.smallSize;
  }

  let animeTitle = "Unknown";
  if (title.english) {
    animeTitle = title.english;
  } else if (title.romaji) {
    animeTitle = title.romaji;
  } else if (title.native) {
    animeTitle = title.native;
  }

  const changeBookmark = useCallback(async () => {
    const auth = getAuth();

    if (auth.currentUser) {
      let data;
      if (isBooked) {
        data = await FirebaseService.removeUserFavorite(
          auth.currentUser.uid,
          animeId
        );
      } else {
        data = await FirebaseService.addUserFavorite(
          auth.currentUser.uid,
          animeId
        );
      }
      if (data) {
        dispatch(setUserFavorites(data.favorites));
      }
    } else {
      navigate(RouteNames.LOGIN);
    }
  }, [isBooked]);

  return (
    <EmptyCardItem
      isMainContentIn={isMainContentIn}
      imgSize={imgSize}
      hasBookmark={hasBookmark}
      hasPlayButton={hasPlayButton}
      hasGlowing={hasGlowing}
      rightCornerContent={rightCornerContent}
      visibleRightCorner={visibleRightCorner}
      title={animeTitle}
      image={image}
      list={list}
      onClick={onClick}
      isBooked={isBooked}
      changeBookmark={changeBookmark}
    />
  );
}

export default EmptyCard;
