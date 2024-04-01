import { useStore } from "../context/StoreContext";
import "../assets/css/animation.css";
import Certificates from "./Certificates";
import Connect from "./Connect";
import Education from "./Education";
import Form from "./Form";
import Skills from "./Skills";
import Slider from "./Slider";
import { useRef } from "react";
import useInViewport from "./useInViewPort";

const About = () => {
  const { Star4, ShivMimg, Star5 } = useStore();
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  return (
    <section>
      <section
        ref={sectionRef}
        className={`w-screen flex flex-col justify-center items-center gap-20 mt-[6%] bottomToTop ${
          useInViewport(sectionRef) ? "topAnimate" : ""
        }`}
      >
        <section className=" w-[90vw] md:w-[75vw] flex flex-col justify-center items-center gap-10">
          <h1 className="w-[90vw] md:w-[60vw] text-center text-[36px] md:text-5xl leading-[50px] md:leading-[56px] text-black font-bold">
            Designing Tomorrow: Uniting UI/UX Elegance with Full Stack Expertise
          </h1>
          <div className=" flex flex-col md:flex-row justify-center items-center gap-3">
            <h1 className="text-2xl text-black font-bold">DESIGN</h1>
            <img src={Star4} alt="star icon" />
            <h1 className="text-2xl text-black font-bold">DEVELOPMENT</h1>
            <img src={Star4} alt="star icon" />
            <h1 className="text-2xl text-black font-bold">DATABASE</h1>
          </div>
        </section>
        <section className="relative w-[80vw] h-[40vh] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-white flex flex-row justify-center items-center shadow-lg shadow-orange-500">
          <img src={Star5} alt="star icon" className="w-[70%]" />
          <img
            src={ShivMimg}
            alt="shiv img"
            className="absolute w-[75%] md:w-[70%] -bottom-7"
          />
        </section>
        <section className="w-[90vw] md:w-[85vw] flex flex-col md:flex-row justify-center items-start gap-10">
          <p className="text-sm md:text-lg text-black font-medium leading-[24px] md:leading-8 tracking-wide">
            As a Java Full Stack Developer with a flair for UI/UX design, my
            portfolio is a testament to my versatility in the digital realm. My
            journey has led me to design and develop a diverse array of
            projects, from a user-centric payment app to a culturally enriching
            heritage website, ‘Spiritual Bharat’. Each project, whether it’s the
            ‘TaskCanvas’ web app with its innovative sticky card feature or the
            ‘Num-Picker Game’, is crafted with a commitment to both aesthetics
            and functionality. My technical proficiency spans a wide range of
            tools and languages including HTML, CSS, JavaScript, React.js, Java,
            and various frameworks like Hibernate and Spring Boot, complemented
            by a solid foundation in soft skills and an honors degree in
            Computer Science and Engineering.
          </p>
          <p className="text-sm md:text-lg text-black leading-[24px]  font-medium md:leading-8 tracking-wide">
            My designs, such as the intuitive interfaces for a blood donation
            app and a movie ticketing website, are guided by the principles of
            user experience learned through my Google UX Design training on
            Coursera. The development of ‘Spiritual Depo’, a library management
            website, showcases my ability to integrate front-end design with
            back-end databases seamlessly. Graduating in 2023, I bring the
            latest industry knowledge and a fresh perspective to every project,
            ready to tackle challenges and innovate solutions that push the
            boundaries of web technology.
          </p>
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
      <section className="w-screen overflow-hidden mt-[10vh] md:mt-[15vh] -skew-y-6 md:-skew-y-3">
        <Slider />
      </section>
      <Education />
      <Skills />
      <Certificates />
      <Form />
      <Connect />
    </section>
  );
};

export default About;
