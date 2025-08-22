const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from server/.env if present
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 8787;

app.use(cors());
app.use(express.json({ limit: '1mb' }));

// Serve the static frontend from the project root
app.use(express.static(path.join(__dirname, '..')));

function buildSystemPrompt(user) {
    return (
        `You are Compiler - the friend of all, an AI study assistant for SRM University.\n` +
        `Capabilities:\n` +
        `- Smart matchmaking using subjects, year, department, study style, interests, goals, availability, method, strengths/weaknesses\n` +
        `- Book recommendations for courses\n` +
        `- Professor contacts and office hours recommendations\n` +
        `- Library/facility schedules (normal/exam)\n` +
        `- Personalized advice based on user's academic profile\n\n` +
        `Speak concisely, add short emojis where helpful, and provide actionable advice.\n\n` +
        `Current user profile (JSON): ${JSON.stringify(user || {}, null, 2)}`
    ).trim();
}

function buildUserPrompt(message) {
    return `User says: ${message}`;
}

async function openaiChat(message, user) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        throw new Error('OPENAI_API_KEY is not set');
    }

    const body = {
        model: 'gpt-4o-mini',
        messages: [
            { role: 'system', content: buildSystemPrompt(user) },
            { role: 'user', content: buildUserPrompt(message) }
        ],
        temperature: 0.5,
        max_tokens: 600
    };

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`OpenAI error ${response.status}: ${text}`);
    }

    const json = await response.json();
    return json.choices?.[0]?.message?.content?.trim() || 'Sorry, I could not generate a response.';
}

app.post('/api/chat', async (req, res) => {
    try {
        const { message, user } = req.body || {};
        if (!message || typeof message !== 'string') {
            return res.status(400).json({ error: 'Invalid message' });
        }
        const reply = await openaiChat(message, user);
        return res.json({ reply });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'AI request failed' });
    }
});

app.listen(PORT, () => {
    console.log(`Compiler backend running on http://localhost:${PORT}`);
    console.log('Open http://localhost:' + PORT + '/chatbot.html');
});