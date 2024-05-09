import React from "react";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { Chatbot } from "./Chatbot"

export const Landing = (props) => {
  return (
    <header id="header">
      <div class="main_div">
        <div class="image_div">
            <img class="div_image" src="./img/Landing.png" alt=""></img>
        </div>
        <div class="second_flex">
            <div class="main_text">
                Secure and Streamline
            </div>
            <div class="child_text">
                Export Network Solutions Tailored for Startup Success.
            </div>
            <div class="btn_div">
                <div> 
                <Button
                    sx={{ width: 204, height: 72, mx: 2, fontSize: 20 }}
                    color="error"
                    name="Get Started"
                    variant="contained"
                    component={Link}
                    to="/login"
                >
                    Get Started
                </Button>
                </div>


                <div>
                <Button
                    sx={{ width: 204, height: 72, mx: 2, fontSize: 20 }}
                    color="error"
                    name="Learn More"
                    variant="contained"
                    component={Link}
                    to="/about"
                >
                    Learn More
                </Button>
                </div>

            </div>

        </div>
    <Chatbot/>



    </div>
    <div class="footer">
        <div class="footer_main_div">
            <div class="flex_item1">
         <font> Bay</font>Develops 
                <div class="text_div">
                    Netwrok Infrastructure Solutions. Everything you need in one dashboard.
                </div>
            </div>

            <div class="flex_item2">
                Quick Links
                <div class="links_text">
                    <Link to="/about" className="[text-decoration:none] relative leading-[24px] text-[inherit]">About Us</Link>
                    <Link to="/contact" className="[text-decoration:none] relative leading-[24px] text-[inherit]">Contact Us</Link>
                    <Link to="/pricing" className="[text-decoration:none] relative leading-[24px] text-[inherit]">Pricing</Link>
                </div>
            </div>
            <div class="flex_item3">
                Contact Us
                <div class="links_text"><span>
                        info@baydevelops.com
                    </span>
                    <span>123 Main Street, Sacramento CA</span>

                
                <span>
                    123-456-789
                </span>
            </div>
        </div>
        </div>

    </div>
    
    </header>
  );
};
