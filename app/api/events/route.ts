import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get('city');

    const events = [
      {
        id: '1',
        title: 'دورهمی ورزشی بانوان',
        city: city || 'تهران',
        price: 50000,
        date: '2026-09-01',
      },
    ];

    return NextResponse.json({ events });
  } catch (error) {
    return NextResponse.json({ error: 'خطا در دریافت لیست رویدادها' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, city } = body;

    if (!title || !city) {
      return NextResponse.json({ error: 'اطلاعات رویداد ناقص است' }, { status: 400 });
    }

    return NextResponse.json({
      message: 'رویداد ایجاد شد',
      paymentUrl: 'https://payment.zarinpal.com/pg/StartPay/mock-authority',
    });
  } catch (error) {
    return NextResponse.json({ error: 'خطا در ثبت رویداد' }, { status: 500 });
  }
}
