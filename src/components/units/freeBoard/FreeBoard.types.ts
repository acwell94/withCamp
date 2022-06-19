import { IQuery } from "../../../commons/types/generated/types";

export interface IFreeBoardContainer {
  fetchBoardsData: Pick<IQuery, "fetchBoards">;
  fetchBoardsCountData: Pick<IQuery, "fetchBoardsCount">;
}
