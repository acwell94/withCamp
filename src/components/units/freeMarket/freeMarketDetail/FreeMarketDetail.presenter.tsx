import Carousel from "../../../commons/carousel/Carousel";
import * as S from "./FreeMarketDetail.styles";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";
import { PointComma } from "../../../commons/libraries/point";
import { IFreeMarketDetailContainer } from "../freeMarketCommon/FreeMarket.types";
import onClickMove from "../../../hooks/useMove";
import CommonButton from "../../../commons/libraries/Button";
import CommonFillButton from "../../../commons/libraries/ButtonFill";
import CampKaKaoMapDetailPage from "../../../commons/campMapDetail/CampMapDetail";
import FreeMarketCommentListContainer from "../../freeMarketComment/freeMarketCommentList/FreeMarketCommentList.container";

function FreeMarketDetailPresenter(props: IFreeMarketDetailContainer) {
  const { onClickMovetoPage } = onClickMove();

  return (
    <S.Main>
      <S.MainTitle>
        {props.fetchUsedItemData?.seller?.name}{" "}
        <span>님의 판매 중인 상품입니다.</span>
      </S.MainTitle>
      <S.ContentsSection>
        <S.CarouselCss>
          <S.CarouselArticle>
            <Carousel data={props.fetchUsedItemData?.images} />
          </S.CarouselArticle>
        </S.CarouselCss>
        <S.ContentsArticle>
          <S.ContentsName>{props.fetchUsedItemData?.name}</S.ContentsName>

          <S.TagsArrange>
            {props.fetchUsedItemData?.tags.map((el: string) => (
              <S.ContentsTags key={uuidv4()}>{el}</S.ContentsTags>
            ))}
          </S.TagsArrange>

          <S.ContentsPrice>
            {PointComma(props.fetchUsedItemData?.price)}
            <span> 원</span>
          </S.ContentsPrice>

          <S.ContentsRemarks>
            요약 : {props.fetchUsedItemData?.remarks}
          </S.ContentsRemarks>
          <div>
            {typeof window !== "undefined" && (
              <S.ContentsStyle
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(props.fetchUsedItemData?.contents),
                }}
              />
            )}
          </div>
          <S.ContentsPickedCount>
            관심 : {props.fetchUsedItemData?.pickedCount}
          </S.ContentsPickedCount>
          <S.PickedPayBtnArticle>
            <CommonButton
              type="button"
              contents="목록으로"
              onClick={onClickMovetoPage("/freeMarket")}
            />
            <CommonButton
              type="button"
              contents="찜하기"
              onClick={props.onClickPick}
              disabled={
                props.fetchUsedItemData.seller._id ===
                props.fetchUserData?.fetchUserLoggedIn._id
              }
            />

            <CommonFillButton
              type="button"
              contents="바로구매"
              disabled={
                props.fetchUsedItemData.seller._id ===
                props.fetchUserData?.fetchUserLoggedIn._id
              }
              onClick={props.onClickPay}
            />
          </S.PickedPayBtnArticle>
        </S.ContentsArticle>

        <S.MapArticle>
          {!props.fetchUsedItemData?.useditemAddress.address?.length ? (
            <S.NoMapMessage>거래장소가 등록되지 않았습니다.</S.NoMapMessage>
          ) : (
            <S.MapBox>
              <CampKaKaoMapDetailPage
                lat={props.fetchUsedItemData.useditemAddress?.address}
                lng={props.fetchUsedItemData.useditemAddress?.zipcode}
                placeName={
                  props.fetchUsedItemData.useditemAddress?.addressDetail
                }
              />
            </S.MapBox>
          )}
        </S.MapArticle>
        {props.fetchUsedItemData.seller._id ===
        props.fetchUserData?.fetchUserLoggedIn._id ? (
          <S.EditDeleteBtnArticle>
            <CommonButton
              type="button"
              contents="수정하기"
              onClick={onClickMovetoPage(
                `/freeMarket/${props.fetchUsedItemData?._id}/edit`
              )}
            />
            <CommonButton
              type="button"
              contents="삭제하기"
              onClick={props.onClickDelete}
            />
          </S.EditDeleteBtnArticle>
        ) : (
          ""
        )}
        <FreeMarketCommentListContainer fetchUserData={props.fetchUserData} />
      </S.ContentsSection>
    </S.Main>
  );
}

export default FreeMarketDetailPresenter;
