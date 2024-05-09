import './Contact.css';
import img1 from './about-us.jpg';
import {Button} from "@mui/material";
import React from "react";
import { SideNavDark } from "./sideNavDark";

export const ContactSignedIn = (props) =>  {
  return (
  
    <div className='min-h-screen flex items-center justify-left' 
        style={{ 
           backgroundImage: `url(${img1})`,
           backgroundPosition: 'center',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat'
         }}>
      <div className="flex" style={{paddingRight: '200px'}}>
        <SideNavDark />
        <div className='px-20'>
          <div class='textOnImageContact'>
          <h2 className='text-white underline'>Contact Us</h2>
            <p id="descriptionContact">
                <form action="https://formsubmit.co/baydevelops@gmail.com" method="Post"> 
                    <label for="name">Enter Name </label>
                    <br></br>
                    <input class="fullName" type="text" name="name" required></input>
                    <br></br>
                    <label for="email">Enter Email </label>
                    <br></br>
                    <input class="email" type="email" name="email" required></input>
                    <br></br>
                    <legend class="messageHeader">Message</legend>
                    <textarea class="message" rows="4" cols="62" name="message" required></textarea>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_next" value="http://localhost:3000/contact-signedin"></input>
                <Button
                  className="self-stretch"
                  id="sendContact"
                  color="error"
                  size="large"
                  type="submit"
                  variant="contained">
                  Send
                </Button>
                </form>
            </p>
          </div>
        </div>
     </div>
    </div>
  );
}

export default ContactSignedIn;