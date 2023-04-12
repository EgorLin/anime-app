import { getAuth } from "firebase/auth";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { MouseEvent, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firestoreDB } from "../../../firebase";
import { useAppDispatch } from "../../../hooks/redux";
import { RouteNames } from "../../../router";
import { setCurrentUser } from "../../../store/reducers/CurrentUserSlice";
import { IUserData } from "../../../types/IUserData";
import BookmarkItem from "./BookmarkItem";

interface IProps {
  className?: string;
  animeId: string;
}

function Bookmark({ className, animeId }: IProps): ReactElement {
  const [isBooked, setIsBooked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  async function handleClick(e: MouseEvent<HTMLDivElement>) {
    const auth = getAuth();

    e.stopPropagation();
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
    <BookmarkItem
      className={className}
      isBooked={isBooked}
      handleClick={handleClick}
    />
  );
}

export default Bookmark;
