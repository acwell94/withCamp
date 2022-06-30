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
  padding: 0px 0px 80px 0px;
`;

export const ContentsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #fff;
  border-radius: 20px;
  width: 700px;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
`;

export const CarouselCss = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 0px 0px 60px 0px;
`;

export const CarouselArticle = styled.div`
  width: 500px;
  height: 500px;
`;

export const ContentsArticle = styled.div`
  border-top: 3px solid #e5e5e5;
  border-bottom: 3px solid #e5e5e5;
  padding: 30px 0px;
  width: 500px;
`;

export const ContentsName = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 0px 0px 10px 0px;
  word-break: break-all;
`;

export const TagsArrange = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ContentsTags = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #878787;
  padding: 0px 20px 0px 0px;
`;

export const ContentsPrice = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 10px 0px 0px 0px;
`;

export const ContentsRemarks = styled.div`
  font-size: 25px;
  font-weight: 700;
  word-break: break-all;
  color: #a5a5a5;
  padding: 20px 0px;
`;

export const ContentsStyle = styled.div`
  word-break: break-all;
`;

export const ContentsPickedCount = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #878787;
`;

export const PickedPayBtnArticle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 500px;
  padding: 30px 0px 0px 0px;
`;

export const MapArticle = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 3px solid #e5e5e5;
  width: 500px;
  padding: 30px 0px;
`;

export const MapBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const NoMapMessage = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const EditDeleteBtnArticle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #e5e5e5;
  width: 500px;
  padding: 30px 0px;
`;
