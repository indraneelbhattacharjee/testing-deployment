import React from "react";
import { Link } from 'react-router-dom';

export const PricingPage = () => {
  return (
    <div className="flex flex-row">

      <div className="flex w-1/2 bg-gray-100 justify-center items-center">
        <div className="text-center">
          <img src="./img/baydevelopslogo.svg" alt="Company Logo" className="mx-auto"/>
          <h1 className="m-0 relative font-bold mt-4 justify-end text-white mt-4">Network Infrastructure Solutions</h1>
          <p className="text-white mt-4">Everything you need in one dashboard!</p>
        </div>


        
      </div>
      

      <div className="w-1/2 h-screen bg-additional-black flex flex-wrap justify-around items-start pt-8">
        <div className="w-[40%] mb-8 bg-black text-center text-xl text-white font-poppins p-6">
          <img className="w-full h-40 object-cover mb-4" alt="" src="img/web-development-1@2x.png" />
          <div className="font-semibold mb-4">
            <p className="m-0">Web</p>
            <p className="m-0">Development</p>
          </div>
          <b>$99.99</b>
        </div>

        <div className="w-[40%] mb-8 bg-black text-center text-xl text-white font-poppins p-6">
          <img className="w-full h-40 object-cover mb-4" alt="" src="img/software-development-1@2x.png" />
          <div className="font-semibold mb-4">
            <p className="m-0">Software</p>
            <p className="m-0">Development</p>
          </div>
          <b>$99.99</b>
        </div>

        <div className="w-[40%] bg-black text-center text-xl text-white font-poppins p-6">
          <img className="w-full h-40 object-cover mb-4" alt="" src="img/application-development-1@2x.png" />
          <div className="font-semibold mb-4">
            <p className="m-0">Application</p>
            <p className="m-0">Development</p>
          </div>
          <b>$99.99</b>
        </div>

        <div className="w-[40%] bg-black text-center text-xl text-white font-poppins p-6">
          <img className="w-full h-40 object-cover mb-4" alt="" src="img/uiux-development-1@2x.png" />
          <div className="font-semibold mb-4">
            <p className="m-0">UI/UX</p>
            <p className="m-0">Development</p>
          </div>
          <b>$99.99</b>
        </div>
        <Link to="/" className="relative leading-[160%]">Return to the Home Page</Link>
        <Link to="/login" className="relative leading-[160%]">Want to Learn More? Login.</Link>
      </div>
    </div>
  );
};

export default PricingPage;
