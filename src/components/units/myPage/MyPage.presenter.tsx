import * as S from "./MyPage.styles";
import PointCharge from "../../commons/pointCharge/PointCharge";
import { v4 as uuidv4 } from "uuid";
import { getDateDot } from "../../commons/libraries/Date";
import PaginationContainer from "../../commons/pagination/Pagination.container";
import { PointComma } from "../../commons/libraries/point";
import onClickMove from "../../hooks/useMove";
function MyPagePresenter(props) {
  const { onClickMovetoPage } = onClickMove();
  return (
    <S.Main>
      <S.MainTitle>마이페이지</S.MainTitle>
      <S.InfoSection>
        <S.InfoNameChargeArticle>
          <S.InfoName>
            안녕하세요{" "}
            <S.Name>{props.fetchUserData?.fetchUserLoggedIn.name}</S.Name>님
          </S.InfoName>
          <PointCharge fetchUserData={props.fetchUserData} />
        </S.InfoNameChargeArticle>

        <S.UserHistoryArticle>
          <S.CommonHistorySection>
            <S.HistoryTitle>찜목록</S.HistoryTitle>
            <S.HistoryCount>
              {props.fetchPickedCountData?.fetchUseditemsCountIPicked}
            </S.HistoryCount>
          </S.CommonHistorySection>

          <S.CommonHistorySection
            style={{
              padding: "0px 20px",
              margin: "0px 20px",
              borderRight: "3px solid #e5e5e5",
              borderLeft: "3px solid #e5e5e5",
            }}
          >
            <S.HistoryTitle>판매한 상품</S.HistoryTitle>
            <S.HistoryCount>
              {Number(props.fetchSoldCountData?.fetchUseditemsCountISold) || ""}
            </S.HistoryCount>
          </S.CommonHistorySection>

          <S.CommonHistorySection
            style={{
              padding: "0px 20px 0px 0px",
              margin: "0px 20px 0px 0px",
              borderRight: "3px solid #e5e5e5",
            }}
          >
            <S.HistoryTitle>구매한 상품</S.HistoryTitle>
            <S.HistoryCount>
              {props.fetchIBoughtData?.fetchUseditemsIBought.length}
            </S.HistoryCount>
          </S.CommonHistorySection>

          <S.CommonHistorySection>
            <S.HistoryTitle>포인트</S.HistoryTitle>
            <S.HistoryCount>
              {PointComma(
                props.fetchUserData?.fetchUserLoggedIn.userPoint.amount
              )}
            </S.HistoryCount>
          </S.CommonHistorySection>
        </S.UserHistoryArticle>
      </S.InfoSection>
      <S.HistoryContentsTitleArticle>
        {props.tap.map((el) => (
          <S.HistoryTap
            key={uuidv4()}
            onClick={props.selectTap}
            el={el}
            selectedTap={props.selectedTap}
          >
            {el}
          </S.HistoryTap>
        ))}
      </S.HistoryContentsTitleArticle>
      <S.ContentsSection>
        {props.selectedTap === "찜목록" && (
          <>
            <S.WirteCommonWrapper>
              <S.WriteCommon>찜목록</S.WriteCommon>
            </S.WirteCommonWrapper>
            <S.HistoryContentsTitle>
              <S.ContentsTitleElement>상품명</S.ContentsTitleElement>
              <S.ContentsTitleElement>가격</S.ContentsTitleElement>
              <S.ContentsTitleElement>판매자</S.ContentsTitleElement>
              <S.ContentsTitleElement>상품 등록일</S.ContentsTitleElement>
            </S.HistoryContentsTitle>
            <div>
              {props.fetchIPickedData?.fetchUseditemsIPicked.map((el) => (
                <S.ContentsArticleList
                  key={uuidv4()}
                  onClick={onClickMovetoPage(`/freeMarket/${el._id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <S.ContentsTitleElement>{el.name}</S.ContentsTitleElement>
                  <S.ContentsTitleElement>
                    {PointComma(el.price)}
                  </S.ContentsTitleElement>
                  <S.ContentsTitleElement>
                    {el.seller.name}
                  </S.ContentsTitleElement>
                  <S.ContentsTitleElement>
                    {getDateDot(el.createdAt)}
                  </S.ContentsTitleElement>
                </S.ContentsArticleList>
              ))}
            </div>
            <div>
              <PaginationContainer
                totalItemCount={
                  props.fetchPickedCountData?.fetchUseditemsCountIPicked
                }
                refetch={props.fetchIPickedDataRefetch}
              />
            </div>
          </>
        )}
        {props.selectedTap === "판매내역" && (
          <>
            <S.WirteCommonWrapper>
              <S.WriteCommon>상품 판매내역</S.WriteCommon>
            </S.WirteCommonWrapper>
            <S.HistoryContentsTitle>
              <S.ContentsTitleElement>상품명</S.ContentsTitleElement>
              <S.ContentsTitleElement>가격</S.ContentsTitleElement>
              <S.ContentsTitleElement>구매자</S.ContentsTitleElement>
              <S.ContentsTitleElement>상품 등록일</S.ContentsTitleElement>
              <S.ContentsTitleElement>상품 판매일</S.ContentsTitleElement>
            </S.HistoryContentsTitle>
            <>
              {props.fetchISoldData?.fetchUseditemsISold.map((el) => (
                <S.ContentsArticleList key={uuidv4()}>
                  <S.ContentsTitleElement>{el.name}</S.ContentsTitleElement>
                  <S.ContentsTitleElement>
                    {PointComma(el.price)}
                  </S.ContentsTitleElement>
                  <S.ContentsTitleElement>
                    {!el.soldAt ? <S.SoldAt>판매중</S.SoldAt> : el.buyer?.name}
                  </S.ContentsTitleElement>
                  <S.ContentsTitleElement>
                    {getDateDot(el.createdAt)}
                  </S.ContentsTitleElement>
                  <S.ContentsTitleElement>
                    {!el.soldAt ? (
                      <S.SoldAt>판매중</S.SoldAt>
                    ) : (
                      getDateDot(el.soldAt)
                    )}
                  </S.ContentsTitleElement>
                </S.ContentsArticleList>
              ))}
            </>
            <>
              <PaginationContainer
                totalItemCount={
                  Number(props.fetchSoldCountData?.fetchUseditemsCountISold) +
                  Number(
                    props.fetchSellingCountData
                      ?.fetchPointTransactionsCountOfSelling
                  )
                }
                refetch={props.fetchISoldDataRefetch}
              />
            </>
          </>
        )}
        {props.selectedTap === "구매내역" && (
          <>
            <S.WirteCommonWrapper>
              <S.WriteCommon>상품 구매내역</S.WriteCommon>
            </S.WirteCommonWrapper>
            <S.HistoryContentsTitle>
              <S.ContentsTitleElement>상품명</S.ContentsTitleElement>
              <S.ContentsTitleElement>가격</S.ContentsTitleElement>
              <S.ContentsTitleElement>판매자</S.ContentsTitleElement>
              <S.ContentsTitleElement>상품 등록일</S.ContentsTitleElement>
              <S.ContentsTitleElement>상품 구매일</S.ContentsTitleElement>
            </S.HistoryContentsTitle>
            <>
              {props.fetchIBoughtData?.fetchUseditemsIBought.map((el) => (
                <S.ContentsArticleList key={uuidv4()}>
                  <S.ContentsTitleElement>{el.name}</S.ContentsTitleElement>
                  <S.ContentsTitleElement>
                    {PointComma(el.price)}
                  </S.ContentsTitleElement>
                  <S.ContentsTitleElement>
                    {el.seller?.name}
                  </S.ContentsTitleElement>
                  <S.ContentsTitleElement>
                    {getDateDot(el.createdAt)}
                  </S.ContentsTitleElement>
                  <S.ContentsTitleElement>
                    {getDateDot(el.soldAt)}
                  </S.ContentsTitleElement>
                </S.ContentsArticleList>
              ))}
            </>
            <>
              <PaginationContainer
                totalItemCount={
                  props.fetchBoughtCountData?.fetchUseditemsCountIBought
                }
                refetch={props.fetchIBoughtDataRefetch}
              />
            </>
          </>
        )}
        {props.selectedTap === "충전내역" && (
          <>
            <S.WirteCommonWrapper>
              <S.WriteCommon>포인트 충전내역</S.WriteCommon>
            </S.WirteCommonWrapper>
            <S.HistoryContentsTitle>
              <S.ContentsTitleElement>내용</S.ContentsTitleElement>
              <S.ContentsTitleElement>상세 내용</S.ContentsTitleElement>
              <S.ContentsTitleElement>충전포인트</S.ContentsTitleElement>
              <S.ContentsTitleElement>잔여포인트</S.ContentsTitleElement>
              <S.ContentsTitleElement>충전일</S.ContentsTitleElement>
            </S.HistoryContentsTitle>
            <>
              {props.fetchPointData?.fetchPointTransactionsOfLoading.map(
                (el) => (
                  <S.ContentsArticleList key={uuidv4()}>
                    <S.ContentsTitleElement>{el.status}</S.ContentsTitleElement>
                    <S.ContentsTitleElement>
                      {el.statusDetail}
                    </S.ContentsTitleElement>
                    <S.ContentsTitleElement>
                      {PointComma(el.amount)}
                    </S.ContentsTitleElement>
                    <S.ContentsTitleElement>
                      {PointComma(el.balance)}
                    </S.ContentsTitleElement>
                    <S.ContentsTitleElement>
                      {getDateDot(el.createdAt)}
                    </S.ContentsTitleElement>
                  </S.ContentsArticleList>
                )
              )}
            </>
            <>
              <PaginationContainer
                totalItemCount={
                  props.fetchPointCountData
                    ?.fetchPointTransactionsCountOfLoading
                }
                refetch={props.fetchPointDataRefetch}
              />
            </>
          </>
        )}
      </S.ContentsSection>
    </S.Main>
  );
}

export default MyPagePresenter;
