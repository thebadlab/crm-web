import SortProducts from '~/components/Test';
import style from './Page.module.css';

export default function MainPage() {
  return (
    <div>
      <SortProducts />
      <div className={style.Page}>Main Page</div>
    </div>
  );
}
