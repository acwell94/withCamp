import { IQuery } from "../../../commons/types/generated/types";

export interface IFreeBoardContainer {
  fetchBoardsData?: Pick<IQuery, "fetchBoards">;
  fetchBoardsCountData?: Pick<IQuery, "fetchBoardsCount">;
  fetchBestBoardsData?: Pick<IQuery, "fetchBoardsOfTheBest">;
  fetchBoardsCountRefetch?: any;
  fetchBoardsRefetch?: any;
  totalItemCount?: number;
}
