import type { PagePropsType } from '~/types/page';

export default async function UserViewPage(props: PagePropsType) {
  const response = await fetch(
    `http://localhost:31299/api/users/${props.params.id}`,
  );
  const user = await response.json();

  return (
    <main>
      <h1>User View Page</h1>
      <br />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </main>
  );
}
