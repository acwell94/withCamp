import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  CREATE_USEDITEM,
  FETCH_USED_ITEM,
  UPDATE_USEDITEM,
} from "../freeMarketCommon/FreeMarket.queries";
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

function FreeMarketWriteContainer(props) {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const { data: fetchUsedItemData } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.marketId) },
  });
  const [updateUsedItem] = useMutation(UPDATE_USEDITEM);
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
            tags: hashArr,
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
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    _.isEmpty(formState.errors) ? setIsComplete(true) : setIsComplete(false);
  }, [_.isEmpty(formState.errors)]);

  const onClickDeleteHash = (event: any) => {
    hashArr.splice(Number(event.target.id), 1);
    setHashArr([...hashArr]);
  };

  const onClickEdit = async (data) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(
      fetchUsedItemData?.fetchUseditem.images
    );
    const isChangedFiles = currentFiles !== defaultFiles;

    try {
      const result = await updateUsedItem({
        variables: {
          updateUseditemInput: {
            name: data.name ? data.name : fetchUsedItemData.fetchUseditem?.name,
            remarks: data.remarks
              ? data.remarks
              : fetchUsedItemData.fetchUseditem?.remarks,
            price: data.price
              ? Number(data.price)
              : Number(fetchUsedItemData.fetchUseditem?.price),
            tags:
              fetchUsedItemData.fetchUseditem?.tags === hashArr
                ? fetchUsedItemData.fetchUseditem?.tags
                : hashArr,
            contents: data.contents
              ? data.contents
              : fetchUsedItemData?.fetchUseditem.contents,
            images: isChangedFiles
              ? fileUrls
              : fetchUsedItemData?.fetchUseditem.images,
            useditemAddress: {
              zipcode: address.x
                ? address.x
                : fetchUsedItemData.fetchUseditem?.useditemAddress.zipcode,
              address: address.y
                ? address.y
                : fetchUsedItemData.fetchUseditem?.useditemAddress.address,
              addressDetail: address.place_name
                ? address.place_name
                : fetchUsedItemData.fetchUseditem?.useditemAddress
                    .addressDetail,
            },
          },
          useditemId: router.query.marketId,
        },
      });

      alert("상품 수정이 완료되었습니다.");
      router.push(`/freeMarket/${result.data.updateUseditem._id}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    setValue("name", fetchUsedItemData?.fetchUseditem?.name);
    setValue("remarks", fetchUsedItemData?.fetchUseditem?.remarks);
    setValue("contents", fetchUsedItemData?.fetchUseditem.contents);
    setValue("price", fetchUsedItemData?.fetchUseditem?.price);
    if (fetchUsedItemData?.fetchUseditem?.tags) {
      setHashArr([...fetchUsedItemData?.fetchUseditem?.tags]);
    }
    if (fetchUsedItemData?.fetchUseditem?.images) {
      setFileUrls([...fetchUsedItemData?.fetchUseditem?.images]);
    }
  }, [fetchUsedItemData]);

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
      onClickEdit={onClickEdit}
      isEdit={props.isEdit}
    />
  );
}

export default FreeMarketWriteContainer;
