import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  CREATE_BOARD,
  FETCH_BOARD,
  UPDATE_BOARD,
} from "../freeBoardCommon/FreeBoard.queries";
import FreeBoardWritePresenter from "./FreeBoardWrite.presenter";
import { useEffect, useState } from "react";
import { IData } from "../freeBoardCommon/FreeBoard.types";
import _ from "lodash";

interface IFreeBoardEditPage {
  isEdit?: boolean;
}

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
  contents: yup.string().required("내용은 필수 입력 사항입니다."),
});

function FreeBoardWriteContainer(props: IFreeBoardEditPage) {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const { data: fetchBoardData } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [isComplete, setIsComplete] = useState(false);

  const [address, setAddress] = useState<any>("");

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

  const onClickReg = async (data: IData) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            boardAddress: {
              zipcode: address.x,
              address: address.y,
              addressDetail: address.place_name,
            },
            images: fileUrls,
          },
        },
      });

      alert("게시글 등록이 완료되었습니다.");
      router.push(`/freeboard/${result.data.createBoard._id}`);
    } catch (error) {}
  };

  useEffect(() => {
    _.isEmpty(formState.errors) ? setIsComplete(true) : setIsComplete(false);
  }, [_.isEmpty(formState.errors)]);

  const onClickEdit = async (data: IData) => {
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: data.password,
          updateBoardInput: {
            title: data.title ? data.title : fetchBoardData?.fetchBoard.title,
            contents: data.contents
              ? data.contents
              : fetchBoardData?.fetchBoard.contents,
            youtubeUrl: data.youtubeUrl
              ? data.youtubeUrl
              : fetchBoardData?.fetchBoard.youtubeUrl,
            images: fetchBoardData?.fetchBoard.images
              ? fetchBoardData?.fetchBoard.images
              : fileUrls,
          },
        },
      });
      alert("게시글 수정이 완료되었습니다.");
      router.push(`/freeboard/${result.data.createBoard._id}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    setValue("writer", fetchBoardData?.fetchBoard.writer);
    setValue("title", fetchBoardData?.fetchBoard.title);
    setValue("contents", fetchBoardData?.fetchBoard.contents);
    setValue("youtubeUrl", fetchBoardData?.fetchBoard.youtubeUrl);
    if (fetchBoardData?.fetchBoard.images.length) {
      setFileUrls([...fetchBoardData?.fetchBoard.images]);
    }
  }, [fetchBoardData]);

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
      isComplete={isComplete}
      onClickEdit={onClickEdit}
      isEdit={props.isEdit}
      fetchBoardData={fetchBoardData}
      setAddress={setAddress}
    />
  );
}

export default FreeBoardWriteContainer;
