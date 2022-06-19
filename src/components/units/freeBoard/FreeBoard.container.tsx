import { useQuery } from "@apollo/client";
import FreeBoardPresenter from "./FreeBoard.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./FreeBoard.queries";

function FreeBoardContainer() {
  const { data: fetchBoardsData, refetch: fetchBoardsRefetch } =
    useQuery(FETCH_BOARDS);
  const { data: fetchBoardsCountData, refetch: fetchBoardsCountRefetch } =
    useQuery(FETCH_BOARDS_COUNT);

  return (
    <FreeBoardPresenter
      fetchBoardsData={fetchBoardsData}
      fetchBoardsCountData={fetchBoardsCountData}
      fetchBoardsCountRefetch={fetchBoardsCountRefetch}
      fetchBoardsRefetch={fetchBoardsRefetch}
    />
  );
}

export default FreeBoardContainer;
