import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import style from './Layout.module.css';
import '~/assets/css/index.css';

const inter = Inter({ subsets: ['latin'] });

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={style.Main} style={inter.style}>
        {children}
      </body>
    </html>
  );
}
