import onClickMove from "../../../hooks/useMove";
import * as S from "./Header.styles";
import { IHeaderContainer } from "./Header.types";

function HeaderPresenter(props: IHeaderContainer) {
  const { onClickMovetoPage } = onClickMove();

  return (
    <S.Header>
      <S.HeaderPage>
        <S.MediaHamburgerDiv>
          <S.MediaHamburger
            src="/images/hamburger.png"
            onClick={props.onClickOpenMenu}
          />
        </S.MediaHamburgerDiv>

        <S.LogoSection>
          <S.Logo onClick={onClickMovetoPage("/")} src="/images/withCamp.png" />
        </S.LogoSection>

        <S.HeaderNav isOpen={props.isOpen}>
          <S.NavMenu onClick={props.onClickMovePage("/Intro")}>소개</S.NavMenu>
          <S.NavMenu onClick={props.onClickMovePage("/freeboard")}>
            자유게시판
          </S.NavMenu>
          <S.NavMenu onClick={props.onClickMovePage("/freeMarket")}>
            with:Shop
          </S.NavMenu>
          <S.NavMenu
            onClick={props.onClickMovePage(
              props.accessToken ? "/mypage" : "/signIn"
            )}
          >
            My Page
          </S.NavMenu>
        </S.HeaderNav>

        {props.accessToken ? (
          <S.HeaderUserSection>
            <S.UserArticle>
              {props.fetchUserData?.fetchUserLoggedIn.name} 님
            </S.UserArticle>
            <S.DivideBar>|</S.DivideBar>
            <S.UserArticle onClick={props.onClickLogout}>
              로그아웃
            </S.UserArticle>
          </S.HeaderUserSection>
        ) : (
          <S.HeaderUserSection>
            <S.UserArticle onClick={props.onClickMovePage("/signIn")}>
              로그인
            </S.UserArticle>
            <S.DivideBar>|</S.DivideBar>
            <S.UserArticle onClick={props.onClickMovePage("/signup")}>
              회원가입
            </S.UserArticle>
          </S.HeaderUserSection>
        )}
      </S.HeaderPage>
    </S.Header>
  );
}

export default HeaderPresenter;
