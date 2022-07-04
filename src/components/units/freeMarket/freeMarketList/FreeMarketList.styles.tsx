import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/globalstyles/Media";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
  padding: 80px 50px;
  @media ${breakPoints.tablet} {
    width: 100%;
    padding: 60px 40px;
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

export const MainTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #dd7202;
  padding: 0px 0px 80px 0px;

  @media ${breakPoints.mobile} {
    font-size: 40px;
    padding: 0px 0px 60px 0px;
  }
  @media ${breakPoints.mini} {
    font-size: 30px;
    padding: 0px 0px 40px 0px;
  }
`;

export const WriteCommon = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 0px 0px 30px 0px;
  @media ${breakPoints.mobile} {
    font-size: 20px;
    padding: 0px 0px 20px 0px;
  }
  @media ${breakPoints.mini} {
    font-size: 15px;
    padding: 0px 0px 20px 0px;
  }
`;

export const ContentsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  box-shadow: rgb(219 219 219) 0px 5px 20px;
  @media ${breakPoints.tablet} {
    padding: 40px;
  }
  @media ${breakPoints.mobile} {
    padding: 40px;
  }
  @media ${breakPoints.mini} {
    padding: 30px;
  }
`;

export const BestContentsArticle = styled.div`
  border-bottom: 3px solid #e5e5e5;
  @media ${breakPoints.tablet} {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  @media ${breakPoints.mobile} {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  @media ${breakPoints.mini} {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const BestContentsCss = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 23% 23% 23% 23%;
  @media ${breakPoints.tablet} {
  }
`;

export const ContentsArticle = styled.div`
  padding: 30px 0px 0px 0px;
`;

export const ContentsTitleSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentsCss = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 29% 29% 29%;
  @media ${breakPoints.mini} {
    grid-template-columns: 100%;
  }
`;

export const SearchBarSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px 0px 50px 0px;
`;
