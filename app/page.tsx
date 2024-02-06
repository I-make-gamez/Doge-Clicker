"use client";

import Upgrades from "@/components/upgrades";
import MiddlePanel from "@/components/middle";
import RightPanel from "@/components/right-panel";
import Image from "next/image";
// import { useState, useRef } from "react";

// function handleImageClick(e: React.MouseEvent<HTMLImageElement>) {
//   console.log(e.target);
//   e.target = "/images/dogeBark.png";
// }

export default function HomePage() {
  return (
    <div className="flex flex-row h-full">
      <Upgrades></Upgrades>
      <MiddlePanel></MiddlePanel>
      <RightPanel></RightPanel>
    </div>
  );
}
