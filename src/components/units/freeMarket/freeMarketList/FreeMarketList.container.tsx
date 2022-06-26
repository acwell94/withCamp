import { useQuery } from "@apollo/client";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "../freeMarketCommon/FreeMarket.queries";
import FreeMarketListPresenter from "./FreeMarketList.presenter";

function FreeMarketListContainer() {
  const { data: fetchUsedItemsData, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const { data: fetchUsedItemsOfTheBest } = useQuery(
    FETCH_USED_ITEMS_OF_THE_BEST
  );

  const loadMore = () => {
    if (!fetchUsedItemsData) return;
    fetchMore({
      variables: {
        page: Math.ceil(fetchUsedItemsData.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <FreeMarketListPresenter
      fetchUsedItemsData={fetchUsedItemsData}
      fetchUsedItemsOfTheBest={fetchUsedItemsOfTheBest}
      loadMore={loadMore}
    />
  );
}

export default FreeMarketListContainer;
