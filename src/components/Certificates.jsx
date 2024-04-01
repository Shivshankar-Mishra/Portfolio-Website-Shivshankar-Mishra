import { useRef } from "react";
import "../assets/css/animation.css";
import { useStore } from "../context/StoreContext";
import useInViewport from "./useInViewPort";

const Certificates = () => {
  const { Star1 } = useStore();
  const sectionRef = useRef(null);
  return (
    <>
      <section ref={sectionRef} className={`w-screen flex flex-col justify-center items-center gap-[4rem] mt-10 md:mt-0 px-14 py-[3%] bottomToTop ${useInViewport(sectionRef)? 'topAnimate': ''}`}>
        <section className="w-[90vw] flex flex-col justify-center items-center gap-5">
          <img src={Star1} alt="star icon"></img>
          <h1 className="text-[40px] md:text-5xl leading-[50px] md:leading-[56px] text-black font-bold">Certifications</h1>
          <h6 className="text-lg text-center leading-[32px] text-black font-bold">
            REGONITIONS & ACCOIMPLISHMENTS
          </h6>
        </section>
        <section className="w-[90vw] flex flex-col justify-center items-center gap-5">
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/certificate/JQWPE3MMNN7K"
            target="_blank"
            className="flex flex-row justify-center items-center hover:bg-black group transition-all duration-300"
          >
            <div className="w-[90vw] h-[45vh] md:w-[70vw] md:h-[20vh] flex flex-col justify-center md:flex-row md:justify-between items-center gap-5 md:gap-0 border-2 border-black px-10">
              <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <span className="w-12 h-12 bg-[#e94d35] text-white font-bold flex flex-row justify-center items-center p-2">
                  1
                </span>
                <div className="flex flex-col justify-center items-center md:items-start gap-5 md:gap-1">
                  <h3 className="text-2xl text-center text-black font-bold group-hover:text-white transition-all duration-300">
                    Google UX Design
                  </h3>
                  <p className="text-black text-center text-lg font-medium group-hover:text-white transition-all duration-300">
                    UI/UX Design - Specialization Certificate
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-4 ">
                <p className="text-base text-black font-semibold group-hover:text-white transition-all duration-300">
                  WEB & APP DESIGN
                </p>
                <p className="text-base text-black font-semibold group-hover:text-white transition-all duration-300">
                  2023
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://ict-certificates.s3.ap-south-1.amazonaws.com/30323-159067-62f36b22d263f414-2021.pdf"
            target="_blank"
            className="flex flex-row justify-center items-center hover:bg-black group transition-all duration-300"
          >
            <div className="w-[90vw] h-[45vh] md:w-[70vw] md:h-[20vh] flex flex-col justify-center md:flex-row md:justify-between items-center gap-5 md:gap-0 border-2 border-black px-10">
              <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <span className="w-12 h-12 bg-[#e94d35] text-white font-bold flex flex-row justify-center items-center p-2">
                  2
                </span>
                <div className="flex flex-col justify-center items-center md:items-start gap-5 md:gap-1">
                  <h3 className="text-2xl text-center text-black font-bold group-hover:text-white transition-all duration-300">
                    Full Stack Developer
                  </h3>
                  <p className="text-black text-center text-lg font-medium group-hover:text-white transition-all duration-300">
                    HTML5, CSS3, JavaScript, Bootstrap, PHP with MySQL
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-4 ">
                <p className="text-base text-black font-semibold group-hover:text-white transition-all duration-300">
                  WEB DEVELOPMENT
                </p>
                <p className="text-base text-black font-semibold group-hover:text-white transition-all duration-300">
                  2022
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://ict-certificates.s3.ap-south-1.amazonaws.com/prutor-intern-2021-218294-shivshankar-mishra.pdf"
            target="_blank"
            className="flex flex-row justify-center items-center hover:bg-black group transition-all duration-300"
          >
            <div className="w-[90vw] h-[45vh] md:w-[70vw] md:h-[20vh] flex flex-col justify-center md:flex-row md:justify-between items-center gap-5 md:gap-0 border-2 border-black px-10">
              <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <span className="w-12 h-12 bg-[#e94d35] text-white font-bold flex flex-row justify-center items-center p-2">
                  3
                </span>
                <div className="flex flex-col justify-center items-center md:items-start gap-5 md:gap-1">
                  <h3 className="text-2xl text-center text-black font-bold group-hover:text-white transition-all duration-300">
                    Internship on Full Stack Developer
                  </h3>
                  <p className="text-black text-center text-lg font-medium group-hover:text-white transition-all duration-300">
                    Robustresults Pvt ltd. an IITK incubated company
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-4 ">
                <p className="text-base text-black font-semibold group-hover:text-white transition-all duration-300">
                  WEB DEVELOPMENT
                </p>
                <p className="text-base text-black font-semibold group-hover:text-white transition-all duration-300">
                  2022
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://ict-certificates.s3.ap-south-1.amazonaws.com/pru-218294-shivshankar-mishra.pdf"
            target="_blank"
            className="flex flex-row justify-center items-center hover:bg-black group transition-all duration-300"
          >
            <div className="w-[90vw] h-[45vh] md:w-[70vw] md:h-[20vh] flex flex-col justify-center md:flex-row md:justify-between items-center gap-5 md:gap-0 border-2 border-black px-10">
              <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <span className="w-12 h-12 bg-[#e94d35] text-white font-bold flex flex-row justify-center items-center p-2">
                  4
                </span>
                <div className="flex flex-col justify-center items-center md:items-start gap-5 md:gap-1">
                  <h3 className="text-2xl text-center text-black font-bold group-hover:text-white transition-all duration-300">
                    Project Certificate
                  </h3>
                  <p className="text-black text-center text-lg font-medium group-hover:text-white transition-all duration-300">
                    {" "}
                    Project entitled Full Stack Developer – HTML5, CSS3,
                    JavaScript, PHP with MySQL
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-4">
                <p className="text-base text-black font-semibold group-hover:text-white transition-all duration-300">
                  WEB DEVELOPMENT
                </p>
                <p className="text-base text-black font-semibold group-hover:text-white transition-all duration-300">
                  2022
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://assets.learnvern.com/certificates/images/certificate-599956.jpg"
            target="_blank"
            className="flex flex-row justify-center items-center hover:bg-black group transition-all duration-300"
          >
            <div className="w-[90vw] h-[45vh] md:w-[70vw] md:h-[20vh] flex flex-col justify-center md:flex-row md:justify-between items-center gap-5 md:gap-0 border-2 border-black px-10">
              <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <span className="w-12 h-12 bg-[#e94d35] text-white font-bold flex flex-row justify-center items-center p-2">
                  5
                </span>
                <div className="flex flex-col justify-center items-center md:items-start gap-5 md:gap-1">
                  <h3 className="text-2xl text-center text-black font-bold group-hover:text-white transition-all duration-300">
                    Python Programming Course
                  </h3>
                  <p className="text-black text-center text-lg font-medium group-hover:text-white transition-all duration-300">
                    LearnVern - a training partner of NSDC
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-4">
                <p className="text-base text-black font-semibold group-hover:text-white transition-all duration-300">
                  Programming Course
                </p>
                <p className="text-base text-black font-semibold group-hover:text-white transition-all duration-300">
                  2020
                </p>
              </div>
            </div>
          </a>
        </section>
      </section>
    </>
  );
};

export default Certificates;
