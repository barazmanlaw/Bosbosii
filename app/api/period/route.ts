export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({ periodData: null });
  } catch (error) {
    return NextResponse.json({ error: 'خطا در دریافت اطلاعات' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    return NextResponse.json({ message: 'اطلاعات ذخیره شد', data: body }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'خطا در ذخیره اطلاعات' }, { status: 500 });
  }
}
