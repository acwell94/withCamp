import { useMutation, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../recoil";
import HeaderPresenter from "./Header.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./Header.queries";

function HeaderContainer() {
  const { data: fetchUserData } = useQuery(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onClickLogout = async () => {
    setAccessToken("");
    try {
      await logoutUser();
    } catch (error: any) {}
  };

  return (
    <HeaderPresenter
      fetchUserData={fetchUserData}
      accessToken={accessToken}
      onClickLogout={onClickLogout}
    />
  );
}

export default HeaderContainer;
