import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const periodData = {
      lastPeriodDate: '2026-08-01',
      cycleLength: 28,
      periodLength: 5,
      nextPeriodPredicted: '2026-08-29',
      ovulationDatePredicted: '2026-08-15',
    };
    return NextResponse.json({ data: periodData });
  } catch (error) {
    return NextResponse.json({ error: 'خطا در دریافت اطلاعات دوره' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { startDate } = body;

    if (!startDate) {
      return NextResponse.json({ error: 'تاریخ شروع الزامی است' }, { status: 400 });
    }

    return NextResponse.json({ message: 'اطلاعات با موفقیت ثبت شد', data: body });
  } catch (error) {
    return NextResponse.json({ error: 'خطا در ثبت اطلاعات دوره' }, { status: 500 });
  }
}
