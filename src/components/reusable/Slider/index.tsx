import { useLayoutEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import * as Styled from "./styles";

interface SliderProps {
  images: {
    id: string;
    url: string;
  }[];
}
const Slider = ({ images }: SliderProps): JSX.Element => {
  const [sliderImages, setSliderImages] =
    useState<NodeListOf<HTMLImageElement>>();
  const [currentSlider, setCurrentSlide] = useState(0);

  useLayoutEffect(() => {
    setSliderImages(document.querySelectorAll(".slide"));
  }, [images]);

  const removeClassOn = () => {
    sliderImages!.forEach((slide) => {
      slide.classList.remove("on");
    });
  };
  const addClassOn = () => {
    sliderImages![currentSlider].classList.add("on");
  };

  const prevSlide = () => {
    removeClassOn();
    if (currentSlider === 0) {
      setCurrentSlide(sliderImages!.length - 1)
    } else {
      setCurrentSlide(currentSlider - 1);
    }
    addClassOn();
  };

  const nextSlide = () => {
    removeClassOn();
    if (currentSlider === sliderImages!.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlider + 1);
    }
    addClassOn();
  };

  return (
    <Styled.SliderContainer>
      <button className="prev" onClick={prevSlide}>
        <FiArrowLeft />
      </button>
      {images.map((image) => {
        return (
          <img
            src={image.url}
            alt="product"
            key={image.id}
            className="slide on"
          />
        );
      })}
      <div className="dots">
        {images.map((image, i) => {
          return (
            <span
              key={image.id}
              className={i === currentSlider ? "dot active" : "dot"}
              onClick={() => {
                removeClassOn();
                setCurrentSlide(i);
                addClassOn();
              }}
            ></span>
          );
        })}
      </div>
      <button className="next" onClick={nextSlide}>
        <FiArrowRight />
      </button>
    </Styled.SliderContainer>
  );
};

export { Slider };
