import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { campingDataState } from "../recoil";

declare const window: typeof globalThis & {
  kakao: any;
};

function CampKaKaoMapPage() {
  const [campingData] = useRecoilState(campingDataState);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f487080ea91748abbd2e3df735d5af4c&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const position: any = [];

        campingData.map((el: any) =>
          position.push({
            title: el.facltNm,
            animal: el.animalCmgCl,
            address: el.addr1,
            service: el.sbrsCl,
            tel: el.tel,
            latlng: new window.kakao.maps.LatLng(el.mapY, el.mapX),
            // latlng: new window.kakao.maps.LatLng(33.450879, 126.56994),
          })
        );

        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.5666805, 126.9784147),
          level: 9,
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        const imageSrc = "/images/dot.png";

        for (let i = 0; i < position.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          const imageSize = new window.kakao.maps.Size(20, 20);

          // 마커 이미지를 생성합니다
          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize
          );

          // 마커를 생성합니다
          const marker = new window.kakao.maps.Marker({
            map, // 마커를 표시할 지도
            position: position[i].latlng, // 마커를 표시할 위치
            // title: position[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });

          const content = `<div style="padding: 10px; display:flex;flex-direction: column;align-items: center; width: 250px;">
<div style="font-size: 10px">${position[i].title}</div>
<div style="font-size: 10px">주소${position[i].address}</div>
<div style="font-size: 10px">${
            position[i].tel ? position[i].tel : "전화번호가 없습니다."
          }</div>
</div>`;

          const infowindow = new window.kakao.maps.InfoWindow({
            content, // 인포윈도우에 표시할 내용
          });

          window.kakao.maps.event.addListener(
            marker,
            "mouseover",
            makeOverListener(map, marker, infowindow)
          );
          window.kakao.maps.event.addListener(
            marker,
            "mouseout",
            makeOutListener(infowindow)
          );
        }
        // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
        function makeOverListener(map: any, marker: any, infowindow: any) {
          return function () {
            infowindow.open(map, marker);
          };
        }
        // 인포윈도우를 닫는 클로저를 만드는 함수입니다
        function makeOutListener(infowindow: any) {
          return function () {
            infowindow.close();
          };
        }
      });
    };
  }, []);

  return (
    <div
      id="map"
      style={{ width: "1200px", height: "1300px", borderRadius: "20px" }}
    ></div>
  );
}

export default CampKaKaoMapPage;
