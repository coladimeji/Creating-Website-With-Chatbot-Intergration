const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const OpenAI = require('openai');
const path = require('path');
const router = express.Router();

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Initialize knowledge base object
const knowledgeBase = {
    technical: [],
    processes: [],
    clientServices: [],
    business: []
};

// Function to load CSV files
const loadCSVFile = (filePath, category) => {
    return new Promise((resolve, reject) => {
        console.log(`\n=== Loading ${category} ===`);
        console.log(`File path: ${filePath}`);

        if (!fs.existsSync(filePath)) {
            console.error(`❌ File not found: ${filePath}`);
            reject(new Error(`File not found: ${filePath}`));
            return;
        }

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                if (row.question && row.answer) {
                    knowledgeBase[category].push(row);
                }
            })
            .on('end', () => {
                console.log(`CSV file for ${category} successfully processed with ${knowledgeBase[category].length} entries`);
                resolve();
            })
            .on('error', (error) => {
                console.error(`Error reading ${category} CSV file:`, error);
                reject(error);
            });
    });
};

// Load all CSV files
const initializeKnowledgeBase = async () => {
    try {
        await Promise.all([
            loadCSVFile(path.resolve(__dirname, '../../src/data/mca-stories-technical.csv'), 'technical'),
            loadCSVFile(path.resolve(__dirname, '../../src/data/mca-stories-processes.csv'), 'processes'),
            loadCSVFile(path.resolve(__dirname, '../../src/data/mca-stories-client-services.csv'), 'clientServices'),
            loadCSVFile(path.resolve(__dirname, '../../src/data/mca-stories-business.csv'), 'business')
        ]);
        console.log('All CSV files loaded successfully');
    } catch (error) {
        console.error('Error loading CSV files:', error);
    }
};

// Initialize knowledge base
initializeKnowledgeBase();

// Helper function to find the best matching answer
const findBestMatch = (userQuestion) => {
    userQuestion = userQuestion.toLowerCase();
    let bestMatch = null;

    // Search through all categories
    for (const category in knowledgeBase) {
        for (const entry of knowledgeBase[category]) {
            if (entry.question && entry.answer) {
                // Check for exact match
                if (entry.question.toLowerCase() === userQuestion) {
                    return entry.answer;
                }
                
                // Check for partial match
                if (userQuestion.includes(entry.question.toLowerCase()) ||
                    entry.question.toLowerCase().includes(userQuestion)) {
                    bestMatch = entry.answer;
                }
            }
        }
    }

    return bestMatch;
};

// Query Route
router.post('/query', async (req, res) => {
    try {
        const userQuestion = req.body.question;
        
        if (!userQuestion) {
            return res.status(400).json({ error: 'Question is required' });
        }

        console.log('Received question:', userQuestion);

        // First try to find answer in knowledge base
        const answer = findBestMatch(userQuestion);

        if (answer) {
            console.log('Found answer in knowledge base:', answer);
            return res.json({ answer });
        }

        // If no answer found, use OpenAI GPT-4
        console.log('No match found in knowledge base, using GPT-4');

        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant for MCA Software Solutions, a company specializing in software testing and quality assurance services. Provide detailed, professional responses focusing on software testing, QA, and related services."
                },
                {
                    role: "user",
                    content: userQuestion
                }
            ],
            model: "gpt-4", // Changed to GPT-4
            max_tokens: 500, // Increased token limit for more detailed responses
            temperature: 0.7,
            top_p: 0.9,
            frequency_penalty: 0.0,
            presence_penalty: 0.0
        });

        const aiAnswer = completion.choices[0].message.content.trim();
        console.log('GPT-4 response:', aiAnswer);
        res.json({ answer: aiAnswer });

    } catch (error) {
        console.error('Error processing query:', error);
        if (error.response) {
            console.error('OpenAI API Error:', error.response.data);
        }
        res.status(500).json({ 
            error: 'Error processing query',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// Test route to verify loaded data
router.get('/test', (req, res) => {
    res.json({
        status: 'OK',
        counts: {
            technical: knowledgeBase.technical.length,
            processes: knowledgeBase.processes.length,
            clientServices: knowledgeBase.clientServices.length,
            business: knowledgeBase.business.length
        },
        sample: {
            technical: knowledgeBase.technical[0],
            processes: knowledgeBase.processes[0],
            clientServices: knowledgeBase.clientServices[0],
            business: knowledgeBase.business[0]
        }
    });
});

module.exports = router;