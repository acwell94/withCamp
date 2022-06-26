import onClickMove from "../../hooks/useMove";
import * as S from "./Main.styles";
import { v4 as uuidv4 } from "uuid";
import { IFreeBoardListContainer } from "../freeBoard/freeBoardCommon/FreeBoard.types";
import MarketItem from "../../commons/marketItem/MarketItem";
function MainPresenter(props: IFreeBoardListContainer) {
  const { onClickMovetoPage } = onClickMove();
  return (
    <S.Main>
      <S.IntroSection>
        <div>
          <S.IntroSectionFirst>
            Camping,&nbsp;<S.IntroFont40>enjoy</S.IntroFont40>
          </S.IntroSectionFirst>
          <S.IntroFont40>and Meet new People&apos;</S.IntroFont40>
          <S.IntroFontNewMeet>새로운 만남이 있는 캠핑</S.IntroFontNewMeet>
          <div>
            <S.IntroMoveBtn onClick={onClickMovetoPage("/Intro")}>
              Find out More
            </S.IntroMoveBtn>
          </div>
        </div>
        <S.IntroImageArticle>
          <S.IntroImage src="/images/camp.png" />
        </S.IntroImageArticle>
      </S.IntroSection>
      <S.BoardSection>
        <S.BoardSectionTitle>Best Contents</S.BoardSectionTitle>
        <S.BestContentsCss>
          {props.fetchBestBoardsData?.fetchBoardsOfTheBest.map((el: any) => (
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
              <S.ItemArrange>
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
              </S.ItemArrange>
            </S.BestContentsItemSection>
          ))}
        </S.BestContentsCss>
      </S.BoardSection>
      <S.BoardSection>
        <S.BoardSectionTitle>Best Shop</S.BoardSectionTitle>

        <S.BestGoodsCss>
          {props.fetchUsedItemsOfTheBest?.fetchUseditemsOfTheBest.map((el) => (
            <MarketItem
              key={uuidv4()}
              el={el}
              id={el._id}
              backGroundcolor={true}
            />
          ))}
        </S.BestGoodsCss>
      </S.BoardSection>
    </S.Main>
  );
}
export default MainPresenter;
