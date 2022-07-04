import CommonCommentLongInput from "../../../commons/libraries/CommentLongInput";
import CommonCommentShortInput from "../../../commons/libraries/CommentShortInput";
import ToogleButton from "../../../commons/libraries/ToogleButtony";
import { IFreeBoardCommentWriteContainer } from "../freeBoardCommentCommon/FreeBoardComment.types";
import * as S from "./FreeBoardCommentWrite.styles";

function FreeBoardCommentWritePresenter(
  props: IFreeBoardCommentWriteContainer
) {
  return (
    <S.Main onSubmit={props.handleSubmit(props.onClickCommentReg)}>
      <S.CommentTitle>댓글쓰기</S.CommentTitle>

      <S.CommentInfoSection>
        <S.CommentInfo>
          <S.CommentInfoCss>
            <S.CommentInfoTitle>작성자</S.CommentInfoTitle>
            <div>
              <CommonCommentShortInput
                type="text"
                register={props.register("writer")}
              />
            </div>
          </S.CommentInfoCss>
          <S.ContentsNumberError>
            <S.ErrorMsg>{props.formState.errors.writer?.message}</S.ErrorMsg>
            <S.ContentsInvisible>1</S.ContentsInvisible>
          </S.ContentsNumberError>
        </S.CommentInfo>

        <S.CommentInfo>
          <S.CommentInfoCss>
            <S.CommentInfoTitle>비밀번호</S.CommentInfoTitle>
            <div>
              <CommonCommentShortInput
                type="password"
                register={props.register("password")}
              />
            </div>
          </S.CommentInfoCss>
          <S.ContentsNumberError>
            <S.ErrorMsg>{props.formState.errors.password?.message}</S.ErrorMsg>
            <S.ContentsInvisible>1</S.ContentsInvisible>
          </S.ContentsNumberError>
        </S.CommentInfo>

        <S.CommentInfoCss>
          <S.CommentInfoTitle>평점</S.CommentInfoTitle>
          <S.Rating onChange={props.onChangeRating}></S.Rating>
        </S.CommentInfoCss>
      </S.CommentInfoSection>

      <div>
        <S.CommentContentsTitle>댓글</S.CommentContentsTitle>
        <div>
          <CommonCommentLongInput
            type="text"
            register={props.register("contents")}
            maxLength={100}
            placeholder="댓글을 등록해 주세요"
          />
        </div>
        <S.ContentsNumberError>
          <S.ErrorMsg>{props.formState.errors.contents?.message}</S.ErrorMsg>
          <S.ContentsNumber>
            {props.watch()?.contents?.length}/100
          </S.ContentsNumber>
        </S.ContentsNumberError>
      </div>

      <S.ButtonSection>
        <ToogleButton
          type="submit"
          contents="등록"
          isActive={props.isComplete}
        />
      </S.ButtonSection>
    </S.Main>
  );
}

export default FreeBoardCommentWritePresenter;
