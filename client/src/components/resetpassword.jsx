import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Snackbar } from '@mui/material';

export const ResetPassword = () => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if(!code || !password || !confirmPassword){
      setMessage("Please enter all the fields");
      setOpenSnackbar(true);
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setOpenSnackbar(true);
      return;
    }

    try {
      //await axios.post('https://localhost:8080/api/reset-password', { code, password });
      alert("Password reset successfully.");
      navigate('/login');
    } catch (error) {
      setMessage("Failed to reset password. Please try again.");
      console.error('Error resetting password:', error);
    } finally {
      setOpenSnackbar(true);
    }
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleResendCode = async () => {
    try {
      // Assuming email is stored or passed in another way since it's not in state
      //const response = await axios.post('https://localhost:8080/api/resend-code', { email: "stored or context email" });
      setMessage("Verification code sent again. Please check your email.");
    } catch (error) {
      setMessage("Failed to resend verification code. Please try again.");
      console.error('Error resending code:', error);
    } finally {
      setOpenSnackbar(true);
    }
  };

  return (
    <div className="flex flex-row h-screen bg-gray-100">
      {/* Logo Section */}
      <div className="flex w-1/2 bg-gray-100 justify-center items-center">
        <div className="text-center">
          <img src="./img/baydevelopslogo.svg" alt="Company Logo" className="mx-auto"/>
          <h1 className="m-0 relative font-bold mt-4">Network Infrastructure Solutions</h1>
          <p className="text-gray-600 mt-4">Everything you need in an one dashboard.</p>
        </div>
      </div>

      {/* Set New Password Form Section */}
      <div className="flex w-1/2 justify-center items-center bg-white p-12">
        <div className="max-w-fit w-full">
          <h2 className="text-3xl font-bold mb-2">Set New Password</h2>
          <form className="mt-8 space-y-6" onSubmit={handleResetPassword}>
          <div>
              <label htmlFor="reset-code" className="sr-only">Reset Code</label>
              <input 
                id="code" 
                name="reset-code" 
                type="password" 
                value={code}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-b-md" 
                placeholder="Enter Code"       
                onChange={(e) => setCode(e.target.value)}

              />
            </div>
            <div>
              <label htmlFor="new-password" className="sr-only">New Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-t-md" 
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input 
                id="confirmpassword" 
                name="confirm-password" 
                type="password" 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-b-md" 
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {message && <p className="mt-2 text-sm text-red-600">{message}</p>}
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Set New Password
              </button>
              <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message={message}
              />
            </div>
            <div className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium">
                <button 
                  type="button"
                  onClick={handleResendCode}  
                  className="font-medium text-indigo-600 hover:text-indigo-500">
                  Didn't receive an email? Resend
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;