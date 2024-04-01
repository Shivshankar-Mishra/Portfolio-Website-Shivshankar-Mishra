import { createContext, useContext, useState } from "react";
import Star1 from "../assets/images/star1.svg";
import Star2 from "../assets/images/star2.svg";
import Star3 from "../assets/images/star3.svg";
import Star4 from "../assets/images/star4.svg";
import Star5 from "../assets/images/star5.svg";
import ShivMimg from "../assets/images/ShivImg-BgRemoved-GrayScaled.png";
import Uximage from "../assets/images/uiuximage.png";
import WebDevimage from "../assets/images/webdevimage.jpeg";
import OtherWebDevImage from "../assets/images/otherwebdevimage.jpeg";
import Starwhite from "../assets/images/starwhite.svg";
import Linkdin from "../assets/images/linkdinicon.svg";
import Insta from "../assets/images/instagramicon.svg";
import Twitter from "../assets/images/twittericon.svg";
import TaskCanvas from "../assets/images/taskcanvas.png";
import Numpicker from "../assets/images/numpickergame.png";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [sliderWords, setSliderWords] = useState([
    "JAVA DEVELOPER",
    "DATA STRUCTURE",
    "SQL",
    "DESIGN",
    "DEVELOPMENT",
    "FRONTEND DEVELOPMENT",
    "BACKEND DEVELOPMENT",
    "FULL STACK DEVELOPMENT",
    "RESEARCH",
    "WIREFRAMING",
    "PROTOTYPING",
    "MOCKUPS",
    "DESIGN SPRINT",
    "PYTHON DEVELOPER",
    "MYSQL",
    "JAVASCRIPT",
    "REACT",
    "HIBERNATE",
    "SPRING FRAMEWORK",
    "JAVA DEVELOPER",
    "DATA STRUCTURE",
    "SQL",
    "DESIGN",
    "DEVELOPMENT",
    "FRONTEND DEVELOPMENT",
    "BACKEND DEVELOPMENT",
    "FULL STACK DEVELOPMENT",
    "RESEARCH",
    "WIREFRAMING",
    "PROTOTYPING",
    "MOCKUPS",
    "DESIGN SPRINT",
    "PYTHON DEVELOPER",
    "MYSQL",
    "JAVASCRIPT",
    "REACT",
    "HIBERNATE",
    "SPRING FRAMEWORK",
  ]);
  const [showMenu, setShowMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendEmail = (formData) => {
    const { name, email, subject, description } = formData;
    const emailContent = `
      <h2>Name: ${name}</h2>
      <p>Email: ${email}</p><br>
      <h4>Subject: ${subject}</h4>
      <p>Message: ${description}</p>
    `;

    window.Email.send({
      SecureToken : "a4e765ae-785a-4fac-8e3e-451283c42b15",
      To: "shivmishankar+portfolio@gmail.com",
      From: "shivmishankar@gmail.com",
      Subject: `Portfolio message from ${name}: ${subject}`,
      Body: emailContent,
    }).then(
      (message) => {
        alert("Your query submitted successfully. We will contact you as soon as possible!!!");
      },
      (error) => {
        alert("Something went wrong. Please try again later.");
      }
    );
  };
  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      description: "",
    });
  };


  return (
    <StoreContext.Provider
      value={{
        Star1,
        Star2,
        Star3,
        Star4,
        Star5,
        Starwhite,
        Uximage,
        WebDevimage,
        OtherWebDevImage,
        Linkdin,
        Insta,
        Twitter,
        ShivMimg,
        TaskCanvas,
        Numpicker,
        sliderWords,
        setSliderWords,
        scrollToTop,
        showMenu,
        setShowMenu,
        formData,
        handleChange,
        resetFormData,
        sendEmail,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
