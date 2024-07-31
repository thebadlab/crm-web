import { getResponse } from '~/libs/api';
import style from './Page.module.css';
import ObjectListProvider from '~/components/object/ObjectListContext';
import ObjectList from '~/components/object/ObjectList';

export default async function ObjectListPage() {
  const posts = await getResponse();
  const currentHour = new Date().getHours();

  return (
    <div>
      <div>
        <div>
          {currentHour >= 6 && currentHour < 12 ? (
            <>Доброе утро</>
          ) : currentHour >= 12 && currentHour < 18 ? (
            <>Добрый день</>
          ) : (
            <>Добрый вечер</>
          )}
        </div>
        <div>Object List Page</div>
      </div>

      <ObjectListProvider objects={posts}>
        <ObjectList />
      </ObjectListProvider>

      <div className={style.PagePagination}>
        <div className={''}>Pagination</div>
        <div className={''}>Info</div>
      </div>
    </div>
  );
}
