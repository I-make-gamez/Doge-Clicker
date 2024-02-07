"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      <title>Not Found | Doge Clicker</title>
      <div className="flex flex-col w-full h-[88vh] bg-blue-600 items-center justify-center">
        <h1 className="text-2xl my-5">Error 404 - Page Not Found :/</h1>
        <Link className="text-lg" href={"/"}>
          Home
        </Link>
      </div>
    </div>
  );
}
