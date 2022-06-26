import { IQuery } from "../../../../commons/types/generated/types";

export interface IFreeMarketListContainer {
  fetchUsedItemsData: Pick<IQuery, "fetchUseditems">;
  fetchUsedItemsOfTheBest: Pick<IQuery, "fetchUseditemsOfTheBest">;
  loadMore: any;
}
