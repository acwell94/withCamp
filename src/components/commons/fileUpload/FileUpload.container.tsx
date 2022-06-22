import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import FileUploadPresenter from "./FileUpload.presenter";
import { checkValidationImage } from "./FileUpload.validation";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

interface IFreeBoardWritePresenter {
  index: number;
  fileUrl: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  register: any;
  defaultFileUrl: string;
}

function FileUploadContainer(props: IFreeBoardWritePresenter) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <FileUploadPresenter
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      register={props.register}
    />
  );
}

export default FileUploadContainer;
