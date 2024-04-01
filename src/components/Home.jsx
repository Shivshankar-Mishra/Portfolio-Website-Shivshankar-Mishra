import { useStore } from "../context/StoreContext";
import "../assets/css/animation.css";
import Button from "./Button";
import Certificates from "./Certificates";
import Connect from "./Connect";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Skills from "./Skills";
import Slider from "./Slider";
import Training from "./Training";
import { useRef } from "react";
import useInViewport from "./useInViewPort";
import { Link } from "react-router-dom";

const Home = () => {
  const { Star1, Star4, Star5, ShivMimg } = useStore();

  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const paraRef = useRef(null);
  const boxRef = useRef(null);

  return (
    <section className="w-screen overflow-hidden">
      <section className="w-screen md:h-[80vh] flex flex-col justify-start md:flex-row md:justify-center items-center md:gap-5">
        <section
          ref={heroTextRef}
          className={`w-screen md:w-1/2 h-[85vh] md:h-[80vh] leftToRight ${
            useInViewport(heroTextRef) ? "leftAnimate" : ""
          } flex flex-col justify-center items-start gap-5 md:gap-7 px-4 md:px-0`}
        >
          <div className="flex flex-row flex-wrap justify-start items-start md:gap-2">
            <h1 className="text-[40px] md:text-6xl font-bold">
              HI, I’M SHIVSHANKAR
            </h1>
            <div className="flex flex-wrap flex-row justify-start md:justify-center items-start md:gap-2">
              <h1 className="text-[40px] md:text-6xl font-bold">A CREATIVE</h1>
              <img
                src={Star1}
                alt="star icon"
                className="w-7 md:w-10 mt-2 ml-1"
              />
              <h1 className="text-[40px] md:text-6xl font-bold">DEVELOPER</h1>
            </div>
            <h1 className="text-[40px] md:text-6xl font-bold">
              BASED IN <strike>INDIA</strike>
            </h1>
          </div>
          <div className="flex flex-row flex-wrap ustify-start items-center gap-3">
            <h1 className="text-2xl text-black font-bold">DESIGN</h1>
            <img src={Star4} alt="star icon" />
            <h1 className="text-2xl text-black font-bold">DEVELOPMENT</h1>
            <img src={Star4} alt="star icon" />
            <h1 className="text-2xl text-black font-bold">DATABASE</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-0">
            <Link to="/projects">
              <Button
                wid="w-[90vw] md:w-40"
                hgt="h-12"
                color="text-white"
                bgColor="bg-black"
                border="outline outline-[1.5px] outline-black"
                hovers="hover:underline"
                title="Got a project?"
              />
            </Link>
            <a href="https://www.canva.com/design/DAF_eXgLuD8/E-nGa6i-Lv9E8yQhsmMzWQ/view?utm_content=DAF_eXgLuD8&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" accessKey="R">
              <Button
                wid="w-[90vw] md:w-40"
                hgt="h-12"
                color="text-black"
                bgColor="bg-transparent"
                border="outline outline-[1.5px] outline-black"
                hovers="hover:underline"
                title="Resume"
              />
            </a>
          </div>
        </section>
        <section
          ref={heroImageRef}
          className={`relative w-[90vw] h-[45vh] md:w-[470px] md:h-[470px] rounded-full rightToLeft ${
            useInViewport(heroImageRef) ? "rightAnimate" : ""
          } overflow-hidden bg-white flex flex-row justify-center items-center`}
        >
          <img src={Star5} alt="star icon" className="relative top-3 w-[70%]" />
          <img
            src={ShivMimg}
            alt="shiv img"
            className="absolute w-[70%] -bottom-[23px] md:-bottom-7"
          />
        </section>
      </section>
      <section className="w-screen overflow-hidden mt-[10vh] md:mt-[15vh] -skew-y-6 md:-skew-y-3">
        <Slider />
      </section>
      <section
        className={`w-screen md:h-screen flex flex-col justify-center items-center gap-12 md:gap-20 mt-[10vh]`}
      >
        <section
          ref={paraRef}
          className={`w-screen bottomToTop ${
            useInViewport(paraRef) ? "topAnimate" : ""
          } flex flex-row flex-wrap justify-center items-start gap-5 md:gap-20`}
        >
          <section className="flex flex-col justify-center items-start gap-5 md:gap-3">
            <div className="flex flex-row justify-start items-center gap-2">
              <span className="text-2xl md:text-3xl font-bold uppercase">
                shivshankar
              </span>
              <img src={Star4} alt="star icon" />
              <span className="text-2xl md:text-3xl font-bold uppercase">
                mishra
              </span>
            </div>
            <h1 className="w-[90vw] md:w-[25rem] text-[40px] leading-[52px] md:leading-[64px] md:text-6xl text-black font-bold">
              Web designer and full stack developer.
            </h1>
          </section>
          <section className="flex flex-col flex-wrap justify-center items-start gap-10">
            <h2 className="w-[90vw] md:w-[45rem] text-4xl text-black font-bold">
              Crafting digital experiences with design finesse and coding
              prowess.
            </h2>
            <div className="w-[90vw] md:w-[45rem] flex flex-col justify-center items-start gap-1">
              <p className="text-base text-black font-normal">
                As a web designer and full stack developer, I blend creativity
                with functionality to craft seamless digital experiences. From
                elegant front-end designs to robust back-end solutions, I thrive
                on building user-centric applications.
              </p>
              <p className="text-base text-black font-normal">
                My passion lies in transforming ideas into interactive
                interfaces, harmonizing aesthetics and code. With a keen eye for
                design and a solid grasp of development, I create dynamic
                websites that leave a lasting impression.
              </p>
            </div>
            <div className="w-[90vw] md:w-[45rem] flex flex-col md:flex-row justify-center md:justify-between md:items-center gap-8 md:gap-0 ">
              <div className="flex flex-col justify-center items-start gap-2">
                <h4 className="text-sm text-orange-600 font-semibold">
                  BORN IN
                </h4>
                <h2 className="text-xl text-black font-bold">UP, India</h2>
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <h4 className="text-sm text-orange-600 font-semibold">
                  EXPERIENCE
                </h4>
                <h2 className="text-xl text-black font-bold">Fresher</h2>
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <h4 className="text-sm text-orange-600 font-semibold">
                  DATE OF BIRTH
                </h4>
                <h2 className="text-xl text-black font-bold">17 August 2003</h2>
              </div>
            </div>
          </section>
        </section>
        <section
          ref={boxRef}
          className={`bottomToTop ${
            useInViewport(boxRef) ? "topAnimate" : ""
          } flex flex-row flex-wrap justify-center items-center gap-0`}
        >
          <div className="w-[90vw] md:w-[22vw] h-[22vh] md:h-[20vh] border-2 border-black bg-transparent flex flex-col justify-center items-center gap-5">
            <h1 className="text-4xl text-black font-bold">Fresher</h1>
            <span className="text-xl text-black font-semibold">
              Years of Experience
            </span>
          </div>
          <div className="w-[90vw] md:w-[22vw] h-[22vh] md:h-[20vh] border-2 border-black bg-black flex flex-col justify-center items-center gap-5">
            <h1 className="text-4xl text-white font-bold">7+</h1>
            <span className="text-xl text-white font-semibold">
              Project Completed
            </span>
          </div>
          <div className="w-[90vw] md:w-[22vw] h-[22vh] md:h-[20vh] border-2 border-black bg-transparent flex flex-col justify-center items-center gap-5">
            <h1 className="text-4xl text-black font-bold">Open to Work</h1>
            <span className="text-xl text-black font-semibold">
              Work Status
            </span>
          </div>
        </section>
      </section>
      <Certificates />
      <Portfolio />
      <Services />
      <Training />
      <Skills />
      <Connect />
    </section>
  );
};

export default Home;
