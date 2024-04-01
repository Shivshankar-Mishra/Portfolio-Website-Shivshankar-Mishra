import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../assets/css/navanimation.css";
import { useStore } from "../context/StoreContext";
const MenuOverlay = () => {
  const location = useLocation();
  const { setShowMenu } = useStore();
  const [menuAnimate, setMenuAnimate] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  useEffect(() => {
    setMenuAnimate(true);
  }, []);
  return (
    <section
      className={`absolute top-[12vh] z-30 w-screen h-[40vh] rounded-2xl bg-white flex md:hidden justify-center items-center py-5`}
    >
      <ul
        className={`flex flex-col justify-center items-center gap-3 list-none ${
          menuAnimate ? "menu" : ""
        }`}
      >
        <NavLink to={"/"} onClick={() => setShowMenu(false)}>
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
        <span className="w-[80vw] h-[2px] rounded-md bg-slate-300" />
        <NavLink to={"/about"} onClick={() => setShowMenu(false)}>
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
        <span className="w-[80vw] h-[2px] rounded-md bg-slate-300" />
        <NavLink to={"/projects"} onClick={() => setShowMenu(false)}>
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
        <span className="w-[80vw] h-[2px] rounded-md bg-slate-300" />
        <NavLink to={"/contact"} onClick={() => setShowMenu(false)}>
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
        <span className="w-[80vw] h-[2px] rounded-md bg-slate-300" />
      </ul>
    </section>
  );
};

export default MenuOverlay;
