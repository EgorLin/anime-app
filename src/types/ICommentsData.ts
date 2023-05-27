export interface IComment {
  uid: string;
  date: number;
  text: string;
}

export interface ICommentsData {
  comments: IComment[];
}

export interface IUserAndCommentData {
  uid: string;
  username: string;
  imageUrl: string;
  date: number;
  text: string;
}
