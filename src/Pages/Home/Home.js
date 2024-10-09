import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import vector1 from "../../Assets/Media/vector-1.png";
import vector2 from "../../Assets/Media/vector-2.png";
import vector3 from "../../Assets/Media/vector-3.png";
import vector4 from "../../Assets/Media/vector-4.png";
import vector5 from "../../Assets/Media/vector-5.png";
import profile from "../../Assets/Media/profile.png";
import star from '../../Assets/Media/star.png'
import elements from '../../Assets/Media/elements.png'
import { Link, useLocation } from "react-router-dom";
import Loader from '../../Components/Loader/Loader'

export default function Home() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
    else {
      setLoading(true);
    }
  }, [location.pathname]);
  return (
    <div className="md:flex w-full h-[100vh] overflow-hidden">
      <Sidebar />
      <div className="w-full h-full overflow-y-auto flex-shrink px-4 pt-[150px] pb-[100px] md:py-4">{
        loading ?
          <Loader /> :
          <div className="w-full md:min-h-full flex flex-wrap-reverse flex-row justify-center items-center gap-8 md:gap-y-20 gap-y-5">
            <div>
              <div className="tracking-wide md:text-6xl medium:text-5xl text-3xl uppercase relative lg2:text-left text-center w-fit medium:w-full m-auto">
                <img
                  src={vector1}
                  className="absolute -z-10 medium:w-[120px] w-[75px] -rotate-12 top-2 md:-left-4 medium:left-2 -left-7 select-none"
                  alt=""
                />
                My name <br className="lg2:block hidden" />
                is <br className="lg2:hidden block" /> <span className="font-black">Gourav</span> <br className="lg2:block hidden" />
                <span className="font-black">Kalsi<span className="lg2:inline-block hidden">...</span></span>
              </div>
              <div className="medium:my-4 my-3 medium:text-2xl text-xl lg2:text-left text-center">
                <span className="font-black italic">Web Developer</span> based in{" "}
                <span className="font-black">India</span>
              </div>
              <div className="lg2:mx-0 mx-auto w-fit">
                <Link to="/works"><button className="bg-[#141313] text-white px-7 py-2 md:my-8 medium:my-5 my-3 rounded-md hover:bg-white hover:text-black duration-300 ease-in-out border-2 border-black shadow-md">
                  My Portfolio
                </button></Link>
              </div>
              <div className="flex gap-4 md:mt-0 mt-3 flex-wrap justify-center">
                <div className="flex gap-2 items-center">
                  <div className="w-[40px] h-[40px] bg-[#14131308] rounded-full flex justify-center items-center">
                    <FaPhoneAlt size="17" color="#141313" />
                  </div>
                  <div className="font-medium">+91 82199 35311</div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-[40px] h-[40px] bg-[#14131308] rounded-full flex justify-center items-center">
                    <FaEnvelope size="17" color="#141313" />
                  </div>
                  <div className="font-medium">kalsi.gourav2003@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="md:w-[400px] w-[300px] aspect-square relative select-none smallest:block hidden scale-75 ">
              <img
                src={vector2}
                className="absolute w-[50%] md:top-24 top-[5.3rem] left-10 -z-10 md:rotate-6 rotate-[8deg] mt-[130px]"
                alt=""
              />
              <img
                src={vector3}
                className="absolute w-[75%] md:top-[90px] top-[66px] md:left-14 left-12 md:rotate-6 rotate-[8deg] mt-[130px]"
                alt=""
              />
              <img
                src={vector4}
                className="absolute w-[85%] md:top-[158px] top-[170px] md:left-8 left-[27px] md:rotate-6 rotate-[8deg] mt-[130px]"
                alt=""
              />
              <img
                src={vector5}
                className="absolute w-[50%] md:top-[289px] top-[219px] -z-10 md:left-48 left-36 md:rotate-6 rotate-[8deg] mt-[130px]"
                alt=""
              />
              <img
                src={star}
                className="absolute md:w-[18px] w-[14px] top-10 right-[25%] mt-[130px]"
                alt=""
              />
              <img
                src={elements}
                className="absolute md:w-[50px] mt-4w-[32px] bottom-0 right-4 mt-[130px]"
                alt=""
              />
              <img
                src={star}
                className="absolute md:w-[18px] w-[14px] bottom-[30%] left-[5%] mt-[130px]"
                alt=""
              />

              <div />
              <img src={profile} className="w-full " alt="" />
            </div>
          </div>
      }
      </div>
    </div>
  );
}
