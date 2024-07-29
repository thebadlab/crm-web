import style from './Page.module.css';

export default function UserListPage() {
  return (
    <div>
      <div>
        <div></div>
        <div>User List Page</div>
      </div>

      <div>List</div>

      <div className={style.PagePagination}>
        <div className={''}>Pagination</div>
        <div className={''}>Info</div>
      </div>
    </div>
  );
}
