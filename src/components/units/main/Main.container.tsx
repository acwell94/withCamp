import { useQuery } from "@apollo/client";
import { FETCH_BOARDS_OF_THE_BEST } from "../freeBoard/freeBoardCommon/FreeBoard.queries";
import MainPresenter from "./Main.presenter";

function MainContainer() {
  const { data: fetchBestBoardsData } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  return <MainPresenter fetchBestBoardsData={fetchBestBoardsData} />;
}
export default MainContainer;
