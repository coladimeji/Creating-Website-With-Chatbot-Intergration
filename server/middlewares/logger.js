const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/chatbot_interactions.log');

const logger = (req, res, next) => {
  const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url} - ${JSON.stringify(req.body)}\n`;
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error('Failed to log interaction:', err);
    }
  });
  next();
};

module.exports = logger;