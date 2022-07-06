import styled from "@emotion/styled";
import { breakPoints } from "../../commons/globalstyles/Media";

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

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  margin: 0px 0px 80px 0px;
  box-shadow: rgb(219 219 219) 0px 5px 20px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    padding: 30px;
  }
  @media ${breakPoints.mini} {
    padding: 20px;
    margin: 0px 0px 20px 0px;
  }
`;

export const InfoNameChargeArticle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
  @media ${breakPoints.mini} {
    flex-direction: column;
  }
`;

export const InfoName = styled.div`
  font-size: 30px;
  font-weight: 700;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 25px;
  }
  @media ${breakPoints.mini} {
    font-size: 20px;
    padding: 0px 0px 20px 0px;
  }
`;

export const Name = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: #dd7202;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 25px;
  }
  @media ${breakPoints.mini} {
    font-size: 20px;
  }
`;

export const UserHistoryArticle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 0px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
  @media ${breakPoints.mini} {
    flex-direction: column;
    align-items: center;
  }
`;

export const CommonHistorySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 3px solid #e5e5e5;
  padding: 0px 20px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
  @media ${breakPoints.mini} {
    flex-direction: row;
    border: none;
    padding: 10px 0px;
  }
`;

export const HistoryTitle = styled.div`
  font-weight: 700;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
  @media ${breakPoints.mini} {
    font-size: 15px;
    padding: 0px 10px 0px 0px;
  }
`;

export const HistoryCount = styled.div`
  color: #dd7202;
  font-weight: 700;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
  @media ${breakPoints.mini} {
    font-size: 15px;
  }
`;

export const HistoryContentsTitleArticle = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 10px;
  border-radius: 20px;
  width: 100%;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
  @media ${breakPoints.mini} {
    display: grid;
    grid-template-columns: 40% 40%;
  }
`;

export const HistoryTap = styled.div`
  border-radius: 20px 20px 0px 0px;
  background-color: ${(props: IProps) =>
    props.el === props.selectedTap ? "#dd7202" : "#fff"};
  font-size: 25px;
  font-weight: 700;
  box-shadow: rgb(219 219 219) 0px 5px 20px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
  @media ${breakPoints.mini} {
    border-radius: 10px;
    font-size: 15px;
    text-align: center;
    margin: 0px 0px 20px 0px;
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
  position: relative;
  top: -30px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    padding: 30px;
  }
  @media ${breakPoints.mini} {
    top: 0;
    padding: 20px;
  }
`;

export const WirteCommonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
  @media ${breakPoints.mini} {
    font-size: 10px;
  }
`;

export const SoldAt = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: red;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
  @media ${breakPoints.mini} {
    font-size: 10px;
  }
`;

export const ContentsArticleList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 0px;
  border-bottom: 1px solid #e5e5e5;
`;
