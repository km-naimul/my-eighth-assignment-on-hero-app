import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faAppStoreIos } from "@fortawesome/free-brands-svg-icons";
import bannerImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="bg-base-200">
      
      <div className="flex flex-col items-center text-center px-4 md:px-10 lg:px-20 pt-10">
        <h5 className="text-4xl md:text-6xl lg:text-[72px] font-bold">
          We Build
        </h5>
        <h5 className="text-4xl md:text-6xl lg:text-[72px] font-bold relative -top-2 md:-top-4">
          <a href="#" className="text-[#9F62F2]">
            Productive
          </a>{" "}
          Apps
        </h5>

        <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#627382] mt-3">
          At <span className="font-semibold text-[#9F62F2]">HERO.IO</span>, we craft innovative apps designed
          to make everyday life simpler, smarter, and more exciting.
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#627382]">
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

       
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <a
            href="https://play.google.com/store/games?device=windows&pli=1"
            className="flex items-center gap-2 font-semibold border border-[#D2D2D2] px-5 py-3 rounded-lg hover:bg-[#9F62F2] hover:text-white transition-all duration-300"
          >
            <FontAwesomeIcon icon={faGooglePlay} />
            Google Play
          </a>

          <a
            href="https://www.apple.com/app-store/"
            className="flex items-center gap-2 font-semibold border border-[#D2D2D2] px-5 py-3 rounded-lg hover:bg-[#9F62F2] hover:text-white transition-all duration-300"
          >
            <FontAwesomeIcon icon={faAppStoreIos} />
            App Store
          </a>
        </div>

       
        <div className="flex justify-center items-center mt-10">
          <img
            src={bannerImg}
            alt="Hero Banner"
            className="w-[90%] md:w-[70%] lg:w-[50%] max-w-[600px] object-contain"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full mt-10 py-10 px-4">
        <h3 className="text-2xl md:text-4xl lg:text-[48px] font-bold text-white text-center mb-10">
          Trusted by Millions, Built for You
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-white">
          
          <div>
            <h1 className="text-lg md:text-xl">Total Downloads</h1>
            <h3 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold">29.6M</h3>
            <h1 className="text-sm md:text-base opacity-80">21% more than last month</h1>
          </div>

          <div>
            <h1 className="text-lg md:text-xl">Total Reviews</h1>
            <h3 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold">906K</h3>
            <h1 className="text-sm md:text-base opacity-80">46% more than last month</h1>
          </div>

        
          <div>
            <h1 className="text-lg md:text-xl">Active Apps</h1>
            <h3 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold">132+</h3>
            <h1 className="text-sm md:text-base opacity-80">31 more will Launch</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
