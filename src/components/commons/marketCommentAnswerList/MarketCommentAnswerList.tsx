import { getDateDot } from "../libraries/Date";
import * as S from "./MarketCommentAnswerList.styles";

function MarketCommentAnswerList(props) {
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
      </S.CommentBorder>
    </S.CommentMain>
  );
}

export default MarketCommentAnswerList;
