import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import MarketCommentList from "../../../commons/marketCommentList/MarketCommentList";

import * as S from "./FreeMarketCommentList.styles";

function FreeMarketCommentListPresenter(props) {
  return (
    <S.Main>
      <InfiniteScroll pageStart={0} loadMore={props.loadMore} hasMore={true}>
        <div>
          {props.fetchUsedItemQuestionsData?.fetchUseditemQuestions.map(
            (el: any) => (
              <div key={uuidv4()}>
                <MarketCommentList el={el} />
              </div>
            )
          )}
        </div>
      </InfiniteScroll>
    </S.Main>
  );
}

export default FreeMarketCommentListPresenter;
