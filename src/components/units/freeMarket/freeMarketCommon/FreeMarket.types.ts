import { IQuery } from "../../../../commons/types/generated/types";

export interface IFreeMarketListContainer {
  fetchUsedItemsData: Pick<IQuery, "fetchUseditems">;
  fetchUsedItemsOfTheBest: Pick<IQuery, "fetchUseditemsOfTheBest">;
  loadMore: any;
  accessToken?: any;
  keyword?: any;
  onChangeKeyword: (value: string) => void;
  fetchUsedItemRefetch: any;
}

export interface IFreeMarketDetailContainer {
  fetchUsedItemData: {
    _id: string;
    name: string;
    remarks: string;
    contents: string;
    price: number;
    tags: any;
    images: string;
    pickedCount: number;
    createdAt: string;
    seller: any;
    useditemAddress: any;
  };
  fetchUserData: any;
  onClickDelete: () => void;
  onClickPay: () => void;
  onClickPick: () => void;
}
