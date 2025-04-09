const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const cors = require("cors");
const OpenAI = require("openai");
const systemPrompt = require('./nathansMind');
require("dotenv").config();

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

//app.use(express.static('public'))

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/ask-nathan", async (req, res) => {
  const { question } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: question },
      ],
    });

    const answer = completion.choices[0].message.content.trim();
    res.json({ answer });
  } catch (error) {
    console.error("OpenAI error:", error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.listen(port, () => {
  console.log('listening on 8080');
})

app.use('/', expressStaticGzip('public'));
