import Link from "next/link";
import * as S from "./Footer.styles";

function FooterPresenter() {
  return (
    <S.Footer>
      <S.FooterPage>
        <S.InfoSection>
          <S.WriteCommon>홈페이지 제작자 :&nbsp; </S.WriteCommon>
          <S.WriteCommon>김민영</S.WriteCommon>
        </S.InfoSection>
        <S.InfoSection>
          <S.WriteCommon>깃허브 :&nbsp;</S.WriteCommon>
          <Link href="https://github.com/acwell94">
            <S.WriteCommon style={{ color: "blue" }}>
              https://github.com/acwell94
            </S.WriteCommon>
          </Link>
        </S.InfoSection>
        <S.InfoSection>
          <S.WriteCommon>이메일 :&nbsp;</S.WriteCommon>
          <S.WriteCommon>leminyoung122@gmail.com</S.WriteCommon>
        </S.InfoSection>
      </S.FooterPage>
    </S.Footer>
  );
}

export default FooterPresenter;
