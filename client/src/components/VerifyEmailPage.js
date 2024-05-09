// Content is another file that holds all the code to provide most of this page its elements

import { useState } from "react";
import { Link, navigate, useNavigate } from 'react-router-dom';
import { TextField, Button, Snackbar} from "@mui/material";
import axios from 'axios'; 

export const VerifyEmailPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleSendCode = async (e) => {
    e.preventDefault(); 

    if (!email) {
      setMessage("Please enter your email address.");
      setOpenSnackbar(true);
      return;
    }

    //temporary
    try{
      const response = await axios.post('http://localhost:8080/api/verify-email', { email });
      alert('You will receive a code in your email to reset your password.');
      navigate("/reset-password"); // Navigate only after successful post
    } catch (error) {
      console.error('Error sending verification code:', error);
      setMessage("Failed to send verification code. Please try again.");
      setOpenSnackbar(true);
    }
    }

    /*
    try {
      const response = await axios.post('http://localhost:8080/api/send-verification-code', { email });
      setMessage("If your email is in our database, you will receive a code to reset your password.");
      setOpenSnackbar(true);
      navigate("/reset-password"); // Navigate only after successful post
    } catch (error) {
      console.error('Error sending verification code:', error);
      setMessage("Failed to send verification code. Please try again.");
      setOpenSnackbar(true);
    }
  };
  */
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-additional-white">
      <div className="w-full max-w-lg p-4 bg-white shadow-md rounded-md">
        <form onSubmit={handleSendCode} className="flex flex-col items-center p-10 gap-6">
          <img
            className="w-40 h-32"
            loading="eager"
            alt="Vector girl"
            src="./img/Vector-girl.svg"
          />
          <div className="text-center">
            <h3 className="text-3xl font-bold text-greyscale-900">
              Verify your Email
            </h3>
            <h6 className="text-sm font-normal text-greyscale-500">
              Enter the email address associated with your account and we will send you a code to reset your password.
            </h6>
          </div>
          <TextField
            id= "email"
            label="Enter Email Address"
            placeholder="Enter your Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <img width="24px" height="24px" src="./img/mailicon.svg" alt="Mail Icon" />
              ),
            }}
            sx={{
              "& fieldset": { borderColor: "#e2e8f0" },
              "& .MuiInputBase-root": {
                height: "56px",
                borderRadius: "12px",
              },
              "& .MuiInputBase-input": { color: "#94a3b8" },
            }}
          />
          <Button
            type="submit"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              background: "#141416",
              borderRadius: "12px",
              "&:hover": { background: "#141416" },
              width: '100%',  // Make the button full width of the form
              height: 56,
            }}
          >
            Continue
          </Button>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            message={message}
          />
          <Link to="/login" className="text-sm">
            Back to Sign In
          </Link>
          <div className="text-sm text-center">
            Don't have an account? 
            <Link to="/register" className="ml-1">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
