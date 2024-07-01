const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define an endpoint to handle the chat request
app.post('/api/chat', async (req, res) => {
  const userText = req.body.text;

  try {
    // Make a request to the GPT-3 API using Axios (replace with your actual API key)
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: `You: ${userText}\nAI:`,
      max_tokens: 50, // You can adjust this for longer or shorter responses
    }, {
      headers: {
        'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
        'Content-Type': 'application/json',
      },
    });

    const aiResponse = response.data.choices[0].text;

    // Return the AI response to the client
    res.json({ response: aiResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
