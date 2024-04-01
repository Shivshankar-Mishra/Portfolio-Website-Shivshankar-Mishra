import { useStore } from "../context/StoreContext";
import "../assets/css/animation.css";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../firebase/config";
import Button from "./Button";
import { useRef } from "react";
import useInViewport from "./useInViewPort";

const Form = () => {
  const { Star1, formData, handleChange, resetFormData, sendEmail } =
    useStore();
  const sectionRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const db = getFirestore(app);
      await addDoc(collection(db, "queries"), formData);
      sendEmail(formData);
      resetFormData();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`w-screen bg-white flex flex-col justify-center items-center gap-[4rem] mt-5 md:mt-0 px-14 py-[10%] md:py-[3%] bottomToTop ${
        useInViewport(sectionRef) ? "topAnimate" : ""
      }`}
    >
      <section className="w-[90vw] flex flex-col justify-center items-center gap-5">
        <img src={Star1} alt="star icon"></img>
        <h1 className="text-[40px] text-center md:text-5xl leading-[50px] md:leading-[56px] text-black font-bold">
          Get in touch today!
        </h1>
        <h6 className="text-lg leading-8 text-center text-black font-medium">
          If you have any query, suggestions or questions feel free to ask.
        </h6>
      </section>
      <section className="w-[90vw] flex flex-row justify-center items-center">
        <form
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-5 mb-10"
        >
          <div className="flex flex-col justify-center items-start gap-2">
            <label htmlFor="name" className="text-base text-black font-bold">
              Name<span className="text-base text-orange-600 font-bold">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-[75vw] md:w-[35vw] h-12 bg-transparent border-2 border-black px-4 py-3 text-sm text-[#333333] focus-within:border-none"
              required
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-2">
            <label htmlFor="subject" className="text-base text-black font-bold">
              Subject
              <span className="text-base text-orange-600 font-bold">*</span>
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-[75vw] md:w-[35vw] h-12 bg-transparent border-2 border-black px-4 py-3 text-sm text-[#333333] focus-within:border-none"
              required
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-2">
            <label
              htmlFor="workmail"
              className="text-base text-black font-bold"
            >
              Work Mail
              <span className="text-base text-orange-600 font-bold">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="workmail"
              value={formData.email}
              onChange={handleChange}
              className="w-[75vw] md:w-[35vw] h-12 bg-transparent border-2 border-black px-4 py-3 text-sm text-[#333333] focus-within:border-none"
              required
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-2">
            <label
              htmlFor="description"
              className="text-base text-black font-bold"
            >
              Description
              <span className="text-base text-orange-600 font-bold">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              maxLength="5000"
              placeholder="type your description here..."
              className="w-[75vw] md:w-[35vw] h-16 bg-transparent border-2 border-black px-4 py-3 text-sm text-[#333333] focus-within:border-none"
              required
            ></textarea>
          </div>
          <div className="flex flex-row justify-center items-center mt-5">
            <Button
              type="submit"
              wid="w-[186px]"
              hgt="h-[60px]"
              color="text-white text-lg"
              bgColor="bg-[#e94d35]"
              border="border-none"
              hovers="hover:text-black hover:underline hover:bg-white hover:outline hover:outline-2 hover:outline-black"
              title="Submit Now"
            />
          </div>
        </form>
      </section>
    </section>
  );
};

export default Form;
