"use client"

import { useState, useEffect } from "react";
import Changelog from "./changelog";
import Powerups from "./powerups";

export default function RightPanel() {
  return (
    <div className="w-[20vw] border-l-[7px] h-full bg-white border-black text-black">
      <Powerups></Powerups>
      <div className="flex flex-col u1 h-[41%] bg-gradient-radial from-[#ffae00] to-[#bb8510]">
        <h1 className="text-3xl font-semibold py-2 border-b-[7px] border-black">
          Stats
        </h1>
      </div>
    </div>
  );
}
