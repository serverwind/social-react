import User from "./User/User";

type UsersProps = {
  users: {
    users: [
      {
        id: number;
        name: string;
      }
    ];
  };
  theme: {
    bg: string;
    text: string;
  }
};

export default function Users({ ...props }: UsersProps) {
  return (
    <div className={ `${props.theme.bg} ${props.theme.text} p-4` }>
      <ul className="flex flex-wrap sm:flex-col justify-center gap-2">
        {props.users.users.map((user: { id: number; name: string }) => (
          <User key={user.id} name={user.name} chat={`/messenger/${user.id}`} />
        ))}
      </ul>
    </div>
  );
}
