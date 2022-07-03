import * as S from "./FreeBoardWrite.styles";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import CommonLongInput from "../../../commons/libraries/LongInput";
import FileUploadContainer from "../../../commons/fileUpload/FileUpload.container";
import { IFreeBoardWriteContainer } from "../freeBoardCommon/FreeBoard.types";
import ToogleButton from "../../../commons/libraries/ToogleButtony";
import CampKaKaoMapWritePage from "../../../commons/campMapWrite/CampMapWrite";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function FreeBoardWritePresenter(props: IFreeBoardWriteContainer) {
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
      <S.MainTitle>{props.isEdit ? "게시글 수정" : "게시글 작성"}</S.MainTitle>
      <S.ContentsSection
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickEdit : props.onClickReg
        )}
      >
        <S.ContentsInfoArticle>
          <S.InputArrange>
            <S.ContentsTitle>
              작성자
              <S.ErrorMsg>{props.formState.errors.writer?.message}</S.ErrorMsg>
            </S.ContentsTitle>
            <CommonLongInput
              type="text"
              placeholder="이름을 적어주세요."
              register={props.register("writer")}
            />
          </S.InputArrange>

          <S.InputArrange>
            <S.ContentsTitle>
              비밀번호
              <S.ErrorMsg>
                {props.formState.errors.password?.message}
              </S.ErrorMsg>
            </S.ContentsTitle>
            <CommonLongInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              register={props.register("password")}
            />
          </S.InputArrange>
        </S.ContentsInfoArticle>

        <S.ContentsArticle>
          <S.ContentsTitle>
            제목<S.ErrorMsg>{props.formState.errors.title?.message}</S.ErrorMsg>
          </S.ContentsTitle>
          <CommonLongInput
            type="text"
            placeholder="제목을 입력해주세요."
            register={props.register("title")}
          />
        </S.ContentsArticle>

        <S.ContentsArticle>
          <S.ContentsTitle>
            모임 장소{" "}
            <S.SmallInfo>
              {props.isEdit
                ? "(미변경시 기존의 장소가 나옵니다.)"
                : "(필수는 아닙니다)"}
            </S.SmallInfo>
          </S.ContentsTitle>
          <S.MapArticle>
            <CampKaKaoMapWritePage setAddress={props.setAddress} />
          </S.MapArticle>
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
          <S.ContentsTitle>유튜브</S.ContentsTitle>
          <CommonLongInput
            type="text"
            placeholder="링크를 복사해주세요."
            register={props.register("youtubeUrl")}
          />
        </S.ContentsArticle>

        {/* <S.FileUploadArrange> */}
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
        {/* </S.FileUploadArrange> */}

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

export default FreeBoardWritePresenter;
