import style from './Page.module.css';

export default function ObjectListPage() {
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

      <div>List</div>

      <div className={style.PagePagination}>
        <div className={''}>Pagination</div>
        <div className={''}>Info</div>
      </div>
    </div>
  );
}
