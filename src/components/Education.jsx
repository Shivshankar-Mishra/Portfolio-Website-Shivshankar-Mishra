import { useStore } from "../context/StoreContext";
import "../assets/css/animation.css";
import { useRef } from "react";
import useInViewport from "./useInViewPort";

const Education = () => {
  const { Star1, Starwhite } = useStore();
  const sectionRef = useRef(null);
  return (
    <section
      ref={sectionRef}
      className={`w-screen flex flex-col justify-center items-center gap-[4rem] px-14 py-[3%] mt-10 md:mt-[5%] bottomToTop ${
        useInViewport(sectionRef) ? "topAnimate" : ""
      }`}
    >
      <section className="w-[90vw] flex flex-col justify-center items-center gap-5">
        <img src={Star1} alt="star icon"></img>
        <h1 className="text-[40px] md:text-5xl leading-[50px] md:leading-[56px] text-black font-bold">
          Education
        </h1>
        <h6 className="text-lg leading-8 text-black font-bold">
          LEARNING & STUDIES
        </h6>
      </section>
      <section className="w-[90vw] flex flex-col justify-center items-center gap-5">
        <div className="w-[90vw] md:w-[75vw] md:h-[20vh] flex flex-col justify-center md:flex-row md:justify-between items-center border-2 border-black px-4 md:px-10 py-3 md:py-0 group hover:bg-black transition-all duration-300">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <img
              src={Starwhite}
              alt="star icon"
              className="w-12 h-12 bg-black text-white font-bold flex flex-row justify-center items-center p-2 group-hover:bg-slate-900 transition-all duration-300"
            />
            <div className="flex flex-col justify-center md:items-start gap-3 md:gap-1">
              <h3 className="text-2xl text-center text-black font-bold group-hover:text-white transition-all duration-300">
                B.Tech(honors) - Computer Science and Engineering
              </h3>
              <p className="text-black text-center text-lg font-medium group-hover:text-white transition-all duration-300">
                Ldc Institute of Technical Studies
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 ">
            <p className="text-base text-black font-semibold group-hover:text-white transition-all duration-300">
              Percent / cgpa:{" "}
              <span className="text-base text-orange-600 font-bold">
                83.6% / 8.36
              </span>
            </p>
            <span className="hidden md:inline text-base text-black font-semibold group-hover:text-white transition-all duration-300">
              |
            </span>
            <p className="text-base text-black font-semibold group-hover:text-white transition-all duration-300">
              2019 - 2023
            </p>
          </div>
        </div>
        <div className="w-[90vw] md:w-[75vw] md:h-[20vh] flex flex-col justify-center md:flex-row md:justify-between items-center border-2 border-black px-4 md:px-10 py-3 md:py-0 group hover:bg-black transition-all duration-300">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <img
              src={Starwhite}
              alt="star icon"
              className="w-12 h-12 bg-black text-white font-bold flex flex-row justify-center items-center p-2 group-hover:bg-slate-900 transition-all duration-300"
            />
            <div className="flex flex-col justify-center md:items-start gap-3 md:gap-1">
              <h3 className="text-2xl text-center text-black font-bold group-hover:text-white transition-all duration-300">
                Intermediate - (PCM)
              </h3>
              <p className="text-black text-center text-lg font-medium group-hover:text-white transition-all duration-300">
                Jai Bajrang Intermediate College
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 ">
            <p className="text-base text-black font-semibold group-hover:text-white transition-all duration-300">
              Percent:{" "}
              <span className="text-base text-orange-600 font-bold">72.4%</span>
            </p>
            <span className="hidden md:inline  text-base text-black font-semibold group-hover:text-white transition-all duration-300">
              |
            </span>
            <p className="text-base text-black font-semibold group-hover:text-white transition-all duration-300">
              2018 - 2019
            </p>
          </div>
        </div>
        <div className="w-[90vw] md:w-[75vw] md:h-[20vh] flex flex-col justify-center md:flex-row md:justify-between items-center border-2 border-black px-4 md:px-10 py-3 md:py-0 group hover:bg-black transition-all duration-300">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <img
              src={Starwhite}
              alt="star icon"
              className="w-12 h-12 bg-black text-white font-bold flex flex-row justify-center items-center p-2 group-hover:bg-slate-900 transition-all duration-300"
            />
            <div className="flex flex-col justify-center md:items-start gap-3 md:gap-1">
              <h3 className="text-2xl text-center text-black font-bold group-hover:text-white transition-all duration-300">
                High School - (Math)
              </h3>
              <p className="text-black text-center text-lg font-medium group-hover:text-white transition-all duration-300">
                Shiv Prasad Saraswati Vidya Mandir U.M. Vidyalaya
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 ">
            <p className="text-base text-black font-semibold group-hover:text-white transition-all duration-300">
              Percent:{" "}
              <span className="text-base text-orange-600 font-bold">
                80.33%
              </span>
            </p>
            <span className="hidden md:inline text-base text-black font-semibold group-hover:text-white transition-all duration-300">
              |
            </span>
            <p className="text-base text-black font-semibold group-hover:text-white transition-all duration-300">
              2016 - 2017
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Education;
