import styled from "@emotion/styled";

const Button = styled.button`
  padding: 10px 42px;
  background: #dd7202;
  border: 2px solid #dd7202;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #dc8f3e;
  }
`;

interface IButtonProps {
  type: "button" | "submit";
  onClick?: any;
  contents: string;
}

function CommonFillButton(props: IButtonProps) {
  return (
    <Button type={props.type} onClick={props.onClick}>
      {props.contents}
    </Button>
  );
}

export default CommonFillButton;
