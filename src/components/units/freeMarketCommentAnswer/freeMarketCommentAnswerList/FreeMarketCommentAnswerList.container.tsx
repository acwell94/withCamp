import { useQuery } from "@apollo/client";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "../../freeMarketComment/freeMarketCommentCommon/FreeMarketComment.queries";
import FreeMarketCommentAnswerListPresenter from "./FreeMarketCommentAnswerList.presenter";

interface IMarketCommentList {
  commentId: String;
  fetchUserId: String;
}

function FreeMarketCommentAnswerListContainer(props: IMarketCommentList) {
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
      fetchUserId={props.fetchUserId}
    />
  );
}

export default FreeMarketCommentAnswerListContainer;
