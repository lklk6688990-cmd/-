import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Tieku - 帖库',
  description: 'A minimalist Chinese Calligraphy Database for personal study',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="bg-black text-white">
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
