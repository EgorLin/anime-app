import { ReactElement, useState } from "react";
import EmptyCardItem from "./EmptyCardItem";
import styles from "./EmptyCard.module.scss";
import { ILanguageTitles } from "../../../../types/ILanguageTitles";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/redux";
import { getAuth } from "firebase/auth";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { firestoreDB } from "../../../../firebase";
import { setCurrentUser } from "../../../../store/reducers/CurrentUserSlice";
import { IUserData } from "../../../../types/IUserData";
import { RouteNames } from "../../../../router";
import { useFavorite } from "../../../../hooks/useFavorite";

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
  const [isBooked, setIsBooked] = useState(useFavorite(animeId));

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

  async function changeBookmark(): Promise<void> {
    const auth = getAuth();

    if (auth.currentUser) {
      const docRef = doc(firestoreDB, "users", auth.currentUser.uid);
      if (isBooked) {
        await updateDoc(docRef, {
          favorites: arrayRemove(animeId),
        });
      } else {
        await updateDoc(docRef, {
          favorites: arrayUnion(animeId),
        });
      }
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        dispatch(setCurrentUser(docSnap.data() as IUserData));
      }
      setIsBooked((ib) => !ib);
    } else {
      navigate(RouteNames.LOGIN);
    }
  }

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
