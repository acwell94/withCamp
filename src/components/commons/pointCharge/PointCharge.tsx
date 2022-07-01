import { gql, useMutation } from "@apollo/client";
import Head from "next/head";
import { useState } from "react";
import { IQuery } from "../../../commons/types/generated/types";
import * as S from "./PointCharge.styles";

declare const window: typeof globalThis & {
  IMP: any;
};

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
    }
  }
`;

interface IMyPagePresenter {
  fetchUserData?: Pick<IQuery, "fetchUserLoggedIn">;
}

function PointCharge(props: IMyPagePresenter) {
  const [createPoint] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING);
  const [amount, setAmount] = useState(0);
  const [pointName, setPointName] = useState("");

  const onchangePrice = (event: any) => {
    setAmount(Number(event.target.value));
    setPointName(`${event.target.value} 원`);
  };

  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: pointName,
        amount: Number(amount),
        buyer_email: props.fetchUserData?.fetchUserLoggedIn.email,
        buyer_name: props.fetchUserData?.fetchUserLoggedIn.name,
        buyer_tel: "010-6374-3809",
        buyer_addr: "경기도 고양시 일산서구",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/mypage",
      },
      (rsp: any) => {
        if (rsp.success) {
          try {
            createPoint({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            alert("포인트 충전이 완료되었습니다.");
          } catch (error) {
            alert("결제에 실패했습니다! 다시 시도해 주세요!");
          }
        } else if (isNaN(amount)) {
          alert("숫자만 입력해주세요");
        }
      }
    );
  };

  return (
    <S.Main>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.Select id="price" onChange={onchangePrice} defaultValue={"1"}>
        <S.Option value="1" disabled>
          금액을 선택해 주세요
        </S.Option>
        <S.Option value="500">500</S.Option>
        <S.Option value="1000">1000</S.Option>
        <S.Option value="1500">1500</S.Option>
        <S.Option value="10000">10000</S.Option>
      </S.Select>
      <S.Button onClick={requestPay}>충전하기</S.Button>
    </S.Main>
  );
}

export default PointCharge;
