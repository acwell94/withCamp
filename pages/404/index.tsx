import Link from "next/link";
import styled from "@emotion/styled";
import { breakPoints } from "../../src/components/commons/globalstyles/Media";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 1200px;
  padding: 80px 50px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 40px 30px;
  }
  @media ${breakPoints.mini} {
    width: 100%;
    padding: 30px 20px;
  }
`;

const ErrorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #fff;
  padding: 50px;

  @media ${breakPoints.mobile} {
    padding: 30px;
  }
  @media ${breakPoints.mini} {
    padding: 20px;
  }
`;
const Error404 = styled.div`
  font-size: 50px;
  font-weight: 700;
  @media ${breakPoints.mobile} {
    font-size: 40px;
  }
  @media ${breakPoints.mini} {
    font-size: 30px;
  }
`;

const ErrorInfoArticle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  @media ${breakPoints.mobile} {
    padding: 20px 0px;
  }
  @media ${breakPoints.mini} {
    padding: 20px 0px;
  }
`;

const ErrorInfo = styled.div`
  font-size: 30px;
  font-weight: 500;
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
  @media ${breakPoints.mini} {
    font-size: 15px;
  }
`;

const ALink = styled.a`
  padding: 10px 20px;
  border: 3px solid #7d5a50;
  font-size: 30px;
  font-weight: 700;
  color: #7d5a50;
  &:hover {
    color: #7d5a50;
  }
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
  @media ${breakPoints.mini} {
    padding: 5px 10px;
    font-size: 15px;
  }
`;

function ErrorPage() {
  return (
    <Main>
      <ErrorSection>
        <Error404>404</Error404>
        <ErrorInfoArticle>
          <ErrorInfo>찾을 수 없는 페이지입니다.</ErrorInfo>
          <ErrorInfo>요청하신 페이지가 없거나</ErrorInfo>
          <ErrorInfo>잘못된 경로를 이용하셨습니다ㅠㅠ</ErrorInfo>
        </ErrorInfoArticle>

        <Link href="/">
          <ALink>홈으로 가기</ALink>
        </Link>
      </ErrorSection>
    </Main>
  );
}

export default ErrorPage;
