import style from './Page.module.css';
import UserCard from './components/UserCard';

export default async function UserListPage() {
  const response = await fetch('http://localhost:31299/api/users');
  const users = await response.json();

  return (
    <div>
      <div>
        <div></div>
        <div>User List Page</div>
      </div>

      <div>
        {users.map((user: any) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>

      <div className={style.PagePagination}>
        <div className={''}>Pagination</div>
        <div className={''}>Info</div>
      </div>
    </div>
  );
}
