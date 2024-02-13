import Image from "next/image";
import { useState } from "react";

export default function MiddlePanel() {
  const [dogeSrc, setDogeSrc] = useState("/images/doge.png");

  return (
    <div className="flex w-[60%] bg-gradient-radial flex-col h-full to-[#08fbff] from-[#0076ff] items-center justify-center">
      <h1 className="text-4xl static font-semibold py-4 text-black">
        DogeCoin: {0}
      </h1>
      <div className="w-[17vw] h-[17vw] flex items-center justify-center">
        <Image
          width={250}
          height={250}
          className="w-[15vw] h-[15vw] active:w-[15.75vw] active:h-[15.75vw]"
          alt="doge"
          src={dogeSrc}
          // onClick={() => {
          //   setDc(dc + 1);
          //   setDogeSrc("/images/dogeBark.png");
          //   localStorage.setItem('dc', dc.toString())
          //   setTimeout(() => {
          //     setDogeSrc("/images/doge.png");
          //   }, 200);
          // }}
          priority
        ></Image>
      </div>
    </div>
  );
}
