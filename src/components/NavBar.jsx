import { Link, NavLink, useLocation } from "react-router-dom";
import "../assets/css/navanimation.css";
import { useStore } from "../context/StoreContext";
import { RiMenu3Fill } from "react-icons/ri";
import Button from "./Button";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { Star1, showMenu, setShowMenu } = useStore();
  const [navAnimate, setnavAnimate] = useState(false);

  useEffect(() => {
    setnavAnimate(true);
  }, []);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const toggleMenuOverlay = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className={`w-screen h-[8vh] md:h-[12vh] navbar ${
        navAnimate ? "animate" : ""
      } font-bai-jamjuree flex flex-row justify-between items-center px-3 md:px-12 py-2`}
    >
      <Link to={"/"} className="flex flex-row justify-center items-center">
        <section className="flex flex-row justify-center items-center gap-3 md:px-4">
          <img src={Star1} alt="star icon" className="w-8 md:w-7" />
          <h1 className="text-xl md:text-3xl font-bold">Shivshankar Mishra</h1>
        </section>
      </Link>
      <section className=" md:w-1/2 flex flex-row justify-center items-center">
        <ul className="hidden md:flex flex-row justify-center items-center gap-7 list-none">
          <NavLink to={"/"}>
            <li className="relative list-item h-[25px] group">
              <span
                className={` font-semibold group-hover:text-orange-700 ${
                  activeLink == "/" ? "text-orange-600" : "text-black"
                }`}
              >
                Home
              </span>
              <div className="absolute bottom-[1px] w-[100%] h-[1.5px] group-hover:bg-black" />
            </li>
          </NavLink>
          <NavLink to={"/about"}>
            <li className="relative list-item h-[25px] group">
              <span
                className={`font-semibold group-hover:text-orange-700 ${
                  activeLink == "/about" ? "text-orange-600" : "text-black"
                } `}
              >
                About
              </span>
              <div className="absolute bottom-[1px] w-[100%] h-[1.5px] group-hover:bg-black" />
            </li>
          </NavLink>
          <NavLink to={"/projects"}>
            <li className="relative list-item h-[25px] group">
              <span
                className={`font-semibold group-hover:text-orange-700 ${
                  activeLink == "/projects" ? "text-orange-600" : "text-black"
                } `}
              >
                Projects
              </span>
              <div className="absolute bottom-[1px] w-[100%] h-[1.5px] group-hover:bg-black" />
            </li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li className="relative list-item h-[25px] group">
              <span
                className={`font-semibold group-hover:text-orange-700 ${
                  activeLink == "/contact" ? "text-orange-600" : "text-black"
                } `}
              >
                Contact
              </span>
              <div className="absolute bottom-[1px] w-[100%] h-[1.5px] group-hover:bg-black" />
            </li>
          </NavLink>
        </ul>
        <div className="flex md:hidden justify-center items-center">
          <RiMenu3Fill
            onClick={toggleMenuOverlay}
            className={`text-[2rem] ${
              showMenu ? "text-orange-600" : "text-black"
            } cursor-pointer transition-all duration-300`}
          />
        </div>
      </section>
      <section className="hidden w-1/4 md:flex flex-row justify-center items-center">
        <Link to="/contact">
          <Button
            wid="w-32"
            hgt="h-10"
            color="text-black"
            bgColor="bg-whte"
            border="outline outline-[1px] outline-black"
            hovers="hover:bg-black hover:text-white hover:underline"
            title="Let's Talk"
          />
        </Link>
      </section>
    </nav>
  );
};

export default NavBar;
