import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import errorImg from "../../assets/App-Error.png";

const ErrorAppPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
  }
      <Navbar />

    
      <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <img
          src={errorImg}
          alt="Error 404"
          className="w-[300px] h-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-500 mb-6 max-w-lg">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="btn bg-purple-600 hover:bg-purple-700 text-white"
        >
          Go Back Home
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ErrorAppPage;