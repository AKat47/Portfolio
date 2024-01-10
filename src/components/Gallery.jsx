import React from "react";
import Slider from "react-slick";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gif1 from "../assets/video/art1.gif";
import gif2 from "../assets/video/art2.gif";
import gif3 from "../assets/video/art5.gif";
import gif4 from "../assets/video/art7.gif";
import gif5 from "../assets/video/art8.gif";

function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              src={gif1}
              alt="GIF 1"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <img
              src={gif2}
              alt="GIF 2"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <img
              src={gif3}
              alt="GIF 3"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <img
              src={gif4}
              alt="GIF 4"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <img
              src={gif5}
              alt="GIF 5"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Gallery;
