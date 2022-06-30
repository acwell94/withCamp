import styled from "@emotion/styled";

const Button = styled.button`
  padding: 10px 42px;
  background: #dd7202;
  border: 2px solid #dd7202;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  ${(props) =>
    props.disabled
      ? `:disabled {
        cursor: auto;
    opacity : 0.4

  }`
      : ` &:hover {
    cursor: pointer;
    background-color: #dc8f3e;
  }`}
  transition: 0.2s;
`;

interface IButtonProps {
  type: "button" | "submit";
  onClick?: any;
  contents: string;
  disabled?: boolean;
}

function CommonFillButton(props: IButtonProps) {
  return (
    <Button type={props.type} onClick={props.onClick} disabled={props.disabled}>
      {props.contents}
    </Button>
  );
}

export default CommonFillButton;
