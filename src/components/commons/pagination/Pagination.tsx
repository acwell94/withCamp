import { useState } from "react";
import Pagination from "react-js-pagination";

function PaginationPage(props) {
  console.log(props.totalItemCount, "33");
  console.log(props.fetchBoardsRefetch, "55");
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
  console.log(page, "66");
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={props.totalItemCount}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
}

export default PaginationPage;
