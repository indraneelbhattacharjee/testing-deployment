require('dotenv').config();

const fs = require('fs');
const https = require('https');
const express = require('express');
const cookieParser = require('cookie-parser')
const { Pool } = require('pg');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth');
const app = express();
const nodemailer = require('nodemailer');
const PORT = 8080;

// CORS configuration: Allow requests from the frontend running on localhost:3000
// You can customize the cors options as per your requirements
app.use(cors({
    origin: function (origin, callback) {
        const allowedOrigins = ['http://localhost:3000', 'https://localhost:3000'];
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('CORS not allowed from this origin'));
        }
    },
    credentials: true,
    methods: ['POST', 'GET']
}));
  // Middleware to parse JSON bodies
app.use(express.json());

app.use(cookieParser());

// PostgreSQL database connection configuration
const pool = new Pool({
    user: 'postgres_user',
    host: 'technogaze.c722y6y2on6l.us-east-2.rds.amazonaws.com',
    database: 'technogaze',
    password: 'admin123',
    port: 5432, // Default PostgreSQL port
    ssl: {
        rejectUnauthorized: false // For SSL connections, if enabled
    }
});

// Test the database connection
pool.connect()
    .then(() => {
        console.log('Connected to the database');
        pool.query('SELECT NOW()', (err, res) => {
            if (err) {
                console.error('Error running query', err);
            } else {
                console.log('Current timestamp from the database:', res.rows[0].now);
            }
        });
    })
    .catch(err => console.error('Error connecting to the database:', err));

    
// Create a dashboard table if it doesn't exist
pool.query(`
    CREATE TABLE IF NOT EXISTS dashboard (
        todo TEXT NOT NULL
    )`
    , (err, res) => {
        if (err) {
            console.error('Error creating dashboard table:', err);
        } else {
            console.log('Dashboard table created or already exists');
        }
    });

// Middleware to parse JSON bodies
app.use(express.json());

// Route handler to insert a new task into the database (dashboard)
app.post('/api/dashboard/todo', async (req, res) => {
    const { todo } = req.body;
    try {
        await pool.query('INSERT INTO dashboard (todo) VALUES ($1)', [todo]);
        console.log('Todo inserted successfully');
        res.status(201).send('Todo inserted successfully');
    } catch (err) {
        console.error('Error inserting todo:', err);
        res.status(500).send('Error inserting todo');
    }
});


// Route handler to remove a todo item by text
app.delete('/api/dashboard/:todo', async (req, res) => {
    const { todo } = req.params;
    try {
        await pool.query('DELETE FROM dashboard WHERE todo = $1', [todo]);
        console.log('Todo removed successfully');
        res.send('Todo removed successfully');
    } catch (err) {
        console.error('Error removing todo:', err);
        res.status(500).send('Error removing todo');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//Users
pool.query(`
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
)`
, (err, res) => {
    if (err) {
        console.error('Error creating User table:', err);
    } else {
        console.log('User table created or already exists');
    }
});

//Employee
pool.query(`
    CREATE TABLE IF NOT EXISTS employee (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
)`
, (err, res) => {
    if (err) {
        console.error('Error creating User table:', err);
    } else {
        console.log('Employee table created or already exists');
    }
});

const bcrypt = require('bcrypt');

/*
// Route to get all users
app.get('/api/users', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users'); // Adjust SQL query as needed
      res.json(result.rows);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
    }
  });
*/


// Route handler for user registration
app.post('/post_register', async (req, res) => {

    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        const userExist = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userExist.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new user, including the username
        const newUser = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', 
                         [username, email, hashedPassword]);

        // Generate a token
        const userPayload = { email: newUser.email, id: newUser.id }; // Payload can be adjusted based on what you need
        
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not defined.");
            return res.status(400).json({ message: 'JWT_SECRET is not defined' });
        }
        
        token = jwt.sign(userPayload, process.env.JWT_SECRET, { expiresIn: 60*60 });
        res.cookie('jwt', token, { 
            httponly: true,
            maxAge: 60 * 60 * 1000,
            sameSite: 'None', // Important for cross-origin cookies
            secure: true // Important for cookies over HTTPS});
        });
        console.log(`Token for user ${userPayload.email} created: ${token}`);
        res.status(201).json({ message: 'User registered successfully.', token: token });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ message: 'Error registering user' });
    }
});

// Route handler for user login
app.post('/post_login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Retrieve user by email
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (user.rows.length == 0) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Check password
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }
        // Generate a token
        const userPayload = { id: user.rows[0].id, email: user.rows[0].email }; // Payload can be adjusted based on what you need
        
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not defined.");
            return res.status(400).json({ message: 'JWT_SECRET is not defined' });
        }
        token = jwt.sign(userPayload, process.env.JWT_SECRET), {expiresIn: '1h'}
        res.cookie('jwt', token, { 
            httponly: true,
            maxAge: 3600000, //1 hour
            sameSite: 'None', // Important for cross-origin cookies
            secure: true // Important for cookies over HTTPS});
        });
        console.log(`Token for user ${userPayload.email} created: ${token}`);
        res.status(200).json({message: "Logged in succesfully", token: token }); // Send the token to the client   
    } catch (err) {
        res.status(500).json({message : 'Error logging in'});
        console.error('Error logging in:', err);
    }
});
//Route Handler for Employee login
app.post('/employee_login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Retrieve user by email
        const employee = await pool.query('SELECT * FROM employee WHERE email = $1', [email]);
        if (employee.rows.length == 0) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Check password
        const validPassword = await bcrypt.compare(password, employee.rows[0].password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }
        // Generate a token
        const userPayload = { id: employee.rows[0].id, email: employee.rows[0].email }; // Payload can be adjusted based on what you need
        
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not defined.");
            return res.status(400).json({ message: 'JWT_SECRET is not defined' });
        }
        token = jwt.sign(userPayload, process.env.JWT_SECRET), {expiresIn: 60*60}
        res.cookie('jwt', token, { 
            httponly: true,
            maxAge: 60 * 60 * 1000,
            sameSite: 'None', // Important for cross-origin cookies
            secure: true // Important for cookies over HTTPS});
        });
        console.log(`Token for user ${userPayload.email} created: ${token}`);
        res.status(200).json({message: "Logged in succesfully", token: token }); // Send the token to the client   
    } catch (err) {
        res.status(500).json({message : 'Error logging in'});
        console.error('Error logging in:', err);
    }
});
// Route handler for user registration
app.post('/employee_register', async (req, res) => {

    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        const employeeExist = await pool.query('SELECT * FROM employee WHERE email = $1', [email]);
        if (employeeExist.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new user, including the username
        const newEmployee = await pool.query('INSERT INTO employee ( email, password) VALUES ($1, $2 )', 
                         [email, hashedPassword]);

        // Generate a token
        const userPayload = { email: newEmployee.email, id: newEmployee.id }; // Payload can be adjusted based on what you need
        
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not defined.");
            return res.status(400).json({ message: 'JWT_SECRET is not defined' });
        }
        
        token = jwt.sign(userPayload, process.env.JWT_SECRET, { expiresIn: 60*60 });
        res.cookie('jwt', token, { 
            httponly: true,
            maxAge: 60 * 60 * 1000,
            sameSite: 'None', // Important for cross-origin cookies
            secure: true // Important for cookies over HTTPS});
        });
        console.log(`Token for user ${userPayload.email} created: ${token}`);
        res.status(201).json({ message: 'User registered successfully.', token: token });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ message: 'Error registering user' });
    }
});

app.post('/logout', (req, res) => {
    res.clearCookie('jwt', { sameSite: 'None', secure: true }); // Adjust attributes as necessary
    res.status(200).json({ message: 'Logged out successfully' });
  });

app.post('/api/verify-email', (req, res) => {
    const { email } = req.body;
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set the token in a secure, httpOnly cookie
    res.cookie('auth_token', token, {
        httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
        secure: process.env.NODE_ENV === 'production', // Use secure in production (requires HTTPS)
        maxAge: 3600000 // 1 hour in milliseconds
    });

    res.send({ message: 'Email verified, token stored in cookie' });
});
  
  
app.post('/api/reset-password', async (req, res) => {
    const { code, newPassword } = req.body;

    if (code !== '123456') {
      return res.status(400).json({ message: 'Invalid verification code.' });
    }
    const token = req.cookies.auth_token; // Retrieve the token from cookies
  
    if (!token) {
      return res.status(401).json({ message: 'Authentication token is required' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const email = decoded.email;
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
        
    // Update the password in the database
        const updateResult = await pool.query(
            'UPDATE users SET password = $1 WHERE email = $2',
            [newPassword, email]
        );
      res.clearCookie('auth_token'); // Clear the auth token cookie
      res.json({ message: 'Password reset successfully' });
    } catch (error) {
      res.status(401).json({ message: 'Invalid or expired token' });
      res.clearCookie('auth_token'); // Ensure to clear the cookie even if token is invalid
    }
  });

const generateCode = () => {
    return crypto.randomBytes(3).toString('hex'); // Generates a 6-character hex string
  };
 
//Email transport configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Example with Gmail; you need to setup your Gmail for allowing less secure apps or use OAuth2
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password'
  }
});

//end point to send verification code.  
app.post('/api/send-verification-code', async (req, res) => {
const { email } = req.body;
const verificationCode = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit code

try {
    await transporter.sendMail({
    from: '"Your Company Name" <your-email@gmail.com>',
    to: email,
    subject: 'Your Verification Code',
    text: `Your verification code is: ${verificationCode}`
    });

    res.status(200).send('Verification code sent successfully.');
} catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).send('Failed to send verification code.');
}
});

app.post('/api/check-email', async (req, res) => {
const { email } = req.body;
try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length > 0) {
    res.status(200).json({ exists: true });
    } else {
    res.status(500).json({ exists: false });
    }
} catch (error) {
    console.error('Error querying database:', error);
    res.status(500).send('Error checking email');
}
});

  app.get('/userdashboard', auth, (req, res) => {
    console.log(req.userId);
    res.status(201).json({message: "user dashboard"})
  });

  // Route handler to insert a new task into the database (dashboard)
app.post('/api/dashboard', async (req, res) => {
    const { todo } = req.body;
    try {
        await pool.query('INSERT INTO dashboard (todo) VALUES ($1)', [todo]);
        console.log('Todo inserted successfully');
        res.status(201).send('Todo inserted successfully');
    } catch (err) {
        console.error('Error inserting todo:', err);
        res.status(500).send('Error inserting todo');
    }
});

// Route handler to remove a todo item by text
app.delete('/api/dashboard/:todo', async (req, res) => {
    const { todo } = req.params;
    try {
        await pool.query('DELETE FROM dashboard WHERE todo = $1', [todo]);
        console.log('Todo removed successfully');
        res.send('Todo removed successfully');
    } catch (err) {
        console.error('Error removing todo:', err);
        res.status(500).send('Error removing todo');
        console.error('Error removing todo:', err);
        res.status(500).send('Error removing todo');
    }
});
  

// Route handler for updating the username
// Route handler for updating the username
app.post('/update-username', async (req, res) => {
    try {
        // Extract current and new usernames from the request body
        const { currentUsername, newUsername } = req.body;

        // Check if the new username is already taken
        const usernameExists = await pool.query('SELECT * FROM users WHERE username = $1', [newUsername]);
        if (usernameExists.rows.length > 0) {
            return res.status(400).json({ message: 'Username already exists. Please choose a different username.' });
        }

        // Update the username in the database
        const updateResult = await pool.query(
            'UPDATE users SET username = $1 WHERE username = $2',
            [newUsername, currentUsername]
        );

        // Check if the update was successful
        if (updateResult.rowCount === 1) {
            // Return success message
            res.status(200).json({ message: 'Username updated successfully' });
        } else {
            // If the update affected 0 rows, it means the current username was not found
            res.status(404).json({ message: 'Current username not found' });
        }
    } catch (error) {
        console.error('Error updating username:', error);
        res.status(500).json({ message: 'Error updating username' });
    }
});

app.post('/update-email', async (req, res) => {
    try {
        // Extract current and new emails from the request body
        const { currentEmail, newEmail } = req.body;

        // Check if the new email is already taken
        const emailExists = await pool.query('SELECT * FROM users WHERE email = $1', [newEmail]);
        if (emailExists.rows.length > 0) {
            return res.status(400).json({ message: 'Email already exists. Please choose a different email.' });
        }

        // Update the email in the database
        const updateResult = await pool.query(
            'UPDATE users SET email = $1 WHERE email = $2',
            [newEmail, currentEmail]
        );

        // Check if the update was successful
        if (updateResult.rowCount === 1) {
            // Return success message
            res.status(200).json({ message: 'Email updated successfully' });
        } else {
            // If the update affected 0 rows, it means the current email was not found
            res.status(404).json({ message: 'Current email not found' });
        }
    } catch (error) {
        console.error('Error updating email:', error);
        res.status(500).json({ message: 'Error updating email' });
    }
});

// Route handler to retrieve current projects for a user
app.get('/api/projects', auth, async (req, res) => {
    try {
        // Extract user ID from the authenticated request
        const userId = req.user.id;

        // Query the database to fetch projects associated with the user
        const projects = await pool.query('SELECT * FROM projects WHERE user_id = $1', [userId]);

        // If projects are found, return them in the response
        if (projects.rows.length > 0) {
            res.status(200).json(projects.rows);
        } else {
            // If no projects are found, return a message indicating that
            res.status(404).json({ message: 'No projects found for the user' });
        }
    } catch (error) {
        console.error('Error retrieving projects:', error);
        res.status(500).json({ message: 'Error retrieving projects' });
    }
});

// Route handler to update projects for a user
app.put('/api/projects/:projectId', auth, async (req, res) => {
    try {
        // Extract user ID and project ID from the request parameters
        const userId = req.user.id;
        const projectId = req.params.projectId;

        // Extract updated project data from the request body
        const { projectName, projectDescription } = req.body;

        // Check if the project exists and belongs to the user
        const project = await pool.query('SELECT * FROM projects WHERE id = $1 AND user_id = $2', [projectId, userId]);
        if (project.rows.length === 0) {
            return res.status(404).json({ message: 'Project not found or does not belong to the user' });
        }

        // Update the project in the database
        await pool.query('UPDATE projects SET name = $1, description = $2 WHERE id = $3', [projectName, projectDescription, projectId]);

        // Return success message
        res.status(200).json({ message: 'Project updated successfully' });
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ message: 'Error updating project' });
    }
});

