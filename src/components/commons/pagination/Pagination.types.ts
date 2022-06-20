import { MouseEvent } from "react";

export interface IFreeBoardPresenter {
  totalItemCount: number | undefined;
  refetch: any;
}

export interface IPaginationContainer {
  startPage: number;
  activePage: number;
  lastPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}

export interface IPaginationPresenter {
  isActive?: boolean;
}
