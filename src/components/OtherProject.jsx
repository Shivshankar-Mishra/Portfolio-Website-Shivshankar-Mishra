import { useStore } from "../context/StoreContext";
import "../assets/css/animation.css";
import { FaGithub } from "react-icons/fa";
import Button from "./Button";
import { useRef } from "react";
import useInViewport from "./useInViewPort";

const OtherProject = () => {
  const { Star1 } = useStore();
  const sectionRef = useRef(null);
  return (
    <section
      ref={sectionRef}
      id="otherprojects"
      className={`w-screen flex flex-col justify-center items-center gap-[4rem] px-14 py-[3%] bottomToTop ${
        useInViewport(sectionRef) ? "topAnimate" : ""
      }`}
    >
      <section className="w-[90vw] flex flex-col justify-center items-center gap-5">
        <img src={Star1} alt="star icon"></img>
        <h1 className="text-[40px] text-center md:text-5xl leading-[50px] md:leading-[56px] text-black font-bold">Other Projects</h1>
        <h6 className="text-lg text-center text-black font-bold">
          LOGICAL WEB PROJECTS
        </h6>
      </section>
      <section className="w-[90vw] md:w-screen flex flex-row flex-wrap justify-center items-center gap-10">
        <div className="w-full md:w-[80vw] md:h-[40vh] bg-transparent border-2 border-black flex flex-col justify-center items-start gap-5 p-3 md:p-8">
          <h2 className="text-[24px] md:text-3xl leading-[36px] md:leading-[40px] text-black font-bold">Stop Watch</h2>
          <p className="text-base md:text-lg leading-[32px] text-black font-medium">
            This React.js-based project showcases a minimalist yet powerful
            stopwatch application, designed to offer precision and ease of use.
            Featuring a clean digital display and responsive buttons for start,
            pause, resume, and reset functions, this stopwatch is a testament to
            my ability to create straightforward, user-friendly interfaces with
            robust functionality. Whether it’s for tracking time during workouts
            or measuring productivity intervals, this project exemplifies my
            commitment to delivering practical solutions through elegant code
            and design. 🕒✨
          </p>
          <div className="flex flex-row justify-start items-center gap-3">
            <a
              href="https://github.com/Shivshankar-Mishra/Stopwatch-ReactJs" target="_blank"
              className="flex flex-row justify-center items-center group transition-all duration-300"
            >
              <div className="w-10 h-10 bg-transparent border-[1px] flex flex-row justify-center items-center border-[#5f5d59] rounded-full group-hover:scale-110 group-hover:border-orange-600 transition-all duration-300">
                <FaGithub className="text-2xl text-[#5f5d59] group-hover:text-orange-600" />
              </div>
            </a>
            <a href="https://shivshankar-mishra.github.io/Stopwatch-ReactJs/" target="_blank">
              <Button
                wid="w-[150px]"
                hgt="h-[50px]"
                color="text-white text-lg"
                bgColor="bg-[#e94d35]"
                border="border-none"
                hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                title="Live link"
              />
            </a>
          </div>
        </div>
        <div className="w-full md:w-[80vw] md:h-[45vh] bg-transparent border-2 border-black flex flex-col justify-center items-start gap-5 p-3 md:p-8">
          <h2 className="text-[24px] md:text-3xl leading-[36px] md:leading-[40px] text-black font-bold">Layered Clock</h2>
          <p className="text-base md:text-lg leading-[32px] text-black font-medium">
            This project is a unique take on time visualization, developed using
            HTML, CSS, and JavaScript. It features a trio of concentric circles,
            each representing a different aspect of time. The largest circle at
            the base dynamically tracks seconds, the middle one follows minutes,
            and the smallest, static circle displays the hour, creating a
            harmonious dance of timekeeping elements. Complementing this central
            design are two plates positioned outside the circles; the left plate
            elegantly presents the date, while the right plate displays the
            current time. This clock not only serves as a functional piece of
            art but also demonstrates my proficiency in creating interactive web
            elements that blend innovative design with practicality. 🕒✨
          </p>
          <div className="flex flex-row justify-start items-center gap-3">
            <a
              href="https://github.com/Shivshankar-Mishra/clock" target="_blank"
              className="flex flex-row justify-center items-center group transition-all duration-300"
            >
              <div className="w-10 h-10 bg-transparent border-[1px] flex flex-row justify-center items-center border-[#5f5d59] rounded-full group-hover:scale-110 group-hover:border-orange-600 transition-all duration-300">
                <FaGithub className="text-2xl text-[#5f5d59] group-hover:text-orange-600" />
              </div>
            </a>
            <a href="https://shivshankar-mishra.github.io/clock/" target="_blank">
              <Button
                wid="w-[150px]"
                hgt="h-[50px]"
                color="text-white text-lg"
                bgColor="bg-[#e94d35]"
                border="border-none"
                hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
                title="Live link"
              />
            </a>
          </div>
        </div>
        <div className="w-full md:w-[39vw] md:h-[45vh] bg-transparent border-2 border-black flex flex-col justify-center items-start gap-5 p-3 md:p-8 hover:bg-black group transition-all duration-300">
          <h2 className="text-[24px] md:text-3xl leading-[36px] md:leading-[40px] text-black font-bold group-hover:text-white transition-all duration-300">
            Spiritual Bharat
          </h2>
          <p className="text-base md:text-lg leading-[32px] text-black font-medium group-hover:text-white transition-all duration-300">
            Explore the spiritual essence of India with 'Spiritual Bharat', a
            dynamic web platform designed to delve into the sacred heritage of
            the nation. With an extensive database of temples, holy rivers, and
            festivals, the platform offers a transformative journey through
            multimedia-rich content. Developed using Python, Flask, HTML/CSS,
            and Bootstrap, it seamlessly integrates user authentication, profile
            management, and multimedia features, fostering a deep understanding
            of India's spiritual traditions.
          </p>
        </div>
        <div className="w-full md:w-[39vw] md:h-[45vh] bg-transparent border-2 border-black flex flex-col justify-center items-start gap-5 p-3 md:p-8 hover:bg-black group transition-all duration-300">
          <h2 className="text-[24px] md:text-3xl leading-[36px] md:leading-[40px] text-black font-bold group-hover:text-white transition-all duration-300">
            Spiritual Depo
          </h2>
          <p className="text-base md:text-lg leading-[32px] text-black font-medium group-hover:text-white transition-all duration-300">
            Explore the depths of spirituality with 'Spiritual Depo', a
            comprehensive web-based library management system meticulously
            designed to offer users a profound journey into holy texts. With an
            intuitive interface crafted using HTML, CSS, and Bootstrap, users
            can seamlessly navigate through a diverse collection of sacred
            books. Powered by JavaScript, PHP, and MySQL, 'Spiritual Depo'
            empowers users to register, log in, and securely manage their
            accounts. Dive into the essence of spirituality by accessing holy
            books.
          </p>
        </div>
      </section>
    </section>
  );
};

export default OtherProject;
