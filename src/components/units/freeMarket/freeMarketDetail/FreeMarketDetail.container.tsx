import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../../commons/layout/header/Header.queries";
import FreeMarketDetailPresenter from "./FreeMarketDetail.presenter";

function FreeMarketDetailContainer(props: any) {
  const { data: fetchUserData } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <FreeMarketDetailPresenter
      fetchUsedItemData={props.fetchUsedItemData}
      fetchUserData={fetchUserData}
    />
  );
}

export default FreeMarketDetailContainer;
