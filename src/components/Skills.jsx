import { useStore } from "../context/StoreContext";
import "../assets/css/animation.css";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";

import {
  MdOutlineHtml,
  MdOutlineCss,
  MdOutlineJavascript,
  MdOutlinePhp,
} from "react-icons/md";
import { FaBootstrap, FaPhp, FaPython, FaJava } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiFlask,
  SiHibernate,
  SiSpring,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";
import { TbBrandJavascript, TbBrandReact, TbSql } from "react-icons/tb";
import { useRef } from "react";
import useInViewport from "./useInViewPort";

const Skills = () => {
  const { Star1, Star3, Star5 } = useStore();
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
          className="absolute -right-[8rem] top-[8rem] -z-10"
        />
        <img
          src={Star5}
          alt="star icon"
          className="absolute w-[50vw] md:w-[20vw] -z-20 -left-[28%] md:-left-[10%] bottom-5 md:bottom-0 opacity-90"
        />
        <section className="w-[90vw] flex flex-col justify-center items-center gap-5">
          <img src={Star1} alt="star icon"></img>
          <h1 className="text-[40px] md:text-5xl leading-[50px] md:leading-[56px] text-black font-bold">
            Skills
          </h1>
          <h6 className="text-lg text-black font-bold">TECHNICAL SKILL</h6>
        </section>
        <section className="w-[95vw] md:w-[75vw] flex flex-row flex-wrap justify-center items-center gap-3 md:gap-10 md:px-5 py-2 ">
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <IoLogoHtml5 className="text-[30px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
            <MdOutlineHtml className="text-[50px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
          </div>
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <IoLogoCss3 className="text-[30px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
            <MdOutlineCss className="text-[50px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
          </div>
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <FaBootstrap className="text-[30px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
            <span className="text-[20px] md:text-2xl font-bold group-hover:text-orange-600 transition-all duration-300">
              Bootstrap
            </span>
          </div>
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <SiTailwindcss className="text-[30px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
            <span className="text-[20px] md:text-2xl font-bold group-hover:text-orange-600 transition-all duration-300">
              Tailwind
            </span>
          </div>
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <TbBrandJavascript className="text-[30px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
            <MdOutlineJavascript className="text-[50px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
          </div>
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <TbBrandReact className="text-[30px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
            <span className="text-[20px] md:text-2xl font-bold group-hover:text-orange-600 transition-all duration-300">
              React.js
            </span>
          </div>
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <span className="text-[20px] md:text-2xl font-bold group-hover:text-orange-600 transition-all duration-300">
              UI / UX
            </span>
          </div>
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <FaPhp className="text-[30px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
            <MdOutlinePhp className="text-[50px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
          </div>
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <FaPython className="text-[30px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
            <span className="text-[20px] md:text-2xl font-bold group-hover:text-orange-600 transition-all duration-300">
              Python
            </span>
          </div>
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <SiFlask className="text-[30px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
            <span className="text-[20px] md:text-2xl font-bold group-hover:text-orange-600 transition-all duration-300">
              Flask
            </span>
          </div>
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <FaJava className="text-[30px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
            <span className="text-[20px] md:text-2xl font-bold group-hover:text-orange-600 transition-all duration-300">
              Java
            </span>
          </div>
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <SiHibernate className="text-[30px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
            <span className="text-[20px] md:text-2xl font-bold group-hover:text-orange-600 transition-all duration-300">
              Hibernate
            </span>
          </div>
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <GrMysql className="text-[30px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
            <TbSql className="text-[50px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
          </div>
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <SiMysql className="text-7xl group-hover:text-orange-600 transition-all duration-300" />
          </div>
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <SiSpring className="text-[30px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
            <span className="text-[16px] md:text-2xl font-bold group-hover:text-orange-600 transition-all duration-300">
              Spring Core
            </span>
          </div>
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <SiSpringboot className="text-[30px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
            <span className="text-[16px] md:text-2xl font-bold group-hover:text-orange-600 transition-all duration-300">
              Spring Boot
            </span>
          </div>
          <div className="w-[45vw] md:w-[15rem] h-[6rem] bg-[#f2f1ef] border-2 border-black flex flex-row justify-center items-center gap-2 group hover:bg-black  px-3 py-1 transition-all duration-300">
            <SiSpring className="text-[30px] md:text-5xl group-hover:text-orange-600 transition-all duration-300" />
            <span className="text-[16px] md:text-2xl font-bold group-hover:text-orange-600 transition-all duration-300">
              Spring MVC
            </span>
          </div>
        </section>
      </section>
    </>
  );
};

export default Skills;
