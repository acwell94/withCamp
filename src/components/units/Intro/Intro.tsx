import * as S from "./Intro.styles";

function IntroPresenter() {
  return (
    <S.Main>
      <S.WriteSection>
        <S.WriteCommon>같이 캠핑을 즐기다.</S.WriteCommon>
        <S.LogoArticle>
          <S.MainLogo>with:Camp</S.MainLogo>
          <S.WriteCommon>에 오신것을 환영합니다.</S.WriteCommon>
        </S.LogoArticle>
      </S.WriteSection>
      <S.WriteSection>
        <S.LogoArticle>
          <S.WriteCommon>가치 있는 캠핑을 지향하는 &nbsp;</S.WriteCommon>
          <S.MainLogo>with:Camp</S.MainLogo>
        </S.LogoArticle>
        <S.WriteCommon>다양한 사람들과 즐거운 캠핑을 즐기세요.</S.WriteCommon>
      </S.WriteSection>

      <S.ImgSection>
        <div>
          <S.Img src="/images/campMap.png" />
        </div>
        <S.LogoArticle>
          <S.MainLogo>with:Camp</S.MainLogo>
          <S.WriteCommon>에서 전국의 캠핑장을 확인해 보세요.</S.WriteCommon>
        </S.LogoArticle>
      </S.ImgSection>
      <S.ImgSection>
        <S.LogoArticle>
          <S.MainLogo>with:Camp</S.MainLogo>
          <S.WriteCommon>에서 같이 캠핑갈 사람들을 만나보세요.</S.WriteCommon>
        </S.LogoArticle>
        <div>
          <S.Img src="/images/campfire.jpg" />
        </div>
      </S.ImgSection>
      <S.ImgSection>
        <div>
          <S.Img src="/images/campingEquipment.jpg" />
        </div>
        <S.LogoArticle>
          <S.MainLogo>with:Camp</S.MainLogo>
          <S.WriteCommon>에서 다양한 상품들을 만나보세요</S.WriteCommon>
        </S.LogoArticle>
      </S.ImgSection>
      <S.OutTroSection>
        <S.OutTroWrite>같이 그리고 가치 있는 캠핑</S.OutTroWrite>
        <S.OutTroLogo>with:Camp</S.OutTroLogo>
      </S.OutTroSection>
    </S.Main>
  );
}

export default IntroPresenter;
