import { sql } from "@vercel/postgres";
import { User } from "./definitions";

export async function fetchUser(username: string) {
    try {
        const query = await sql`
        SELECT * FROM users WHERE username=${username}`
        const user = query.rows[0]
        return user as User;
    } catch (error) {
        return
    }
}