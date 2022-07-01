import { IQuery } from "../../../commons/types/generated/types";

export interface IMyPageContainer {
  fetchUserData?: any;
  selectTap?: (event: any) => void;
  tap?: any;
  selectedTap?: any;
  fetchIPickedData?: Pick<IQuery, "fetchUseditemsIPicked">;
  fetchPickedCountData?: Pick<IQuery, "fetchUseditemsCountIPicked">;
  fetchIPickedDataRefetch?: any;
  fetchSoldCountData?: Pick<IQuery, "fetchUseditemsCountISold">;
  fetchSellingCountData?: Pick<IQuery, "fetchPointTransactionsCountOfSelling">;
  fetchISoldData?: Pick<IQuery, "fetchUseditemsISold">;
  fetchISoldDataRefetch?: any;
  fetchBoughtCountData?: Pick<IQuery, "fetchUseditemsCountIBought">;
  fetchIBoughtData?: Pick<IQuery, "fetchUseditemsIBought">;
  fetchIBoughtDataRefetch?: any;
  fetchPointCountData?: Pick<IQuery, "fetchPointTransactionsCountOfLoading">;
  fetchPointData?: Pick<IQuery, "fetchPointTransactionsOfLoading">;
  fetchPointDataRefetch?: any;
}
