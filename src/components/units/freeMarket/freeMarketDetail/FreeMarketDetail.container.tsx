import FreeMarketDetailPresenter from "./FreeMarketDetail.presenter";

function FreeMarketDetailContainer(props: any) {
  return (
    <FreeMarketDetailPresenter fetchUsedItemData={props.fetchUsedItemData} />
  );
}

export default FreeMarketDetailContainer;
