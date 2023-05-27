import { ReactElement } from "react";
import { IUserAndCommentData } from "../../types/ICommentsData";
import styles from "./Comment.module.scss";

interface IProps {
  comment: IUserAndCommentData;
}

function CommentItem({ comment }: IProps): ReactElement {
  return (
    <div className={styles.comment}>
      <div className={styles.info}>
        <img src={comment.imageUrl} alt="" />
        <div className={styles.infoText}>
          <div className={styles.username}>{comment.username}</div>
          <div> {new Date(comment.date).toLocaleString()}</div>
        </div>
      </div>
      <div className={styles.text}>{comment.text}</div>
    </div>
  );
}

export default CommentItem;
