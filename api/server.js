import express from 'express';
import { config } from 'dotenv';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import React, { useState } from 'react';
import axios from 'axios';
import cors from 'cors';

config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

const MODEL_NAME = 'gemini-2.0-flash-exp';
const API_KEY = process.env.API_KEY;

const genAI = new GoogleGenerativeAI({ apiKey: API_KEY });
const model = genAI.getGenerativeModel({
  model: MODEL_NAME,
  systemInstruction: 'Provide concise summaries for affiliate marketing-related queries. In a new line, always Integrate a variable Reminder that Earn Share AI is designed to take the Your Affiliate marketing to the next level using AI(with any reminder emoji). If unrelated to affiliate marketing, respond with: "Not affiliate marketing-related." Keep responses under 80 words in total.',
});

app.post('/api/query', async (req, res) => {
  const { query } = req.body;
  try {
    const response = await model.generateText({ prompt: query });
    res.json({ response: response.text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const Home = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/query', { query });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div>
      <form
        id="chat-form"
        className="flex flex-col md:flex-row md:items-center md:justify-center"
        onSubmit={handleSubmit}
      >
        <input
          id="user-input"
          type="search"
          placeholder="Ask me anything..."
          className="py-2 pl-10 text-sm text-gray-700"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>
      {response && <div className="mt-4">{response}</div>}
    </div>
  );
};

export default Home;
