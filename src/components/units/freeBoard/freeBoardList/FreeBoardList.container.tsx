import { useQuery } from "@apollo/client";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "../freeBoardCommon/FreeBoard.queries";
import FreeBoardListPresenter from "./FreeBoardList.presenter";

function FreeBoardListContainer() {
  const { data: fetchBoardsData, refetch: fetchBoardsRefetch } =
    useQuery(FETCH_BOARDS);
  const { data: fetchBoardsCountData, refetch: fetchBoardsCountRefetch } =
    useQuery(FETCH_BOARDS_COUNT);

  const { data: fetchBestBoardsData } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  return (
    <FreeBoardListPresenter
      fetchBoardsData={fetchBoardsData}
      fetchBoardsCountData={fetchBoardsCountData}
      fetchBestBoardsData={fetchBestBoardsData}
      fetchBoardsCountRefetch={fetchBoardsCountRefetch}
      fetchBoardsRefetch={fetchBoardsRefetch}
    />
  );
}

export default FreeBoardListContainer;
