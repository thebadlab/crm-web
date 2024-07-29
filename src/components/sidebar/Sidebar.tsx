import Link from 'next/link';
import classNames from 'classnames';
import style from './Sidebar.module.css';
import MainActionButton from '../main-action-button/MainActionButton';

export default function Sidebar() {
  return (
    <div className={style.Sidebar}>
      <div className={style.SidebarContainer}>
        <div className={style.Logo}>Лого</div>
        <div className={style.Buttons}>
          <MainActionButton />
          <button className={style.SearchButton}>Поиск</button>
        </div>

        <div
          className={classNames(
            style.SidebarNav,
            'vertical-scrollbar scrollbar-sm',
          )}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link href="/" className="">
              Главная
            </Link>
            <Link href="/objects" className="">
              Объекты
            </Link>
            <Link href="/contractors" className="">
              Контрагенты
            </Link>
            <Link href="/users" className="">
              Пользователи
            </Link>
          </div>
        </div>

        <div className="">
          <div className="">Аккаунт</div>
        </div>
      </div>
    </div>
  );
}
