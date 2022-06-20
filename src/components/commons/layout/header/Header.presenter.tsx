import onClickMove from "../../../hooks/useMove";
import * as S from "./Header.styles";
import { IHeaderContainer } from "./Header.types";

function HeaderPresenter(props: IHeaderContainer) {
  const { onClickMovetoPage } = onClickMove();

  return (
    <S.Header>
      <S.HeaderPage>
        <S.LogoSection>
          <S.Logo onClick={onClickMovetoPage("/")} src="/images/withCamp.png" />
        </S.LogoSection>
        <S.HeaderNav>
          <S.NavMenu onClick={onClickMovetoPage("/Intro")}>소개</S.NavMenu>
          <S.NavMenu onClick={onClickMovetoPage("/campmap")}>
            전국캠핑장 현황
          </S.NavMenu>
          <S.NavMenu onClick={onClickMovetoPage("/freeboard")}>
            자유게시판
          </S.NavMenu>
          <S.NavMenu>with:Shop</S.NavMenu>
        </S.HeaderNav>

        {props.accessToken ? (
          <S.HeaderUserSection>
            <S.UserArticle>
              {props.fetchUserData?.fetchUserLoggedIn.name} 님
            </S.UserArticle>
            <S.UserArticle>|</S.UserArticle>
            <S.UserArticle onClick={props.onClickLogout}>
              로그아웃
            </S.UserArticle>
          </S.HeaderUserSection>
        ) : (
          <S.HeaderUserSection>
            <S.UserArticle onClick={onClickMovetoPage("/signIn")}>
              로그인
            </S.UserArticle>
            <S.UserArticle>|</S.UserArticle>
            <S.UserArticle onClick={onClickMovetoPage("/signup")}>
              회원가입
            </S.UserArticle>
          </S.HeaderUserSection>
        )}
      </S.HeaderPage>
    </S.Header>
  );
}

export default HeaderPresenter;
