import express from 'express';
import * as dotenv from 'dotenv';

import { OpenAI } from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.create({
      prompt,
      n: 1,
      width: 1024,
      height: 1024,
      responseType: 'base64',
    });

    const image = aiResponse.data[0].content;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response?.data?.error?.message || 'Something went wrong');
  }
});

export default router;
