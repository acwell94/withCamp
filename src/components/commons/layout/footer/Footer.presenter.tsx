import Link from "next/link";
import * as S from "./Footer.styles";

function FooterPresenter() {
  return (
    <S.Footer>
      <S.FooterPage>
        <S.InfoSection>
          <div>홈페이지 제작자 :&nbsp; </div>
          <div>김민영</div>
        </S.InfoSection>
        <S.InfoSection>
          <div>깃허브 :&nbsp;</div>
          <Link href="https://github.com/acwell94">
            https://github.com/acwell94
          </Link>
        </S.InfoSection>
        <S.InfoSection>
          <div>이메일 :&nbsp;</div>
          <div>leminyoung122@gmail.com</div>
        </S.InfoSection>
      </S.FooterPage>
    </S.Footer>
  );
}

export default FooterPresenter;
