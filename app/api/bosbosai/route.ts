import { NextRequest, NextResponse } from 'next/server';
import { bosbosaiAI, ChatMessage } from '@/lib/bosbosai';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages } = body as { messages: ChatMessage[] };

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'فرمت پیام‌ها معتبر نیست.' },
        { status: 400 }
      );
    }

    const reply = await bosbosaiAI.getResponse(messages);
    return NextResponse.json({ message: reply });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'خطای سرور' },
      { status: 500 }
    );
  }
}
