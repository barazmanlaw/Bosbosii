import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'بسبسی',
  description: 'پلتفرم بسبسی - سلامت بانوان، تقویم پریود و رویدادها',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
