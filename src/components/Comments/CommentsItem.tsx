import { ReactElement } from "react";
import { RequestStatuses } from "../../const/requestStatuses";
import { IUserAndCommentData } from "../../types/ICommentsData";
import Comment from "../Comment/Comment";
import CommentInput from "../CommentInput/CommentInput";

interface IProps {
  animeId: string;
  comments: IUserAndCommentData[] | undefined;
  fetchData: () => void;
  status: string;
}

function CommentsItem({
  animeId,
  fetchData,
  comments,
  status,
}: IProps): ReactElement {
  return (
    <div className="wrapperM">
      <CommentInput
        animeId={animeId}
        comments={comments}
        fetchData={fetchData}
      />
      {status === RequestStatuses.SUCCEEDED && (
        <div>
          {comments?.map((comment) => (
            <Comment key={String(comment.date)} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentsItem;
