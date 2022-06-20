import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { campingDataState } from "../../commons/recoil";
import CampMapPresenter from "./CampMap.presenter";

function CampMapContainer() {
  const [campingData, setCampingData] = useRecoilState(campingDataState);
  const [loading, setLoading] = useState(false);

  const apiData = async () => {
    setLoading(true);
    await axios
      .get(
        `http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=JrDUZMYYHoBZKqOoQfWki50RuBFuHOc3dbh0y9azyzp6fkfPuCNKpkQ37FtqdbBafDQgt7XsbpJArhiY6M7brw%3D%3D&MobileOS=ETC&MobileApp=AppTest&_type=json&numOfRows=3072&`
      )
      .then((res) => {
        setLoading(false);
        setCampingData(res.data?.response.body.items.item);
      });
  };

  useEffect(() => {
    if (campingData.length === 0) {
      apiData();
    }
  }, []);

  return <CampMapPresenter loading={loading} />;
}

export default CampMapContainer;
