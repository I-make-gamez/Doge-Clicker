import type { User } from "@/lib/definitions";

export default function UserStats({ user }) {
  return (
    <div>
      <title>{user?.username}</title>
      <h1>{user?.username}</h1>
      <h1>{user?.avatar}</h1>
      <h1>{user?.id}</h1>
      <h1>{user?.admin.toString()}</h1>
    </div>
  );
}
