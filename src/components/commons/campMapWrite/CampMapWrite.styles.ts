import styled from "@emotion/styled";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import { breakPoints } from "../globalstyles/Media";

interface ISearchBarOpen {
  isOpen: boolean;
}

export const MapSection = styled.div`
  display: flex;
  position: relative;

  #map {
    width: 100%;
    height: 500px;
    position: absolute;
    overflow: hidden;
    border-radius: 20px;
  }
  #menuDiv {
    display: flex;
    position: relative;
    z-index: 2;
    font-size: 12px;
    @media ${breakPoints.mini} {
      font-size: 10px;
    }
  }

  #menu_wrap {
    position: relative;
    width: 400px;
    height: 500px;
    border-radius: 20px;
    overflow-y: auto;
    background: rgba(255, 255, 255, 0.7);
    display: ${(props: ISearchBarOpen) => (props.isOpen ? "" : "none")};
    @media ${breakPoints.mini} {
      width: 180px;
    }
  }

  #map_title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    font-weight: 700;
    color: #dd7202;
  }

  #logo_title {
    @media ${breakPoints.mini} {
      font-size: 10px;
    }
  }

  #form {
    display: flex;
    justify-content: space-between;
    padding: 0px 15px 10px 15px;
    width: 100%;
    height: 100%;
  }

  #keyword {
    width: 100%;
    border: none;
    outline: none;
    @media ${breakPoints.mini} {
      height: 20px;
      font-size: 10px;
    }
  }

  #submit_btn {
    width: 20%;

    background-color: #dd7202;
    border: none;
    outline: none;
    @media ${breakPoints.mini} {
      height: 20px;
      font-size: 10px;
    }
  }

  #placesList {
    @media ${breakPoints.mini} {
      padding: 0px 0px 0px 10px;
      margin: 0;
    }
  }

  #placesList h5 {
    color: #dd7202;
    @media ${breakPoints.mini} {
      font-size: 10px;
    }
  }

  #placesList li {
    list-style: square;
  }
  #placesList .item {
    border-bottom: 1px solid #888;

    overflow: hidden;
    cursor: pointer;
  }

  #placesList .item .info {
    padding: 10px 0 10px 5px;
  }

  #placesList .item span {
    display: block;
    margin-top: 4px;
    @media ${breakPoints.mini} {
      font-size: 10px;
    }
  }
  #placesList .info .gray {
    color: #8a8a8a;
  }

  #placesList .info .tel {
    color: #009900;
  }

  #btnDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #pagination {
    margin: 10px auto;
    text-align: center;
  }
  #pagination a {
    display: inline-block;
    margin-right: 10px;
    color: #7b7b7b;
    @media ${breakPoints.mini} {
      font-size: 15px;
    }
  }
  #pagination .on {
    font-weight: bold;
    cursor: default;
    color: #dd7202;
  }

  #btnOn {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #searchBtn {
    width: 20px;
    padding: 0px;
    height: 70px;
    background-color: #dd7202;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const SearchIcon = styled.img`
  width: 50%;
  filter: brightness(1);
  cursor: pointer;
`;

export const LeftDisplayButton = styled(CaretLeftFilled)`
  color: #fff;
  cursor: pointer;
`;
export const RightDisplayButton = styled(CaretRightFilled)`
  color: #fff;
`;
