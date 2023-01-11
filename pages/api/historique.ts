// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';

type Data = {
  name: string
}

export default async function historique(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const fileContents = fs.readFile("src/json/historique.json", 'utf8', (err, data) => {
      if (err)
        res.status(500);
      res.status(200).json(JSON.parse(data));
    });
  }
  else {
    res.status(404);
  }
}
