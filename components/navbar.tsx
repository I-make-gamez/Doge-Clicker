import Link from "next/link";

export default function NavBar() {
  return (
    <div
      className={`flex items-center justify-start gap-2 text-2xl text-white border-t-[7px] border-black bg-gradient-to-r from-fuchsia-900 to-fuchsia-500 h-[12vh]`}
    >
      <Link className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`} href="https://www.imakegamez.com">
        IMG Home
      </Link>
      <a className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`}>Avatar Selection</a>
      <a className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`}>User Search</a>
      <a className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`}>Settings</a>
      <Link
        className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`}
        href="https://github.com/I-make-gamez/I-make-gamez"
      >
        Source Code
      </Link>
      <Link className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`} href="https://github.com/I-make-gamez">
        IMG
      </Link>
      <Link className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`} href="https://discord.gg/7vnwbMr8ed">
        Discord
      </Link>
      <a className={`h-full items-center flex`}>Version:</a>
    </div>
  );
}
