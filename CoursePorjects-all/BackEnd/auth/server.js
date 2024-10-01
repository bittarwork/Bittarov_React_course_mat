const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;

// Secret key for JWT
const JWT_SECRET = 'mysecretkey';

// Middlewares
app.use(bodyParser.json());

// Temporary "users" array (as database alternative)
let users = [];

// Register new user
app.post('/register', (req, res) => {
    const { username, password, role } = req.body;

    // Check if the user already exists
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Add the new user
    const newUser = { username, password, role };
    users.push(newUser);

    // Generate a JWT token for the user
    const token = jwt.sign({ username, role }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User registered successfully', token });
});

// Login user
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find the user in our temporary "database"
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Generate a JWT token for the user
    const token = jwt.sign({ username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
});

// Middleware to verify JWT
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Token required' });

    jwt.verify(token.split(' ')[1], JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = user; // Save user info to req object
        next();
    });
}

// Protected route (only accessible with valid JWT)
app.get('/dashboard', authenticateToken, (req, res) => {
    res.status(200).json({ message: `Welcome to your dashboard, ${req.user.username}`, role: req.user.role });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
