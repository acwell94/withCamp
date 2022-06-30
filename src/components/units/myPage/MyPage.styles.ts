import styled from "@emotion/styled";

interface IProps {
  el?: any;
  selectedTap?: string;
}

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
  padding: 80px 50px;
`;

export const MainTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
  padding: 0px 0px 80px 0px;
`;

export const WriteCommon = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 0px 0px 30px 0px;
`;

export const WirteCommonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  margin: 0px 0px 80px 0px;
  box-shadow: rgb(219 219 219) 0px 5px 20px;
`;

export const InfoNameChargeArticle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoName = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const Name = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: #dd7202;
`;

export const UserHistoryArticle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0px 0px 0px;
`;

export const CommonHistorySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HistoryTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const HistoryCount = styled.div`
  color: #dd7202;
  font-weight: 700;
`;

export const ContentsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  box-shadow: rgb(219 219 219) 0px 5px 20px;
  position: relative;
  top: -30px;
`;

export const HistoryContentsTitleArticle = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 10px;
  border-radius: 20px;
  width: 100%;
`;

export const HistoryTap = styled.div`
  border-radius: 20px 20px 0px 0px;
  background-color: ${(props: IProps) =>
    props.el === props.selectedTap ? "#dd7202" : "#fff"};
  font-size: 25px;
  font-weight: 700;
  box-shadow: rgb(219 219 219) 0px 5px 20px;
  padding: 20px;
  cursor: pointer;
`;

export const HistoryContentsTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid #e5e5e5;
  border-top: 2px solid #e5e5e5;
  padding: 10px 0px;
`;

export const ContentsTitleElement = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SoldAt = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: red;
`;

export const ContentsArticleList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;
`;
