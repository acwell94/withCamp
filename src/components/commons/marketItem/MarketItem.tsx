import * as S from "./MarketItem.styles";

import { PointComma } from "../libraries/point";
import { getDateDot } from "../libraries/Date";
import onClickMove from "../../hooks/useMove";
import { v4 as uuidv4 } from "uuid";

function MarketItem(props: any) {
  const { onClickMovetoPage } = onClickMove();
  return (
    <S.BestContentsItemSection
      id={props.el._id}
      backGroundColor={props.backGroundColor}
      onClick={onClickMovetoPage(`/freeMarket/${props.el._id}`)}
    >
      <S.ItemImgArticle backGroundColor={props.backGroundColor}>
        <S.ItemImg
          backGroundColor={props.backGroundColor}
          src={
            props.el.images[0]
              ? `https://storage.googleapis.com/${props.el.images?.[0]}`
              : `/images/campfire.jpg`
          }
        />
      </S.ItemImgArticle>
      <S.ItemContentsSection backGroundColor={props.backGroundColor}>
        <S.ItemArticle>
          <S.ItemTitle backGroundColor={props.backGroundColor}>
            {props.el.remarks}
          </S.ItemTitle>
        </S.ItemArticle>
        <S.ItemArticle>
          <S.ItemName backGroundColor={props.backGroundColor}>
            {props.el.name
              .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
              .split("#$%")
              .map((el: any) => (
                <S.SearchResult
                  backGroundColor={props.backGroundColor}
                  key={uuidv4()}
                >
                  {el}
                </S.SearchResult>
              ))}
          </S.ItemName>
        </S.ItemArticle>
        <S.ItemArticle>
          <S.ItemPrice backGroundColor={props.backGroundColor}>
            {PointComma(props.el.price)}
            <S.ItemPickedCount
              backGroundColor={props.backGroundColor}
              style={{
                fontWeight: "500",
              }}
            >
              원
            </S.ItemPickedCount>
          </S.ItemPrice>
        </S.ItemArticle>
        <S.ItemArticle>
          <S.ItemCreated backGroundColor={props.backGroundColor}>
            {getDateDot(props.el.createdAt)}
          </S.ItemCreated>
          <S.ItemTitle
            backGroundColor={props.backGroundColor}
            style={{ color: "red" }}
          >
            ❤{" "}
            <S.ItemPickedCount backGroundColor={props.backGroundColor}>
              {props.el.pickedCount}
            </S.ItemPickedCount>
          </S.ItemTitle>
        </S.ItemArticle>
      </S.ItemContentsSection>
    </S.BestContentsItemSection>
  );
}

export default MarketItem;
