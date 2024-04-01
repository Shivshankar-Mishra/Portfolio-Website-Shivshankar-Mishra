import { useRef } from "react";
import "../assets/css/animation.css";
import { useStore } from "../context/StoreContext";
import useInViewport from "./useInViewPort";

const Portfolio = () => {
  const { Star1, OtherWebDevImage, Uximage, WebDevimage } = useStore();
  const sectionRef = useRef(null);
  return (
    <>
      <section
        ref={sectionRef}
        className={`w-screen flex flex-col justify-center items-center gap-[4rem] mt-10 md:mt-0 px-14 py-[5%] bottomToTop ${
          useInViewport(sectionRef) ? "topAnimate" : ""
        }`}
      >
        <section className="w-[90vw] flex flex-col justify-center items-center gap-5">
          <img src={Star1} alt="star icon"></img>
          <h1 className="text-[40px] md:text-5xl leading-[50px] md:leading-[48px] text-black font-bold">Portfolio</h1>
          <h6 className="text-lg leading-[32px] text-black font-bold">
            PROJECTS & ACCOIMPLISHMENTS
          </h6>
        </section>
        <section className="flex flex-col justify-center items-center gap-[4.5rem]">
          <article className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-5 px-3 py-1">
            <div className="flex flex-row justify-center items-center px-3 py-1">
              <img
                src={Uximage}
                alt="uiux thumb image"
                className="w-[90vw] h-[30vh] md:w-[460px] md:h-[40vh] grayscale"
              />
            </div>
            <div className="w-[90vw] md:w-auto md:h-[38vh] flex flex-col md:justify-between items-start gap-10 md:gap-0 md:px-3 py-1">
              <div className="w-44 h-10 text-white text-lg font-bold bg-[#e94d35] flex flex-row justify-center items-center px-3 py-1">
                UX DESIGN
              </div>
              <h2 className="w-[90vw] md:w-[35rem] text-[40px] md:text-5xl leading-[50px] md:leading-[56px] text-black font-bold">
                Beautiful and advanced website interfaces
              </h2>
              <a
                href="/projects#webux"
                className="text-xl text-black font-semibold underline  hover:text-[#e94d35] transition-all duration-300"
              >
                Read More
              </a>
            </div>
          </article>
          <article className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-5 px-3 py-1">
            <div className="w-[90vw] md:w-auto md:h-[38vh] flex flex-col md:justify-between items-start gap-10 md:gap-0 md:px-3 py-1">
              <div className=" h-10 text-white text-lg font-bold bg-[#e94d35] flex flex-row justify-center items-center px-3 py-1">
                DEVELOPMENT
              </div>
              <h2 className="w-[90vw] md:w-[35rem] text-[40px] md:text-5xl leading-[50px] md:leading-[56px] text-black font-bold">
                Design and extreme programming practice
              </h2>
              <a
                href="/projects#webdev"
                className="text-xl text-black font-semibold underline  hover:text-[#e94d35] transition-all duration-300"
              >
                Read More
              </a>
            </div>
            <div className="flex flex-row justify-center items-center order-first md:order-last px-3 py-1">
              <img
                src={WebDevimage}
                alt="webdev image img"
                className="w-[90vw] h-[30vh] md:w-[460px] md:h-[40vh] grayscale"
              />
            </div>
          </article>
          <article className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-5 px-3 py-1">
            <div className="flex flex-row justify-center items-center px-3 py-1">
              <img
                src={OtherWebDevImage}
                alt="other web dev image"
                className="w-[90vw] h-[30vh] md:w-[460px] md:h-[40vh] grayscale"
              />
            </div>
            <div className="w-[90vw] md:w-auto md:h-[38vh] flex flex-col md:justify-between items-start gap-10 md:gap-0 md:px-3 py-1">
              <div className="w-44 h-10 text-white text-lg font-bold bg-[#e94d35] flex flex-row justify-center items-center px-3 py-1">
                WEB APP
              </div>
              <h2 className="w-[90vw] md:w-[35rem] text-[40px] md:text-5xl leading-[50px] md:leading-[56px] text-black font-bold">
                Logical and advanced website development
              </h2>
              <a
                href="/projects#otherprojects"
                target="_self"
                className="text-xl text-black font-semibold underline  hover:text-[#e94d35] transition-all duration-300"
              >
                Read More
              </a>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};

export default Portfolio;
