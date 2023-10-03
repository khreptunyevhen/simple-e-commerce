import React, { useEffect, useRef } from "react";

import "./styles/reviewsSlider.scss";
import "./styles/buttons.scss";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const ReviewsSlider = ({ slides }) => {
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
    <div className="review">
      <div className="container">
        <h2>What people say about us</h2>
        <swiper-container speed="500" loop="true" ref={swiperRef} init="false">
          {slides.map((slide, index) => {
            return (
              <swiper-slide key={`review-slider-${index}`}>
                <div className="review-slider-wrapper">
                  <p>{slide.review}</p>
                  <h2>~{slide.author}</h2>
                </div>
              </swiper-slide>
            );
          })}
        </swiper-container>
      </div>
    </div>
  );
};

export default ReviewsSlider;
