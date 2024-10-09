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
      name: "Spotify Clone",
      img: ProjectImage1,
      link: "https://kalsi-spotify.vercel.app/",
    },
    {
      id: 2,
      name: "E-Comerce Landing Page",
      img: ProjectImage2,
      link: "https://kalsi-mart.vercel.app/",
    },
    {
      id: 3,
      name: "News Melody",
      img: ProjectImage3,
      link: "https://github.com/gouravkalsi/NEWS-MELODY",
    },
    {
      id: 4,
      name: "Kalsi Recipes",
      img: ProjectImage4,
      link: "https://kalsi-recipe.vercel.app/",
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
            <div className={`grid medium:grid-cols-2 gap-y-10 gap-x-10 overflow-hidden duration-500 ease-in-out mt-10`}>
              {websites.map((website) => (
                <a href={website.link} className="w-full cursor-pointer relative" key={website.id}>
                  <div className="w-full rounded-md overflow-hidden">
                    <img src={website.img} className="w-full h-[80%] object-cover" alt="" />
                    <div className="w-full bg-[#000000bb] absolute bottom-0 left-[50%] translate-x-[-50%] py-2">
                      <h2 className="font-semibold medium:text-2xl text-xl w-full textGradient">{website.name}</h2>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
