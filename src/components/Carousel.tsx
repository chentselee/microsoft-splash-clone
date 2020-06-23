import React, { useState, useEffect, useRef } from "react";
import "./Carousel.scss";

export interface SlideProps {
  image?: string;
  content: JSX.Element;
}

export interface CarouselProps {
  slides: SlideProps[];
}

const useAutoPlaySlides = (duration: number, slidesLength: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const calcIndex = (newIndex: number, length: number) => {
    if (newIndex < 0) return length - 1;
    return newIndex % length;
  };

  const jumpToIndex = (newIndex: number) => {
    setCurrentIndex(calcIndex(newIndex, slidesLength));
  };

  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    if (isPlaying) {
      timeoutRef.current = setTimeout(
        () => jumpToIndex(currentIndex + 1),
        duration
      );
    }
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
    };
  }, [isPlaying, currentIndex, duration, slidesLength]);

  return {
    currentIndex,
    setCurrentIndex,
    isPlaying,
    setIsPlaying,
    timeoutRef,
    jumpToIndex,
  };
};

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const {
    currentIndex,
    setCurrentIndex,
    isPlaying,
    setIsPlaying,
    jumpToIndex,
  } = useAutoPlaySlides(5000, slides.length);
  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        {slides
          .filter((slide, index) => index === currentIndex)
          .map((slide, index) => {
            return (
              <React.Fragment key={index}>
                <div className="carousel-image-wrapper">
                  <img className="carousel-image" src={slide.image} alt="" />
                </div>
                <div className="carousel-main">{slide.content}</div>
              </React.Fragment>
            );
          })}
        <div className="carousel-control">
          {slides.map((slide, index) => {
            return (
              <button
                key={index}
                className={`carousel-control-index${
                  index === currentIndex ? " active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            );
          })}
          <button
            className={`carousel-control-toggle${
              isPlaying ? " playing" : " stopped"
            }`}
            onClick={() => setIsPlaying(!isPlaying)}
            data-testid="carousel-toggle"
          ></button>
          <button
            className="carousel-control-previous"
            onClick={() => {
              jumpToIndex(currentIndex - 1);
            }}
            data-testid="carousel-previous"
          ></button>
          <button
            className="carousel-control-next"
            onClick={() => {
              jumpToIndex(currentIndex + 1);
            }}
            data-testid="carousel-next"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
