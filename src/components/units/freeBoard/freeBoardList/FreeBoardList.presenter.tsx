import * as S from "./FreeBoardList.styles";
import { IFreeBoardListContainer } from "../freeBoardCommon/FreeBoard.types";
import { v4 as uuidv4 } from "uuid";
import onClickMove from "../../../hooks/useMove";
import PaginationContainer from "../../../commons/pagination/Pagination.container";
import CommonButton from "../../../commons/libraries/Button";

function FreeBoardListPresenter(props: IFreeBoardListContainer) {
  const { onClickMovetoPage } = onClickMove();
  console.log(props.fetchBestBoardsData?.fetchBoardsOfTheBest);
  return (
    <S.Main>
      <S.MainTitle>자유게시판</S.MainTitle>
      <S.ContentsSection>
        <S.BestContentsArticle>
          <S.WriteCommon>베스트 게시물</S.WriteCommon>
          <S.BestContentsCss>
            {props.fetchBestBoardsData?.fetchBoardsOfTheBest.map((el: any) => (
              <S.BestContentsItemSection key={uuidv4()}>
                <S.ItemImgArticle>
                  <S.ItemImg
                    src={
                      el.images[0]
                        ? `https://storage.googleapis.com/${el.images?.[0]}`
                        : `/images/campfire.jpg`
                    }
                  />
                </S.ItemImgArticle>
                <S.ItemArticle>
                  <S.ItemTitle>제목 : {el.title}</S.ItemTitle>
                </S.ItemArticle>
                <S.ItemArticle>
                  <S.ItemWriter>작성자 : {el.writer}님</S.ItemWriter>
                </S.ItemArticle>
                <S.ItemArticle>
                  <S.ItemCreated>{el.createdAt.slice(0, 10)}</S.ItemCreated>
                  <S.BestContentsCss>
                    <S.HeartImg src="/images/Heart.png" />
                    <S.ItemLikeCount>{el.likeCount}</S.ItemLikeCount>
                  </S.BestContentsCss>
                </S.ItemArticle>
              </S.BestContentsItemSection>
            ))}
          </S.BestContentsCss>
        </S.BestContentsArticle>
        <S.ContentsArticle>
          <S.WriteCommon>게시글 목록</S.WriteCommon>
          <S.ContentsArticleTitle>
            <S.ArticleElement>번호</S.ArticleElement>
            <S.ArticleElement>제목</S.ArticleElement>
            <S.ArticleElement>작성자</S.ArticleElement>
            <S.ArticleElement>작성일</S.ArticleElement>
          </S.ContentsArticleTitle>
          <S.ContentsListBorder>
            {props.fetchBoardsData?.fetchBoards.map((el, index) => (
              <S.ContentsArticleList key={uuidv4()} id={el._id}>
                <S.ArticleElement>{10 - index}</S.ArticleElement>
                <S.ArticleElement>{el.title}</S.ArticleElement>
                <S.ArticleElement>{el.writer} 님</S.ArticleElement>
                <S.ArticleElement>{el.createdAt.slice(0, 10)}</S.ArticleElement>
              </S.ContentsArticleList>
            ))}
          </S.ContentsListBorder>
        </S.ContentsArticle>
        <S.ButtonSection>
          <CommonButton
            type="button"
            contents="등록하기"
            onClick={onClickMovetoPage("/freeboard/write")}
          />
        </S.ButtonSection>
        <div>
          <PaginationContainer
            totalItemCount={props.fetchBoardsCountData?.fetchBoardsCount}
            refetch={props.fetchBoardsRefetch}
          />
        </div>
      </S.ContentsSection>
    </S.Main>
  );
}

export default FreeBoardListPresenter;
