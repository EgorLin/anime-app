import { ReactElement } from "react";
import { IUserAndCommentData } from "../../types/ICommentsData";
import CommentItem from "./CommentItem";

interface IProps {
  comment: IUserAndCommentData;
}

function Comment({ comment }: IProps): ReactElement {
  return <CommentItem comment={comment} />;
}

export default Comment;
