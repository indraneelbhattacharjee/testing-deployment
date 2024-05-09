import backgroundImage from './about-us.jpg'; 
import { Button } from "@mui/material";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SideNavDark } from "./sideNavDark";
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>


export const UIUXDevServicePage = () => {
    const navigate = useNavigate();

    // Define your service object
    const uiuxDevService = {
      id: "uiuxDev001",
      name: "UI/UX Development",
      description: "Professional UI/UX development service for your business.",
      price: 99.99,
    };
  
    const saveToSessionStorage = (service) => {
      sessionStorage.setItem('service', JSON.stringify(service));
    };
    
    const goToPayment = () => {
      navigate(`/paymentPage?name=${encodeURIComponent(uiuxDevService.name)}&price=${uiuxDevService.price}`);
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
                    <h1 className="text-3xl font-semibold pl-36">About Our UI/UX Design Services</h1>
                    <p className="pl-36">
                        At Bay Develops, we offer a comprehensive range of UI/UX design services to help businesses of all sizes create and maintain user-friendly and visually, 
                        appealing digital products. Our team of experienced and skilled designers can help you with everything from understanding your user's needs and
                        designing wire-frames and prtotypes to creating high-fidelity mock-ups and implementing your final design.
                        We believe that good UI/UX design is essential for creating successful digital products. We take a user-centered approach to our design process,
                        ensuring that every decision we make is based on the needs and wants of your target users. We also use the latest design trends and technologies to 
                        create interfaces that are both visually appealing and easy to use.
                    </p>
                    <h3 className="text-3xl text-white font-bold pl-36">We offer a wide range of UI/UX design services, including:</h3>
                    <ul className="pl-36 list-disc ml-4">
                            <li>User research and analysis</li>
                            <li>Wireframing and prototyping</li>
                            <li>Visual design</li>
                            <li>Interaction design</li>
                            <li>Usability testing</li>
                            <li>Accessibility testing</li>
                            <li>Implementation support</li>
                        </ul>
                        <h3 className="text-3xl text-white font-bold pl-36">We also offer a variety of additional services, such as:</h3> 
                        <ul className="pl-36 list-disc ml-4">
                            <li>Brand indentity design</li>
                            <li>Content design</li>
                            <li>Icon design</li>
                            <li>Motion graphics design</li>
                            <li>Prototyping tools training</li>
                        </ul>
                        <h3 className="text-3xl text-white font-bold pl-36">Why Choose Us for Your UI/UX Design Needs?</h3>
                        <p className="pl-36">Here are just a few reasons why you should choose Bay Develops for your UI/UX design needs:
                        </p>

                        <ul className="pl-36 list-disc ml-4">
                            <li>We have a team of experienced and skilled developers who are passionate about creating user-friendly and visually appealing digital products.</li>
                            <li>We take a user-centered approach to our design process, ensuring that every decision we make is based on the needs and wants of your target 
                                users.</li>
                            <li>We use the latest design trends and technologies to create interfaces that are both visually appealing and easy to use.</li>
                            <li>We offer a wide range of UI/UX design services to meet the needs of businesses of all sizes.</li>
                            <li>We work closely with our clients at every stage of the design process to ensure that their needs are met and that they are happy with the final 
                                results.</li>
                        </ul>
                        <h5 className="text-3xl font-semibold pl-36">If you are looking for a reliable and experienced UI/UX design company, contact us today.
                        </h5>

                        <Button
                            sx={{ width: 300, height: 35, mt: 2, ml: 35, mb: 2, fontSize: 10 }}
                            className="self-stretch"
                            color="error"
                            name="Purchase Service"
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
};

export default UIUXDevServicePage;