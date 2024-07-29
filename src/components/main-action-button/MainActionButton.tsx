'use client';

import { usePathname } from 'next/navigation';

import style from './MainActionButton.module.css';
import { useEffect, useState } from 'react';

export default function MainActionButton() {
  const pathname = usePathname();
  const [t, setT] = useState<string | null>(null);
  const [action, setAction] = useState<(() => void) | null>(null);

  useEffect(() => {
    switch (pathname) {
      case '/objects':
        setT('объект');
        setAction(() => () => {
          console.log('TEST: ', pathname);
        });
        break;

      default:
        setT(null);
        setAction(null);
        break;
    }
  }, [pathname]);

  if (t && action) {
    return (
      <button onClick={action} className={style.MainActionButton}>
        Добавить {t}
      </button>
    );
  }
}
