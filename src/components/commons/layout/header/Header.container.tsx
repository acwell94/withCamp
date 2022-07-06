import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../recoil";
import HeaderPresenter from "./Header.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./Header.queries";

function HeaderContainer() {
  const router = useRouter();
  const { data: fetchUserData } = useQuery(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isOpen, setIsOpen] = useState(false);

  const onClickOpenMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickLogout = async () => {
    setAccessToken("");

    try {
      await logoutUser();
      alert("로그아웃 되었습니다.");
      router.push("/");
    } catch (error: any) {}
  };

  const onClickMovePage = (path: string) => () => {
    setIsOpen((prev) => !prev);
    router.push(path);
  };

  return (
    <HeaderPresenter
      fetchUserData={fetchUserData}
      accessToken={accessToken}
      onClickLogout={onClickLogout}
      onClickOpenMenu={onClickOpenMenu}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClickMovePage={onClickMovePage}
    />
  );
}

export default HeaderContainer;
