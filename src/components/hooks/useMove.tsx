import { useRouter } from "next/router";
import { useState } from "react";

function onClickMove() {
  const router = useRouter();
  const [movePage, setMovePage] = useState("/");

  const onClickMovetoPage = (path) => () => {
    setMovePage(path);
    router.push(path);
  };

  return { movePage, onClickMovetoPage };
}

export default onClickMove;
