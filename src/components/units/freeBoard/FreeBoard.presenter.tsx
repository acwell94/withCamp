import * as S from "./FreeBoard.styles";
import { IFreeBoardContainer } from "./FreeBoard.types";
import { v4 as uuidv4 } from "uuid";
import PaginationPage from "../../commons/pagination/Pagination";

function FreeBoardPresenter(props: IFreeBoardContainer) {
  return (
    <S.Main>
      <S.WriteCommon>자유게시판</S.WriteCommon>
      <S.ContentsSection>
        <S.BestContentsArticle>
          <S.WriteCommon>베스트 게시물</S.WriteCommon>
          <div>글</div>
        </S.BestContentsArticle>
        <S.ContentsArticle>
          <S.WriteCommon>게시글 목록</S.WriteCommon>
          <S.ContentsArticleTitle>
            <S.ArticleElement>번호</S.ArticleElement>
            <S.ArticleElement>제목</S.ArticleElement>
            <S.ArticleElement>작성자</S.ArticleElement>
          </S.ContentsArticleTitle>
          <S.ContentsListBorder>
            {props.fetchBoardsData?.fetchBoards.map((el, index) => (
              <S.ContentsArticleList key={uuidv4()} id={el._id}>
                <S.ArticleElement>{10 - index}</S.ArticleElement>
                <S.ArticleElement>{el.title}</S.ArticleElement>
                <S.ArticleElement>{el.writer} 님</S.ArticleElement>
              </S.ContentsArticleList>
            ))}
          </S.ContentsListBorder>
        </S.ContentsArticle>
        <div>
          <PaginationPage
            totalItemCount={props.fetchBoardsCountData?.fetchBoardsCount}
            refetch={props.fetchBoardsRefetch}
          />
        </div>
      </S.ContentsSection>
    </S.Main>
  );
}

export default FreeBoardPresenter;
