import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../commons/layout/header/Header.queries";
import MyPagePresenter from "./MyPage.presenter";
import {
  FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_USED_ITEMS_COUNT_I_BOUGHT,
  FETCH_USED_ITEMS_COUNT_I_PICKED,
  FETCH_USED_ITEMS_COUNT_I_SELLING,
  FETCH_USED_ITEMS_COUNT_I_SOLD,
  FETCH_USED_ITEMS_I_BOUGHT,
  FETCH_USED_ITEMS_I_PICKED,
  FETCH_USED_ITEMS_I_SOLD,
} from "./MyPage.queries";

function MyPageContainer() {
  const searchData = "";
  const { data: fetchUserData } = useQuery(FETCH_USER_LOGGED_IN);

  const { data: fetchPickedCountData } = useQuery(
    FETCH_USED_ITEMS_COUNT_I_PICKED
  );
  const { data: fetchIPickedData, refetch: fetchIPickedDataRefetch } = useQuery(
    FETCH_USED_ITEMS_I_PICKED,
    {
      variables: { search: searchData },
    }
  );

  const { data: fetchSoldCountData } = useQuery(FETCH_USED_ITEMS_COUNT_I_SOLD);
  const { data: fetchSellingCountData } = useQuery(
    FETCH_USED_ITEMS_COUNT_I_SELLING
  );
  const { data: fetchISoldData, refetch: fetchISoldDataRefetch } = useQuery(
    FETCH_USED_ITEMS_I_SOLD,
    {
      variables: { search: searchData },
    }
  );

  const { data: fetchBoughtCountData } = useQuery(
    FETCH_USED_ITEMS_COUNT_I_BOUGHT
  );

  const { data: fetchIBoughtData, refetch: fetchIBoughtDataRefetch } = useQuery(
    FETCH_USED_ITEMS_I_BOUGHT,
    {
      variables: { search: searchData },
    }
  );

  const { data: fetchPointCountData } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING
  );

  const { data: fetchPointData, refetch: fetchPointDataRefetch } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_LOADING,
    {
      variables: { search: searchData },
    }
  );

  const [selectedTap, setSelectedTap] = useState("찜목록");
  const tap = ["찜목록", "판매내역", "구매내역", "충전내역"];

  const selectTap = (event: any) => {
    setSelectedTap(event.target.innerText);
  };

  return (
    <MyPagePresenter
      fetchUserData={fetchUserData}
      selectTap={selectTap}
      tap={tap}
      selectedTap={selectedTap}
      fetchIPickedData={fetchIPickedData}
      fetchPickedCountData={fetchPickedCountData}
      fetchIPickedDataRefetch={fetchIPickedDataRefetch}
      fetchSoldCountData={fetchSoldCountData}
      fetchSellingCountData={fetchSellingCountData}
      fetchISoldData={fetchISoldData}
      fetchISoldDataRefetch={fetchISoldDataRefetch}
      fetchBoughtCountData={fetchBoughtCountData}
      fetchIBoughtData={fetchIBoughtData}
      fetchIBoughtDataRefetch={fetchIBoughtDataRefetch}
      fetchPointCountData={fetchPointCountData}
      fetchPointData={fetchPointData}
      fetchPointDataRefetch={fetchPointDataRefetch}
    />
  );
}

export default MyPageContainer;
