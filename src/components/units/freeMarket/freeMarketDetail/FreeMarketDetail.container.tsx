import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "../../../commons/layout/header/Header.queries";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USEDITEM,
  TOGGLE_USEDITEM_PICK,
} from "../freeMarketCommon/FreeMarket.queries";
import FreeMarketDetailPresenter from "./FreeMarketDetail.presenter";

function FreeMarketDetailContainer(props: any) {
  const router = useRouter();

  const { data: fetchUserData } = useQuery(FETCH_USER_LOGGED_IN);
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [pointBuySell] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const [pickedItem] = useMutation(TOGGLE_USEDITEM_PICK);

  const onClickDelete = async () => {
    await deleteUseditem({
      variables: { useditemId: String(router.query.marketId) },
    });
    alert("상품이 삭제되었습니다.");
    router.push(`/freeMarket`);
  };

  const onClickPay = async () => {
    if (
      fetchUserData?.fetchUserLoggedIn?.userPoint.amount >=
      props.fetchUsedItemData?.price
    ) {
      try {
        await pointBuySell({
          variables: { useritemId: String(router.query.marketId) },
        });
        alert("결제가 완료되었습니다. 마이페이지로 이동합니다.");
        router.push("/mypage");
      } catch (error: any) {
        alert(error.message);
      }
    } else if (!fetchUserData) {
      alert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.");
      router.push("/signIn");
    } else {
      alert("포인트가 부족합니다. 충전페이지로 이동합니다.");
      router.push("/mypage");
    }
  };

  const onClickPick = async () => {
    try {
      await pickedItem({
        variables: { useditemId: String(router.query.marketId) },
      });
      alert(`'${props.fetchUsedItemData.seller.name}'님의 상품을 찜했습니다.`);
      router.replace(`/freeMarket/${router.query.marketId}`);
    } catch (error: any) {
      alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
      router.push("/signIn");
    }
  };

  return (
    <FreeMarketDetailPresenter
      fetchUsedItemData={props.fetchUsedItemData}
      fetchUserData={fetchUserData}
      onClickDelete={onClickDelete}
      onClickPay={onClickPay}
      onClickPick={onClickPick}
    />
  );
}

export default FreeMarketDetailContainer;
