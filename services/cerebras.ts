import Cerebras from '@cerebras/cerebras_cloud_sdk';
import type { ChatMessage, AIService } from "../types";

const cerebras = new Cerebras();

export const cerebrasService: AIService = {
  name: "Cerebras",
  async chat(messages: ChatMessage[]) {
    const stream = await cerebras.chat.completions.create({
      messages: messages as any,
      model: 'gpt-oss-120b',
      stream: true,
      max_completion_tokens: 32768,
      temperature: 1,
      top_p: 1,
      reasoning_effort: 'medium',
    });
    return (async function* () {
      for await (const chunk of stream) {
        yield (chunk as any).choices[0]?.delta?.content || "";
      }
    })();
  }
}