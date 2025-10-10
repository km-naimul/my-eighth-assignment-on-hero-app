import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import downImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import iconImg from "../../assets/icon-review.png";
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useLoaderData();
  const appId = parseInt(id);
  const oneApp = data.find((app) => app.appId === appId);

  if (!oneApp)
    return (
      <div className="text-center py-20 text-gray-500">
        <h2 className="text-2xl font-bold">App not found!</h2>
      </div>
    );

  const { image, title, ratingAvg, downloads, size, companyName, reviews, description, ratings } =
    oneApp;

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const isAlreadyInstalled = installedApps.find((a) => a.appId === oneApp.appId);

    if (!isAlreadyInstalled) {
      installedApps.push(oneApp);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));

      toast.success(`${title} is now install!`, {
        position: "top-right",
        autoClose: 2000,
      });

      setTimeout(() => navigate("/installation"), 2500);
    } else {
      toast.warning(`${title} is allready installed!`, {
        position: "top-right",
        autoClose: 2000,
      });

      setTimeout(() => navigate("/installation"), 2500);
    }
  };

  return (
    <div className="bg-base-300 min-h-screen px-10 py-10">
      <div className="flex flex-col md:flex-row gap-8 items-center p-8">
        <img src={image} alt={title} className="h-60 w-60 rounded-xl" />

        <div>
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-gray-600 mb-4">
            Developed by <span className="text-purple-600 font-semibold">{companyName}</span>
          </p>

          <hr className="w-full border-t-2 border-gray-300 my-4" />

          <div className="flex flex-wrap gap-10 mb-6 text-sm">
            <div className="text-center">
              <img src={downImg} alt="downloads" className="w-6 h-6 mx-auto" />
              <h1 className="py-2">Downloads</h1>
              <p className="font-extrabold text-2xl">{downloads}</p>
            </div>
            <div className="text-center">
              <img src={ratingImg} alt="rating" className="w-6 h-6 mx-auto" />
              <h1 className="py-2">Average Rating</h1>
              <p className="font-extrabold text-2xl">{ratingAvg}</p>
            </div>
            <div className="text-center">
              <img src={iconImg} alt="reviews" className="w-6 h-6 mx-auto" />
              <h1 className="py-2">Total Reviews</h1>
              <p className="font-extrabold text-2xl">{reviews}</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            className="btn bg-purple-600 hover:bg-green-600 text-white px-6 rounded-lg py-2 transition duration-300"
          >
            Install App ({size}MB)
          </button>
        </div>
      </div>

      <hr className="w-full border-t-2 border-gray-300 my-6" />

      <div>
        <h1 className="text-xl font-bold mb-4">Ratings</h1>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={ratings}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 50, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8811" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <hr className="w-full border-t-2 border-gray-300 my-6" />
      <div>
        <h1 className="text-xl font-bold mb-2">Description</h1>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

     
      <ToastContainer />
    </div>
  );
};

export default AppDetails;
