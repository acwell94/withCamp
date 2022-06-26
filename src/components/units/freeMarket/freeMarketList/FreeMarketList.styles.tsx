import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
  padding: 80px 50px;
`;

export const MainTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #dd7202;
  padding: 0px 0px 80px 0px;
`;

export const WriteCommon = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 0px 0px 30px 0px;
`;

export const ContentsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
`;

export const BestContentsArticle = styled.div`
  border-bottom: 3px solid #e5e5e5;
`;

export const BestContentsCss = styled.div`
  display: grid;

  justify-content: space-between;
  grid-template-columns: 23% 23% 23% 23%;
`;

export const ContentsArticle = styled.div`
  padding: 30px 0px 0px 0px;
`;

export const ContentsTitleSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentsCss = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 29% 29% 29%;
`;
