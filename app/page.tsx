import Upgrades from "@/components/upgrades";
import MiddlePanel from "@/components/middle";
import RightPanel from "@/components/right-panel";
import UserSearch from "@/components/userSearch";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import type { User } from "@/lib/definitions";
import { fetchUser } from "@/lib/actions";

const user = await fetchUser("NitTwit")

export default function HomePage() {

    return (
      <div className="flex z-0 flex-row h-full">
        <title>Home</title>
        <Upgrades></Upgrades>
        <MiddlePanel user={user}></MiddlePanel>
        <RightPanel></RightPanel>
      </div>
    );
}
