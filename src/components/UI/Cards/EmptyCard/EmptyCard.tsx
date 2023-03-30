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
  rightCornerContent?: ReactElement | null;
  title: ILanguageTitles;
  image: string;
  onClick: () => void;
}

function EmptyCard({
  title,
  image,
  onClick,
  isMainContentIn = false,
  imageSize = CardSizes.SMALL,
  hasBookmark = false,
  hasPlayButton = false,
  rightCornerContent = null,
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
      isMainContentIn={isMainContentIn}
      imgSize={imgSize}
      hasBookmark={hasBookmark}
      hasPlayButton={hasPlayButton}
      rightCornerContent={rightCornerContent}
      title={animeTitle}
      image={image}
      list={list}
      onClick={onClick}
    />
  );
}

export default EmptyCard;
