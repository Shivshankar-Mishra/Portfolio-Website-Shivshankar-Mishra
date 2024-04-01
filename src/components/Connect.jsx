import "../assets/css/animation.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { useRef } from "react";
import useInViewport from "./useInViewPort";

const Connect = () => {
  const sectionRef = useRef(null);
  return (
    <section
      ref={sectionRef}
      className={`w-screen bg-[#cccccc] flex flex-row flex-wrap justify-center items-center gap-10 py-10 md:py-[5%] md:p-[5%] bottomToTop ${
        useInViewport(sectionRef) ? "topAnimate" : ""
      }`}
    >
      <div className="w-[90vw] md:w-[25vw] h-[25vh] bg-black rounded-sm flex flex-col justify-center items-center gap-4 px-3">
        <div className="w-12 h-12 rounded-full bg-orange-600 flex flex-row justify-center items-center">
          <AiTwotoneMail className="text-white text-xl" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-2xl text-white font-bold">Message Us</h2>
          <a href="mailto:shivmishankar@gmail.com" className="group">
          <p className="text-lg text-white font-medium group-hover:text-orange-600 group-hover:underline">
            shivmishankar@gmail.com
          </p>
          </a>
        </div>
      </div>
      <div className="w-[90vw] md:w-[25vw] h-[25vh] bg-black rounded-sm flex flex-col justify-center items-center gap-4 px-3">
        <div className="w-12 h-12 rounded-full bg-orange-600 flex flex-row justify-center items-center">
          <IoPhonePortraitOutline className="text-white text-xl" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-2xl text-white font-bold">Call Us</h2>
          <a href="tel:+918303778384" className="group">
          <p className="text-lg text-white font-medium group-hover:text-orange-600 group-hover:underline">+91 8303778384</p>
          </a>
        </div>
      </div>
      <div className="w-[90vw] md:w-[25vw] h-[25vh] bg-black rounded-sm flex flex-col justify-center items-center gap-4 px-3">
        <div className="w-12 h-12 rounded-full bg-orange-600 flex flex-row justify-center items-center">
          <FaLocationDot className="text-white text-xl" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-2xl text-white font-bold">Address</h2>
          <p className="text-lg text-white font-medium">
            201301 Sector-5, Noida, UP
          </p>
        </div>
      </div>
    </section>
  );
};

export default Connect;
