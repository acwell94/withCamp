import { IFreeMarketListContainer } from "../freeMarketCommon/FreeMarket.types";
import * as S from "./FreeMarketList.styles";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";
import MarketItem from "../../../commons/marketItem/MarketItem";
import CommonButton from "../../../commons/libraries/Button";
import onClickMove from "../../../hooks/useMove";
import SearchBarPage from "../../../commons/searchBar/SearchBar";

function FreeMarketListPresenter(props: IFreeMarketListContainer) {
  const { onClickMovetoPage } = onClickMove();
  return (
    <S.Main>
      <S.MainTitle>with:Shop</S.MainTitle>
      <S.ContentsSection>
        <S.WriteCommon>베스트 상품</S.WriteCommon>
        <S.BestContentsArticle>
          <S.BestContentsCss>
            {props.fetchUsedItemsOfTheBest?.fetchUseditemsOfTheBest.map(
              (el) => (
                <MarketItem key={uuidv4()} el={el} id={el._id} />
              )
            )}
          </S.BestContentsCss>
        </S.BestContentsArticle>
        <S.ContentsArticle>
          <S.ContentsTitleSection>
            <S.WriteCommon>상품 목록</S.WriteCommon>
            <S.WriteCommon>
              <CommonButton
                type="button"
                contents="등록하기"
                onClick={onClickMovetoPage(`/freeMarket/write`)}
                disabled={!props.accessToken}
              />
            </S.WriteCommon>
          </S.ContentsTitleSection>
          <S.SearchBarSection>
            <SearchBarPage
              refetch={props.fetchUsedItemRefetch}
              onChangeKeyword={props.onChangeKeyword}
            />
          </S.SearchBarSection>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.loadMore}
            hasMore={true}
          >
            <S.ContentsCss>
              {props.fetchUsedItemsData?.fetchUseditems.map((el) => (
                <MarketItem
                  key={uuidv4()}
                  el={el}
                  id={el._id}
                  keyword={props.keyword}
                />
              ))}
            </S.ContentsCss>
          </InfiniteScroll>
        </S.ContentsArticle>
      </S.ContentsSection>
    </S.Main>
  );
}

export default FreeMarketListPresenter;
