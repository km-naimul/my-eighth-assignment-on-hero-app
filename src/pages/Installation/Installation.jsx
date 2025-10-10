import React, { useEffect, useState } from "react";
import downImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortType, setSortType] = useState(""); // ✅ sort type track করার জন্য

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);
  }, []);

  const handleUninstall = (appId) => {
    const remaining = installedApps.filter((app) => app.appId !== appId);
    setInstalledApps(remaining);
    localStorage.setItem("installedApps", JSON.stringify(remaining));
    toast.success("🗑️ App Uninstalled Successfully!", {
      position: "top-right",
      autoClose: 1200,
      theme: "colored",
    });
  };

  // ✅ Sorting Logic
  const handleSort = (type) => {
    let sorted = [...installedApps];

    if (type === "large") {
      sorted.sort((a, b) => b.size - a.size);
      toast.info("📦 Sorted: Large → Small", { autoClose: 1000 });
    } else if (type === "small") {
      sorted.sort((a, b) => a.size - b.size);
      toast.info("📦 Sorted: Small → Large", { autoClose: 1000 });
    } else if (type === "rating") {
      sorted.sort((a, b) => b.ratingAvg - a.ratingAvg);
      toast.info("⭐ Sorted: Highest Rated First", { autoClose: 1000 });
    }

    setInstalledApps(sorted);
    setSortType(type);
  };

  if (installedApps.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        <h2 className="text-2xl font-bold">No Installed Apps Found!</h2>
        <p>Install some apps from the All Apps page.</p>
      </div>
    );
  }

  return (
    <div className="bg-base-200 min-h-screen px-18 py-10">
     
      <div className="text-center mb-10">
        <h1 className="text-[40px] font-bold">Your Installed Apps</h1>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us.
        </p>
      </div>

      
      <div className="flex justify-between items-center mb-1">
        
        <h1 className="font-bold">{installedApps.length} Apps Found</h1>

        <div>
          <ul className="menu bg-base-200 rounded-box dropdown-top">
            <li>
              <details>
                <summary>Sort Options</summary>
                <ul>
                  <li>
                    <a onClick={() => handleSort("large")}>📦 Large to Small</a>
                  </li>
                  <li>
                    <a onClick={() => handleSort("small")}>📦 Small to Large</a>
                  </li>
                  <li>
                    <a onClick={() => handleSort("rating")}>⭐ Highest Rating</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {installedApps.map((app) => (
          <div
            key={app.appId}
            className="border-2 bg-white rounded-xl shadow p-2 flex justify-between items-center"
          >
            <div className="flex items-center gap-4">
              <img
                src={app.image}
                alt={app.title}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div>
                <h2 className="font-semibold text-lg">{app.title}</h2>
                <div className="flex gap-3 text-sm mt-1">
                  <div className="flex items-center gap-1 text-green-500">
                    <img src={downImg} alt="downloads" className="w-3 h-3" />{" "}
                    {app.downloads}
                  </div>
                  <div className="flex items-center gap-1 text-orange-500">
                    <img src={ratingImg} alt="rating" className="w-3 h-3" />{" "}
                    {app.ratingAvg}
                  </div>
                  <div>Size: {app.size}MB</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.appId)}
              className="btn bg-red-500 text-white hover:bg-red-600"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Installation;
