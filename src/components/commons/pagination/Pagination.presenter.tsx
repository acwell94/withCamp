import * as S from "./Pagination.styles";
import { v4 as uuidv4 } from "uuid";
import { IPaginationContainer } from "./Pagination.types";
function PaginationPresenter(props: IPaginationContainer) {
  return (
    <S.Main>
      <S.PageNationSection>
        <S.PageNextArticle onClick={props.onClickPrevPage}>◀</S.PageNextArticle>
        {new Array(10).fill(1).map(
          (_, index) =>
            props.startPage + index <= props.lastPage && (
              <S.PageNumberArticle
                key={uuidv4()}
                onClick={props.onClickPage}
                id={String(props.startPage + index)}
                isActive={props.startPage + index === props.activePage}
              >
                {props.startPage + index}
              </S.PageNumberArticle>
            )
        )}
        <S.PageNextArticle onClick={props.onClickNextPage}>▶</S.PageNextArticle>
      </S.PageNationSection>
    </S.Main>
  );
}

export default PaginationPresenter;
