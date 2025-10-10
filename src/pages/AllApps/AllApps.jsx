import React, { useEffect, useState } from "react";
import AllApp from "../AllApp/AllApp";

const AllApps = () => {
  const [totalApps, setTotalApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/appsDataAll.json")
      .then((res) => res.json())
      .then((data) => {
        setTotalApps(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load JSON:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="text-center text-lg text-gray-500 py-10">Loading Apps...</div>;
  if (!totalApps || totalApps.length === 0)
    return <div className="text-center text-lg text-red-500 py-10">No apps found!</div>;

  const filteredApps = totalApps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-base-200 min-h-screen px-10 py-10">
      <div className="text-center mb-10">
        <h1 className="text-[40px] font-bold">Our All Applications</h1>
        <p className="text-[15px] text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center mb-6 px-4">
        <h1 className="font-semibold">({filteredApps.length}) Apps Found</h1>
        <input
          type="search"
          placeholder="Search Apps"
          className="border px-3 py-1 rounded-md outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredApps.map((app) => (
          <AllApp key={app.appId} TotalApp={app} />
        ))}
      </div>
    </div>
  );
};

export default AllApps;
