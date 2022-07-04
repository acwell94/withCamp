import styled from "@emotion/styled";
import { breakPoints } from "../globalstyles/Media";

interface IMarketItem {
  backGroundColor: boolean;
}

export const BestContentsItemSection = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 0px 0px 10px 0px;
  background-color: ${(props: IMarketItem) =>
    props.backGroundColor ? "#7d5a50e0" : "#fff"};
  border-radius: ${(props: IMarketItem) =>
    props.backGroundColor ? "20px 20px 10px 10px" : "0px"};
  box-shadow: ${(props: IMarketItem) =>
    props.backGroundColor ? "rgb(219 219 219) 0px 5px 20px;" : ""};
  @media ${breakPoints.tablet} {
    width: ${(props: IMarketItem) => (props.backGroundColor ? "80%" : "100%")};
    margin: ${(props: IMarketItem) =>
      props.backGroundColor ? "0px 0px 50px 0px" : "0"};
  }
  @media ${breakPoints.mobile} {
    margin: ${(props: IMarketItem) =>
      props.backGroundColor ? "0px 0px 50px 0px" : "0px 20px 0px 0px"};
  }
  @media ${breakPoints.mini} {
    margin: ${(props: IMarketItem) =>
      props.backGroundColor ? "0px 0px 50px 0px" : "0"};
  }
`;

export const ItemImgArticle = styled.div`
  border-radius: 20px;
  height: 200px;
  padding: 0px 0px 15px 0px;
  overflow: hidden;
  @media ${breakPoints.tablet} {
    height: ${(props: IMarketItem) =>
      props.backGroundColor ? "auto" : "200px"};
  }
  @media ${breakPoints.mobile} {
    height: ${(props: IMarketItem) =>
      props.backGroundColor ? "auto" : "200px"};
  }
  @media ${breakPoints.mini} {
    height: ${(props: IMarketItem) =>
      props.backGroundColor ? "auto" : "200px"};
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.2);
    padding: 0px 0px 15px 0px;
    border-radius: 20px;
  }
  @media ${breakPoints.tablet} {
    height: ${(props: IMarketItem) =>
      props.backGroundColor ? "350px" : "200px"};
  }
  @media ${breakPoints.mobile} {
    height: ${(props: IMarketItem) =>
      props.backGroundColor ? "350px" : "200px"};
  }
  @media ${breakPoints.mini} {
    height: ${(props: IMarketItem) =>
      props.backGroundColor ? "200px" : "200px"};
  }
`;

export const ItemContentsSection = styled.div`
  padding: ${(props: IMarketItem) =>
    props.backGroundColor ? "15px 10px 0px 10px" : "15px 0px 0px 0px"};
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
  color: ${(props: IMarketItem) =>
    props.backGroundColor ? "#fcdec0" : "black"};
  @media ${breakPoints.tablet} {
    font-size: ${(props: IMarketItem) =>
      props.backGroundColor ? "28px" : "15px"};
  }

  @media ${breakPoints.mobile} {
    font-size: ${(props: IMarketItem) =>
      props.backGroundColor ? "25px" : "12px"};
  }
  @media ${breakPoints.mini} {
    font-size: ${(props: IMarketItem) =>
      props.backGroundColor ? "25px" : "12px"};
  }
`;

export const ItemName = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${(props: IMarketItem) =>
    props.backGroundColor ? "13px" : "15px"};
  color: ${(props: IMarketItem) =>
    props.backGroundColor ? "#e5b299" : "black"};
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${breakPoints.tablet} {
    font-size: ${(props: IMarketItem) =>
      props.backGroundColor ? "25px" : "15px"};
  }
  @media ${breakPoints.mobile} {
    font-size: ${(props: IMarketItem) =>
      props.backGroundColor ? "26px" : "15px"};
  }
`;

export const SearchResult = styled.div`
  font-size: ${(props: IMarketItem) =>
    props.backGroundColor ? "13px" : "15px"};
  @media ${breakPoints.tablet} {
    font-size: ${(props: IMarketItem) =>
      props.backGroundColor ? "20px" : "15px"};
  }
  @media ${breakPoints.mobile} {
    font-size: ${(props: IMarketItem) =>
      props.backGroundColor ? "26px" : "12px"};
  }
`;

export const ItemPrice = styled.div`
  font-size: ${(props: IMarketItem) =>
    props.backGroundColor ? "20px" : "25px"};
  color: ${(props: IMarketItem) =>
    props.backGroundColor ? "#e5b299" : "black"};
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${breakPoints.tablet} {
    font-size: ${(props: IMarketItem) =>
      props.backGroundColor ? "28px" : "15px"};
  }
  @media ${breakPoints.mobile} {
    font-size: ${(props: IMarketItem) =>
      props.backGroundColor ? "28px" : "15px"};
  }
  @media ${breakPoints.mini} {
  }
`;
export const ItemCreated = styled.div`
  font-size: ${(props: IMarketItem) =>
    props.backGroundColor ? "15px" : "15px"};
  color: ${(props: IMarketItem) =>
    props.backGroundColor ? "#e5b299" : "#676767"};
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${breakPoints.tablet} {
    font-size: ${(props: IMarketItem) =>
      props.backGroundColor ? "20px" : "15px"};
  }
  @media ${breakPoints.mobile} {
    font-size: ${(props: IMarketItem) =>
      props.backGroundColor ? "23px" : "12px"};
  }
  @media ${breakPoints.mini} {
  }
`;

export const ItemPickedCount = styled.span`
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${breakPoints.tablet} {
    font-size: ${(props: IMarketItem) =>
      props.backGroundColor ? "26px" : "15px"};
  }
  @media ${breakPoints.mobile} {
    font-size: ${(props: IMarketItem) =>
      props.backGroundColor ? "26px" : "12px"};
  }
  @media ${breakPoints.mini} {
  }
`;
