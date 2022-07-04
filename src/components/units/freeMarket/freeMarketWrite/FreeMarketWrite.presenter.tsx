import CommonLongInput from "../../../commons/libraries/LongInput";
import * as S from "./FreeMarketWrite.styles";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import CampKaKaoMapWritePage from "../../../commons/campMapWrite/CampMapWrite";
import ToogleButton from "../../../commons/libraries/ToogleButtony";
import FileUploadContainer from "../../../commons/fileUpload/FileUpload.container";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function FreeMarketWritePresenter(props: any) {
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ align: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],

        [
          {
            color: [
              "#000000",
              "#e60000",
              "#ff9900",
              "#ffff00",
              "#008a00",
              "#0066cc",
              "#9933ff",

              "custom-color",
            ],
          },
          { background: [] },
        ],
      ],
    },
  };
  return (
    <S.Main>
      <S.MainTitle>
        {props.isEdit ? "상품 수정하기" : "상품 등록하기"}
      </S.MainTitle>
      <S.ContentsSection
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickEdit : props.onClickReg
        )}
      >
        <div>
          <S.ContentsTitle>
            상품명
            <S.ErrorMsg>{props.formState.errors.name?.message}</S.ErrorMsg>
          </S.ContentsTitle>
          <CommonLongInput
            type="text"
            placeholder="상품명을 입력해주세요."
            register={props.register("name")}
          />
        </div>
        <S.ContentsArticle>
          <S.ContentsTitle>
            요약
            <S.ErrorMsg>{props.formState.errors.remarks?.message}</S.ErrorMsg>
          </S.ContentsTitle>
          <CommonLongInput
            type="text"
            placeholder="자신의 상품을 한줄로 홍보해주세요."
            register={props.register("remarks")}
          />
        </S.ContentsArticle>
        <div>
          <S.ContentsTitle>
            가격<S.ErrorMsg>{props.formState.errors.price?.message}</S.ErrorMsg>
          </S.ContentsTitle>
          <CommonLongInput
            type="number"
            placeholder="가격을 입력해주세요."
            register={props.register("price")}
          />
        </div>
        <S.ContentsArticle>
          <S.ContentsTitle style={{ padding: "0px" }}>태그</S.ContentsTitle>
          <div>
            {props.hashArr.map((el: string) => (
              <>
                <S.ContentsTags
                  key={uuidv4()}
                  onClick={props.onClickDeleteHash}
                >
                  {el}
                </S.ContentsTags>
              </>
            ))}
          </div>
          <CommonLongInput
            type="text"
            placeholder="태그를 입력 후 스페이스바를 누르면 하나씩 입력이 되고 클릭하면 지워집니다. 최대 5개까지 입력할 수 있습니다."
            onKeyUp={props.onKeyUpHash}
            register={props.register("tags")}
          />
        </S.ContentsArticle>
        <S.QuillSection>
          <S.ContentsTitle>
            내용
            <S.ErrorMsg>{props.formState.errors.contents?.message}</S.ErrorMsg>
          </S.ContentsTitle>
          <ReactQuill
            onChange={props.onChangeContents}
            modules={modules}
            value={props.getValues("contents") || ""}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </S.QuillSection>

        <S.ContentsArticle>
          <S.ContentsTitle>사진첨부</S.ContentsTitle>
          <S.FileUploadArticle>
            {props.fileUrls.map((el: string, index: number) => (
              <FileUploadContainer
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
                register={props.register}
              />
            ))}
          </S.FileUploadArticle>
        </S.ContentsArticle>

        <div>
          <S.ContentsTitle>
            거래장소
            <S.SmallInfo>
              {props.isEdit
                ? "(미변경시 기존의 장소가 나옵니다.)"
                : "(거래장소를 등록해주세요.)"}
            </S.SmallInfo>
          </S.ContentsTitle>
          <S.MapArticle>
            <CampKaKaoMapWritePage setAddress={props.setAddress} />
          </S.MapArticle>
        </div>
        <S.ButtonArticle>
          <ToogleButton
            type="submit"
            contents={props.isEdit ? "수정하기" : "등록하기"}
            isActive={props.isComplete}
          />
        </S.ButtonArticle>
      </S.ContentsSection>
    </S.Main>
  );
}

export default FreeMarketWritePresenter;
