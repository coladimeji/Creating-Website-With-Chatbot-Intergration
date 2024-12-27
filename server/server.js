require('dotenv').config(); // Load environment variables
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const aiRoutes = require('./routes/ai'); // Import the AI routes
const logger = require('./middlewares/logger'); // Import the logger middleware
const errorHandler = require('./middlewares/errorHandler'); // Import the error handler middleware

const app = express();
const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not set

// Create logs directory and file
const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'chatbot_interactions.log');

try {
    // Create logs directory if it doesn't exist
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Logs directory created successfully');
    }

    // Create log file if it doesn't exist
    if (!fs.existsSync(logFile)) {
        fs.writeFileSync(logFile, '');
        console.log('Log file created successfully');
    }
} catch (error) {
    console.error('Error creating logs directory or file:', error);
}

// CORS configuration
const corsOptions = {
    origin: ['http://localhost:8000', 'http://localhost:3000'], // Add your React app's URL
    methods: ['GET', 'POST'],
    credentials: true,
    optionsSuccessStatus: 200
};

// Middleware setup
app.use(cors(corsOptions)); // Enable CORS with options
app.use(express.json({ limit: '10mb' })); // Increased JSON limit
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // Support URL-encoded bodies
app.use(logger); // Log all requests

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api/ai', aiRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('MCA Software Solutions Backend is running!');
});

// Error handling for undefined routes
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'The requested resource does not exist'
    });
});

// Global error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Environment:', process.env.NODE_ENV || 'development');
    console.log('CORS enabled for:', corsOptions.origin);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or other logic here
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    // Application specific logging, throwing an error, or other logic here
    process.exit(1); // Exit with failure
});

module.exports = app; // Export for testing purposes