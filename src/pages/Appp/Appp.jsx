import React from "react";
import downImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";

const Appp = ({ singleApp }) => {
  const { image, title, downloads, ratingAvg } = singleApp;

  return (
    <div
      className="
        card bg-base-100 shadow-sm hover:shadow-md transition 
        w-full sm:w-[320px] md:w-[280px] lg:w-[300px] 
        mx-auto pt-5 px-5 rounded-xl cursor-pointer
      "
    >
     
      <figure>
        <img
          src={image}
          alt={title}
          className="
            rounded-md h-40 sm:h-44 md:h-48 w-full object-cover
            transition-transform duration-300 hover:scale-105
          "
        />
      </figure>

      
      <div className="card-body px-0 pb-5">
        <h2 className="card-title text-start pl-2">
          <div
            className="
              font-semibold text-[14px] sm:text-[15px] md:text-[16px] 
              text-gray-800 truncate
            "
          >
            {title}
          </div>
        </h2>

      
        <div className="card-actions flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 mt-3 px-0">
          
          <div
            className="
              flex items-center gap-2 bg-[#F1F5E8] text-[#00D390]
              px-3 py-1.5 rounded-md min-w-[110px] justify-center
              w-full sm:w-auto
            "
          >
            <img
              src={downImg}
              alt="downloads"
              className="w-4 sm:w-5 h-4 sm:h-5 object-contain"
            />
            <h1 className="text-sm sm:text-[15px] font-semibold leading-none">
              {downloads}
            </h1>
          </div>

          
          <div
            className="
              flex items-center gap-2 bg-[#FFF0E1] text-[#FF8811]
              px-3 py-1.5 rounded-md min-w-[110px] justify-center
              w-full sm:w-auto
            "
          >
            <img
              src={ratingImg}
              alt="rating"
              className="w-4 sm:w-5 h-4 sm:h-5 object-contain"
            />
            <h1 className="text-sm sm:text-[15px] font-semibold leading-none">
              {ratingAvg}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appp;
