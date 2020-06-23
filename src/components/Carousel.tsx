import React, { useState, useEffect, useRef } from "react";
import "./Carousel.scss";

export interface SlideProps {
  image?: string;
  content: JSX.Element;
}

export interface CarouselProps {
  slides: SlideProps[];
}

const calcIndex = (newIndex: number, length: number) => {
  if (newIndex < 0) return length - 1;
  return newIndex % length;
};

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeout = useRef<NodeJS.Timeout>();
  const duration = 5000;
  useEffect(() => {
    timeout.current && clearTimeout(timeout.current);
    if (isPlaying) {
      timeout.current = setTimeout(
        () => setCurrentIndex(calcIndex(currentIndex + 1, slides.length)),
        duration
      );
    }
    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, [isPlaying, currentIndex]);
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
              setCurrentIndex(calcIndex(currentIndex - 1, slides.length));
            }}
            data-testid="carousel-previous"
          ></button>
          <button
            className="carousel-control-next"
            onClick={() => {
              setCurrentIndex(calcIndex(currentIndex + 1, slides.length));
            }}
            data-testid="carousel-next"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
