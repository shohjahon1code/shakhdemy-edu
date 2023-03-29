import { NextApiResponse, NextApiRequest } from "next";
import data from "../../../../db.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { firstCategory } = req.body;
      const response = data.page[firstCategory].find;
      return res.status(200).json(response);
    } catch (error) {
      const result = error as Error;
      return res.status(400).json(result.message);
    }
  }
}
