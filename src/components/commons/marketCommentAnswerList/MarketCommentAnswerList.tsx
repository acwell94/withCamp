import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { DELETE_USEDITEM_QUESTION_ANSWER } from "../../units/freeMarketComment/freeMarketCommentCommon/FreeMarketComment.queries";
import { getDateDot } from "../libraries/Date";
import MarketCommentWrite from "../marketCommentWrite/MarketCommentWrite";
import * as S from "./MarketCommentAnswerList.styles";

function MarketCommentAnswerList(props) {
  const router = useRouter();
  const [isAnswerEdit, setIsAnswerEdit] = useState(false);
  const [isToolOpen, setIsToolOpen] = useState(false);
  const [deleteCommentAnswer] = useMutation(DELETE_USEDITEM_QUESTION_ANSWER);

  const onClickDelete = async () => {
    try {
      await deleteCommentAnswer({
        variables: {
          useditemQuestionAnswerId: String(props.el._id),
        },
      });
      alert("답글 삭제가 완료되었습니다.");
      router.replace(`/freeMarket/${router.query.marketId}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickToolOpen = () => {
    setIsToolOpen((prev) => !prev);
  };

  const onClickAnswerEdit = () => {
    setIsAnswerEdit((prev) => !prev);
  };

  return (
    <S.CommentMain>
      <S.CommentBorder>
        <S.CommentInfoSection>
          <S.InfoUserTitle>작성자 : {props.el.user.name}</S.InfoUserTitle>
          {props.el.user._id === props.fetchUserId ? (
            <>
              <S.EditDeleteBtn onClick={onClickToolOpen}>⁝</S.EditDeleteBtn>
              <S.EditDeleteTool isToolOpen={isToolOpen}>
                <S.EditBtn onClick={onClickAnswerEdit}>수정</S.EditBtn>
                <S.DeleteBtn onClick={onClickDelete}>삭제</S.DeleteBtn>
              </S.EditDeleteTool>
            </>
          ) : (
            ""
          )}
        </S.CommentInfoSection>
        <S.Contents>{props.el.contents}</S.Contents>
        <S.Date>{getDateDot(props.el.createdAt)}</S.Date>
      </S.CommentBorder>
      {isAnswerEdit ? (
        <S.ReplySection>
          <MarketCommentWrite
            isAnswerEdit={isAnswerEdit}
            setIsAnswerEdit={setIsAnswerEdit}
            answerData={props.el}
          />
        </S.ReplySection>
      ) : (
        ""
      )}
    </S.CommentMain>
  );
}

export default MarketCommentAnswerList;
