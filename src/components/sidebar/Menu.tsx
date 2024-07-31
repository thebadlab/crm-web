import type { ReactNode } from 'react';

export default function Menu({ children }: { children: ReactNode }) {
  return (
    <nav className="" style={{ display: 'flex', flexDirection: 'column' }}>
      {children}
    </nav>
  );
}
