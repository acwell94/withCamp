import { useRouter } from "next/router";
import { useState } from "react";

function onClickMove() {
  const router = useRouter();
  const [movePage, setMovePage] = useState<string>("/");

  const onClickMovetoPage = (path: string) => () => {
    setMovePage(path);
    router.push(path);
  };

  return { movePage, onClickMovetoPage };
}

export default onClickMove;
