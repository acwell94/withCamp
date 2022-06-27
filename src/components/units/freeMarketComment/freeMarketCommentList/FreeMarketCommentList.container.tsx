import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM_QUESTIONS } from "../freeMarketCommentCommon/FreeMarketComment.queries";
import FreeMarketCommentListPresenter from "./FreeMarketCommentList.presenter";

function FreeMarketCommentListContainer(props) {
  const router = useRouter();

  const { data: fetchUsedItemQuestionsData, fetchMore } = useQuery(
    FETCH_USED_ITEM_QUESTIONS,
    {
      variables: {
        useditemId: String(router.query.marketId),
      },
    }
  );

  const loadMore = () => {
    if (!fetchUsedItemQuestionsData) return;
    fetchMore({
      variables: {
        page:
          Math.ceil(
            fetchUsedItemQuestionsData.fetchUseditemQuestions.length / 10
          ) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult?.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <FreeMarketCommentListPresenter
      fetchUsedItemQuestionsData={fetchUsedItemQuestionsData}
      loadMore={loadMore}
    />
  );
}

export default FreeMarketCommentListContainer;
