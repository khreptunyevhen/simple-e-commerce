import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import sliderImage from "../images/main-slider-shoe.png";

import "./styles/mainSlider.scss";
import "./styles/buttons.scss";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const MainSlider = ({ slides }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: #9b9b9b;
            opacity: 0.3;
            width: 24px;
            height: 44px;
            border-radius: 5px;
            color: #0e0e0e;
          }
          .swiper-button-prev {
            background-image: url("/arrow-left.svg");
          }
          .swiper-button-next {
            background-image: url("/arrow-right.svg");
          }
          .swiper-button-next::after {
            content: ">";
            font-size: 16px;
          }
          .swiper-button-prev::after {
            content: "<";
            font-size: 16px;
          }
          .swiper-pagination-bullet{
            width: 10px;
            height: 10px;
            background-color: #ef3939;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container speed="500" loop="true" ref={swiperRef} init="false">
      {slides.map((slide, index) => {
        return (
          <swiper-slide key={`main-slider-${index}`}>
            <div className="slider-wrapper">
              <div className="slider-description">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <Link to="/shop" className="btn">
                  Read more
                </Link>
              </div>
              <div className="slider-img">
                <img src={sliderImage} alt={slide.type} />
              </div>
            </div>
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};

export default MainSlider;
