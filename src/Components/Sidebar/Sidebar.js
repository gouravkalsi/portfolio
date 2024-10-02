import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithubAlt, FaInstagram } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Resume from "../../Assets/Resume_Gourav_Kalsi.pdf";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Sidebar() {
  const location = useLocation();
  const [sideBarOpened, setSideBarOpened] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if(width >= 768){
      setSideBarOpened(true);
    }
    else{
      setSideBarOpened(false);
    }
  }, [width])
  return (
    <>
      <div className="w-full px-8 py-0 bg-[#141313] text-white text-center md:hidden absolute top-0 left-0 z-50 h-[100px]">
        <div className="w-full h-full relative flex justify-center items-center">
          <div className="ibm-plex-serif text-2xl">Kalsi...</div>
          <div className="w-fit absolute left-[20px] top-[50%] translate-y-[-50%]" onClick={() => setSideBarOpened((sideBarOpened) => !sideBarOpened)}>
            <GiHamburgerMenu color="#fff" size={25} />
          </div>
        </div>
      </div>
      <div className={`bg-[#141313] text-white ${sideBarOpened ? "w-[250px]" : "w-0"} md:h-[100vh] h-[calc(100vh-100px)] overflow-y-auto md:relative absolute left-0 top-[100px] md:top-0 z-50 ${width <= 768 ? 'duration-300' : 'duration-0'}`}>
        <div className="px-8 py-10 flex flex-col justify-between w-full h-full">
          <div className="ibm-plex-serif text-2xl hidden md:block">Kalsi...</div>
          <div className="text-lg flex flex-col md:gap-4 gap-8 my-8">
            <Link to="/" className={`text-[#bbbbbb] ${location.pathname === "/" && "text-white font-semibold"} cursor-pointer duration-300 hover:text-white ease-in-out relative w-fit`}>
              <span>HOME</span>
              {location.pathname === "/" && <div className="w-full absolute h-[2px] bg-yellow-400"></div>}
            </Link>
            <Link to="/about" className={`text-[#bbbbbb] ${location.pathname === "/about" && "text-white font-semibold"} cursor-pointer duration-300 hover:text-white ease-in-out relative w-fit`}>
              <span>ABOUT</span>
              {location.pathname === "/about" && <div className="w-full absolute h-[2px] bg-yellow-400"></div>}
            </Link>
            <Link to="/works" className={`text-[#bbbbbb] ${location.pathname === "/works" && "text-white font-semibold"} cursor-pointer duration-300 hover:text-white ease-in-out relative w-fit`}>
              <span>WORKS</span>
              {location.pathname === "/works" && <div className="w-full absolute h-[2px] bg-yellow-400"></div>}
            </Link>
            <a href={Resume} download="Resume_Gourav_Kalsi">
              <div className="text-[#bbbbbb] cursor-pointer duration-300 hover:text-white ease-in-out relative w-fit">
                <span>RESUME</span>
                {/* <div className="w-full absolute h-[2px] bg-yellow-400"></div> */}
              </div>
            </a>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div className="border-2 border-white text-white hover:text-black hover:bg-white duration-300 ease-in-out cursor-pointer flex justify-center items-center rounded-full w-[40px] h-[40px]">
                <a href="https://www.linkedin.com/in/gourav-kalsi//">
                  <FaLinkedinIn size={18} />
                </a>
              </div>
              <div className="border-2 border-white text-white hover:text-black hover:bg-white duration-300 ease-in-out cursor-pointer flex justify-center items-center rounded-full w-[40px] h-[40px]">
                <a href="https://github.com/gouravkalsi">
                  <FaGithubAlt size={18} />
                </a>
              </div>
              <div className="border-2 border-white text-white hover:text-black hover:bg-white duration-300 ease-in-out cursor-pointer flex justify-center items-center rounded-full w-[40px] h-[40px]">
                <a href="https://instagram.com/kalsi_gourav11">
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
            <div className="text-sm text-[#dddddd] mt-4 line-clamp-2">Copyright ©2024 Gourav Kalsi. All right reserved.</div>
          </div>
        </div>
      </div>
    </>
  );
}
