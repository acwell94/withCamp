import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
  padding: 0px 50px 80px 50px;
`;

export const IntroSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IntroSectionFirst = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #dd7202;
`;

export const IntroFont40 = styled.span`
  font-size: 40px;
  font-weight: 700;
  color: black;
`;

export const IntroFontNewMeet = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 30px 0px;
`;

export const IntroMoveBtn = styled.button`
  border: 2px solid #7d5a50;
  border-radius: 10px;
  outline: none;
  background-color: #7d5a50;
  font-size: 30px;
  font-weight: 700;
  color: #fcdec0;
  width: 250px;
  cursor: pointer;
  &:hover {
    background-color: #fcdec0;
    color: #7d5a50;
    border: 2px solid #7d5a50;
  }
`;

export const IntroImageArticle = styled.div`
  padding: 0px 0px 0px 50px;
`;

export const IntroImage = styled.img`
  width: 400px;
`;

export const BoardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 50px 0px;
  width: 100%;
`;

export const BoardSectionTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
  padding: 0px 0px 50px 0px;
`;

export const BestContentsCss = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
`;

export const BestContentsItemSection = styled.div`
  width: 23%;
  cursor: pointer;
  border-radius: 20px 20px 10px 10px;
  background-color: #7d5a50e0;
`;

export const ItemImgArticle = styled.div`
  padding: 0px 0px 15px 0px;
`;

export const ItemArrange = styled.div`
  padding: 0px 10px;
`;

export const ItemImg = styled.img`
  width: 100%;
  border-radius: 20px;
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
  font-weight: 600;
  color: #fcdec0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemWriter = styled.div`
  font-size: 13px;
  color: #e5b299;
`;

export const ItemCreated = styled.div`
  font-size: 10px;
  color: #e5b299;
  font-weight: 700;
`;

export const HeartImg = styled.img`
  width: 15px;
`;

export const ItemLikeCount = styled.div`
  font-size: 12px;
  color: #e5b299;
  padding: 0px 0px 0px 5px;
`;

export const BestGoodsCss = styled.div`
  display: grid;
  justify-content: space-between;
  width: 100%;
  grid-template-columns: 23% 23% 23% 23%;
`;
