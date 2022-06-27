import FreeMarketCommentAnswerListContainer from "../../units/freeMarketCommentAnswer/freeMarketCommentAnswerList/FreeMarketCommentAnswerList.container";
import { getDateDot } from "../libraries/Date";
import * as S from "./MarketCommentList.styles";

function MarketCommentList(props) {
  return (
    <S.CommentMain>
      <S.CommentBorder>
        <S.CommentInfoSection>
          <S.InfoUserTitle>작성자 : {props.el.user.name}</S.InfoUserTitle>
          <S.EditDeleteBtn>⁝</S.EditDeleteBtn>
          <S.EditDeleteTool>
            <S.EditBtn>수정</S.EditBtn>
            <S.DeleteBtn>삭제</S.DeleteBtn>
          </S.EditDeleteTool>
        </S.CommentInfoSection>
        <S.Contents>{props.el.contents}</S.Contents>
        <S.Date>{getDateDot(props.el.createdAt)}</S.Date>
        <div>
          <S.ReplyBtn>답글</S.ReplyBtn>
        </div>
      </S.CommentBorder>

      <div>
        <FreeMarketCommentAnswerListContainer commentId={props.el._id} />
      </div>
    </S.CommentMain>
  );
}

export default MarketCommentList;
