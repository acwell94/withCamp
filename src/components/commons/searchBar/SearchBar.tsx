import _ from "lodash";
import { ChangeEvent } from "react";
import * as S from "./SearchBar.styles";

function SearchBarPage(props) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 });
    props.refetchSearch({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <S.Main>
      <S.SearchInnerDiv>
        <S.SearchInput
          type="text"
          placeholder="제목을 검색해보세요"
          onChange={onChangeSearch}
        />
      </S.SearchInnerDiv>
    </S.Main>
  );
}

export default SearchBarPage;
