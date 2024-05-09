import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const EmployeeLogin = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to store error messages
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error messages
    if (!email || !password) {
      setErrorMessage('Please provide both email and password.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/employee_login', {
        email,
        password,
      }, {
        withCredentials: true // Important: Include credentials with the request
      });
      // Assuming the backend sends a success status code for correct credentials
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        // Store the token in sessionStorage
        //sessionStorage.setItem('token', response.data.token);
        navigate('/ems'); 
      } else {
          // Handle the case where login is successful but no token is received
          setErrorMessage('Login was successful, but no token was received.');
        } 
    } catch (error) {
      const errorResponse = error.response;
      if (errorResponse && errorResponse.status === 400) {
        setErrorMessage('Login failed. Please check your email or password'); 
      } else if (errorResponse && errorResponse.status === 500) {
        setErrorMessage('Server error, please try again later.');
      } else {
        setErrorMessage('Login failed. Please check your email or password');
      }
      console.error('Login failed:', error.response || error);
    }
  };

  return (
    <div className="flex flex-row h-screen bg-gray-100">
      {/* Logo Section */}
      <div className="flex w-1/2 bg-gray-100 justify-center items-center">
        <div className="text-center">
          <img src="./img/baydevelopslogo.svg" alt="Company Logo" className="mx-auto"/>
          <h1 className="m-0 text-white relative font-bold mt-4 justify-end">Employee</h1>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="flex w-1/2 justify-center items-center bg-white p-12">
        <div className="max-w-fit w-full">
          <h2 className="text-3xl font-bold mb-2">Sign In to your Account</h2>
          {errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              {errorMessage}
            </div>
          )}
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="/verify-email" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
             <button type="sub" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign In
              </button>
              <a href="/employee_register" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Sign Up
              </a>
              <div>
              <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Not an Employee? Return to Login
              </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;