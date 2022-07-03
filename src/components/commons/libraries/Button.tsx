import styled from "@emotion/styled";
import { breakPoints } from "../globalstyles/Media";

const Button = styled.button`
  width: 150px;
  padding: 10px 42px;
  background: #fff;
  border: 2px solid #dadada;
  border-radius: 10px;
  color: #676767;
  font-weight: 700;
  font-size: 16px;
  transition: 0.2s;

  ${(props) =>
    props.disabled
      ? `:disabled {
        cursor: auto;
    background-color : #dadada
  }`
      : `&:hover {
    cursor: pointer;
    color: #dd7202;
    border: 2px solid #dd7202;
  }`}

  @media ${breakPoints.mobile} {
    width: 100px;
    padding: 8px 12px;
    font-size: 12px;
  }
  @media ${breakPoints.mini} {
    width: 80px;
    padding: 8px 10px;
    font-size: 10px;
  }
`;

interface IButtonProps {
  type: "button" | "submit";
  onClick?: any;
  contents: string;
  disabled?: boolean;
}

function CommonButton(props: IButtonProps) {
  return (
    <Button type={props.type} onClick={props.onClick} disabled={props.disabled}>
      {props.contents}
    </Button>
  );
}

export default CommonButton;
