import Link from 'next/link';
import classNames from 'classnames';
import style from './Sidebar.module.css';
import MainActionButton from '../main-action-button/MainActionButton';
import Menu from './Menu';
import MenuLink from './MenuLink';

const MENU: Array<{
  title: string;
  path: string;
}> = [
  {
    title: 'Главная',
    path: '/',
  },
  {
    title: 'Объекты',
    path: '/objects',
  },
  {
    title: 'Контрагенты',
    path: '/contractors',
  },
  {
    title: 'Пользователи',
    path: '/users',
  },
];

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
          <Menu>
            {MENU.map((item) => (
              <MenuLink key={item.path} {...item} />
            ))}
          </Menu>
        </div>

        <div className="">
          <div className="">Аккаунт</div>
        </div>
      </div>
    </div>
  );
}
