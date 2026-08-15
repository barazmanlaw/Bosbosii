export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({ events: [] });
  } catch (error) {
    return NextResponse.json({ error: 'خطا در دریافت رویدادها' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    return NextResponse.json({ message: 'رویداد ثبت شد', data: body }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'خطا در ثبت رویداد' }, { status: 500 });
  }
}
