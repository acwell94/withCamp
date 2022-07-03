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
  @media ${breakPoints.mobile} {
    padding: 40px;
  }
  @media ${breakPoints.mini} {
    padding: 30px;
  }
`;

export const BestContentsArticle = styled.div`
  padding: 0px 0px 25px 0px;
  border-bottom: 3px solid #e5e5e5;
`;

export const BestContentsMedia = styled.div`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BestContentsItemSection = styled.div`
  width: 23%;
  cursor: pointer;
`;

export const ItemImgArticle = styled.div`
  border-radius: 20px;
  height: 160px;
  padding: 0px 0px 15px 0px;
  overflow: hidden;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 20px;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.2);
    padding: 0px 0px 15px 0px;
    border-radius: 20px;
  }
`;

export const ItemArticle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 5px 0px;
`;

export const ItemTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemWriter = styled.div`
  font-size: 13px;
  color: #676767;
`;

export const ItemCreated = styled.div`
  font-size: 10px;
  color: #676767;
  font-weight: 700;
`;

export const HeartImg = styled.img`
  width: 15px;
`;

export const ItemLikeCount = styled.div`
  font-size: 12px;
  padding: 0px 0px 0px 5px;
`;

export const ContentsArticle = styled.div`
  padding: 30px 0px 0px 0px;
`;

export const SearchBarSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 0px 30px 0px;
`;

export const ContentsArticleTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid #e5e5e5;
  border-top: 2px solid #e5e5e5;
  padding: 10px 0px;

  @media ${breakPoints.mobile} {
    padding: 5px 0px;
  }
  @media ${breakPoints.mini} {
    padding: 5px 0px;
  }
`;

export const ArticleElement = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
  @media ${breakPoints.mini} {
    font-size: 10px;
  }
`;

export const SearchResult = styled.div`
  font-size: 15px;
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
  @media ${breakPoints.mini} {
    font-size: 10px;
  }
`;

export const ContentsListBorder = styled.div``;

export const ContentsArticleList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 30px 0px;
  @media ${breakPoints.mobile} {
    padding: 20px 0px;
  }
  @media ${breakPoints.mini} {
    padding: 20px 0px;
  }
`;
