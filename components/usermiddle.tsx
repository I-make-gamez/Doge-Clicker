"use client";
import Image from "next/image";
import { useState } from "react";

interface UserMiddlePanelProps {
  dogecoin: any;
  username: string;
  avatar: string;
}

export default function UserMiddlePanel({
  dogecoin,
  username,
  avatar,
}: UserMiddlePanelProps) {
  const [av, setAvatar] = useState(avatar);
  return (
    <div className="flex w-[60%] bg-gradient-radial flex-col h-full to-[#08fbff] from-[#0076ff] items-center justify-center">
      <div className="flex justify-center gap-1 text-black items-center fixed top-0 bg-gradient-radial from-[#ff00bf] to-[#bb1090] w-[60%] border-b-[7px] border-black">
        <h1 className="text-3xl py-2">Showing stats for:</h1>
        <p className="text-3xl font-semibold py-2">{username}</p>
      </div>
      <h1 className="text-4xl static font-semibold py-4 text-black">
        DogeCoin: {dogecoin}
      </h1>
      <div className="w-[17vw] h-[17vw] flex items-center justify-center">
        <Image
          width={250}
          height={250}
          className="w-[15vw] h-[15vw]"
          alt="doge"
          src={av}
          priority
        ></Image>
      </div>
    </div>
  );
}
