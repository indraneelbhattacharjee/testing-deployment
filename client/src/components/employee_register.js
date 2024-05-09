import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

export const EmployeeRegister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const errors = [];
  
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
  
    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter.");
    }
  
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }
  
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number.");
    }
  
    return errors;
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); // Clear any existing error messages
    if (!email || !password || !confirmPassword) {
      setError('Please provide all the fields');
      return;
    }
    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return; // Stop the registration process
    }
    // Validate password strength
    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setError(passwordErrors.join("\n"));
      return;
    }

    try {
      const response = await fetch('https://localhost:8080/employee_register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password, 
        }),credentials: 'include', // Ensures cookies are included with the request
      });
      if (response.headers.get('Content-Type')?.includes('application/json')) {
        const data = await response.json();
        if (response.ok) {
          console.log('Registration successful:', data);
          alert('Registration successful! You will now be redirected to the login page.');
          navigate('/employee_login'); // Redirects to login page
        } else {
          setError(data.message || 'Registration failed. Please try again.');
        }
      } else {
        console.error('Non-JSON response received');
        setError('An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('An error occurred during registration. Please try again later.');
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

      {/* Registration Form Section */}
      <div className="flex w-1/2 justify-center items-center bg-white p-12">
        <div className="max-w-fit w-full">
          <h2 className="text-3xl font-bold mb-2">Create Employee Account</h2>
          <form className="mt-8 space-y-6" onSubmit={handleRegister}>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input 
                id="email" 
                name="email" 
                type="email"  
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-t-md"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input 
                id="confirm-password" 
                name="confirm-password" 
                type="password" 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Register
              </button>
            </div>
            <div className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                <Link to="/employee_login" className="[text-decoration:none] relative leading-[24px] text-[inherit]">Already Have an Account? Log In</Link>
                </a>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeRegister;
