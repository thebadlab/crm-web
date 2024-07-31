import { getResponse } from '~/libs/api';
import style from './Page.module.css';

export default async function UserListPage() {
  const posts = await getResponse();

  return (
    <div>
      <div>
        <div></div>
        <div>User List Page</div>
      </div>

      <div>
        {posts.map((post: any) => (
          <div key={post.id}>{post.id}</div>
        ))}
      </div>

      <div className={style.PagePagination}>
        <div className={''}>Pagination</div>
        <div className={''}>Info</div>
      </div>
    </div>
  );
}
