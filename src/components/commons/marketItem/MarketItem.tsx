import * as S from "./MarketItem.styles";

import { PointComma } from "../libraries/point";
import { getDateDot } from "../libraries/Date";
import onClickMove from "../../hooks/useMove";

function MarketItem(props: any) {
  const { onClickMovetoPage } = onClickMove();
  return (
    <S.BestContentsItemSection
      id={props.el._id}
      backGroundcolor={props.backGroundcolor}
      onClick={onClickMovetoPage(`/freeMarket/${props.el._id}`)}
    >
      <S.ItemImgArticle>
        <S.ItemImg
          src={
            props.el.images[0]
              ? `https://storage.googleapis.com/${props.el.images?.[0]}`
              : `/images/campfire.jpg`
          }
        />
      </S.ItemImgArticle>
      <S.ItemContentsSection backGroundcolor={props.backGroundcolor}>
        <S.ItemArticle>
          <S.ItemTitle backGroundcolor={props.backGroundcolor}>
            {props.el.remarks}
          </S.ItemTitle>
        </S.ItemArticle>
        <S.ItemArticle>
          <S.ItemName backGroundcolor={props.backGroundcolor}>
            상품명 : {props.el.name}
          </S.ItemName>
        </S.ItemArticle>
        <S.ItemArticle>
          <S.ItemPrice backGroundcolor={props.backGroundcolor}>
            {PointComma(props.el.price)}
            <S.ItemPickedCount
              style={{
                fontWeight: "500",
              }}
            >
              원
            </S.ItemPickedCount>
          </S.ItemPrice>
        </S.ItemArticle>
        <S.ItemArticle>
          <S.ItemCreated backGroundcolor={props.backGroundcolor}>
            {getDateDot(props.el.createdAt)}
          </S.ItemCreated>
          <S.ItemTitle
            backGroundcolor={props.backGroundcolor}
            style={{ color: "red" }}
          >
            ❤ <S.ItemPickedCount>{props.el.pickedCount}</S.ItemPickedCount>
          </S.ItemTitle>
        </S.ItemArticle>
      </S.ItemContentsSection>
    </S.BestContentsItemSection>
  );
}

export default MarketItem;
