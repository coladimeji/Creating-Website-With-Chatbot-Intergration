// server.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') }); // Load environment variables
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const aiRoutes = require('./routes/ai'); // Import the AI routes
const logger = require('./middlewares/logger'); // Import the logger middleware
const errorHandler = require('./middlewares/errorHandler'); // Import the error handler middleware

const app = express();
const PORT = process.env.PORT || 3000;

// =======================
// Logs Directory Setup
// =======================
const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'chatbot_interactions.log');

try {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true, mode: 0o755 });
        console.log('Logs directory created successfully');
    }

    if (!fs.existsSync(logFile)) {
        fs.writeFileSync(logFile, '', { mode: 0o644 });
        console.log('Log file created successfully');
    }
} catch (error) {
    console.error('Error creating logs directory or file:', error.stack || error);
}

// =======================
// CORS Configuration
// =======================
const corsOptions = {
    origin: process.env.NODE_ENV === 'development' 
        ? '*' 
        : ['http://localhost:8000', 'http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
    optionsSuccessStatus: 200
};

// =======================
// Middleware Setup
// =======================
app.use(helmet()); // Security headers
app.use(cors(corsOptions)); // Enable CORS
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(logger); // Log all requests

// =======================
// Rate Limiting
// =======================
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// =======================
// Health Check Route
// =======================
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// =======================
// API Routes
// =======================
app.use('/api/ai', aiRoutes);

// =======================
// Default Route
// =======================
app.get('/', (req, res) => {
    res.send('MCA Software Solutions Backend is running!');
});

// =======================
// Error Handling
// =======================
// Handle 404 Errors
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'The requested resource does not exist'
    });
});

// Global Error Handling Middleware
app.use(errorHandler);

// =======================
// Start the Server
// =======================
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Environment:', process.env.NODE_ENV || 'development');
    console.log('CORS enabled for:', corsOptions.origin);
});

// =======================
// Error Handling
// =======================
// Handle Unhandled Promise Rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Handle Uncaught Exceptions
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});

// Graceful Shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    server.close(() => {
        console.log('Server closed.');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT received. Shutting down gracefully...');
    server.close(() => {
        console.log('Server closed.');
        process.exit(0);
    });
});

module.exports = app; // Export for testing purposes
