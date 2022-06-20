import { MouseEvent, useState } from "react";
import PaginationPresenter from "./Pagination.presenter";
import { IFreeBoardPresenter } from "./Pagination.types";

function PaginationContainer(props: IFreeBoardPresenter) {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const lastPage = props.totalItemCount
    ? Math.ceil(props.totalItemCount / 10)
    : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element)) return;
    const activedPage = Number(event.target.id);
    setActivePage(activedPage);
    props.refetch({ page: activedPage });
  };

  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    setActivePage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    setActivePage(startPage + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <PaginationPresenter
      startPage={startPage}
      activePage={activePage}
      lastPage={lastPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}

export default PaginationContainer;
