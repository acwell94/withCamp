import { ChangeEvent } from "react";

export interface IFreeBoardCommentListContainer {
  commentListData: any;
  deleteComment: () => void;
  onClickOpenModal: (event: any) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCancel: () => void;
  isOpen: boolean;
}

export interface ICommentData {
  writer: string;
  password: string;
  contents: string;
  rating: number;
}

export interface IFreeBoardCommentWriteContainer {
  register: any;
  handleSubmit: any;
  formState: any;
  watch: any;
  onClickCommentReg: (data: ICommentData) => void;
  onChangeRating: (value: number) => void;
  isComplete: boolean;
}
