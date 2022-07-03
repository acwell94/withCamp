import { ChangeEvent, RefObject } from "react";
import * as S from "./FileUpload.styles";

interface IFileUploadContainer {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  defaultFileUrl?: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  register: any;
}

function FileUploadPresenter(props: IFileUploadContainer) {
  return (
    <S.Main>
      {props.fileUrl ? (
        <S.FileUpload
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.Wrapper
          onClick={props.onClickUpload}
          type="button"
          {...props.register("images")}
        >
          <S.NotUpload>+</S.NotUpload>
        </S.Wrapper>
      )}

      <S.FileUploadBtn
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </S.Main>
  );
}

export default FileUploadPresenter;
