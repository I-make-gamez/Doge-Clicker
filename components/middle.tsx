import Image from "next/image"

export default function MiddlePanel() {
    return (
        <div className="flex w-[60%] bg-gradient-radial flex-col h-full to-blue-300 from-cyan-600 items-center justify-center">
        <h1 className="text-4xl font-semibold py-4 text-black">DogeCoin: 0</h1>
        <Image
          width={250}
          height={250}
          className="doge w-[15vw] h-[15vw]"
          alt="doge"
          src={"/images/doge.png"}
          priority={true}
        ></Image>
      </div>
    )
}