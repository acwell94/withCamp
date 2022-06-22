import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DISLIKE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
} from "../freeBoardCommon/FreeBoard.queries";
import FreeBoardDetailPresenter from "./FreeBoardDetail.presenter";

function FreeBoardDetailContainer() {
  const router = useRouter();
  const { data: fetchBoardData } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };
  const onClickDisLike = () => {
    dislikeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  return (
    <FreeBoardDetailPresenter
      fetchBoardData={fetchBoardData}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
    />
  );
}

export default FreeBoardDetailContainer;
