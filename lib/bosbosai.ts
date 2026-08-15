import { Anthropic } from '@anthropic-ai/sdk';

const anthropic = new Anthropic();

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export class BosbosaiAI {
  private systemPrompt: string;

  constructor() {
    this.systemPrompt = `شما دستیار هوشمند و صمیمی پلتفرم بسبسی (Bosbosi) هستید. وظیفه شما راهنمایی کاربران در زمینه سلامت بانوان، تقویم پریود، رویدادها و گفتگوهای دوستانه است. لحن شما باید محترمانه، صمیمی و پشتیبان باشد.`;
  }

  async getResponse(messages: ChatMessage[]): Promise<string> {
    try {
      const response = await anthropic.messages.create({
        model: 'claude-sonnet-5',
        max_tokens: 1024,
        system: this.systemPrompt,
        messages: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      });

      const content = response.content[0];
      if (content.type === 'text') {
        return content.text;
      }
      return 'متأسفانه پاسخی دریافت نشد.';
    } catch (error) {
      console.error('Bosbosai AI Error:', error);
      throw new Error('خطا در برقراری ارتباط با هوش مصنوعی');
    }
  }
}

export const bosbosaiAI = new BosbosaiAI();
