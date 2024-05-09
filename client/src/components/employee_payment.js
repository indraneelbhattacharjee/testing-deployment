import React, { useState, useEffect } from 'react';
import mastercardLogo from '../paymentpage/Mastercard_logo.jpg';
import visaLogo from '../paymentpage/visa.webp';
import americanLogo from '../paymentpage/american.webp';
import discoverLogo from '../paymentpage/Discover-logo.png';
import {loadStripe} from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import { SideNavDark } from "./sideNavDark";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
export const EmployeeCreditCardForm = () => {
  const query = useQuery();
  const service = {
    name: query.get('name'),
    price: query.get('price')
  }
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    month: '01',
    year: new Date().getFullYear().toString(),
    code: '',
    country: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: ''
  });
  

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(20), (val, index) => currentYear + index);
    setFormData(formData => ({ ...formData, years }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "cardNumber") {
      // Remove non-digits and then add a space after every 4 digits
      let formattedValue = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
      setFormData({ ...formData, [name]: formattedValue });
    } else if (name === "code") {
      // Allow only numbers for the security code
      const formattedValue = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: formattedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateInput = () => {
    const cardNumberPattern = /^(\d{4}\s){3}\d{4}$/; 
    const emailPattern = /^[^@]+@\w+(\.\w+)+\w$/;
    const codePattern = /^\d{3,4}$/; // 3 or 4 digits for the card security code

    if (!cardNumberPattern.test(formData.cardNumber)) {
      alert("Card number must be 16 digits.");
      return false;
    }
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!codePattern.test(formData.code)) {
      alert("Security code must be 3 or 4 digits.");
      return false;
    }
    // Implement additional validation for other fields if necessary
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateInput()) {
      const stripe = await loadStripe("your_stripe_public_key");

      const body = {
        // purchase path here, use formData to send payment details
      };
      const headers = {
        "Content-Type": "application/json"
      };

      try {
        const response = await fetch("http://localhost:7000/api/create-checkout-session", {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body)
        });

        const session = await response.json();
        const result = await stripe.redirectToCheckout({
          sessionId: session.id
        });

        if (result.error) {
          alert(result.error.message);
        }
      } catch (error) {
        // Handle errors here
        console.error("Payment error:", error);
        alert("An error occurred during payment processing. Please try again.");
      }
    }
  };

  const makePayment = async ()=> {
    const stripe = await loadStripe ("pk_test_51OzLF8020fOUxg40TACR890Wmv5XOSnfOWsoRJhW9fYZdxvhFw6B0sk4SIRNUD0MD7KF1mJRbTey18KcA2NH3XSg005S9xe7lM");
  
    const body = {
      // purchase path here
    }
    const headers = {
        "Content-Type": "application/json"
    }
      const response = await fetch ("http://localhost:7000/api/create-checkout-session",{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
    })

    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id
    })

    if(result.error){
      console.log(result.error);
    }
}

return (
  <div className="bg-gray-100 min-h-screen py-12 flex items-center justify-left">
    <div className="sideNavBar">
        <SideNavDark />
    </div>
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow">
    {service.name && service.price && (
          <div className="mb-6 p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Service Details</h3>
            <p className="text-gray-600">Name: {service.name}</p>
            <p className="text-gray-600">Price: ${service.price}</p>
          </div>
        )}
      <div className="flex justify-between mb-4">
        <img src={mastercardLogo} alt="Mastercard" className="h-8" />
        <img src={visaLogo} alt="Visa" className="h-8" />
        <img src={americanLogo} alt="American Express" className="h-8" />
        <img src={discoverLogo} alt="Discover" className="h-8" />
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name on Card</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" maxLength="19" />
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="month" className="block text-sm font-medium text-gray-700">Card Expiration Month</label>
            <select id="month" name="month" value={formData.month} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              {Array.from(new Array(12), (x, i) => {
                const month = (i + 1).toString().padStart(2, '0');
                return <option key={month} value={month}>{month}</option>;
              })}
            </select>
          </div>
          <div className="w-1/2">
            <label htmlFor="year" className="block text-sm font-medium text-gray-700">Card Expiration Year</label>
            <select id="year" name="year" value={formData.year} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              {(formData.years || []).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="code" className="block text-sm font-medium text-gray-700">Card Security Code</label>
          <input type="password" id="code" name="code" value={formData.code} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" maxLength="4"/>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Pay
        </button>
      </form>
    </div>
  </div>
);
};

export default EmployeeCreditCardForm;