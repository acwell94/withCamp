import { IQuery } from "../../../../commons/types/generated/types";

export interface IFreeBoardListContainer {
  fetchBoardsData?: Pick<IQuery, "fetchBoards">;
  fetchBoardsCountData?: Pick<IQuery, "fetchBoardsCount">;
  fetchBestBoardsData?: Pick<IQuery, "fetchBoardsOfTheBest">;
  fetchUsedItemsOfTheBest?: Pick<IQuery, "fetchUseditemsOfTheBest">;
  fetchBoardsCountRefetch?: any;
  fetchBoardsRefetch?: any;
  totalItemCount?: number;
}

export interface IData {
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
  onClickReg: (data: IData) => void;
  onChangeContents: (value: string) => void;
  fileUrls: string[];
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  isComplete: boolean;
  onClickEdit: (data: IData) => void;
  isEdit: boolean | undefined;
  fetchBoardData: Pick<IQuery, "fetchBoard">;
  setAddress: any;
}

export interface IFreeBoardDetailContainer {
  fetchBoardData?: any;
  onClickLike: () => void;
  onClickDisLike: () => void;
  onClickDelete: () => void;
}
