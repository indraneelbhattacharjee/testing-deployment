import React from 'react';
import backgroundImage from './about-us.jpg'; // This is the path to the background image you've provided



  

export const About = () => {
  
  return (
    <>
    <div className="min-h-screen flex items-center justify-center" 
         style={{ 
           backgroundImage: `url(${backgroundImage})`,
           backgroundPosition: 'center',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat'
         }}>
      <div className="bg-black bg-opacity-20 p-8 rounded-lg max-w-screen-lg text-white">
        <h1 className="text-6xl font-bold underline mb-7">About Us</h1> 
        <h2 className="text-xl text-white">
          Bay Develops is a forward-thinking IT solutions startup with a core focus on providing
          software development and security solutions to startups and mid-sized enterprises.
          Their mission is to empower businesses by assisting them in building robust software
          infrastructures and ensuring top-tier security measures.
        </h2>
      </div>
    </div>







  
  </>
  
);
}

export default About;
