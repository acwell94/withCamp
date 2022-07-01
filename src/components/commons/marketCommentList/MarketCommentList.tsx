import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { DELETE_USEDITEM_QUESTION } from "../../units/freeMarketComment/freeMarketCommentCommon/FreeMarketComment.queries";
import FreeMarketCommentAnswerListContainer from "../../units/freeMarketCommentAnswer/freeMarketCommentAnswerList/FreeMarketCommentAnswerList.container";
import { getDateDot } from "../libraries/Date";
import MarketCommentWrite from "../marketCommentWrite/MarketCommentWrite";
import * as S from "./MarketCommentList.styles";

function MarketCommentList(props: any) {
  const router = useRouter();
  const [isAnswer, setIsAnswer] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isToolOpen, setIsToolOpen] = useState(false);
  const [deleteComment] = useMutation(DELETE_USEDITEM_QUESTION);

  const onClickAnswer = () => {
    setIsEdit(false);
    setIsAnswer((prev) => !prev);
  };

  const onClickEdit = () => {
    setIsAnswer(false);
    setIsEdit((prev) => !prev);
  };

  const onClickToolOpen = () => {
    setIsToolOpen((prev) => !prev);
  };

  const onClickDelete = async () => {
    try {
      await deleteComment({
        variables: {
          useditemQuestionId: props.el._id,
        },
      });
      alert("댓글 삭제가 완료되었습니다.");
      router.replace(`/freeMarket/${router.query.marketId}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <S.CommentMain>
      <S.CommentBorder>
        <S.CommentInfoSection>
          <S.InfoUserTitle>작성자 : {props.el.user.name}</S.InfoUserTitle>
          {props.el.user._id === props.fetchUserData?.fetchUserLoggedIn._id ? (
            <>
              <S.EditDeleteBtn onClick={onClickToolOpen}>⁝</S.EditDeleteBtn>
              <S.EditDeleteTool isToolOpen={isToolOpen}>
                <S.EditBtn onClick={onClickEdit}>수정</S.EditBtn>
                <S.DeleteBtn onClick={onClickDelete}>삭제</S.DeleteBtn>
              </S.EditDeleteTool>
            </>
          ) : (
            ""
          )}
        </S.CommentInfoSection>
        <S.Contents>{props.el.contents}</S.Contents>
        <S.Date>{getDateDot(props.el.createdAt)}</S.Date>
        <div>
          <S.ReplyBtn onClick={onClickAnswer}>답글</S.ReplyBtn>
        </div>
      </S.CommentBorder>
      {isAnswer || isEdit ? (
        <S.ReplySection>
          <MarketCommentWrite
            isAnswer={isAnswer}
            setIsAnswer={setIsAnswer}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            data={props.el}
          />
        </S.ReplySection>
      ) : (
        ""
      )}
      <div>
        <FreeMarketCommentAnswerListContainer
          commentId={props.el._id}
          fetchUserId={props.fetchUserData?.fetchUserLoggedIn._id}
        />
      </div>
    </S.CommentMain>
  );
}

export default MarketCommentList;
