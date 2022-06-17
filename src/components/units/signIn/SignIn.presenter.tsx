import * as S from "./SignIn.styles";

function SignInPresenter() {
  return (
    <S.Main>
      <S.MainTitle>
        <S.MainLogo>with:Camp</S.MainLogo>에 오신것을 환영합니다.
      </S.MainTitle>
      <S.FormSection>
        <S.InputSection>
          <S.InputTitle>이메일</S.InputTitle>
          <S.Input placeholder="이메일을 입력해주세요." type="text" />
        </S.InputSection>
        <S.InputSection>
          <S.InputTitle>비밀번호</S.InputTitle>
          <S.Input placeholder="비밀번호를 입력해주세요." type="password" />
        </S.InputSection>
        <S.ButtonSection>
          <S.submitButton type="submit">로그인</S.submitButton>
        </S.ButtonSection>
        <S.InfoSection>
          <S.Info>아직 계정이 없으신가요? &nbsp;</S.Info>
          <S.InfoSignUp>회원가입하러 가기</S.InfoSignUp>
        </S.InfoSection>
      </S.FormSection>
    </S.Main>
  );
}

export default SignInPresenter;
