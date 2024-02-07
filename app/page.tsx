"use client";

import Upgrades from "@/components/upgrades";
import MiddlePanel from "@/components/middle";
import RightPanel from "@/components/right-panel";
import UserSearch from "@/components/userSearch";

export default function HomePage() {
  return (
    <div className="flex z-0 flex-row h-full">
      <Upgrades></Upgrades>
      <MiddlePanel></MiddlePanel>
      <RightPanel></RightPanel>
    </div>
  );
}
