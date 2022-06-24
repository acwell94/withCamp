import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

function CampKaKaoMapDetailPage(props: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f487080ea91748abbd2e3df735d5af4c&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");

        const option = {
          center: new window.kakao.maps.LatLng(
            Number(props.lat),
            Number(props.lng)
          ),
          level: 2,
        };

        const map = new window.kakao.maps.Map(container, option);

        const markerPosition = new window.kakao.maps.LatLng(
          Number(props.lat),
          Number(props.lng)
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        const iwContent = `<div style="padding:5px;">
        ${props.placeName}
        </div>`;

        const iwPosition = new window.kakao.maps.LatLng(
          Number(props.lat),
          Number(props.lng)
        );
        const infowindow = new window.kakao.maps.InfoWindow({
          position: iwPosition,
          content: iwContent,
        });

        infowindow.open(map, marker);
      });
    };
  }, []);
  return (
    <div
      id="map"
      style={{ width: "500px", height: "500px", borderRadius: "20px" }}
    ></div>
  );
}

export default CampKaKaoMapDetailPage;
