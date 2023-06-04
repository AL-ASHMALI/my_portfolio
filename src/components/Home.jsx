import React from "react";
import HeroImage from "../pics/HeroImage.png";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            laekhjgflkajhsdlfkhjaslkjhbdflkhjagsldkhjfglakhjsgdlfhj,
            kgalshjdkgfiireuhrtkladsnjkfbgl;ahjkgedl;fhaedf
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardDoubleArrowRight size={30} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="My profile"
            className="object-contain w-60 mx-auto rounded-2xl md:w-1/2"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
