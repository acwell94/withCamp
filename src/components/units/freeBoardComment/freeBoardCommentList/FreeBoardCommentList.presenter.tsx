import Comment from "../../../commons/BoardComment/Comment";
import { IFreeBoardCommentListContainer } from "../freeBoardCommentCommon/FreeBoardComment.types";

function FreeBoardCommentListPresenter(props: IFreeBoardCommentListContainer) {
  return (
    <Comment
      data={props.commentListData?.fetchBoardComments}
      deleteComment={props.deleteComment}
      onClickOpenModal={props.onClickOpenModal}
      onChangePassword={props.onChangePassword}
      isOpen={props.isOpen}
      onClickCancel={props.onClickCancel}
    />
  );
}

export default FreeBoardCommentListPresenter;
