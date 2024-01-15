export default function UsersList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>{user.name}</div>
      ))}
    </div>
  );
}
