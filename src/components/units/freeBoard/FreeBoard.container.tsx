import { useQuery } from "@apollo/client";
import FreeBoardPresenter from "./FreeBoard.presenter";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./FreeBoard.queries";

function FreeBoardContainer() {
  const { data: fetchBoardsData, refetch: fetchBoardsRefetch } =
    useQuery(FETCH_BOARDS);
  const { data: fetchBoardsCountData, refetch: fetchBoardsCountRefetch } =
    useQuery(FETCH_BOARDS_COUNT);

  const { data: fetchBestBoardsData } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  return (
    <FreeBoardPresenter
      fetchBoardsData={fetchBoardsData}
      fetchBoardsCountData={fetchBoardsCountData}
      fetchBestBoardsData={fetchBestBoardsData}
      fetchBoardsCountRefetch={fetchBoardsCountRefetch}
      fetchBoardsRefetch={fetchBoardsRefetch}
    />
  );
}

export default FreeBoardContainer;
