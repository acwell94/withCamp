import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  CREATE_USEDITEM_QUESTION,
  CREATE_USEDITEM_QUESTION_ANSWER,
  UPDATE_USEDITEM_QUESTION,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "../../units/freeMarketComment/freeMarketCommentCommon/FreeMarketComment.queries";
import CommonLongInput from "../libraries/LongInput";
import * as S from "./MarketCommentWrite.styles";
import * as yup from "yup";

const schema = yup.object({
  contents: yup
    .string()
    .min(1, "내용은 최소 1글자 이상입니다.")
    .max(100, "내용은 최대 100글자 입니다.")
    .required("내용을 입력해주세요."),
});

function MarketCommentWrite(props: any) {
  const router = useRouter();
  const [createUsedItemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const [updateUsedItemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);
  const [createCommentAnswer] = useMutation(CREATE_USEDITEM_QUESTION_ANSWER);
  const [updateCommentAnswer] = useMutation(UPDATE_USEDITEM_QUESTION_ANSWER);

  const { register, handleSubmit, reset, formState, watch }: any = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickClose = () => {
    if (props.isAnswerEdit) {
      props.setIsAnswerEdit(false);
    } else {
      props.setIsEdit(false);
      props.setIsAnswer(false);
    }
  };

  const onClickCommentWrite = async (data: any) => {
    if (props.isAnswer) {
      try {
        await createCommentAnswer({
          variables: {
            createUseditemQuestionAnswerInput: {
              contents: data.contents,
            },
            useditemQuestionId: String(props.data._id),
          },
        });
        reset();
        alert("답글 등록이 완료되었습니다.");
        router.replace(`/freeMarket/${router.query.marketId}`);
      } catch (error: any) {
        alert(error.message);
      }
    } else {
      try {
        await createUsedItemQuestion({
          variables: {
            createUseditemQuestionInput: {
              contents: data.contents,
            },
            useditemId: String(router.query.marketId),
          },
        });
        reset();
        alert("댓글 등록이 완료되었습니다.");
        router.replace(`/freeMarket/${router.query.marketId}`);
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  const onClickCommentUpdate = async (data: any) => {
    if (props.isEdit) {
      try {
        await updateUsedItemQuestion({
          variables: {
            updateUseditemQuestionInput: {
              contents: data.contents ? data.contents : props.data?.contents,
            },
            useditemQuestionId: String(props.data._id),
          },
        });
        props.setIsEdit(false);
        reset();
        alert("댓글 수정이 완료되었습니다.");
        router.replace(`/freeMarket/${router.query.marketId}`);
      } catch (error: any) {
        alert(error.message);
      }
    }
    if (props.isAnswerEdit) {
      try {
        await updateCommentAnswer({
          variables: {
            updateUseditemQuestionAnswerInput: {
              contents: data.contents
                ? data.contents
                : props.answerData?.contents,
            },
            useditemQuestionAnswerId: String(props.answerData._id),
          },
        });
        reset();
        alert("답글 수정이 완료되었습니다.");
        router.replace(`/freeMarket/${router.query.marketId}`);
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  return (
    <S.Main>
      <form
        onSubmit={handleSubmit(
          props.isEdit || props.isAnswerEdit
            ? onClickCommentUpdate
            : onClickCommentWrite
        )}
      >
        <S.InputSection>
          <CommonLongInput
            type="text"
            register={register("contents")}
            placeholder={
              props.isEdit
                ? props.data?.contents
                : props.isAnswerEdit
                ? props.answerData?.contents
                : "내용을 입력해주세요."
            }
          />
          <S.ContentsNumberError>
            <S.ErrorMsg>{formState.errors.contents?.message}</S.ErrorMsg>
            <S.ContentsNumber>{watch()?.contents?.length}/100</S.ContentsNumber>
          </S.ContentsNumberError>
        </S.InputSection>
        <S.SubmitSection>
          {props.isAnswerEdit || props.isEdit ? (
            <S.SubmitButton type="button" onClick={onClickClose}>
              취소
            </S.SubmitButton>
          ) : (
            ""
          )}
          <S.SubmitButton type="submit">
            {props.isEdit || props.isAnswerEdit ? "수정" : "등록"}
          </S.SubmitButton>
        </S.SubmitSection>
      </form>
    </S.Main>
  );
}

export default MarketCommentWrite;
