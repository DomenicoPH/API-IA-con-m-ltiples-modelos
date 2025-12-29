import { Groq } from "groq-sdk";
import type { ChatMessage, AIService } from "../types";

const groq = new Groq();

export const groqService: AIService = {
  name: "Groq",
  async chat(messages: ChatMessage[]) {
    const chatCompletion = await groq.chat.completions.create({
      messages,
      model: "moonshotai/kimi-k2-instruct-0905",
      temperature: 0.6,
      max_completion_tokens: 4096,
      top_p: 1,
      stream: true,
      stop: null,
    });

    return (async function* () {
      for await (const chunk of chatCompletion) {
        yield chunk.choices[0]?.delta?.content || "";
      }
    })();
  },
};
