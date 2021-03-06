import * as S from "./FreeBoardDetail.styles";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";
import ReactPlayer from "react-player";
import { IFreeBoardDetailContainer } from "../freeBoardCommon/FreeBoard.types";
import CommonButton from "../../../commons/libraries/Button";
import onClickMove from "../../../hooks/useMove";
import FreeBoardCommentListContainer from "../../freeBoardComment/freeBoardCommentList/FreeBoardCommentList.container";
import FreeBoardCommentWriteContainer from "../../freeBoardComment/freeBoardCommenWrite/FreeBoardCommentWrite.container";
import CampKaKaoMapDetailPage from "../../../commons/campMapDetail/CampMapDetail";
import { getDateDot } from "../../../commons/libraries/Date";

function FreeBoardDetailPresenter(props: IFreeBoardDetailContainer) {
  const { onClickMovetoPage } = onClickMove();

  return (
    <S.Main>
      <S.MainTitle>
        자유게시판 &gt; <S.Name>{props.fetchBoardData?.writer}</S.Name>
        님의 글
      </S.MainTitle>
      <S.ContentsSection>
        <S.ContentsTitle>{props.fetchBoardData?.title}</S.ContentsTitle>
        <S.WriterDate>
          {props.fetchBoardData?.writer} 님 |{" "}
          {getDateDot(props.fetchBoardData?.createdAt)}
        </S.WriterDate>

        <S.ContentsBodyArticle>
          {props.fetchBoardData?.images
            ?.filter((el: string) => el)
            .map((el: string[]) => (
              <S.Image
                key={uuidv4()}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}

          <div>
            {typeof window !== "undefined" && (
              <S.ContentsStyle
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(props.fetchBoardData?.contents),
                }}
              />
            )}
          </div>

          {!props.fetchBoardData?.boardAddress?.address ? (
            <S.NoMapMessage>모임장소가 없네요...ㅠㅠ</S.NoMapMessage>
          ) : (
            <S.MapBox>
              <CampKaKaoMapDetailPage
                lat={props.fetchBoardData?.boardAddress?.address}
                lng={props.fetchBoardData?.boardAddress?.zipcode}
                placeName={props.fetchBoardData?.boardAddress?.addressDetail}
              />
            </S.MapBox>
          )}
          <S.ReactPlayerArticle>
            {props.fetchBoardData?.youtubeUrl && (
              <ReactPlayer
                url={String(props.fetchBoardData?.youtubeUrl)}
                playing={true}
                muted={true}
                width="100%"
                height="100%"
              />
            )}
          </S.ReactPlayerArticle>
        </S.ContentsBodyArticle>
        <S.ButtonArticle>
          <div>
            <CommonButton
              type="button"
              contents="목록으로"
              onClick={onClickMovetoPage("/freeboard")}
            />
          </div>
          <S.EditButtonDiv>
            <CommonButton
              type="button"
              contents="수정하기"
              onClick={onClickMovetoPage(
                `/freeboard/${props.fetchBoardData?._id}/edit`
              )}
            />
          </S.EditButtonDiv>
          <div>
            <CommonButton
              type="button"
              contents="삭제하기"
              onClick={props.onClickDelete}
            />
          </div>
        </S.ButtonArticle>
        <S.LikeArticle>
          <S.LikeDiv>
            <S.LikeImg
              onClick={props.onClickLike}
              src="/images/like.png
            "
            />
            <div>{props.fetchBoardData?.likeCount}</div>
          </S.LikeDiv>
          <S.LikeDiv>
            <S.LikeImg
              onClick={props.onClickDisLike}
              src="/images/dislike.png
            "
            />
            <div>{props.fetchBoardData?.dislikeCount}</div>
          </S.LikeDiv>
        </S.LikeArticle>
        <S.CommentWriteArticle>
          <FreeBoardCommentWriteContainer />
        </S.CommentWriteArticle>
        <S.CommentWriteArticle>
          <FreeBoardCommentListContainer />
        </S.CommentWriteArticle>
      </S.ContentsSection>
    </S.Main>
  );
}

export default FreeBoardDetailPresenter;
