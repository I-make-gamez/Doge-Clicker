import { connectToMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    connectToMongoDB().catch(err => res.json(err));

    if (!req.body) return res.status(400).json({error: "no data"})

    const {username, email, password} = req.body
    const userExistsUsername = await User.findOne({username})
    const userExistsEmail = await User.findOne({email})

    if(!userExistsUsername && !userExistsEmail) {
        return res.status(409).json({error: "Username / Email Taken"})
    } else {
        if (password.length < 8) {
            return res.status(409).json({error: "Password should be longer than 8 characters"})
        }
    }
}