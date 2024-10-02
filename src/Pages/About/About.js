import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import vector from "../../Assets/Media/vector-6.png";
import profile from "../../Assets/Media/profile.png";
import elements from "../../Assets/Media/elements-2.png";
import signature from "../../Assets/Media/signature.png";
import styles from "./About.module.css";
import { FaLink } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaUserAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Education from "../../Components/Education/Education";
import Resume from "../../Assets/Resume_Gourav_Kalsi.pdf";
import { useLocation } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import Experience from "../../Components/Experience/Experience";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "React.js",
  "Tailwind CSS",
  "SCSS",
  "Bootstrap",
  "Git",
  "Github",
  "VS Code",
  "Canva",
  "Photoshop",
  "Figma",
]
export default function About() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/about") {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } else {
      setLoading(true);
    }
  }, [location.pathname]);
  return (
    <div className="md:flex w-full h-[100vh] overflow-hidden">
      <Sidebar />
      <div className="w-full h-full overflow-y-auto flex-shrink px-4 pt-[150px] pb-[100px] md:py-4">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="w-full flex lg3:flex-row flex-col justify-center lg3:gap-20 lg3:px-4 overflow-x-hidden">
              <div className="flex sm:flex-row flex-col justify-around gap-10 items-center border-b-2 border-gray-500 lg3:border-0 lg3:pb-0 pb-10 ">
                <div className="w-fit">
                  <div>
                    <p className="font-semibold italic text-xl">Nice to meet you!</p>
                    <p className="font-black text-3xl mt-4">WELCOME TO...</p>
                  </div>
                  <div className="w-[300px] relative">
                    <div className="w-full relative select-none rounded-full overflow-hidden">
                      <img src={elements} className="absolute w-[50px] -z-10 top-40 left-5" alt="" />
                      <img src={vector} className="absolute w-[100%] -z-10 -bottom-5 right-0" alt="" />
                      {/* profile***********************************************************  */}
                      <img src={profile} className="w-full" alt="" />
                    </div>
                    {
                    /* signature************************************************************************************************************************          */}
                    <img src={signature} className="absolute w-[60%] bottom-0 -right-20" alt="" />
                  </div>
                  <div className="mt-4">
                    <div className={styles.textGradient}>GOURAV KALSI</div>
                    <div className="text-center">
                      <span className="font-black italic">Web Developer</span> based in <span className="font-black">India</span>
                    </div>
                  </div>
                </div>
                <div className="lg3:hidden sm:block small:grid grid-cols-2">
                  <div className="flex gap-2 items-center p-2">
                    <div className="w-[40px] h-[40px] bg-[#14131308] rounded-full flex justify-center items-center">
                      <FaPhoneAlt size="17" color="#141313" />
                    </div>
                    <div className="font-medium">+91 82199 35311</div>
                  </div>
                  <div className="flex gap-2 items-center p-2">
                    <div className="w-[40px] h-[40px] bg-[#14131308] rounded-full flex justify-center items-center">
                      <FaUserAlt size="17" color="#141313" />
                    </div>
                    <div className="font-medium">21 Yrs</div>
                  </div>
                  <div className="sm:flex hidden gap-2 items-center p-2">
                    <div className="w-[40px] h-[40px] bg-[#14131308] rounded-full flex justify-center items-center">
                      <FaEnvelope size="17" color="#141313" />
                    </div>
                    <div className="font-medium">kalsigourav86280@gmail.com</div>
                  </div>
                  <div className="flex gap-2 items-center p-2">
                    <div className="w-[40px] h-[40px] bg-[#14131308] rounded-full flex justify-center items-center">
                      <FaLocationDot size="17" color="#141313" />
                    </div>
                    <div className="font-medium">Himachal Pradesh, India</div>
                  </div>
                  {/* resume ********************************************************************************************************************************************************* */}
                  <a href={Resume} download="Resume_Gourav_kalsi" className="flex gap-2 items-center p-2">
                    <div className="w-[40px] h-[40px] bg-[#14131308] rounded-full flex justify-center items-center">
                      <FaLink size="17" color="#141313" />
                    </div>
                    <div className="font-medium">Download CV</div>
                  </a>
                  <div className="flex gap-2 items-center p-2 sm:hidden col-span-2">
                    <div className="w-[40px] h-[40px] bg-[#14131308] rounded-full flex justify-center items-center">
                      <FaEnvelope size="17" color="#141313" />
                    </div>
                    <div className="font-medium">kalsigourav86280@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className="w-full lg3:max-w-[600px]">
                <div className="flex-wrap pb-6 border-b-2 border-gray-500 lg3:flex hidden">
                  <div className="flex gap-2 items-center w-[50%] p-2">
                    <div className="w-[40px] h-[40px] bg-[#14131308] rounded-full flex justify-center items-center">
                      <FaPhoneAlt size="17" color="#141313" />
                    </div>
                    <div className="font-medium">+91 82199 35311</div>
                  </div>
                  <div className="flex gap-2 items-center w-[50%] p-2">
                    <div className="w-[40px] h-[40px] bg-[#14131308] rounded-full flex justify-center items-center">
                      <FaUserAlt size="17" color="#141313" />
                    </div>
                    <div className="font-medium">21 Yrs</div>
                  </div>
                  <div className="flex gap-2 items-center w-[50%] p-2">
                    <div className="w-[40px] h-[40px] bg-[#14131308] rounded-full flex justify-center items-center">
                      <FaEnvelope size="17" color="#141313" />
                    </div>
                    <div className="font-medium">kalsigourav86280@gmail.com</div>
                  </div>
                  <div className="flex gap-2 items-center w-[50%] p-2">
                    <div className="w-[40px] h-[40px] bg-[#14131308] rounded-full flex justify-center items-center">
                      <FaLocationDot size="17" color="#141313" />
                    </div>
                    <div className="font-medium">Himachal Pradesh, India</div>
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col justify-between items-center w-full lg3:py-6 p-10 lg3:border-b-2 border-0 border-gray-500 gap-y-10">
                  <div className="sm:w-[45%]">
                    <div className="flex justify-start items-center my-2">
                      <div className={styles.textGradient}>
                        <span className="text-4xl">Experience...</span>
                      </div>
                      
                    </div>
                    <div className="text-sm">
                      Hello there! My name is <span className="text-blue-900 font-semibold">Gourav Kalsi</span>. I'm a passionate and dedicated web and app developer with professional experience in creating successful projects. With the skills and knowledge I've gained, I can help bring your ideas to life and ensure your project is a success. Let's work together to create something great!
                    </div>
                  </div>
                  <div className="sm:w-[45%]">
                    <div className="flex justify-start items-center my-2">
                      <div className={styles.textGradient}>
                        <span className="text-4xl">Projects Devloped...</span>
                      </div>
                      
                    </div>
                    <div className="text-sm">I'm a experienced web and app developer, having successfully devloped  6+ web projects. My expertise includes HTML, CSS, Javascript, React.js, Tailwind CSS, SCSS, Bootstrap, Git, Github, VS Code, Canva, Photoshop,Figma.</div>
                  </div>
                </div>
                {/* resume*****************************************   */}
                <a href={Resume} download="Resume_Gourav_Kalsi" className="lg3:block hidden">
                  <div className="mt-6 flex gap-2 items-center font-semibold cursor-pointer justify-center">
                    <u>Download CV</u> <FaLink size={14} color="black" />
                  </div>
                </a>
              </div>
            </div>
            <div className="border-t-2 border-gray-500 lg3:mt-10 py-8">
              <div className="textGradient">
                <span className="text-4xl uppercase">Skills</span>
              </div>
              <div className="flex justify-center items-center gap-6 flex-wrap max-w-[600px] m-auto mt-10">
                {
                  skills.map((skill, i) => <div key={i} className="bg-gray-100 rounded-full px-6 py-1 text-black font-semibold">{skill}</div>)
                }
              </div>
            </div>
            <Education />
            <Experience />
          </>
        )}
      </div>
    </div>
  );
}
