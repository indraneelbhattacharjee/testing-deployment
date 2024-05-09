import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Typography } from "@mui/material";
import "./user.scss";

// Define type for user data
interface UserData {
  name: string;
  profilePicture: string;
  // Add other properties as needed
}

const UserId = () => {
  // State variables to hold user profile data
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        // Make API call to fetch user data (replace 'apiEndpoint' with actual endpoint)
        const response = await axios.get<UserData>('apiEndpoint');
        // Update state with user data
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    // Call the fetchUserData function when the component mounts
    fetchUserData();
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="user-profile">
      {loading ? (
        <Typography>Loading...</Typography>
      ) : userData ? (
        <div className="avatar-container">
          <Avatar src={userData.profilePicture} alt="Profile Picture" />
          <Typography className='username'>{userData.name}</Typography>
          {/* Add other user data as needed */}
        </div>
      ) : (
        <div className="avatar-container">
          <Avatar src="" alt="Profile Picture" />
          <Typography className='username'>John Doe</Typography>
        </div>

      )}
    </div>
  );
};

export default UserId;
