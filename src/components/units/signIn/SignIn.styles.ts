import styled from "@emotion/styled";
import { breakPoints } from "../../commons/globalstyles/Media";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 20px;
  width: 1000px;
  padding: 50px 80px;
  margin: 50px 0px;
  @media ${breakPoints.tablet} {
    width: 60%;
    padding: 60px 40px;
  }
  @media ${breakPoints.mobile} {
    width: 60%;
    padding: 40px 30px;
  }
  @media ${breakPoints.mini} {
    width: 80%;
    padding: 30px 20px;
  }
`;

export const SignUpMainTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 10px 0px;
`;
export const MainDeco = styled.div`
  font-size: 20px;
  font-weight: 700;
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
  @media ${breakPoints.mini} {
    font-size: 14px;
  }
`;

export const MainTitle = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 30px;
  font-weight: 700;
  padding: 0px 0px 10px 0px;
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
  @media ${breakPoints.mini} {
    font-size: 14px;
    padding: 0px 0px 5px 0px;
  }
`;

export const MainLogo = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #dd7202;
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
  @media ${breakPoints.mini} {
    font-size: 14px;
  }
`;

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const InputSection = styled.div`
  padding: 20px 0px;
  width: 100%;
  @media ${breakPoints.mini} {
    padding: 10px 0;
  }
`;

export const InputTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding: 0px 0px 10px 0px;
  @media ${breakPoints.mobile} {
    font-size: 17px;
  }
  @media ${breakPoints.mini} {
    font-size: 12px;
    padding: 0px 0px 5px 0px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 2px solid #dd7202;
  border-radius: 10px;
  outline: none;
  padding: 9px 10px;
  font-weight: 600;
  font-size: 14px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
  @media ${breakPoints.mini} {
    height: auto;
    padding: 5px 6px;
    font-size: 10px;
  }
`;

export const ErrorMsg = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: red;
  padding: 10px 0px 0px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
  @media ${breakPoints.mini} {
    font-size: 10px;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  width: 100%;
`;

export const submitButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: #dd7202;
  border-radius: 10px;
  width: 60%;
  color: #fff;
  padding: 10px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
  @media ${breakPoints.mini} {
    font-size: 12px;
    width: 100%;
    padding: 5px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 20px 0px 0px 0px;
`;

export const Info = styled.div`
  font-size: 16px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
  @media ${breakPoints.mini} {
    font-size: 12px;
  }
`;

export const InfoMove = styled.div`
  font-size: 16px;
  text-decoration: underline;
  font-weight: 700;
  cursor: pointer;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
  @media ${breakPoints.mini} {
    font-size: 12px;
  }
`;
