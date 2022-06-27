import styled from "@emotion/styled";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";

const Slick = styled(Slider)`
  width: 100%;
  height: 100%;
  .slick-list {
    width: 100%;
    height: 100%;
  }
  .slick-slide div {
  }
  .slick-dots {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .slick-track {
  }
  .slick-dots li.slick-active button:before {
    width: 13px;
    height: 13px;

    background-color: #dd7202;
    border-radius: 50px;
    color: transparent;
  }
  .slick-dots li button:before {
    width: 13px;
    height: 13px;
    background: #dd7202;
    border-radius: 50px;
    color: transparent;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 20px;
`;

const settings = {
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: false,

  cssEase: "ease",
};

function Carousel(props: any) {
  return (
    <Slick {...settings}>
      {props.data
        ?.filter((el: string) => el)
        .map((el: string) => (
          <Img key={uuidv4()} src={`https://storage.googleapis.com/${el}`} />
        ))}
    </Slick>
  );
}

export default Carousel;
