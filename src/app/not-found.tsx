'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <main>
      <h1>{pathname} - Такой страницы не существует</h1>
      <br />
      <button
        onClick={() => {
          router.back();
        }}
      >
        Назад
      </button>
      <br />
      <button
        onClick={() => {
          router.push('/');
        }}
      >
        На главную
      </button>
    </main>
  );
}
