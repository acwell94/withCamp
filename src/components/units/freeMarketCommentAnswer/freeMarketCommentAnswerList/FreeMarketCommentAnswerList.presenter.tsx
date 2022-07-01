import MarketCommentAnswerList from "../../../commons/marketCommentAnswerList/MarketCommentAnswerList";
import * as S from "./FreeMarketCommentAnswerList.styles";
import { v4 as uuidv4 } from "uuid";
function FreeMarketCommentAnswerListPresenter(props: any) {
  return (
    <S.CommentMain>
      {props.fetchUsedItemQAData?.fetchUseditemQuestionAnswers.map(
        (el: any) => (
          <MarketCommentAnswerList
            key={uuidv4()}
            el={el}
            fetchUserId={props.fetchUserId}
          />
        )
      )}
    </S.CommentMain>
  );
}

export default FreeMarketCommentAnswerListPresenter;
