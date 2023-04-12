import { ReactElement } from "react";
import EmptyCardItem from "./EmptyCardItem";
import styles from "./EmptyCard.module.scss";
import { ILanguageTitles } from "../../../../types/ILanguageTitles";

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
  animeId,
  isMainContentIn = false,
  imageSize = CardSizes.SMALL,
  hasBookmark = false,
  hasPlayButton = false,
  hasGlowing = false,
  rightCornerContent = null,
  visibleRightCorner = false,
  list = [],
}: IProps): ReactElement {
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

  return (
    <EmptyCardItem
      animeId={animeId}
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
    />
  );
}

export default EmptyCard;
