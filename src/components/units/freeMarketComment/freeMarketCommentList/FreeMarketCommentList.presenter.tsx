import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import MarketCommentList from "../../../commons/marketCommentList/MarketCommentList";
import MarketCommentWrite from "../../../commons/marketCommentWrite/MarketCommentWrite";
import { IFreeMarketCommentListPresenter } from "../freeMarketCommentCommon/FreeMarketComment.types";

import * as S from "./FreeMarketCommentList.styles";

function FreeMarketCommentListPresenter(
  props: IFreeMarketCommentListPresenter
) {
  return (
    <S.Main>
      <MarketCommentWrite />
      <InfiniteScroll pageStart={0} loadMore={props.loadMore} hasMore={true}>
        <div>
          {props.fetchUsedItemQuestionsData?.fetchUseditemQuestions.map(
            (el: any) => (
              <div key={uuidv4()}>
                <MarketCommentList
                  el={el}
                  fetchUserData={props.fetchUserData}
                />
              </div>
            )
          )}
        </div>
      </InfiniteScroll>
    </S.Main>
  );
}

export default FreeMarketCommentListPresenter;
