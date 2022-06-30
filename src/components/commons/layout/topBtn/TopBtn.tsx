import styled from "@emotion/styled";

const TopBox = styled.div`
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 25px;
  background: #fff;
  border: 2px solid #dadada;
  cursor: pointer;
  position: sticky;
  top: 850px;
  bottom: 0px;
  right: 200px;
  transition: 0.2s;
  margin: 0px 0px 70px 0px;
  &:hover {
    color: #dd7202;
    border: 2px solid #dd7202;
  }
`;

export default function TopButton() {
  const onClickTopMove = () => {
    document.documentElement.scrollTop = 0;
  };

  return <TopBox onClick={onClickTopMove}>↑</TopBox>;
}
