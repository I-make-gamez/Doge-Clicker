import { fetchUser } from "@/lib/actions";
import { User } from "@/lib/definitions";
import NotFoundPage from "@/app/not-found";
import Upgrades from "@/components/upgrades";
import RightPanel from "@/components/right-panel";
import UserMiddlePanel from "@/components/usermiddle";

export default async function UserPage({
  params,
}: {
  params: { user: string };
}) {
  const user: User = await fetchUser(params.user);
  if (user === undefined) {
    return <NotFoundPage />;
  } else {
    console.log(user)
    return (
      <div className="flex z-0 flex-row h-full">
        <title>{user.username}</title>
        <Upgrades></Upgrades>
        <UserMiddlePanel
          avatar={user.avatar}
          username={user.username}
          dogecoin={user.dogecoin}
        />
        <RightPanel></RightPanel>
      </div>
    );
  }
}
