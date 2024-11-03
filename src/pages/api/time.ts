import { NextApiRequest, NextApiResponse } from "next";

export default function hendler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const date = new Date();
	res.json({ time: date.toLocaleDateString() });
}