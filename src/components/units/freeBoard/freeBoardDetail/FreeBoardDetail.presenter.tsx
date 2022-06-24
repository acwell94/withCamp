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

function FreeBoardDetailPresenter(props: IFreeBoardDetailContainer) {
  const { onClickMovetoPage } = onClickMove();

  return (
    <S.Main>
      <S.MainTitle>
        자유게시판 &gt; {props.fetchBoardData?.writer} 님의 글
      </S.MainTitle>
      <S.ContentsSection>
        <S.ContentsTitle>{props.fetchBoardData?.title}</S.ContentsTitle>
        <S.WriterDate>
          {props.fetchBoardData?.writer} 님 |{" "}
          {props.fetchBoardData?.createdAt.slice(0, 10)}
        </S.WriterDate>
        <S.ContentsBodyArticle>
          {/* <S.ContentImageArticle> */}
          {props.fetchBoardData?.images
            ?.filter((el: string) => el)
            .map((el: string[]) => (
              <S.Image
                key={uuidv4()}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}
          {/* </S.ContentImageArticle> */}
          <div>
            {typeof window !== "undefined" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(props.fetchBoardData?.contents),
                }}
              />
            )}
          </div>
          {!props.fetchBoardData?.boardAddress?.address.length ? (
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

          {props.fetchBoardData?.youtubeUrl && (
            <ReactPlayer
              url={String(props.fetchBoardData?.youtubeUrl)}
              playing={true}
              muted={true}
              width="700px"
              height="500px"
            />
          )}
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
        <div>
          <FreeBoardCommentWriteContainer />
        </div>
        <div>
          <FreeBoardCommentListContainer />
        </div>
      </S.ContentsSection>
    </S.Main>
  );
}

export default FreeBoardDetailPresenter;
