import Link from 'next/link';

type UserCardPropsType = {
  id: number;
  fullName: string;
  role: string;
  awatar?: string;
  phone?: string;
  email?: string;
  director?: {
    id: number;
    awatar?: string;
    fullName: string;
  };
};

export default function UserCard(props: UserCardPropsType) {
  const href = `users/${props.id}`;

  return (
    <Link href={href}>
      <div
        className=""
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div className="">{props.id}</div>
        <div className="">{props.fullName}</div>
        <div className="">{props.role}</div>
        <div className="">{props.phone}</div>
        <div className="">{props.email}</div>
        <div className="">{props.director?.fullName}</div>
        <div className="">actions</div>
      </div>
    </Link>
  );
}
