import { v4 as uuidv4 } from "uuid";
import * as S from "./Comment.styles";
import { Modal } from "antd";
import { getDateDot } from "../libraries/Date";
function Comment(props: any) {
  return (
    <div>
      <Modal
        visible={props.isOpen}
        onOk={props.deleteComment}
        onCancel={props.onClickCancel}
      >
        <S.ModalPage>
          <S.ModalTitle>비밀번호 입력</S.ModalTitle>
          <S.ModalInput
            type="password"
            onChange={props.onChangePassword}
          ></S.ModalInput>
        </S.ModalPage>
      </Modal>
      {props.data?.map((el: any) => (
        <S.Main key={uuidv4()}>
          <S.CommentInfoSection>
            <S.InfoWriterRatingArticle>
              <S.InfoWriter>작성자 : {el.writer}</S.InfoWriter>
              <S.Rating value={el.rating} disabled></S.Rating>
              <S.DeleteBtn id={el._id} onClick={props.onClickOpenModal}>
                X
              </S.DeleteBtn>
            </S.InfoWriterRatingArticle>

            <S.InfoDate>{getDateDot(el.createdAt)}</S.InfoDate>
          </S.CommentInfoSection>
          <S.Contents>{el.contents}</S.Contents>
        </S.Main>
      ))}
    </div>
  );
}
export default Comment;
