import { useStore } from "../context/StoreContext";
import "../assets/css/slider.css";
import { Fragment } from "react";

const Slider = () => {
  const { Star4, sliderWords } = useStore();

  return (
    <section className="w-screen h-[10vh] md:h-[14vh] bg-black flex flex-row justify-start items-center slider-container">
      <div className="slider flex flex-row justify-start items-center gap-3">
        {sliderWords.map((word, index) => (
          <Fragment key={index+599}>
            <span key={index} className="slide text-white font-semibold">
              {word}
            </span>
            <img key={index+955} src={Star4} alt="star icon" />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Slider;
