export interface ChatMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

export interface AIService {
    name: string;
    chat: (message: ChatMessage[]) => Promise<AsyncIterable<string>>;
}