import * as S from "./FreeBoardList.styles";
import { IFreeBoardListContainer } from "../freeBoardCommon/FreeBoard.types";
import { v4 as uuidv4 } from "uuid";
import onClickMove from "../../../hooks/useMove";
import PaginationContainer from "../../../commons/pagination/Pagination.container";
import CommonButton from "../../../commons/libraries/Button";
import { getDateDot } from "../../../commons/libraries/Date";
import SearchBarPage from "../../../commons/searchBar/SearchBar";

function FreeBoardListPresenter(props: IFreeBoardListContainer) {
  const { onClickMovetoPage } = onClickMove();

  return (
    <S.Main>
      <S.MainTitle>자유게시판</S.MainTitle>
      <S.ContentsSection>
        <S.BestContentsArticle>
          <S.WriteCommon>베스트 게시물</S.WriteCommon>
          <S.BestContentsMedia>
            <S.BestContentsCss>
              {props.fetchBestBoardsData?.fetchBoardsOfTheBest.map(
                (el: any) => (
                  <S.BestContentsItemSection
                    key={uuidv4()}
                    id={el._id}
                    onClick={onClickMovetoPage(`/freeboard/${el._id}`)}
                  >
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
                      <S.ItemCreated>{getDateDot(el.createdAt)}</S.ItemCreated>
                      <S.BestContentsCss>
                        <S.HeartImg src="/images/Heart.png" />
                        <S.ItemLikeCount>{el.likeCount}</S.ItemLikeCount>
                      </S.BestContentsCss>
                    </S.ItemArticle>
                  </S.BestContentsItemSection>
                )
              )}
            </S.BestContentsCss>
          </S.BestContentsMedia>
        </S.BestContentsArticle>
        <S.ContentsArticle>
          <S.WriteCommon>게시글 목록</S.WriteCommon>

          <S.SearchBarSection>
            <SearchBarPage
              refetch={props.fetchBoardsRefetch}
              refetchSearch={props.fetchBoardsCountRefetch}
              onChangeKeyword={props.onChangeKeyword}
            />
          </S.SearchBarSection>

          <S.ContentsArticleTitle>
            <S.ArticleElement>제목</S.ArticleElement>
            <S.ArticleElement>작성자</S.ArticleElement>
            <S.ArticleElement>작성일</S.ArticleElement>
          </S.ContentsArticleTitle>
          <S.ContentsListBorder>
            {props.fetchBoardsData?.fetchBoards.map((el) => (
              <S.ContentsArticleList
                key={uuidv4()}
                id={el._id}
                onClick={onClickMovetoPage(`/freeboard/${el._id}`)}
              >
                <S.ArticleElement>
                  {el.title
                    .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                    .split("#$%")
                    .map((el: any) => (
                      <S.SearchResult key={uuidv4()}>{el}</S.SearchResult>
                    ))}
                </S.ArticleElement>

                <S.ArticleElement>{el.writer} 님</S.ArticleElement>
                <S.ArticleElement>{getDateDot(el.createdAt)}</S.ArticleElement>
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
