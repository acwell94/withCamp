import * as S from "./Header.styles";

function HeaderPresenter() {
  return (
    <S.Header>
      <S.HeaderPage>
        <S.LogoSection>
          <S.Logo src="/images/withCamp.png" />
        </S.LogoSection>
        <S.HeaderNav>
          <S.NavMenu>소개</S.NavMenu>
          <S.NavMenu>전국캠핑장 현황</S.NavMenu>
          <S.NavMenu>자유게시판</S.NavMenu>
          <S.NavMenu>with:Shop</S.NavMenu>
        </S.HeaderNav>
        <S.HeaderUserSection>
          <div>로그인</div>
          <div>|</div>
          <div>회원가입</div>
        </S.HeaderUserSection>
      </S.HeaderPage>
    </S.Header>
  );
}

export default HeaderPresenter;
