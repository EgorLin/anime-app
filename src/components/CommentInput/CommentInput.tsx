import { getAuth } from "firebase/auth";
import { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import FirebaseService from "../../api/FirebaseService";
import { selectCurrentUser } from "../../store/reducers/CurrentUserSlice";
import { IUserAndCommentData } from "../../types/ICommentsData";
import CommentInputItem from "./CommentInputItem";

interface IProps {
  animeId: string;
  comments: IUserAndCommentData[] | undefined;
  fetchData: () => void;
}

function CommentInput({ animeId, comments, fetchData }: IProps): ReactElement {
  const { isAuth } = useSelector(selectCurrentUser);
  const [text, setText] = useState("");
  const userId = getAuth().currentUser?.uid;

  function updateComment(newText: string) {
    setText(newText);
  }

  function sendNewComment() {
    if (comments) {
      FirebaseService.addNewComment(animeId, userId!, Date.now(), text);
    } else {
      FirebaseService.addFirstComment(animeId, userId!, Date.now(), text);
    }
    setText("");
    fetchData();
  }

  return (
    <CommentInputItem
      isAuth={isAuth}
      text={text}
      updateComment={updateComment}
      sendNewComment={sendNewComment}
    />
  );
}

export default CommentInput;
