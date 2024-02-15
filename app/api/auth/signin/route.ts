import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession()
    if (session) {
        return res.status(200).send({message: "already signed in"})
    } else {
        
    }
}