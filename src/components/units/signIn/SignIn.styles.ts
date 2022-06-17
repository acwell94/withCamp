import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 20px;
  width: 1000px;
  padding: 50px 0px;
  margin: 50px 0px;
`;

export const MainTitle = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 30px;
  font-weight: 700;
  padding: 0px 0px 10px 0px;
`;

export const MainLogo = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #dd7202;
`;

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
`;
export const InputSection = styled.div`
  padding: 20px 0px;
`;

export const InputTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding: 0px 0px 10px 0px;
`;

export const Input = styled.input`
  width: 500px;
  height: 50px;
  border: 2px solid #dd7202;
  border-radius: 10px;
  outline: none;
  padding: 9px 10px;
  font-weight: 600;
  font-size: 14px;
`;

export const ButtonSection = styled.div`
  padding: 20px 0px;
`;

export const submitButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: #dd7202;
  border-radius: 10px;
  width: 500px;
  height: 50px;
  color: #fff;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0px 0px 0px;
`;

export const Info = styled.div`
  font-size: 16px;
`;

export const InfoSignUp = styled.div`
  font-size: 16px;
  text-decoration: underline;
  font-weight: 700;
`;
