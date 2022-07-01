import { IQuery } from "./../../../../commons/types/generated/types";
export interface IFreeMarketCommentListPresenter {
  fetchUsedItemQuestionsData: Pick<IQuery, "fetchUseditemQuestions">;
  loadMore: any;
  fetchUserData: Pick<IQuery, "fetchUserLoggedIn">;
}

export interface IFreeMarketDetailPresenter {
  fetchUserData: Pick<IQuery, "fetchUserLoggedIn">;
}
