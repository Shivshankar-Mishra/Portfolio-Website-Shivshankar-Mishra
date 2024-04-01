import { useStore } from "../context/StoreContext";
import "../assets/css/animation.css";
import { useRef } from "react";
import useInViewport from "./useInViewPort";
const Training = () => {
  const { Star1, Star3 } = useStore();
  const sectionRef = useRef(null);
  return (
    <>
      <section
        ref={sectionRef}
        className={`relative w-screen overflow-hidden flex flex-col justify-center items-center gap-[4rem] mt-10 md:mt-0 px-14 py-[5%] bottomToTop ${
          useInViewport(sectionRef) ? "topAnimate" : ""
        }`}
      >
        <img
          src={Star3}
          alt="star icon"
          className="absolute -right-[9rem] md:-left-[8rem] top-[30rem] md:top-[20rem]"
        />
        <section className="w-[90vw] flex flex-col justify-center items-center gap-5">
          <img src={Star1} alt="star icon"></img>
          <h1 className="text-[40px] text-center md:text-5xl leading-[50px] md:leading-[56px] text-black font-bold">
            Training & Internships
          </h1>
          <h6 className="text-lg text-center text-black font-bold">
            WORK & EXPERIENCE
          </h6>
        </section>
        <section className="flex flex-col justify-center items-center gap-10">
          <div className="w-[90vw] md:w-[70vw] md:h-[20vh] bg-[#f2f1ef] border-2 border-black flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-0 py-5 px-3 md:py-1 z-10">
            <div className="md:w-1/2 flex flex-col justify-center items-start gap-2 px-3 py-1">
              <div className="md:w-[15vw] flex flex-row justify-between items-start gap-1 md:gap-0">
                <span className="text-base leading-[32px] text-[#e94d35] font-bold tracking-wide">
                  February 23, 2023
                </span>
                <span className="text-base leading-[32px] text-[#e94d35] font-bold tracking-wide">
                  /
                </span>
                <span className="text-base leading-[32px] text-[#e94d35] font-bold tracking-wide">
                  Present
                </span>
              </div>
              <h5 className="text-2xl text-black font-bold">
                Java Full Stack Development, Jspiders
              </h5>
            </div>
            <p className="md:w-1/2 text-base text-black font-medium">
              Mastering the art of Java Full Stack Development at Jspiders,
              combining front-end finesse with back-end prowess.
            </p>
          </div>
          <div className="w-[90vw] md:w-[70vw] md:h-[20vh] bg-[#f2f1ef] border-2 border-black flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-0 py-5 px-3 md:py-1 z-10">
            <div className="md:w-1/2 flex flex-col justify-center items-start gap-2 px-3 py-1">
              <div className="md:w-[20vw] flex flex-row justify-between items-start gap-1 md:gap-0">
                <span className="text-base leading-[32px] text-[#e94d35] font-bold tracking-wide">
                  August 10
                </span>
                <span className="text-base leading-[32px] text-[#e94d35] font-bold tracking-wide">
                  /
                </span>
                <span className="text-base leading-[32px] text-[#e94d35] font-bold tracking-wide">
                  December 23, 2022
                </span>
              </div>
              <h5 className="text-2xl text-black font-bold">
                Google UX Design, Coursera | Google
              </h5>
            </div>
            <p className="md:w-1/2 text-base text-black font-medium">
              Equipped with a solid foundation in UX Design from Coursera, I’m
              ready to create intuitive and delightful user experiences.
            </p>
          </div>
          <div className="w-[90vw] md:w-[70vw] md:h-[20vh] bg-[#f2f1ef] border-2 border-black flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-0 py-5 px-3 md:py-1 z-10">
            <div className="md:w-1/2 flex flex-col justify-center items-start gap-2 px-3 py-1">
              <div className="md:w-[17vw] flex flex-row justify-between items-start gap-1 md:gap-0">
                <span className="text-base leading-[32px] text-[#e94d35] font-bold tracking-wide">
                  June 28, 2022
                </span>
                <span className="text-base leading-[32px] text-[#e94d35] font-bold tracking-wide">
                  /
                </span>
                <span className="text-base leading-[32px] text-[#e94d35] font-bold tracking-wide">
                  August 17, 2022
                </span>
              </div>
              <h5 className="text-2xl text-black font-bold">
                Full Stack Developer, Robust Results Pvt Ltd.
              </h5>
            </div>
            <p className="md:w-1/2 text-base text-black font-medium">
              During my immersive 6-week internship at Robust Results Pvt Ltd, I
              honed my Full Stack Development skills under the guidance of
              industry experts.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Training;
