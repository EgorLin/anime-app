import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../router";
import styles from "./CommentInput.module.scss";

interface IProps {
  isAuth: boolean;
  text: string;
  updateComment: (newText: string) => void;
  sendNewComment: () => void;
}

function CommentInputItem({
  isAuth,
  text,
  updateComment,
  sendNewComment,
}: IProps): ReactElement {
  return (
    <div className={styles.container}>
      {isAuth ? (
        <>
          <textarea
            rows={6}
            maxLength={10000}
            placeholder="Leave a comment..."
            value={text}
            onChange={(e) => updateComment(e.target.value)}
          ></textarea>
          <button
            onClick={sendNewComment}
            disabled={text.length === 0}
            className={[
              styles.button,
              text.length === 0 ? styles.disabledButton : "",
            ].join(" ")}
          >
            send
          </button>
        </>
      ) : (
        <span>
          Please,{" "}
          <Link to={RouteNames.LOGIN}>
            <span className={styles.logIn}>log in</span>
          </Link>{" "}
          to leave a comment
        </span>
      )}
    </div>
  );
}

export default CommentInputItem;
