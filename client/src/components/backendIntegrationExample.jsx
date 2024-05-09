import React, { useEffect, useState } from 'react';
import axios from 'axios';



//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//Fetch User Profile Data:
const fetchUserProfile = async (userId) => {
  try {
    const response = await axios.get(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user profile data');
  }
};




//Displaying user profile data:
const UserProfile = ({ userId }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchUserProfile(userId)
      .then(data => setProfile(data))
      .catch(error => console.error(error));
  }, [userId]);

  return (
    <div>
      {profile ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          {/* Display more user details as needed */}
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};



//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//Fetch Product List:
const fetchProducts = async () => {
  try {
    const response = await axios.get('/api/products');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching product list');
  }
};


//Displaying product list:
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};



//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//Fetch Weather Data:
const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`/api/weather?city=${city}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};

//Displaying weather data:
const WeatherInfo = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather(city)
      .then(data => setWeather(data))
      .catch(error => console.error(error));
  }, [city]);

  return (
    <div>
      {weather ? (
        <div>
          <h2>Weather in {city}</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Condition: {weather.condition}</p>
          {/* Display more weather details as needed */}
        </div>
      ) : (
        <p>Loading weather information...</p>
      )}
    </div>
  );
};





//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//Fetch todo list
const Dashboard = () => {
  // State to hold todos
  const [todos, setTodos] = useState([]);
  // State to manage loading state
  const [loading, setLoading] = useState(true);
  // State to handle errors
  const [error, setError] = useState(null);

  // Fetch todos on component mount
  useEffect(() => {
    // Function to fetch todos
    const fetchTodos = async () => {
      try {
        // Fetch todos from backend
        const response = await axios.get('/api/dashboard');
        // Set todos in state
        setTodos(response.data);
        // Set loading to false once data is fetched
        setLoading(false);
      } catch (error) {
        // Set error state if there's an error
        setError(error.message);
        // Set loading to false in case of error
        setLoading(false);
      }
    };

    // Call fetchTodos function
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Display loading message if data is being fetched */}
      {loading && <p>Loading...</p>}
      {/* Display error message if there's an error */}
      {error && <p>Error: {error}</p>}
      {/* Display todos if there's no error and data is fetched */}
      {!loading && !error && (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.todo}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;








