import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CREATE_USEDITEM } from "../freeMarketCommon/FreeMarket.queries";
import FreeMarketWritePresenter from "./FreeMarketWrite.presenter";
import * as yup from "yup";
import _ from "lodash";

const schema = yup.object({
  name: yup
    .string()
    .min(1, "상품명은 최소 1글자 이상입니다.")
    .required("상품명은 필수 입력 사항입니다."),
  remarks: yup
    .string()
    .min(1, "요약은 최소 1글자 이상입니다.")
    .required("요약은 필수 입력 사항입니다."),

  contents: yup.string().required("내용은 필수 입력 사항입니다."),
});

function FreeMarketWriteContainer() {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [address, setAddress] = useState<any>("");
  const [hashArr, setHashArr] = useState<any>([]);
  const [isComplete, setIsComplete] = useState(false);

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

  const onKeyUpHash = (event: any) => {
    if (hashArr.length > 4) {
      alert("태그는 최대 5개까지 입력할 수 있습니다.");

      return;
    }
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };

  const onClickReg = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            price: Number(data.price),
            tags: data.tags,
            contents: data.contents,
            images: fileUrls,
            useditemAddress: {
              zipcode: address.x,
              address: address.y,
              addressDetail: address.place_name,
            },
          },
        },
      });
      alert("게시글 등록이 완료되었습니다.");
      router.push(`/freeMarket/${result.data?.createUseditem._id}`);
    } catch (error) {}
  };

  useEffect(() => {
    _.isEmpty(formState.errors) ? setIsComplete(true) : setIsComplete(false);
  }, [_.isEmpty(formState.errors)]);

  const onClickDeleteHash = (event: any) => {
    hashArr.splice(Number(event.target.id), 1);
    setHashArr([...hashArr]);
  };

  return (
    <FreeMarketWritePresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      getValues={getValues}
      fileUrls={fileUrls}
      hashArr={hashArr}
      setAddress={setAddress}
      isComplete={isComplete}
      onChangeContents={onChangeContents}
      onChangeFileUrls={onChangeFileUrls}
      onKeyUpHash={onKeyUpHash}
      onClickReg={onClickReg}
      onClickDeleteHash={onClickDeleteHash}
    />
  );
}

export default FreeMarketWriteContainer;
