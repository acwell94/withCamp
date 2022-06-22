import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CREATE_BOARD } from "../freeBoardCommon/FreeBoard.queries";
import FreeBoardWritePresenter from "./FreeBoardWrite.presenter";
import { useState } from "react";
import { IRegData } from "../freeBoardCommon/FreeBoard.types";

const schema = yup.object({
  writer: yup
    .string()
    .required("이름은 필수 입력 사항입니다.")
    .min(1, "이름은 최소 1글자 이상입니다.")
    .max(6, "이름은 최대 6글자 입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리입니다.")
    .required("비밀번호는 필수 입력 사항입니다."),
  title: yup
    .string()
    .min(1, "제목은 최소 1글자 이상입니다.")
    .required("제목은 필수 입력 사항입니다."),
});

function FreeBoardWriteContainer() {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const { register, handleSubmit, formState, setValue, trigger, getValues } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickReg = async (data: IRegData) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            images: fileUrls,
          },
        },
      });
      router.push(`/freeboard/${result.data.createBoard._id}`);
    } catch (error) {}
  };

  return (
    <FreeBoardWritePresenter
      register={register}
      handleSubmit={handleSubmit}
      getValues={getValues}
      formState={formState}
      onClickReg={onClickReg}
      onChangeContents={onChangeContents}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
    />
  );
}

export default FreeBoardWriteContainer;
