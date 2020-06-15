import React, { useState, useEffect } from "react";
import "./Carousel.scss";

export interface SlideProps {
  image?: string;
  content: JSX.Element;
}

export interface CarouselProps {
  slides: SlideProps[];
}

const calcIndex = (index: number, newIndex: number, length: number) => {
  if (index === 0) {
    return length - 1;
  }
  return newIndex % length;
};

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();
  const duration = 5000;
  useEffect(() => {
    currentTimeout && clearTimeout(currentTimeout);
    if (isPlaying) {
      const timeout = setTimeout(
        () =>
          setCurrentIndex(
            calcIndex(currentIndex, currentIndex + 1, slides.length)
          ),
        duration
      );
      setCurrentTimeout(timeout);
    }
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
          ></button>
          <button
            className="carousel-control-previous"
            onClick={() => {
              setCurrentIndex(
                calcIndex(currentIndex, currentIndex - 1, slides.length)
              );
            }}
          ></button>
          <button
            className="carousel-control-next"
            onClick={() => {
              setCurrentIndex(
                calcIndex(currentIndex, currentIndex + 1, slides.length)
              );
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
