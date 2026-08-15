import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const chats = [
      { id: '1', name: 'چت گروهی عمومی', lastMessage: 'خوش آمدید!', updatedAt: new Date() },
    ];
    return NextResponse.json({ chats });
  } catch (error) {
    return NextResponse.json({ error: 'خطا در دریافت لیست چت‌ها' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title } = await req.json();
    if (!title) {
      return NextResponse.json({ error: 'عنوان چت الزامی است' }, { status: 400 });
    }
    const newChat = { id: Date.now().toString(), title, createdAt: new Date() };
    return NextResponse.json({ chat: newChat }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'خطا در ایجاد چت جدید' }, { status: 500 });
  }
}
