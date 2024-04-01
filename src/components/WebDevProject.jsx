import { useRef, useState } from "react";
import "../assets/css/projects.css";
import "../assets/css/animation.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useStore } from "../context/StoreContext";
import Button from "./Button";
import useInViewport from "./useInViewPort";

const WebDevProject = () => {
  const { Star1, Starwhite, TaskCanvas, Numpicker } = useStore();
  const sectionRef = useRef(null);
  const [isDiv1Open, setIsDiv1Open] = useState(false);
  const [isDiv2Open, setIsDiv2Open] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState({
    details1: false,
    details2: false,
  });

  const toggleOpen = (id) => {
    setDetailsOpen((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };
  return (
    <section
      ref={sectionRef}
      id="webdev"
      className={`w-screen flex flex-col justify-center items-center gap-[4rem] mt-10 md:mt-0  px-14 py-[3%] bottomToTop ${
        useInViewport(sectionRef) ? "topAnimate" : ""
      }`}
    >
      <section className="w-[90vw] flex flex-col justify-center items-center gap-5">
        <img src={Star1} alt="star icon"></img>
        <h1 className="text-[40px] text-center md:text-5xl leading-[50px] md:leading-[56px] text-black font-bold">
          Web Development Projects
        </h1>
        <h6 className="text-lg text-center leading-[32px] text-black font-bold">
          WEB APPLICATION & PROJECTS
        </h6>
      </section>
      <section className="w-[90] md:w-auto flex flex-col justify-center items-center gap-1 md:gap-10">
        <details
          open={detailsOpen.details1}
          onToggle={() => toggleOpen("details1")}
          className={`hidden md:flex flex-col justify-center items-center ${
            detailsOpen.details1 ? "border-b-2 border-b-slate-400" : ""
          }`}
        >
          <summary className="w-[90vw] md:w-[75vw] h-[20vh] flex flex-row justify-between items-center border-2 border-black px-10 group focus-within:bg-black hover:bg-black cursor-pointer transition-all duration-500">
            <div className="flex flex-row justify-center items-center gap-5">
              <img
                src={Starwhite}
                alt="star icon"
                className="w-12 h-12 bg-black text-white font-bold flex flex-row justify-center items-center p-2 group-hover:bg-slate-900 transition-all duration-300"
              />
              <div className="flex flex-col justify-center items-start gap-1">
                <h3 className="text-2xl text-black font-bold group-focus-within:text-white group-hover:text-white transition-all duration-300">
                  TaskCanvas Web App
                </h3>
                <p className="text-black text-lg font-medium group-focus-within:text-white group-hover:text-white transition-all duration-300">
                  Task Management
                </p>
              </div>
            </div>
            {detailsOpen.details1 ? (
              <FaAngleUp className="text-xl text-black group-focus-within:text-white group-hover:text-white" />
            ) : (
              <FaAngleDown className="text-xl text-black group-focus-within:text-white group-hover:text-white" />
            )}
          </summary>
          <div className="hidden w-[75vw] md:flex flex-row justify-center items-start gap-10 mt-5">
            <img src={TaskCanvas} alt="taskcanvas image" className="w-[20vw]" />
            <div className="flex flex-col justify-between items-center gap-7">
              <p className="text-lg text-black font-medium">
                &quot;TaskCanvas&quot; is a versatile project management tool
                built with React and Firebase, designed to streamline task
                organization, enhance collaboration, and boost productivity.
                With customizable task cards, real-time collaboration features,
                cross-platform compatibility, customizable workflows, task
                analytics, robust security, and seamless integrations,
                TaskCanvas empowers individuals and teams to efficiently manage
                projects of any scale. Experience the future of project
                management with &quot;TaskCanvas&quot;.
              </p>
              <a
                href="https://github.com/Shivshankar-Mishra/TaskCanvas"
                target="_blank"
                className="flex flex-row justify-center items-center group transition-all duration-300"
              >
                <div className="w-10 h-10 bg-transparent border-[1px] flex flex-row justify-center items-center border-[#5f5d59] rounded-full group-hover:scale-110 group-hover:border-orange-600 transition-all duration-300">
                  <FaGithub className="text-2xl text-[#5f5d59] group-hover:text-orange-600" />
                </div>
              </a>
              <a
                href="https://taskcanvas-official.firebaseapp.com/"
                target="_blank"
              >
                <Button
                  wid="w-[186px]"
                  hgt="h-[60px]"
                  color="text-white text-lg"
                  bgColor="bg-[#e94d35]"
                  border="border-none"
                  hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                  title="Live link"
                />
              </a>
            </div>
          </div>
        </details>
        <details
          open={detailsOpen.details2}
          onToggle={() => toggleOpen("details2")}
          className={`hidden md:flex flex-col justify-center items-center ${
            detailsOpen.details2 ? "border-b-2 border-b-slate-400" : ""
          } `}
        >
          <summary className="w-[75vw] h-[20vh] flex flex-row justify-between items-center border-2 border-black px-10 group focus-within:bg-black hover:bg-black cursor-pointer transition-all duration-500">
            <div className="flex flex-row justify-center items-center gap-5">
              <img
                src={Starwhite}
                alt="star icon"
                className="w-12 h-12 bg-black text-white font-bold flex flex-row justify-center items-center p-2 group-hover:bg-slate-900 transition-all duration-300"
              />
              <div className="flex flex-col justify-center items-start gap-1">
                <h3 className="text-2xl text-black font-bold group-focus-within:text-white group-hover:text-white transition-all duration-300">
                  Num-Picker Game Web App
                </h3>
                <p className="text-black text-lg font-medium group-focus-within:text-white group-hover:text-white transition-all duration-300">
                  Web Development
                </p>
              </div>
            </div>
            {detailsOpen.details2 ? (
              <FaAngleUp className="text-xl text-black group-focus-within:text-white group-hover:text-white" />
            ) : (
              <FaAngleDown className="text-xl text-black group-focus-within:text-white group-hover:text-white" />
            )}
          </summary>
          <div className="w-[75vw] flex flex-row justify-center items-start gap-10 mt-5 ">
            <img
              src={Numpicker}
              alt="taskcanvas image"
              className="w-[20vw] h-[30vh]"
            />
            <div className="flex flex-col justify-between items-center gap-5">
              <p className="text-lg text-black font-medium">
                Introducing &quot;Num-Picker Game&quot;, a captivating game
                developed using HTML, CSS, and JavaScript. Users engage with
                solid circular icons bearing numeric values from 0 to 9, tasked
                with clicking the correct value to match a given target within a
                30-second time frame. Every correct match boosts the score by 10
                points, while exceeding three mistakes ends the game, displaying
                the achieved score. Featuring intuitive UI design, robust
                scoring mechanics, and error handling, this project demonstrates
                proficiency in front-end development, user interaction, and time
                management. Check out the GitHub repository for a deeper dive
                into the code and witness firsthand the fusion of creativity and
                technical expertise in game development. Ready to elevate your
                web portfolio with this engaging project? Let&apos;s connect and
                explore the endless possibilities of interactive web
                experiences.
              </p>
              <a
                href="https://github.com/Shivshankar-Mishra/Num-Picker_Game"
                target="_blank"
                className="flex flex-row justify-center items-center group transition-all duration-300"
              >
                <div className="w-10 h-10 bg-transparent border-[1px] flex flex-row justify-center items-center border-[#5f5d59] rounded-full group-hover:scale-110 group-hover:border-orange-600 transition-all duration-300">
                  <FaGithub className="text-2xl text-[#5f5d59] group-hover:text-orange-600" />
                </div>
              </a>
              <a
                href="https://shivshankar-mishra.github.io/Num-Picker_Game/"
                target="_blank"
              >
                <Button
                  wid="w-[186px]"
                  hgt="h-[60px]"
                  color="text-white text-lg"
                  bgColor="bg-[#e94d35]"
                  border="border-none"
                  hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                  title="Live link"
                />
              </a>
            </div>
          </div>
        </details>
        <div
          className={` w-[90vw] flex md:hidden flex-col justify-center items-center gap-5 ${
            isDiv1Open ? "border-b-2 border-b-slate-400" : ""
          } `}
        >
          <div
            onClick={() => setIsDiv1Open(!isDiv1Open)}
            className="w-[90vw] h-[20vh] flex flex-row justify-between items-center border-2 border-black px-10 group focus-within:bg-black hover:bg-black cursor-pointer transition-all duration-500"
          >
            <div className="flex flex-row justify-center items-center gap-5">
              <img
                src={Starwhite}
                alt="star icon"
                className="w-12 h-12 bg-black text-white font-bold flex flex-row justify-center items-center p-2 group-hover:bg-slate-900 transition-all duration-300"
              />
              <div className="flex flex-col justify-center items-start gap-1">
                <h3 className="text-[20px] leading-[24px] text-black font-bold group-focus-within:text-white group-hover:text-white transition-all duration-300">
                  TaskCanvas Web App
                </h3>
                <p className="text-black text-base font-medium group-focus-within:text-white group-hover:text-white transition-all duration-300">
                  Task Management
                </p>
              </div>
            </div>
            {isDiv1Open ? (
              <FaAngleUp className="text-xl text-black group-focus-within:text-white group-hover:text-white" />
            ) : (
              <FaAngleDown className="text-xl text-black group-focus-within:text-white group-hover:text-white" />
            )}
          </div>
          <div
            className={`w-[90vw] flex md:hidden flex-col justify-start items-center transition-all duration-500 ${
              isDiv1Open ? "w-full h-[55rem] opacity-100" : "w-0 h-0 opacity-0"
            } overflow-hidden `}
          >
            <div className="flex flex-row justify-center items-center">
              <img src={TaskCanvas} alt="taskcanvas image" />
            </div>
            <div className="flex flex-col justify-start items-center gap-5">
              <p className="w-[90vw] text-center text-sm text-black font-medium leading-[30px]">
                &quot;TaskCanvas&quot; is a versatile project management tool
                built with React and Firebase, designed to streamline task
                organization, enhance collaboration, and boost productivity.
                With customizable task cards, real-time collaboration features,
                cross-platform compatibility, customizable workflows, task
                analytics, robust security, and seamless integrations,
                TaskCanvas empowers individuals and teams to efficiently manage
                projects of any scale. Experience the future of project
                management with &quot;TaskCanvas&quot;.
              </p>
              <a
                href="https://github.com/Shivshankar-Mishra/TaskCanvas"
                target="_blank"
                className="flex flex-row justify-center items-center group transition-all duration-300"
              >
                <div className="w-10 h-10 bg-transparent border-[1px] flex flex-row justify-center items-center border-[#5f5d59] rounded-full group-hover:scale-110 group-hover:border-orange-600 transition-all duration-300">
                  <FaGithub className="text-2xl text-[#5f5d59] group-hover:text-orange-600" />
                </div>
              </a>
              <a
                href="https://taskcanvas-official.firebaseapp.com/"
                target="_blank"
              >
                <Button
                  wid="w-[186px]"
                  hgt="h-[60px]"
                  color="text-white text-lg"
                  bgColor="bg-[#e94d35]"
                  border="border-none"
                  hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                  title="Live link"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className={` w-[90vw] flex md:hidden flex-col justify-center items-center gap-5 ${
            isDiv2Open ? "border-b-2 border-b-slate-400" : ""
          } `}
        >
          <div
            onClick={() => setIsDiv2Open(!isDiv2Open)}
            className="w-[90vw] h-[20vh] flex flex-row justify-between items-center border-2 border-black px-10 group focus-within:bg-black hover:bg-black cursor-pointer transition-all duration-500"
          >
            <div className="flex flex-row justify-center items-center gap-5">
              <img
                src={Starwhite}
                alt="star icon"
                className="w-12 h-12 bg-black text-white font-bold flex flex-row justify-center items-center p-2 group-hover:bg-slate-900 transition-all duration-300"
              />
              <div className="flex flex-col justify-center items-start gap-1">
                <h3 className="text-[20px] leading-[24px] text-black font-bold group-focus-within:text-white group-hover:text-white transition-all duration-300">
                  Num-Picker Game Web App
                </h3>
                <p className="text-black text-base font-medium group-focus-within:text-white group-hover:text-white transition-all duration-300">
                  Web Development
                </p>
              </div>
            </div>
            {isDiv2Open ? (
              <FaAngleUp className="text-xl text-black group-focus-within:text-white group-hover:text-white" />
            ) : (
              <FaAngleDown className="text-xl text-black group-focus-within:text-white group-hover:text-white" />
            )}
          </div>
          <div
            className={`w-[90vw] flex md:hidden flex-col justify-start items-center transition-all duration-500 ${
              isDiv2Open ? "w-full h-[57rem] opacity-100" : "w-0 h-0 opacity-0"
            } overflow-hidden `}
          >
            <div className="flex flex-row justify-center items-center">
              <img src={Numpicker} alt="numpicker project image" />
            </div>
            <div className="flex flex-col justify-start items-center gap-5">
              <p className="w-[90vw] text-center text-sm text-black font-medium leading-[30px]">
                Introducing &quot;Num-Picker Game&quot;, a captivating game
                developed using HTML, CSS, and JavaScript. Users engage with
                solid circular icons bearing numeric values from 0 to 9, tasked
                with clicking the correct value to match a given target within a
                30-second time frame. Every correct match boosts the score by 10
                points, while exceeding three mistakes ends the game, displaying
                the achieved score. Featuring intuitive UI design, robust
                scoring mechanics, and error handling, this project demonstrates
                proficiency in front-end development, user interaction, and time
                management. Check out the GitHub repository for a deeper dive
                into the code and witness firsthand the fusion of creativity and
                technical expertise in game development. Ready to elevate your
                web portfolio with this engaging project? Let&apos;s connect and
                explore the endless possibilities of interactive web
                experiences.
              </p>
              <a
                href="https://github.com/Shivshankar-Mishra/Num-Picker_Game"
                target="_blank"
                className="flex flex-row justify-center items-center group transition-all duration-300"
              >
                <div className="w-10 h-10 bg-transparent border-[1px] flex flex-row justify-center items-center border-[#5f5d59] rounded-full group-hover:scale-110 group-hover:border-orange-600 transition-all duration-300">
                  <FaGithub className="text-2xl text-[#5f5d59] group-hover:text-orange-600" />
                </div>
              </a>
              <a
                href="https://shivshankar-mishra.github.io/Num-Picker_Game/"
                target="_blank"
              >
                <Button
                  wid="w-[186px]"
                  hgt="h-[60px]"
                  color="text-white text-lg"
                  bgColor="bg-[#e94d35]"
                  border="border-none"
                  hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                  title="Live link"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WebDevProject;
