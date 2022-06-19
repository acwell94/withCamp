import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { campingDataState } from "../../src/components/commons/recoil";

function CampMapPage() {
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

  return (
    <div>
      <div>안녕하세요</div>
      <button>버튼</button>
      {!loading ? <div>하이</div> : <div>바이</div>}
    </div>
  );
}

export default CampMapPage;
