import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
  padding: 80px 50px;
`;

export const MainTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 0px 0px 80px 0px;
`;

export const ContentsSection = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
`;

export const ContentsTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  padding: 0px 0px 10px 0px;
`;

export const ContentsArticle = styled.div`
  padding: 20px 0px;
`;

export const ErrorMsg = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: red;
  padding: 0px 0px 0px 10px;
`;

export const FileUploadArticle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonArticle = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0px 0px 0px;
`;
