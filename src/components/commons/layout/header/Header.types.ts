import { IQuery } from "../../../../commons/types/generated/types";

export interface IHeaderContainer {
  fetchUserData: Pick<IQuery, "fetchUserLoggedIn">;
  accessToken?: string;
  onClickLogout: () => void;
}
