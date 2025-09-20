import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import OpenAI from "openai";
import z from "zod";
import cors from "cors";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
// app.use(cors({ origin: "http://localhost:5173" }));
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(process.env.APP_API_KEY);
});
const conversations = new Map<string, string>();
const chatSchema = z.object({
  prompt: z

    .string()
    .trim()
    .min(1, "Prompt is Required.")
    .max(1000, "Prompt is to logn (max 100 characters"),

  conversationId: z.string().uuid(),
});
app.post("/api/chat", async (req: Request, res: Response) => {
  const parseResult = chatSchema.safeParse(req.body);
  if (!parseResult.success) {
    res.status(400).json(parseResult.error.format());
    return;
  }
  try {
    const { prompt, conversationId } = req.body;

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
      temperature: 0.2,
      max_output_tokens: 100,
      previous_response_id: conversations.get(conversationId),
    });
    conversations.set(conversationId, response.id);
    res.json({ message: response.output_text });
  } catch (error) {
    res.status(500).json({ error: "Faild to generate a response." });
  }
});
app.get("/api/hello", (req: Request, res: Response) => {
  res.json("Hello World!");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
