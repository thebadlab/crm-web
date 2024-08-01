import { getResponse } from '~/libs/api';
import style from './Page.module.css';
import { ObjectList } from './components/ObjectList';
import SortProducts from '~/components/Test';

export default async function ObjectListPage() {
  const posts = await getResponse();
  const currentHour = new Date().getHours();

  return (
    <div>
      <div>
        <SortProducts />
        <div>Object List Page</div>
      </div>

      <ObjectList objects={posts} />

      <div className={style.PagePagination}>
        <div className={''}>Pagination</div>
        <div className={''}>Info</div>
      </div>
    </div>
  );
}
