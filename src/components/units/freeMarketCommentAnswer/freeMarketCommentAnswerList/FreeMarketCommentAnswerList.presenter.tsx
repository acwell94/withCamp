import MarketCommentAnswerList from "../../../commons/marketCommentAnswerList/MarketCommentAnswerList";
import * as S from "./FreeMarketCommentAnswerList.styles";
import { v4 as uuidv4 } from "uuid";
function FreeMarketCommentAnswerListPresenter(props) {
  console.log(props.fetchUsedItemQAData?.fetchUseditemQuestionAnswers, "5555");

  return (
    <S.CommentMain>
      {props.fetchUsedItemQAData?.fetchUseditemQuestionAnswers.map((el) => (
        <MarketCommentAnswerList key={uuidv4()} el={el} />
      ))}
    </S.CommentMain>
  );
}

export default FreeMarketCommentAnswerListPresenter;
