import * as S from "./FreeBoardWrite.styles";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import CommonShortInput from "../../../commons/libraries/ShortInput";
import CommonLongInput from "../../../commons/libraries/LongInput";
import FileUploadContainer from "../../../commons/fileUpload/FileUpload.container";
import { IFreeBoardWriteContainer } from "../freeBoardCommon/FreeBoard.types";
import ToogleButton from "../../../commons/libraries/ToogleButtony";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function FreeBoardWritePresenter(props: IFreeBoardWriteContainer) {
  return (
    <S.Main>
      <S.MainTitle>게시글 쓰기</S.MainTitle>
      <S.ContentsSection
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickEdit : props.onClickReg
        )}
      >
        <S.ContentsInfoArticle>
          <div>
            <S.ContentsTitle>
              작성자
              <S.ErrorMsg>{props.formState.errors.writer?.message}</S.ErrorMsg>
            </S.ContentsTitle>
            <CommonShortInput
              type="text"
              placeholder="이름을 적어주세요."
              register={props.register("writer")}
            />
          </div>
          <div>
            <S.ContentsTitle>
              비밀번호
              <S.ErrorMsg>
                {props.formState.errors.password?.message}
              </S.ErrorMsg>
            </S.ContentsTitle>
            <CommonShortInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              register={props.register("password")}
            />
          </div>
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
        <div>
          <S.ContentsTitle>
            내용
            <S.ErrorMsg>{props.formState.errors.contents?.message}</S.ErrorMsg>
          </S.ContentsTitle>
          <ReactQuill
            onChange={props.onChangeContents}
            value={props.getValues("contents") || ""}
            style={{
              width: "100%",
              height: "500px",
              marginBottom: "50px",
            }}
          />
        </div>
        <S.ContentsArticle>
          <S.ContentsTitle>유튜브</S.ContentsTitle>
          <CommonLongInput
            type="text"
            placeholder="링크를 복사해주세요."
            register={props.register("youtubeUrl")}
          />
        </S.ContentsArticle>
        <div>
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
        </div>
        <S.ButtonArticle>
          <ToogleButton
            type="submit"
            contents="등록하기"
            isActive={props.isComplete}
          />
        </S.ButtonArticle>
      </S.ContentsSection>
    </S.Main>
  );
}

export default FreeBoardWritePresenter;
