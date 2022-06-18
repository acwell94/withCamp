import onClickMove from "../../hooks/useMove";
import * as S from "../signIn/SignIn.styles";

function SignUpPresenter(props) {
  const { onClickMovetoPage } = onClickMove();
  return (
    <S.Main>
      <S.SignUpMainTitle>
        <S.MainDeco>같이 캠핑 갈래?</S.MainDeco>
        <S.MainLogo>with:Camp</S.MainLogo>
      </S.SignUpMainTitle>
      <S.FormSection>
        <S.InputSection>
          <S.InputTitle>이메일</S.InputTitle>
          <S.Input placeholder="이메일을 입력해주세요." type="text" />
        </S.InputSection>
        <S.InputSection>
          <S.InputTitle>비밀번호</S.InputTitle>
          <S.Input placeholder="비밀번호를 입력해주세요." type="password" />
        </S.InputSection>
        <S.InputSection>
          <S.InputTitle>닉네임</S.InputTitle>
          <S.Input placeholder="닉네임을 입력해주세요." type="text" />
        </S.InputSection>
        <S.ButtonSection>
          <S.submitButton type="submit">회원가입</S.submitButton>
        </S.ButtonSection>
        <S.InfoSection>
          <S.Info>계정이 있으신가요? &nbsp;</S.Info>
          <S.InfoMove onClick={onClickMovetoPage("/signIn")}>
            로그인하러 가기
          </S.InfoMove>
        </S.InfoSection>
      </S.FormSection>
    </S.Main>
  );
}

export default SignUpPresenter;
