import styled from "@emotion/styled";

interface IMarketItem {
  backGroundcolor: boolean;
}

export const BestContentsItemSection = styled.div`
  cursor: pointer;
  padding: 0px 0px 10px 0px;
  background-color: ${(props: IMarketItem) =>
    props.backGroundcolor ? "#7d5a50e0" : "#fff"};
  border-radius: ${(props: IMarketItem) =>
    props.backGroundcolor ? "20px 20px 10px 10px" : "0px"};
  box-shadow: ${(props: IMarketItem) =>
    props.backGroundcolor ? "rgb(219 219 219) 0px 5px 20px;" : ""};
`;

export const ItemImgArticle = styled.div`
  border-radius: 20px;
  height: 200px;
  padding: 0px 0px 15px 0px;
  overflow: hidden;
`;

export const ItemContentsSection = styled.div`
  padding: ${(props: IMarketItem) =>
    props.backGroundcolor ? "15px 10px 0px 10px" : "15px 0px 0px 0px"}; ;
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
    props.backGroundcolor ? "#fcdec0" : "black"};
`;

export const ItemName = styled.div`
  font-size: ${(props: IMarketItem) =>
    props.backGroundcolor ? "13px" : "15px"};
  color: ${(props: IMarketItem) =>
    props.backGroundcolor ? "#e5b299" : "black"};
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemPrice = styled.div`
  font-size: ${(props: IMarketItem) =>
    props.backGroundcolor ? "20px" : "25px"};
  color: ${(props: IMarketItem) =>
    props.backGroundcolor ? "#e5b299" : "black"};
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ItemCreated = styled.div`
  font-size: ${(props: IMarketItem) =>
    props.backGroundcolor ? "15px" : "15px"};
  color: ${(props: IMarketItem) =>
    props.backGroundcolor ? "#e5b299" : "#676767"};
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemPickedCount = styled.span`
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
