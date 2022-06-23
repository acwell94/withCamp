import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "../freeBoardCommentCommon/FreeBoardComment.queries";
import FreeBoardCommentListPresenter from "./FreeBoardCommentList.presenter";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";

function FreeBoardCommentListContainer() {
  const router = useRouter();
  const [deleteId, setDeleteId] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { data: commentListData } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const deleteComment = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: deleteId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: String(router.query.boardId),
            },
          },
        ],
      });
      setIsOpen(false);
      setDeleteId("");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickOpenModal = (event: any) => {
    setIsOpen(true);
    if (event.target) setDeleteId(event.target.id);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickCancel = () => {
    setIsOpen(false);
  };

  return (
    <FreeBoardCommentListPresenter
      commentListData={commentListData}
      deleteComment={deleteComment}
      onClickOpenModal={onClickOpenModal}
      onChangePassword={onChangePassword}
      onClickCancel={onClickCancel}
      isOpen={isOpen}
    />
  );
}

export default FreeBoardCommentListContainer;
