export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    return NextResponse.json({ message: 'پاسخ هوش مصنوعی دریافت شد', data: body });
  } catch (error) {
    return NextResponse.json({ error: 'خطا در پردازش درخواست' }, { status: 500 });
  }
}
