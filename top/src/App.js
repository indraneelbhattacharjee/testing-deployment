import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import React ,{useState} from 'react';
import DropdownComponent from './productsdown';


// import {  } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  const logoSrc = `${process.env.PUBLIC_URL}/logoo.png`;
  return (

    <div className='flex_container' >
        <div >
          
        <img className='logo_image' src={logoSrc} alt="" />
        </div>
        <div className='bar'>
          <div className='bar_points'>
          Home   
          </div>
          <div className='bar_points'>
            About us 
          </div>
          <div className='bar_points'> 
            Our Service 
          </div>
          <div className='bar_points'>
          <DropdownComponent/> 
          </div>
        </div>
        <div className='log_in'>
          <button className='button'>Login </button>

        </div>

        </div>
        
          );
}

export default App;