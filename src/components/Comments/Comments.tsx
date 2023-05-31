import { ReactElement, useEffect, useState } from "react";
import FirebaseService from "../../api/FirebaseService";
import { RequestStatuses } from "../../const/requestStatuses";
import { IUserAndCommentData } from "../../types/ICommentsData";
import { IUserData } from "../../types/IUserData";
import CommentsItem from "./CommentsItem";

interface IProps {
  animeId: string;
}

function Comments({ animeId }: IProps): ReactElement {
  const [comments, setComments] = useState<IUserAndCommentData[]>();
  const [status, setStatus] = useState(RequestStatuses.IDLE);

  async function fetchData() {
    setStatus(RequestStatuses.LOADING);

    const commentData = await FirebaseService.getCommentsData(animeId);
    if (commentData) {
      const userIds = new Set<string>();
      commentData.comments.forEach((comment) => userIds.add(comment.uid));

      const userData = new Map();
      for (let userId of Array.from(userIds)) {
        const detailedData = await FirebaseService.getUserData(userId);
        if (detailedData) {
          userData.set(userId, detailedData);
        }
      }

      const userAndCommentData = commentData.comments.map((comment) => {
        const user: IUserData = userData.get(comment.uid);

        return {
          uid: comment.uid,
          username: user.username,
          imageUrl: user.imageUrl,
          date: comment.date,
          text: comment.text,
        } as IUserAndCommentData;
      });

      setComments([...userAndCommentData].reverse());
      setStatus(RequestStatuses.SUCCEEDED);
    } else {
      setStatus(RequestStatuses.FAILED);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CommentsItem
      animeId={animeId}
      comments={comments}
      fetchData={fetchData}
      status={status}
    />
  );
}

export default Comments;
