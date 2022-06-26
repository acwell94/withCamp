import { useQuery } from "@apollo/client";
import { FETCH_BOARDS_OF_THE_BEST } from "../freeBoard/freeBoardCommon/FreeBoard.queries";
import { FETCH_USED_ITEMS_OF_THE_BEST } from "../freeMarket/freeMarketCommon/FreeMarket.queries";
import MainPresenter from "./Main.presenter";

function MainContainer() {
  const { data: fetchBestBoardsData } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const { data: fetchUsedItemsOfTheBest } = useQuery(
    FETCH_USED_ITEMS_OF_THE_BEST
  );
  return (
    <MainPresenter
      fetchBestBoardsData={fetchBestBoardsData}
      fetchUsedItemsOfTheBest={fetchUsedItemsOfTheBest}
    />
  );
}
export default MainContainer;
