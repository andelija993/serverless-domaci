export interface IComment {
  username: string;
  desc: string;
  date: string;
}

export interface ICreateCommentRequest {
  username: string;
  desc: string;
}
