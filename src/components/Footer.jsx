import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const { Starwhite, Linkdin, Insta, Twitter, scrollToTop } = useStore();
  const handleCLick = ()=>scrollToTop();
  return (
    <footer className="w-screen md:h-[30vh] bg-black flex flex-col justify-center md:justify-around items-center gap-8 md:gap-0 px-5 py-10 md:py-3">
      <section className="w-[80vw] flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-0 px-3 py-1">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <img src={Starwhite} alt="star icon" className="w-8 h-8" />
          <h2 className="text-2xl md:text-[1.8rem] text-white font-bold capitalize">
            Shivshankar Mishra
          </h2>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-7 list-none">
            <Link to={"/"} onClick={handleCLick}>
              <li className="relative list-item h-[25px] group">
                <span className="text-white font-semibold group-hover:text-orange-600">
                  Home
                </span>
                <div className="absolute bottom-[1px] w-[100%] h-[1.5px] group-hover:bg-white" />
              </li>
            </Link>
            <Link to={"/about"} onClick={handleCLick}>
              <li className="relative list-item h-[25px] group">
                <span className="text-white font-semibold group-hover:text-orange-600">
                  About
                </span>
                <div className="absolute bottom-[1px] w-[100%] h-[1.5px] group-hover:bg-white" />
              </li>
            </Link>
            <Link to={"/projects"} onClick={handleCLick}>
              <li className="relative list-item h-[25px] group">
                <span className="text-white font-semibold group-hover:text-orange-600">
                  Projects
                </span>
                <div className="absolute bottom-[1px] w-[100%] h-[1.5px] group-hover:bg-white" />
              </li>
            </Link>
            <Link to={"/contact"} onClick={handleCLick}>
              <li className="relative list-item h-[25px] group">
                <span className="text-white font-semibold group-hover:text-orange-600">
                  Contact
                </span>
                <div className="absolute bottom-[1px] w-[100%] h-[1.5px] group-hover:bg-white" />
              </li>
            </Link>
          </ul>
        </div>
      </section>
      <section className="w-[90vw] md:w-[80vw] flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-0 px-3 py-1">
        <div className="flex flex-col justify-center md:items-start gap-1 md:gap-2">
          <p className="text-sm text-[#f2f1ef] text-center">
            &copy;Made by Shivshankar Mishra <br className="md:hidden"/>(Full Stack Developer)
          </p>
          <a
            href="mailto:shivmishankar@gmail.com"
            className="text-sm text-center text-[#f2f1ef] hover:text-orange-600 hover:underline pointer transition-all duration-300"
          >
            shivmishankar@gmail.com
          </a>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 order-first md:order-last">
          <a
            href="https://www.linkedin.com/in/shivshankar-mishra-4b117a251/"
            className="flex flex-row justify-center items-center group transition-all duration-300"
          >
            <div className="w-10 h-10 bg-transparent border-[1px] flex flex-row justify-center items-center border-[#969186] rounded-full group-hover:scale-125 transition-all duration-300">
              <img src={Linkdin} alt="linkedin icon" className="w-8" />
            </div>
          </a>
          <a
            href="https://x.com/shivmishankar?t=g0qmxH-NbXig-ETUOUIKSA&s=09"
            className="flex flex-row justify-center items-center group transition-all duration-300"
          >
            <div className="w-10 h-10 bg-transparent border-[1px] flex flex-row justify-center items-center border-[#969186] rounded-full group-hover:scale-125 transition-all duration-300">
              <img src={Twitter} alt="linkedin icon" className="" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/__shiv_mishra?igsh=MXBpZnA5Mzh0ZzMwaw=="
            className="flex flex-row justify-center items-center group transition-all duration-300"
          >
            <div className="w-10 h-10 bg-transparent border-[1px] flex flex-row justify-center items-center border-[#969186] rounded-full group-hover:scale-125 transition-all duration-300">
              <img src={Insta} alt="linkedin icon" className="w-8" />
            </div>
          </a>
          <a
            href="https://github.com/Shivshankar-Mishra"
            className="flex flex-row justify-center items-center group transition-all duration-300"
          >
            <div className="w-10 h-10 bg-transparent border-[1px] flex flex-row justify-center items-center border-[#969186] rounded-full group-hover:scale-125 transition-all duration-300">
              <FaGithub className="text-2xl text-[#bdb8ad]" />
            </div>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
