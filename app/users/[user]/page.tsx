import { fetchUser } from "@/lib/actions";
import { User } from "@/lib/definitions";
import { redirect } from "next/navigation";
import NotFoundPage from "@/app/not-found";

export default async function UserPage({ params }: { params: { user: string } }) {
  const user: User = await fetchUser(params.user);
  return (
    <div>
      {(user === undefined ? <NotFoundPage /> : null)}
      <title>{user?.username}</title>
      <h1>{user?.username}</h1>
      <h1>{user?.avatar}</h1>
      <h1>{user?.id}</h1>
      <h1>{user?.admin.toString()}</h1>
    </div>
  );
}
