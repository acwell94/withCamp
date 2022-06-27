import { useQuery } from "@apollo/client";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "../../freeMarketComment/freeMarketCommentCommon/FreeMarketComment.queries";
import FreeMarketCommentAnswerListPresenter from "./FreeMarketCommentAnswerList.presenter";

function FreeMarketCommentAnswerListContainer(props) {
  const { data: fetchUsedItemQAData } = useQuery(
    FETCH_USEDITEM_QUESTION_ANSWERS,
    {
      variables: {
        useditemQuestionId: String(props.commentId),
      },
    }
  );

  return (
    <FreeMarketCommentAnswerListPresenter
      fetchUsedItemQAData={fetchUsedItemQAData}
    />
  );
}

export default FreeMarketCommentAnswerListContainer;
