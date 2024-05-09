import backgroundImage from './about-us.jpg'; 
import {Button} from "@mui/material";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SideNavDark } from "./sideNavDark";
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>

export const EmployeeSoftwareDevServicePage = () => {
  const navigate = useNavigate();

  // Define your service object
  const softwareDevService = {
    id: "softwareDev001",
    name: "Software Development",
    description: "Professional software development service for your business.",
    price: 99.99,
  };

  const saveToSessionStorage = (service) => {
    sessionStorage.setItem('service', JSON.stringify(service));
  };
  /*
  const goToPayment = () => {
    saveToSessionStorage(softwareDevService); // Save your service object before navigating
    navigate('/paymentPage');
  };
  */
  
  const goToPayment = () => {
    navigate(`/paymentPage?name=${encodeURIComponent(softwareDevService.name)}&price=${softwareDevService.price}`);
  };
  
  
  return (
    <div className="flex min-h-screen "
    style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <SideNavDark />
      <div className="flex-grow p-8 text-gray-800">
        <div className="max-w-4xl mx-auto text-white shadow-md rounded-lg p-6 space-y-6">
          <h1 className="text-3xl font-semibold pl-36">About Our Software Development Services </h1>
          <p className="pl-36">
            At Bay Develops, we offer a comprehensive range of software development services to 
            help businesses of all sizes create and maintain high-quality, reliable software solutions. 
            Our team of experienced and skilled developers can help you with everything from defining your 
            requirements and designing your software architecture to developing, testing, and deploying your 
            software.We understand that every business is different, so we take a personalized approach to every 
            software development project. We start by working with you to understand your unique needs and 
            goals. Then, we develop a custom plan to create a software solution that will help you achieve 
            your business objectives.
          </p>

          <h3 className="text-3xl text-white font-bold pl-36">We offer a wide range of software development services, including:</h3>
          <ul className="pl-36 list-disc ml-4">
            <li>Custom software development</li>
            <li>Web application development</li>
            <li>Mobile application development</li>
            <li>Desktop application development</li>
            <li>Cloud application development</li>
            <li>Enterprise software development</li>
            <li>DevOps consulting and implementation</li>
            <li>Software testing and quality assurance</li>
          </ul>
          

          <h3 className="text-3xl text-white font-bold pl-36">We also offer a variety of additional services, such as:</h3>
          <ul className="pl-36 list-disc ml-4">
            <li>Software maintenance and support</li>
            <li>Software integration</li>
            <li>Software migration</li>
            <li>Software training</li>
          </ul>
          <h3 className="text-3xl text-white font-bold pl-36">Why Choose Us for Your Software Development Needs?</h3>
          <p className="pl-36">
            Here are just a few reasons why you should choose Bay Develops for your software development needs:
          </p>

          <ul className="pl-36 list-disc ml-4">
            <li>We have a team of experienced and skilled developers who are passionate about their work.</li>
            <li>We offer a wide range of software development services to meet the needs of businesses of all sizes.</li>
            <li>We take a personalized approach to every project and work closely with our clients to understand their unique needs and goals.</li>
            <li>We use the latest technologies and best practices to develop software solutions that are secure, reliable, and easy to use.</li>
            <li>We offer a variety of support and maintenance services to ensure that your software is always running smoothly.</li>
          </ul>

          <h5 className="text-3xl font-semibold pl-36">
            If you are looking for a reliable and experienced software development company, contact us today. 
            We will be happy to discuss your needs and help you create a software solution that will help you 
            achieve your business objectives.
        </h5>

              <Button
                sx={{ width: 300, height: 35, mt: 2, ml: 35, mb: 2, fontSize: 10 }}
                className="self-stretch"
                color="error"
                name="Purchse Service"
                size="large"
                variant="contained"
                onClick={goToPayment}
              >
                Purchase Service
              </Button>
          </div>
      </div>
    </div>
  );
}

export default EmployeeSoftwareDevServicePage;
