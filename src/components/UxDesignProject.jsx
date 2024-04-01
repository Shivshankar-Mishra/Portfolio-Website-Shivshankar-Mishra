import { useStore } from "../context/StoreContext";
import "../assets/css/animation.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useRef, useState } from "react";
import Button from "./Button";
import useInViewport from "./useInViewPort";

const UxDesignProject = () => {
  const { Star1 } = useStore();
  const sectionRef = useRef(null);
  const [divOpen, setDivOpen] = useState({
    div1: false,
    div2: false,
    div3: false,
  });
  const handleOpen = (id) => {
    setDivOpen((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };
  const [detailsState, setDetailsState] = useState({
    details1: false,
    details2: false,
    details3: false,
  });

  const toggleContent = (id) => {
    setDetailsState((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="webux"
      className={`w-screen flex flex-col justify-center items-center gap-[4rem] px-14 py-[3%] bottomToTop ${
        useInViewport(sectionRef) ? "topAnimate" : ""
      }`}
    >
      <section className="w-[90vw] flex flex-col justify-center items-center gap-5">
        <img src={Star1} alt="star icon"></img>
        <h1 className="text-[40px] md:text-5xl leading-[50px] md:leading-[56px] text-center text-black font-bold">
          UI/UX Projects
        </h1>
        <h6 className="text-lg text-center leading-[32px] text-black font-bold">
          WEB & APP DESIGN PROJECT
        </h6>
      </section>
      <section className="w-[90vw] hidden md:flex flex-col justify-center items-center gap-10">
        <details
          open={detailsState.details1}
          onToggle={() => toggleContent("details1")}
          className="flex flex-col justify-center items-center"
        >
          <summary className="w-[77vw] h-[20vh] flex flex-row justify-between items-center border-2 border-black px-10 group focus-within:bg-black hover:bg-black cursor-pointer transition-all duration-500">
            <div className="w-[70vw] h-[20vh] flex flex-row justify-between items-center ">
              <div className="flex flex-row justify-center items-center gap-5">
                <span className="w-12 h-12 bg-[#e94d35] text-white font-bold flex flex-row justify-center items-center p-2">
                  1
                </span>
                <div className="flex flex-col justify-center items-start gap-1">
                  <h3 className="text-2xl text-black font-bold group-hover:text-white group-focus-within:text-white transition-all duration-300">
                    Blood Hub Web & App Design
                  </h3>
                  <p className="text-black text-lg font-medium group-hover:text-white group-focus-within:text-white transition-all duration-300">
                    UI/UX design for social good app and website.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-4 ">
                <p className="text-base text-black font-semibold group-hover:text-white group-focus-within:text-white transition-all duration-300">
                  WEB & APP DESIGN
                </p>
                {detailsState.details1 ? (
                  <FaAngleUp className="text-xl text-black group-focus-within:text-white group-hover:text-white transition-all duration-500" />
                ) : (
                  <FaAngleDown className="text-xl text-black group-focus-within:text-white group-hover:text-white transition-all duration-500" />
                )}
              </div>
            </div>
          </summary>
          <div className="w-[75vw] flex flex-row justify-center items-center gap-5 px-2 mt-5">
            <div className="w-[30vw] h-[50vh] mx-auto">
              <iframe
                title="Google Slide"
                src="https://docs.google.com/presentation/d/16xpDYPHO9J7UFzXq9PQc2OqDXVulI-z81vl4-m6rEYM/preview"
                frameBorder="1"
                width="100%"
                height="79%"
                allowFullScreen={true}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            </div>
            <div className="w-[30vw] h-[50vh] mx-auto">
              <iframe
                width="100%"
                height="79%"
                src="https://www.youtube.com/embed/00JaY0wWKjw?si=c4Jio8lWRoKgy6Md"
                title="YouTube video player"
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col flex-wrap justify-center items-center gap-5">
              <a
                href="https://github.com/Shivshankar-Mishra/Blood-Hub-Casestudy-Website"
                target="_blank"
                className="flex flex-row justify-center items-center group transition-all duration-300"
              >
                <div className="w-10 h-10 bg-transparent border-[1px] flex flex-row justify-center items-center border-[#5f5d59] rounded-full group-hover:scale-110 group-hover:border-orange-600 transition-all duration-300">
                  <FaGithub className="text-2xl text-[#5f5d59] group-hover:text-orange-600" />
                </div>
              </a>
              <a
                href="https://shivshankar-mishra.github.io/Blood-Hub-Casestudy-Website/"
                target="_blank"
              >
                <Button
                  wid="w-[186px]"
                  hgt="h-[60px]"
                  color="text-white text-lg"
                  bgColor="bg-black"
                  border="border-none"
                  hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                  title="Casestudy Website"
                />
              </a>
              <a
                href="https://xd.adobe.com/view/58b7154a-e8bc-478e-a652-d72669729535-0de4/"
                target="_blank"
              >
                <Button
                  wid="w-[186px]"
                  hgt="h-[60px]"
                  color="text-white text-lg"
                  bgColor="bg-[#e94d35]"
                  border="border-none"
                  hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                  title="Access Design"
                />
              </a>
            </div>
          </div>
        </details>
        <details
          open={detailsState.details2}
          onToggle={() => toggleContent("details2")}
          className="flex flex-col justify-center items-center"
        >
          <summary className="w-[77vw] h-[20vh] flex flex-row justify-between items-center border-2 border-black px-10 group focus-within:bg-black hover:bg-black cursor-pointer transition-all duration-500">
            <div className="w-[70vw] h-[20vh] flex flex-row justify-between items-center ">
              <div className="flex flex-row justify-center items-center gap-5">
                <span className="w-12 h-12 bg-[#e94d35] text-white font-bold flex flex-row justify-center items-center p-2">
                  2
                </span>
                <div className="flex flex-col justify-center items-start gap-1">
                  <h3 className="text-2xl text-black font-bold group-hover:text-white group-focus-within:text-white transition-all duration-300">
                    Movie Ticket Web Design
                  </h3>
                  <p className="text-black text-lg font-medium group-hover:text-white group-focus-within:text-white transition-all duration-300">
                    UI/UX design for responsive website.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-4 ">
                <p className="text-base text-black font-semibold group-hover:text-white group-focus-within:text-white transition-all duration-300">
                  WEB DESIGN
                </p>
                {detailsState.details2 ? (
                  <FaAngleUp className="text-xl text-black group-focus-within:text-white group-hover:text-white" />
                ) : (
                  <FaAngleDown className="text-xl text-black group-focus-within:text-white group-hover:text-white" />
                )}
              </div>
            </div>
          </summary>
          <div className="w-[75vw] flex flex-row justify-center items-center gap-5 px-2 mt-5">
            <div className="w-[30vw] h-[50vh] mx-auto">
              <iframe
                title="Google Slide"
                src="https://docs.google.com/presentation/d/1qVRL5wSZlMJbOIERQEHElegxKC2SqgKyn-D4B4gcKSw/preview"
                frameBorder="1"
                width="100%"
                height="79%"
                allowFullScreen={true}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            </div>
            <div className="w-[30vw] h-[50vh] mx-auto">
              <iframe
                width="100%"
                height="79%"
                src="https://www.youtube.com/embed/7rPd2LFayKE?si=ErIb5IEEsnB4lWnJ"
                title="YouTube video player"
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col flex-wrap justify-center items-center gap-5">
              <a
                href="https://github.com/Shivshankar-Mishra/Portfolio_Movie_Ticket_CaseStudy_Website_UX_Design"
                target="_blank"
                className="flex flex-row justify-center items-center group transition-all duration-300"
              >
                <div className="w-10 h-10 bg-transparent border-[1px] flex flex-row justify-center items-center border-[#5f5d59] rounded-full group-hover:scale-110 group-hover:border-orange-600 transition-all duration-300">
                  <FaGithub className="text-2xl text-[#5f5d59] group-hover:text-orange-600" />
                </div>
              </a>
              <a
                href="https://shivshankar-mishra.github.io/Portfolio_Movie_Ticket_CaseStudy_Website_UX_Design/"
                target="_blank"
              >
                <Button
                  wid="w-[186px]"
                  hgt="h-[60px]"
                  color="text-white text-lg"
                  bgColor="bg-black"
                  border="border-none"
                  hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                  title="Casestudy Website"
                />
              </a>
              <a
                href="https://xd.adobe.com/view/94e4cc0d-9e04-4a5f-b2dd-8e3784c5aea1-c1b7/"
                target="_blank"
              >
                <Button
                  wid="w-[186px]"
                  hgt="h-[60px]"
                  color="text-white text-lg"
                  bgColor="bg-[#e94d35]"
                  border="border-none"
                  hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                  title="Access Design"
                />
              </a>
            </div>
          </div>
        </details>
        <details
          open={detailsState.details3}
          onToggle={() => toggleContent("details3")}
          className="flex flex-col justify-center items-center"
        >
          <summary className="w-[77vw] h-[20vh] flex flex-row justify-between items-center border-2 border-black px-10 group focus-within:bg-black hover:bg-black cursor-pointer transition-all duration-500">
            <div className="w-[70vw] h-[20vh] flex flex-row justify-between items-center ">
              <div className="flex flex-row justify-center items-center gap-5">
                <span className="w-12 h-12 bg-[#e94d35] text-white font-bold flex flex-row justify-center items-center p-2">
                  3
                </span>
                <div className="flex flex-col justify-center items-start gap-1">
                  <h3 className="text-2xl text-black font-bold group-hover:text-white group-focus-within:text-white transition-all duration-300">
                    Payment App Design
                  </h3>
                  <p className="text-black text-lg font-medium group-hover:text-white group-focus-within:text-white transition-all duration-300">
                    UI/UX design for mobile application.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-4 ">
                <p className="text-base text-black font-semibold group-hover:text-white group-focus-within:text-white transition-all duration-300">
                  APP DESIGN
                </p>
                {detailsState.details2 ? (
                  <FaAngleUp className="text-xl text-black group-focus-within:text-white group-hover:text-white" />
                ) : (
                  <FaAngleDown className="text-xl text-black group-focus-within:text-white group-hover:text-white" />
                )}
              </div>
            </div>
          </summary>
          <div className="w-[75vw] flex flex-row justify-center items-center gap-5 px-2 mt-5">
            <div className="w-[30vw] h-[50vh] mx-auto">
              <iframe
                title="Google Slide"
                src="https://docs.google.com/presentation/d/1zy8nnSEdlIWI_l5mDme75tDEtZSJxsArAbsziQgbnwM/preview"
                frameBorder="1"
                width="100%"
                height="79%"
                allowFullScreen={true}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            </div>
            <div className="w-[30vw] h-[50vh] mx-auto">
              <iframe
                width="100%"
                height="79%"
                src="https://www.youtube.com/embed/LtM_sVWAJYA?si=Zt9kbU5FrwAuansd"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col flex-wrap justify-center items-center gap-5">
              <a
                href="https://github.com/Shivshankar-Mishra/Portfolio-Payment-App-CaseStudy_Website-UX-design"
                target="_blank"
                className="flex flex-row justify-center items-center group transition-all duration-300"
              >
                <div className="w-10 h-10 bg-transparent border-[1px] flex flex-row justify-center items-center border-[#5f5d59] rounded-full group-hover:scale-110 group-hover:border-orange-600 transition-all duration-300">
                  <FaGithub className="text-2xl text-[#5f5d59] group-hover:text-orange-600" />
                </div>
              </a>
              <a
                href="https://shivshankar-mishra.github.io/Portfolio-Payment-App-CaseStudy_Website-UX-design/"
                target="_blank"
              >
                <Button
                  wid="w-[186px]"
                  hgt="h-[60px]"
                  color="text-white text-lg"
                  bgColor="bg-black"
                  border="border-none"
                  hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                  title="Casestudy Website"
                />
              </a>
              <a
                href="https://www.figma.com/proto/djVggz4apGyCeBhwju2k4v/Payment-App-(Colour)?page-id=0%3A1&type=design&node-id=2-3&viewport=327%2C244%2C0.47&t=5m2I3KP9Nsuc1wIT-1&scaling=scale-down&starting-point-node-id=2%3A3&mode=design"
                target="_blank"
              >
                <Button
                  wid="w-[186px]"
                  hgt="h-[60px]"
                  color="text-white text-lg"
                  bgColor="bg-[#e94d35]"
                  border="border-none"
                  hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                  title="Access Design"
                />
              </a>
            </div>
          </div>
        </details>
      </section>
      <section className="w-[90vw] md:hidden flex flex-col justify-center items-center gap-1">
        <div className="w-full flex flex-col justify-center items-center gap-1">
          <div
            onClick={() => handleOpen("div1")}
            className="w-[90vw] flex flex-col justify-center items-center gap-3 border-2 border-black p-5 group focus-within:bg-black hover:bg-black cursor-pointer transition-all duration-500"
          >
            <div className="flex flex-col justify-center items-center gap-3">
              <span className="w-12 h-12 bg-[#e94d35] text-white font-bold flex flex-row justify-center items-center p-2">
                1
              </span>
              <div className="flex flex-col justify-center items-center gap-1">
                <h3 className="text-[20px] leading-[24px] text-center text-black font-bold group-hover:text-white group-focus-within:text-white transition-all duration-300">
                  Blood Hub Web & App Design
                </h3>
                <p className="text-black text-base text-center font-medium group-hover:text-white group-focus-within:text-white transition-all duration-300">
                  UI/UX design for social good app and website.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 ">
              <p className="text-base text-black font-semibold group-hover:text-white group-focus-within:text-white transition-all duration-300">
                WEB & APP DESIGN
              </p>
              {divOpen.div1 ? (
                <FaAngleUp className="text-xl text-black group-focus-within:text-white group-hover:text-white transition-all duration-500" />
              ) : (
                <FaAngleDown className="text-xl text-black group-focus-within:text-white group-hover:text-white transition-all duration-500" />
              )}
            </div>
          </div>
          <div
            className={`w-[90vw] flex md:hidden flex-col justify-start items-center py-3 gap-5 transition-all duration-700 ${
              divOpen.div1
                ? "h-[45rem] opacity-100 border-b-2 border-b-slate-400 mb-5"
                : "h-0 opacity-0"
            } overflow-hidden `}
          >
            <div className="w-[90vw] h-[30vh] mx-auto">
              <iframe
                title="Google Slide"
                src="https://docs.google.com/presentation/d/16xpDYPHO9J7UFzXq9PQc2OqDXVulI-z81vl4-m6rEYM/preview"
                frameBorder="1"
                width="100%"
                height="100%"
                allowFullScreen={true}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            </div>
            <div className="w-[90vw] h-[30vh] mx-auto my-0">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/00JaY0wWKjw?si=c4Jio8lWRoKgy6Md"
                title="YouTube video player"
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col flex-wrap justify-center items-center gap-5">
              <a
                href="https://github.com/Shivshankar-Mishra/Blood-Hub-Casestudy-Website"
                className="flex flex-row justify-center items-center group transition-all duration-300"
              >
                <div className="w-10 h-10 bg-transparent border-[1px] flex flex-row justify-center items-center border-[#5f5d59] rounded-full group-hover:scale-110 group-hover:border-orange-600 transition-all duration-300">
                  <FaGithub className="text-2xl text-[#5f5d59] group-hover:text-orange-600" />
                </div>
              </a>
              <a href="https://shivshankar-mishra.github.io/Blood-Hub-Casestudy-Website/">
                <Button
                  wid="w-[186px]"
                  hgt="h-[60px]"
                  color="text-white text-lg"
                  bgColor="bg-black"
                  border="border-none"
                  hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                  title="Casestudy Website"
                />
              </a>
              <a href="https://xd.adobe.com/view/58b7154a-e8bc-478e-a652-d72669729535-0de4/">
                <Button
                  wid="w-[186px]"
                  hgt="h-[60px]"
                  color="text-white text-lg"
                  bgColor="bg-[#e94d35]"
                  border="border-none"
                  hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                  title="Access Design"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-1">
          <div
            onClick={() => handleOpen("div2")}
            className="w-[90vw] flex flex-col justify-center items-center gap-3 border-2 border-black p-5 group focus-within:bg-black hover:bg-black cursor-pointer transition-all duration-500"
          >
            <div className="flex flex-col justify-center items-center gap-3">
              <span className="w-12 h-12 bg-[#e94d35] text-white font-bold flex flex-row justify-center items-center p-2">
                2
              </span>
              <div className="flex flex-col justify-center items-center gap-1">
                <h3 className="text-[20px] leading-[24px] text-center text-black font-bold group-hover:text-white group-focus-within:text-white transition-all duration-300">
                  Movie Ticket Web Design
                </h3>
                <p className="text-black text-base text-center font-medium group-hover:text-white group-focus-within:text-white transition-all duration-300">
                  UI/UX design for responsive website.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 ">
              <p className="text-base text-black font-semibold group-hover:text-white group-focus-within:text-white transition-all duration-300">
                WEB DESIGN
              </p>
              {divOpen.div2 ? (
                <FaAngleUp className="text-xl text-black group-focus-within:text-white group-hover:text-white transition-all duration-500" />
              ) : (
                <FaAngleDown className="text-xl text-black group-focus-within:text-white group-hover:text-white transition-all duration-500" />
              )}
            </div>
          </div>
          <div
            className={`w-[90vw] flex md:hidden flex-col justify-start items-center py-3 gap-5 transition-all duration-700 ${
              divOpen.div2
                ? "h-[45rem] opacity-100 border-b-2 border-b-slate-400 mb-5"
                : "h-0 opacity-0"
            } overflow-hidden `}
          >
            <div className="w-[90vw] h-[30vh] mx-auto">
              <iframe
                title="Google Slide"
                src="https://docs.google.com/presentation/d/1qVRL5wSZlMJbOIERQEHElegxKC2SqgKyn-D4B4gcKSw/preview"
                frameBorder="1"
                width="100%"
                height="100%"
                allowFullScreen={true}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            </div>
            <div className="w-[90vw] h-[30vh] mx-auto my-0">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/7rPd2LFayKE?si=ErIb5IEEsnB4lWnJ"
                title="YouTube video player"
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col flex-wrap justify-center items-center gap-5">
              <a
                target="_blank"
                href="https://github.com/Shivshankar-Mishra/Portfolio_Movie_Ticket_CaseStudy_Website_UX_Design"
                className="flex flex-row justify-center items-center group transition-all duration-300"
              >
                <div className="w-10 h-10 bg-transparent border-[1px] flex flex-row justify-center items-center border-[#5f5d59] rounded-full group-hover:scale-110 group-hover:border-orange-600 transition-all duration-300">
                  <FaGithub className="text-2xl text-[#5f5d59] group-hover:text-orange-600" />
                </div>
              </a>
              <a
                href="https://shivshankar-mishra.github.io/Portfolio_Movie_Ticket_CaseStudy_Website_UX_Design/"
                target="_blank"
              >
                <Button
                  wid="w-[186px]"
                  hgt="h-[60px]"
                  color="text-white text-lg"
                  bgColor="bg-black"
                  border="border-none"
                  hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                  title="Casestudy Website"
                />
              </a>
              <a
                href="https://xd.adobe.com/view/94e4cc0d-9e04-4a5f-b2dd-8e3784c5aea1-c1b7/"
                target="_blank"
              >
                <Button
                  wid="w-[186px]"
                  hgt="h-[60px]"
                  color="text-white text-lg"
                  bgColor="bg-[#e94d35]"
                  border="border-none"
                  hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                  title="Access Design"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-1">
          <div
            onClick={() => handleOpen("div3")}
            className="w-[90vw] flex flex-col justify-center items-center gap-3 border-2 border-black p-5 group focus-within:bg-black hover:bg-black cursor-pointer transition-all duration-500"
          >
            <div className="flex flex-col justify-center items-center gap-3">
              <span className="w-12 h-12 bg-[#e94d35] text-white font-bold flex flex-row justify-center items-center p-2">
                3
              </span>
              <div className="flex flex-col justify-center items-center gap-1">
                <h3 className="text-[20px] leading-[24px] text-center text-black font-bold group-hover:text-white group-focus-within:text-white transition-all duration-300">
                  Payment App Design
                </h3>
                <p className="text-black text-base text-center font-medium group-hover:text-white group-focus-within:text-white transition-all duration-300">
                  UI/UX design for mobile application.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 ">
              <p className="text-base text-black font-semibold group-hover:text-white group-focus-within:text-white transition-all duration-300">
                APP DESIGN
              </p>
              {divOpen.div3 ? (
                <FaAngleUp className="text-xl text-black group-focus-within:text-white group-hover:text-white transition-all duration-500" />
              ) : (
                <FaAngleDown className="text-xl text-black group-focus-within:text-white group-hover:text-white transition-all duration-500" />
              )}
            </div>
          </div>
          <div
            className={`w-[90vw] flex md:hidden flex-col justify-start items-center py-3 gap-5 transition-all duration-700 ${
              divOpen.div3
                ? "h-[45rem] opacity-100 border-b-2 border-b-slate-400 mb-5"
                : "h-0 opacity-0"
            } overflow-hidden `}
          >
            <div className="w-[90vw] h-[30vh] mx-auto">
              <iframe
                title="Google Slide"
                src="https://docs.google.com/presentation/d/1zy8nnSEdlIWI_l5mDme75tDEtZSJxsArAbsziQgbnwM/preview"
                frameBorder="1"
                width="100%"
                height="100%"
                allowFullScreen={true}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            </div>
            <div className="w-[90vw] h-[30vh] mx-auto my-0">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/LtM_sVWAJYA?si=Zt9kbU5FrwAuansd"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col flex-wrap justify-center items-center gap-5">
              <a
                href="https://github.com/Shivshankar-Mishra/Portfolio-Payment-App-CaseStudy_Website-UX-design"
                target="_blank"
                className="flex flex-row justify-center items-center group transition-all duration-300"
              >
                <div className="w-10 h-10 bg-transparent border-[1px] flex flex-row justify-center items-center border-[#5f5d59] rounded-full group-hover:scale-110 group-hover:border-orange-600 transition-all duration-300">
                  <FaGithub className="text-2xl text-[#5f5d59] group-hover:text-orange-600" />
                </div>
              </a>
              <a
                href="https://shivshankar-mishra.github.io/Portfolio-Payment-App-CaseStudy_Website-UX-design/"
                target="_blank"
              >
                <Button
                  wid="w-[186px]"
                  hgt="h-[60px]"
                  color="text-white text-lg"
                  bgColor="bg-black"
                  border="border-none"
                  hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                  title="Casestudy Website"
                />
              </a>
              <a
                href="https://www.figma.com/proto/djVggz4apGyCeBhwju2k4v/Payment-App-(Colour)?page-id=0%3A1&type=design&node-id=2-3&viewport=327%2C244%2C0.47&t=5m2I3KP9Nsuc1wIT-1&scaling=scale-down&starting-point-node-id=2%3A3&mode=design"
                target="_blank"
              >
                <Button
                  wid="w-[186px]"
                  hgt="h-[60px]"
                  color="text-white text-lg"
                  bgColor="bg-[#e94d35]"
                  border="border-none"
                  hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                  title="Access Design"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default UxDesignProject;
