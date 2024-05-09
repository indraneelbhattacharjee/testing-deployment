import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SideNavDark } from "./sideNavDark";

export const ProfilePage = () => {
    const [currentUsername, setCurrentUsername] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [currentEmail, setCurrentEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // State to store success message

    const navigate = useNavigate();


    const handleEmailSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        
        try {
            const response = await axios.post('http://localhost:8080/update-email', {
                currentEmail,
                newEmail
            });
            console.log(response.data);
            setSuccessMessage('Email updated successfully'); // Set success message
            setTimeout(() => {
                window.location.reload(); // Reload the page after a delay
            }, 2000); // Reload after 2 seconds
            navigate('/login');
        } catch (error) {
            console.error('Error updating email:', error);
            // Handle error responses
        }
    };

    const handleUsernameSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        
        try {
            const response = await axios.post('http://localhost:8080/update-username', {
                currentUsername,
                newUsername
            });
            console.log(response.data);
            setSuccessMessage('Username updated successfully'); // Set success message
            setTimeout(() => {
                window.location.reload(); // Reload the page after a delay
            }, 2000); // Reload after 2 seconds
            navigate('/login');
        } catch (error) {
            console.error('Error updating username:', error);
            // Handle error responses
        }
    };

    return (
        <div className='bg-gray-100 min-h-screen flex'>
            <SideNavDark />
            <div className='flex flex-1 justify-center items-start pt-16'>
                <div className='bg-red-500 w-full max-w-4xl mx-8 rounded-lg shadow-lg p-6'>
                    <h1 className="text-6xl text-white text-center mb-10">Profile Info</h1>
                    {/* Success message and form container */}
                    <div className="space-y-6">
                        {successMessage && (
                          <p className="bg-green-100 text-green-800 p-3 rounded">
                            {successMessage}
                          </p>
                        )}
                        {/* Email change form */}
                        <form onSubmit={handleEmailSubmit} className="space-y-4">
                            <div>
                                <label className="text-white block">Change Email*:</label>
                                <input
                                    className="w-full p-2 rounded-md text-black"
                                    type="email"
                                    placeholder='Enter Email'
                                    value={currentEmail}
                                    onChange={(e) => setCurrentEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-white block">Confirm Change*:</label>
                                <input
                                    className="w-full p-2 rounded-md text-black"
                                    type="email"
                                    placeholder='Confirm Email'
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <button type='submit' className='w-full bg-black text-white p-3 rounded-md'>Save Changes</button>
                        </form>
                        {/* Username change form */}
                        <form onSubmit={handleUsernameSubmit} className="space-y-4">
                            <div>
                                <label className="text-white block">Change Username*:</label>
                                <input
                                    className="w-full p-2 rounded-md text-black"
                                    type="text"
                                    placeholder='Current Username'
                                    value={currentUsername}
                                    onChange={(e) => setCurrentUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-white block">Confirm Change*:</label>
                                <input
                                    className="w-full p-2 rounded-md text-black"
                                    type="text"
                                    placeholder='New Username'
                                    value={newUsername}
                                    onChange={(e) => setNewUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <button type='submit' className='w-full bg-black text-white p-3 rounded-md'>Save Changes</button>
                        </form>
                    </div>
                    <button
                        onClick={() => navigate('/verify-email')}
                        className='mt-10 text-black text-lg underline'
                    >
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
