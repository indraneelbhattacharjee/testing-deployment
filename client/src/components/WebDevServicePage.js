import backgroundImage from './about-us.jpg'; 
import {Button} from "@mui/material";
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { SideNavDark } from "./sideNavDark";
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>

export const WebDevServicePage = () => {
  const navigate = useNavigate();

  // Define your service object
  const webDevService = {
    id: "webdev001",
    name: "Web Development",
    description: "Professional web development service for your business.",
    price: 99.99,
  };

  const saveToSessionStorage = (service) => {
    sessionStorage.setItem('service', JSON.stringify(service));
  };
  
  const goToPayment = () => {
    navigate(`/paymentPage?name=${encodeURIComponent(webDevService.name)}&price=${webDevService.price}`);
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
          <h1 className="text-3xl font-semibold pl-36">About Our Web Development Services</h1>
          <p className="pl-36">
            At Bay Develops, we offer a comprehensive range of web development services to help businesses
            of all sizes create and maintain high-quality, user-friendly websites and web applications. 
            Our team of experienced and skilled developers can help you with everything from designing your
            website's layout and navigation to developing complex custom features and integration.
            We understand that every business is different, so we take a personalized approach to every web
            development project. We start by working with you to understand your unique needs and goals.
            Then, we develop a custom plan to create a website that will help you achieve your business
            objectives.
          </p>
          <h3 className="text-3xl text-white font-bold pl-36">We offer a wide range of web development services, including:</h3>
          <ul className="pl-36 list-disc ml-4">
            <li>Website design and development</li>
            <li>Web application development</li>
            <li>E-commerce development</li>
            <li>Content management system (CMS) development</li>
            <li>Custom web development</li>
            <li>Web hosting and maintenance</li>
          </ul>
          <h3 className="text-3xl text-white font-bold pl-36">We also offer a variety of additional services, such as:</h3>
          <ul className="pl-36 list-disc ml-4">
            <li>Search engine optimization (SEO)</li>
            <li>Pay-per-click (PPC) advertising</li>
            <li>Social media marketing</li>
            <li>Content creation</li>
          </ul>
          <h3 className="text-3xl text-white font-bold pl-36">Why Choose Us for Your Web Development Needs?</h3>
          <p className="pl-36">
            Here are just a few reasons why you should choose Bay Develops for your web development needs:
          </p> 
          <ul className="pl-36 list-disc ml-4">
              <li> We have a team of experienced and skilled developers who are passionate about their work.</li>
              <li>We offer a wide range of web development services to meet the needs of businesses of all sizes.</li>
              <li>We take a personalized approach to every project and work closely with our clients to understand their unique needs and goals.</li>
              <li>We use the latest technologies and best practices to create websites that are secure, fast, and easy to use.</li>
              <li>We offer a variety of support and maintenance services to ensure that your website is always running smoothly.</li>
          </ul>

          <h5 className="text-3xl font-semibold pl-36">
            If you are looking for a reliable and experienced web development company, contact us today.
            We will be happy to discuss your needs that will help you achieve your business objectives.
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

export default WebDevServicePage;