/*import React from "react";
import ChatBot from 'react-simple-chatbot';
import { useNavigate } from "react-router-dom";
import "./chatbot.css";




export const Chatbot = () => {


    const navigate = useNavigate();

    const handleChatTrigger = (path) => {
        return () => {
          navigate(path);
        };
    }

    return (

<ChatBot
    steps={[
      {
        id: '1',
        message: 'Welcome to Bay Develops, what can we help you with today?',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Products', trigger: handleChatTrigger('/services') },
          { value: 2, label: 'Sign up!', trigger: handleChatTrigger('/register') },
          { value: 3, label: 'Learn about us', trigger: handleChatTrigger('/about') },
          { value: 4, label: 'Contact us', trigger: handleChatTrigger('/contact') },
          {value: 5, label: 'Close me', trigger: handleChatTrigger('')}
        ],
        
      },
      {
        id: '3',
        message: 'Redirecting...',
        trigger: () => handleChatTrigger,
        waitAction: true,
      },

    ]}
    />
    )
}
    
*/










////////////////////////////////////////////////////////////////////
















/*const navigate = useNavigate();

    const handleChatTrigger = (path) => {
        return () => {
          navigate(path);
        };
    }
*/
    






/*

import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { useNavigate } from "react-router-dom"




const steps = [
    {
        id: '0',
        message: 'Hello',
 
        // This calls the next id
        // i.e. id 1 in this case
        
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'What is your name?',
        //value: 1, label: 'Products', trigger: handleChatTrigger('/services'),

        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
 
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'Products' },
            { value: 2, label: 'Sign up!' },
            { value: 3, label: 'Learn about us' },
            { value: 4, label: 'Contact us' },
 
        ],
        end: true
    }
];
 
// Creating our own theme
const theme = {
    background: '#ffffff',
    headerBgColor: '#b63831',
    headerFontSize: '20px',
    botBubbleColor: '#b63831',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#b63831',
    userFontColor: 'white',
};
 
// Set some properties of the bot
const config = {
    botAvatar: "img.png",
    floating: true,
};
 
export const Chatbot = () => {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Bay bot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
        </div>
    );
}
 
export default Chatbot;



*/



import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { useNavigate } from "react-router-dom";

const steps = (navigate) => [
    {
        id: '0',
        message: 'Hello',
        trigger: '1',
    },
    {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
    },
    {
        id: '2',
        user: true,
        trigger: '3',
    },
    {
        id: '3',
        message: "Hi {previousValue}, how can I help you?",
        trigger: '4',
    },
    {
        id: '4',
        options: [
            { value: 1, label: 'Products', trigger: () => navigate('/services') },
            { value: 2, label: 'Sign up!', trigger: () => navigate('/register') },
            { value: 3, label: 'Learn about us', trigger: () => navigate('/about') },
            { value: 4, label: 'Contact us', trigger: () => navigate('/contact') },
        ],
        //end: true,
    },
];

const theme = {
    background: '#ffffff',
    headerBgColor: '#b63831',
    headerFontSize: '20px',
    botBubbleColor: '#b63831',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#b63831',
    userFontColor: 'white',
};

const config = {
    botAvatar: "img.png",
    floating: true,
};

export const Chatbot = () => {
    const navigate = useNavigate();  // Hook to handle navigation

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="Bay bot"
                    steps={steps(navigate)}  // Pass navigate to the steps
                    {...config}
                />
            </ThemeProvider>
        </div>
    );
}

export default Chatbot;
