import React from "react";
import downImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { Link } from "react-router-dom";

const AllApp = ({ TotalApp }) => {
  const { image, title, ratingAvg, downloads, appId } = TotalApp;

  return (
    <Link to={`/appDetails/${appId}`} className="no-underline">
      <div className="card bg-base-100 w-80 shadow-sm pt-5 px-5 mx-auto cursor-pointer hover:shadow-md transition">
        <figure>
          <img
            src={image}
            alt={title}
            className="rounded-md h-40 w-full object-cover"
          />
        </figure>

        <div className="card-body px-0 pb-5">
          <h2 className="card-title text-start pl-2">
            <div className="font-semibold text-[15px]">{title}</div>
          </h2>

          <div className="card-actions flex justify-between mt-3 px-0">
            <div className="flex items-center gap-2 bg-[#F1F5E8] text-[#00D390] px-3 py-1.5 rounded-md min-w-[110px] justify-center">
              <img src={downImg} alt="downloads" className="w-5 h-5" />
              <h1 className="text-sm font-semibold">{downloads}</h1>
            </div>

            <div className="flex items-center gap-2 bg-[#FFF0E1] text-[#FF8811] px-3 py-1.5 rounded-md min-w-[110px] justify-center">
              <img src={ratingImg} alt="rating" className="w-5 h-5" />
              <h1 className="text-sm font-semibold">{ratingAvg}</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllApp;
