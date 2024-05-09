import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { About } from "./components/About";
//import { About } from "./components/AppDevServicePage.js";

import { Contact } from "./components/Contact";
import { Landing } from "./components/landing";
import { useNavigate } from 'react-router-dom';

import { EmployeeLogin } from "./components/employee_login";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { EmployeeRegister } from "./components/employee_register";
import { TopNav } from "./components/TopNavbar";
import { SideNavDark } from "./components/sideNavDark";
import { ProfilePage } from "./components/ProfilePage";
import {ServicesPage} from "./components/ServicesPage";
import { ResetPassword } from "./components/resetpassword";
import { VerifyEmailPage } from "./components/VerifyEmailPage";
import {EMS} from "./components/ems";
import {UserDash} from "./components/UserDashboard.js";
import { UIUXDevServicePage } from "./components/UIUXDevServicePage";
import { WebDevServicePage } from "./components/WebDevServicePage";
import { AppDevServicePage } from "./components/AppDevServicePage";
import { SoftwareDevServicePage } from "./components/SoftwareDevServicePage";
import { PricingPage } from "./components/PricingPage";
import { CreditCardForm } from "./components/paymentPage";
//import ChatBot from 'react-simple-chatbot';
import { SideNav } from './components/updatesSidenav.jsx';
import { EmployeeContact } from './components/employee_contact';
import { EmployeeServicesPage } from './components/employee_services';
import { EmployeeAbout } from './components/employee_about';
import { EmployeeAppDevServicePage } from './components/employee_appDev';
import { EmployeeSoftwareDevServicePage } from './components/employee_software';
import { EmployeeUIUXDevServicePage } from './components/employee_uiux';
import { EmployeeWebDevServicePage } from './components/employee_webDev';
import { EmployeeCreditCardForm } from './components/employee_payment';
import { ContactSignedIn } from './components/ConctactSignedIn';
import { AboutSignedIn } from './components/AboutSignedIn';
import SmoothScroll from "smooth-scroll";
import "./index.css";
import { Chatbot } from './components/Chatbot.js';

/*export const scroll = new SmoothScroll('a[href*="#"]', {
/*export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});*/







//page routes:

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

function NavBarLogic() {
    const location = useLocation();

    const loggedInPaths = ['/user-dashboard', '/ems','/webDev-services','/uiux-services','/software-services','/appDev-services','/paymentPage','/profile','/employee_contact','/employee_services','/employee_about','/employee_appDev','/employee_software','/employee_uiux','/employee_webDev','/employee_payment','/contact-signedin','/about-signedin','/services'];
    const loggedOutPath = ['/login', '/employee_login'];

    const loggedIn = loggedInPaths.includes(location.pathname);
    const loggedOut = loggedOutPath.includes(location.pathname);

    if(loggedIn){
        setIsLoggedIn(true);
    }   

    if(loggedOut){
        setIsLoggedIn(false);
    }
};
  return (
    <Router>
    <NavBarLogic />
      {isLoggedIn ? (
                // If logged in, display side navigation bar
                <>
                </>
            ) : (
                // If logged out, display top navigation bar
                <>
                    <TopNav />
                </>
            )}
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path ="/uiux-services" element={<UIUXDevServicePage />} />     
        <Route path="/webDev-services" element={<WebDevServicePage />} /> 
      
        <Route path="/software-services" element={<SoftwareDevServicePage />} />  
        
        
        <Route path="/appDev-services" element ={<AppDevServicePage />} />
      
        <Route path="/login" element={<Login />} />
        <Route path="/employee_login" element={<EmployeeLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employee_register" element={<EmployeeRegister />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path ="/paymentPage" element={<CreditCardForm/>}/>
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/user-dashboard" element={<UserDash />} />
        <Route path="/ems" element={<EMS />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/employee_contact" element={<EmployeeContact />} />
        <Route path="/employee_services" element={<EmployeeServicesPage />} />
        <Route path="/employee_about" element={<EmployeeAbout />} />
        <Route path="/employee_appDev" element={<EmployeeAppDevServicePage />} />
        <Route path="/employee_software" element={<EmployeeSoftwareDevServicePage />} />
        <Route path="/employee_uiux" element={<EmployeeUIUXDevServicePage />} />
        <Route path="/employee_webDev" element={<EmployeeWebDevServicePage />} />
        <Route path="/employee_payment" element={<EmployeeCreditCardForm />} />
        <Route path="/contact-signedin" element={<ContactSignedIn />} />
        <Route path="/about-signedin" element={<AboutSignedIn />} />
        {/* Add other routes as needed */}
      </Routes>
      <Chatbot/>
    </Router>

  );
};

export default App;