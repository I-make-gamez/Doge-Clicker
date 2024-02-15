"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { registerUser } from "@/lib/actions";
import { signIn } from "next-auth/react";

const initalState = {
  message: null,
};

export default function Page() {
  const [state, formAction] = useFormState(registerUser, null);

  return (
    <div className="bg-blue-600 w-screen select-text h-full flex flex-col items-center justify-center">
      <title>Register</title>
      {state?.message}
      <div className="w-1/3 bg-white h-[90%] justify-center items-center flex flex-col text-black rounded-md border-[7.5px] border-black">
        <h1 className="my-8 text-3xl font-semibold">Login</h1>
        <form onSubmit={()=>{signIn('credentials')}} className=" text-center justify-center items-center flex flex-col gap-2 w-auto">
          <input
            required
            type="text"
            name="username"
            placeholder="username"
            className={`px-5 py-2 bg-white rounded-md border-[1.5px] border-black placeholder:text-black`}
          />
          <input
            required
            type="password"
            name="password"
            placeholder="password"
            className={`px-5 py-2 bg-white rounded-md border-[1.5px] border-black placeholder:text-black`}
          />
          <button
            type="submit"
            className="my-8 w-full px-5 py-2 border-[1.5px] border-transparent rounded-md hover:border-[1.5px] hover:border-black active:border-transparent bg-blue-500 text-white"
          >
            Sign Up
          </button>
          <div className="flex flex-row gap-1">
            <h1>Don't have an account?</h1>
            <Link
              className="font-semibold hover:text-blue-700 active:text-black"
              href={"/register"}
            >
              {" "}
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
