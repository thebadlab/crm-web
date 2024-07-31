'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuLink({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  const pathname = usePathname();

  return (
    <Link className={`link ${pathname === path ? 'active' : ''}`} href={path}>
      {title}
    </Link>
  );
}
