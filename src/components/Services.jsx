import { useStore } from "../context/StoreContext";
import "../assets/css/animation.css";
import { useRef } from "react";
import useInViewport from "./useInViewPort";

const Services = () => {
  const { Star1 } = useStore();
  const sectionRef = useRef(null);
  return (
    <>
      <section
        ref={sectionRef}
        className={`w-screen flex flex-col justify-center items-center gap-[4rem] mt-10 md:mt-0 px-14 py-[3%] bottomToTop ${
          useInViewport(sectionRef) ? "topAnimate" : ""
        }`}
      >
        <section className="w-[90vw] flex flex-col justify-center items-center gap-5">
          <img src={Star1} alt="star icon"></img>
          <h1 className="text-[40px] md:text-5xl leading-[50px] md:leading-[56px] text-black font-bold">Services</h1>
          <h6 className="text-lg text-black font-bold">
            WORK FIELD & DOMAIN
          </h6>
        </section>
        <section className="w-screen flex flex-row flex-wrap justify-center items-center gap-10">
          <div className="w-[90vw] md:w-[33vw] md:h-[28vh] bg-transparent border-2 border-black flex flex-col justify-center items-start gap-5 p-8 hover:bg-black group transition-all duration-300">
            <h2 className="text-3xl text-black font-bold group-hover:text-white transition-all duration-300">
              Web Design
            </h2>
            <p className="text-lg text-black font-medium group-hover:text-white transition-all duration-300">
              Crafting visually appealing and user-friendly interfaces that
              captivate and engage.
            </p>
          </div>
          <div className="w-[90vw] md:w-[33vw] md:h-[28vh] bg-transparent border-2 border-black flex flex-col justify-center items-start gap-5 p-8 hover:bg-black group transition-all duration-300">
            <h2 className="text-3xl text-black font-bold group-hover:text-white transition-all duration-300">
              Web Development
            </h2>
            <p className="text-lg text-black font-medium group-hover:text-white transition-all duration-300">
              Transforming ideas into functional websites, with seamless
              navigation and robust features.
            </p>
          </div>
          <div className="w-[90vw] md:w-[33vw] md:h-[28vh] bg-transparent border-2 border-black flex flex-col justify-center items-start gap-5 p-8 hover:bg-black group transition-all duration-300">
            <h2 className="text-3xl text-black font-bold group-hover:text-white transition-all duration-300">
              UI/UX Design
            </h2>
            <p className="text-lg text-black font-medium group-hover:text-white transition-all duration-300">
              Elevating user experiences through intuitive layouts, delightful
              interactions, and thoughtful design.
            </p>
          </div>
          <div className="w-[90vw] md:w-[33vw] md:h-[28vh] bg-transparent border-2 border-black flex flex-col justify-center items-start gap-5 p-8 hover:bg-black group transition-all duration-300">
            <h2 className="text-3xl text-black font-bold group-hover:text-white transition-all duration-300">
              Full Stack Development
            </h2>
            <p className="text-lg text-black font-medium group-hover:text-white transition-all duration-300">
              Bridging the gap between front-end elegance and back-end
              functionality, ensuring end-to-end solutions.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Services;
