import CampKaKaoMapPage from "../../commons/campMap/CampMap";
import * as S from "./CampMap.styles";
import { ICampMapContainer } from "./CampMap.types";

function CampMapPresenter(props: ICampMapContainer) {
  return (
    <S.Main>
      <S.MainTitle>전국캠핑장현황</S.MainTitle>
      <CampKaKaoMapPage />
    </S.Main>
  );
}

export default CampMapPresenter;
