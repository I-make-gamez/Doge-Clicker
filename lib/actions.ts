"use server";

import { sql } from "@vercel/postgres";
import { LoginUser, User } from "./definitions";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import crypto from "crypto";
import { config } from "dotenv";

const defaultAvatar = "/images/doge.png";

config();

export async function registerUser(prevState: any, formData: FormData) {
  const schema = z.object({
    username: z.string().min(1),
    password: z.string().min(1),
    passwordReEnter: z.string().min(1),
  });
  const data = schema.parse({
    username: formData.get("username") || "", // Handle null case
    password: formData.get("password") || "", // Handle null case
    passwordReEnter: formData.get("passwordReEnter") || "", // Handle null case
  });
  try {
    if (data.password === data.passwordReEnter) {
      // Create a hash of the password using SHA-256 algorithm
      const hashedPassword = crypto
        .createHash("sha256")
        .update(data.password)
        .digest("hex");
      await sql`
              INSERT INTO users(username, password, admin, dogeCoin, clickPower, clicksPer, avatar, level, exp)
              VALUES (${data.username}, ${hashedPassword}, false, 0, 1, 0, ${defaultAvatar}, 1, 0)
          `;
      revalidatePath("/");
      // signIn("credentials", {
      //   username: data.username,
      //   password: hashedPassword,
      //   redirect: false,
      // });
    } else {
      return { message: "Passwords Don't Match" };
    }
  } catch (error) {
    return { message: `Username Taken` }; // Return specific error message
  }
}

export async function fetchUser(username: string) {
  try {
    const query = await sql`
        SELECT username, admin, dogeCoin, clickPower, clicksPer, avatar, level, exp FROM users WHERE username=${username}`;
    const user = query.rows[0];
    if (user.username === "Admin") {
      return;
    }
    return user as User;
  } catch (error) {
    return;
  }
}

async function fetchUserLogin(username: string, password: string) {
  try {
    const query = await sql`
    SELECT * FROM users WHERE username=${username} OR password=${password}`;
    const user = query.rows[0];
    if (user.admin === true) {
      return;
    }
    return user as LoginUser;
  } catch (error) {
    return;
  }
}

// /src/server/services/userService.ts

export async function authenticate(username: string, password: string) {
  const userLogin = await fetchUserLogin(username, password);
  const hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
  if (
    username !== userLogin?.username &&
    hashedPassword !== userLogin?.password
  ) {
    //(1)
    return null; //(2)
  }

  const user = await fetchUser(username);

  return user; //(4)
}
