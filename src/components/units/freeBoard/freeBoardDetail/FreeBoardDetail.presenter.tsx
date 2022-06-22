import * as S from "./FreeBoardDetail.styles";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";
import ReactPlayer from "react-player";
import { IFreeBoardDetailContainer } from "../freeBoardCommon/FreeBoard.types";

function FreeBoardDetailPresenter(props: IFreeBoardDetailContainer) {
  console.log(props.fetchBoardData?.fetchBoard);
  return (
    <S.Main>
      <S.MainTitle>
        자유게시판 &gt; {props.fetchBoardData?.fetchBoard.writer} 님의 글
      </S.MainTitle>
      <S.ContentsSection>
        <S.ContentsTitle>
          {props.fetchBoardData?.fetchBoard.title}
        </S.ContentsTitle>
        <S.WriterDate>
          {props.fetchBoardData?.fetchBoard.writer} 님 |{" "}
          {props.fetchBoardData?.fetchBoard.createdAt.slice(0, 10)}
        </S.WriterDate>
        <S.ContentsBodyArticle>
          {/* <S.ContentImageArticle> */}
          {props.fetchBoardData?.fetchBoard.images
            ?.filter((el: string) => el)
            .map((el: string[]) => (
              <S.Image
                key={uuidv4()}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}
          {/* </S.ContentImageArticle> */}
          {typeof window !== "undefined" && (
            <div
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(
                  props.fetchBoardData?.fetchBoard.contents
                ),
              }}
            />
          )}

          {props.fetchBoardData?.fetchBoard.youtubeUrl && (
            <ReactPlayer
              url={String(props.fetchBoardData?.fetchBoard.youtubeUrl)}
              playing={true}
              muted={true}
              width="700px"
              height="500px"
            />
          )}
        </S.ContentsBodyArticle>
        <S.LikeArticle>
          <S.LikeDiv>
            <S.LikeImg
              onClick={props.onClickLike}
              src="/images/like.png
            "
            />
            <div>{props.fetchBoardData?.fetchBoard.likeCount}</div>
          </S.LikeDiv>
          <S.LikeDiv>
            <S.LikeImg
              onClick={props.onClickDisLike}
              src="/images/dislike.png
            "
            />
            <div>{props.fetchBoardData?.fetchBoard.dislikeCount}</div>
          </S.LikeDiv>
        </S.LikeArticle>
      </S.ContentsSection>
    </S.Main>
  );
}

export default FreeBoardDetailPresenter;
