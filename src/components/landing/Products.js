import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./ImageCarousel.css";

const Products = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const NextSlide = () => {
    setSlide(slide === data.slides.length - 1 ? 0 : slide + 1);
  };
  const BackSlide = () => {
    setSlide(slide === 0 ? data.slides.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={BackSlide} />
      {data.slides.map((item, i) => {
        return (
          <img
            className={slide === i ? "slide" : "slide slide-hidden"}
            src={item.src}
            alt={item.alt}
            key={i}
          />
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={NextSlide}
      />
      <span className="indicators">
        {data.slides.map((_, i) => {
          return (
            <button
              className={
                slide === i ? "indicator" : "indicator indicator-inactive"
              }
              key={i}
              onClick={() => setSlide(i)}
            ></button>
          );
        })}{" "}
      </span>
    </div>
  );
};

export default Products;
