import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import ProjectImage1 from "../../Assets/Projects/01.png";
import ProjectImage2 from "../../Assets/Projects/02.png";
import ProjectImage3 from "../../Assets/Projects/03.png";
import ProjectImage4 from "../../Assets/Projects/04.png";
import { useLocation } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

export default function Works() {
  const [opened, setOpened] = useState(0);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const websites = [
    {
      id: 1,
      name: "spotify-clone",
      img: ProjectImage1,
      link: "https://spotify-clone-kappa-ivory.vercel.app/",
    },
    {
      id: 2,
      name: "E-Comerce-site",
      img: ProjectImage2,
      link: "https://e-comerce-website-gamma.vercel.app/",
    },
    {
      id: 3,
      name: "News-Melody",
      img: ProjectImage3,
      link: "https://news-melody.vercel.app/",
    },
    {
      id: 4,
      name: "Recipe-App",
      img: ProjectImage4,
      link: "https://recipe-gamma-three.vercel.app/",
    },
  ];
  
 
  useEffect(() => {
    if (location.pathname === "/works") {
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
          <div className="w-full px-4 m-auto max-w-[1080px]">
            <div className="textGradient">
              <span className="text-4xl uppercase">WORKS</span>
            </div>
            <div
              className="flex justify-between items-center border-b border-[#141313] p-3 my-4 cursor-pointer"
              onClick={() => {
                if (opened !== 0) setOpened(0);
                else setOpened(2);
              }}
            >
              <div className="flex items-center gap-5">
                <div className="w-[10px] h-[10px] rounded-full bg-black"></div>
                <div className="font-semibold medium:text-3xl text-2xl">WEBSITES</div>
              </div>
              <div>{opened === 0 ? <BiMinus size={30} color="black" /> : <BsPlusLg size={30} color="black" />}</div>
            </div>
            <div className={`grid medium:grid-cols-2 ${opened === 0 ? `medium:max-h-[1500px] max-h-[3000px]` : "max-h-0"} overflow-hidden duration-500 ease-in-out`}>
              {websites.map((website) => (
                <a href={website.link} className="w-full aspect-square p-2 cursor-pointer" key={website.id}>
                  <div className="w-full h-[350px] border border-black rounded-md overflow-hidden">
                  <img src={website.img} className="w-full h-[80%] object-cover" alt="" />
                  <h2 className="font-semibold medium:text-3xl text-2xl">{website.name}</h2>

                  </div>
                </a>
              ))}
            </div>
            <div
              className="flex justify-between items-center border-b border-[#141313] p-3 my-4 cursor-pointer"
              onClick={() => {
                if (opened !== 1) setOpened(1);
                else setOpened(2);
              }}
            >
              <div className="flex items-center gap-5">
                <div className="w-[10px] h-[10px] rounded-full bg-black"></div>
                <div className="font-semibold medium:text-3xl text-2xl">MOBILE APPS</div>
              </div>
              <div>{opened === 1 ? <BiMinus size={30} color="black" /> : <BsPlusLg size={30} color="black" />}</div>
            </div>
           
          </div>
        )}
      </div>
    </div>
  );
}
