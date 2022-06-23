import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "../freeBoardCommentCommon/FreeBoardComment.queries";
import FreeBoardCommentWritePresenter from "./FreeBoardCommentWrite.presenter";
import * as yup from "yup";
import _ from "lodash";
import { ICommentData } from "../freeBoardCommentCommon/FreeBoardComment.types";

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
  contents: yup
    .string()
    .max(100, "댓글은 최대 100글자 까지 입니다.")
    .required("댓글 내용은 필수 입력 사항입니다."),
});

function FreeBoardCommentWriteContainer() {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [rating, setRating] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const { register, handleSubmit, formState, watch, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickCommentReg = async (data: ICommentData) => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: data.writer,
            password: data.password,
            contents: data.contents,
            rating,
          },
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      reset();
      setRating(0);
    } catch (error: any) {
      alert(error.message);
    }
  };
  useEffect(() => {
    _.isEmpty(formState.errors) ? setIsComplete(true) : setIsComplete(false);
  }, [_.isEmpty(formState.errors)]);

  const onChangeRating = (value: number) => {
    setRating(value);
  };

  return (
    <FreeBoardCommentWritePresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      watch={watch}
      onClickCommentReg={onClickCommentReg}
      onChangeRating={onChangeRating}
      isComplete={isComplete}
    />
  );
}

export default FreeBoardCommentWriteContainer;
