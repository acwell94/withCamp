import { IQuery } from "../../../../commons/types/generated/types";

export interface IFreeBoardListContainer {
  fetchBoardsData?: Pick<IQuery, "fetchBoards">;
  fetchBoardsCountData?: Pick<IQuery, "fetchBoardsCount">;
  fetchBestBoardsData?: Pick<IQuery, "fetchBoardsOfTheBest">;
  fetchBoardsCountRefetch?: any;
  fetchBoardsRefetch?: any;
  totalItemCount?: number;
}

export interface IRegData {
  writer: string;
  password: string;
  title: string;
  contents: string;
  youtubeUrl: string;
  images: any;
}

export interface IFreeBoardWriteContainer {
  register: any;
  handleSubmit: any;
  getValues: any;
  formState: any;
  onClickReg: (data: IRegData) => void;
  onChangeContents: (value: string) => void;
  fileUrls: string[];
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface IFreeBoardDetailContainer {
  fetchBoardData?: any;
  onClickLike: () => void;
  onClickDisLike: () => void;
}
