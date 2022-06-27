import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  LIKE_BOARD,
} from "../freeBoardCommon/FreeBoard.queries";
import FreeBoardDetailPresenter from "./FreeBoardDetail.presenter";

function FreeBoardDetailContainer(props: any) {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const onClickDelete = async () => {
    deleteBoard({
      variables: { boardId: router.query.boardId },
    });
    router.push(`/freeboard`);
  };

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: String(router.query.boardId) },
    });
    router.replace(`/freeboard/${router.query.boardId}`);
  };
  const onClickDisLike = () => {
    dislikeBoard({
      variables: { boardId: String(router.query.boardId) },
    });
    router.replace(`/freeboard/${router.query.boardId}`);
  };

  return (
    <div>
      <FreeBoardDetailPresenter
        fetchBoardData={props.fetchBoardData}
        onClickLike={onClickLike}
        onClickDisLike={onClickDisLike}
        onClickDelete={onClickDelete}
      />
    </div>
  );
}

export default FreeBoardDetailContainer;
