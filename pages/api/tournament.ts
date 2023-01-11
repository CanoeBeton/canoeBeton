import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default async function tournament(req: NextApiRequest, res: NextApiResponse){
  const { tournament } = req.query;
  fs.readFile('src/json/historique.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    const tournaments = JSON.parse(data);
  
    const result = tournaments.find((t:any) => t.name === tournament);
    if (!result) {
      res.status(404).send({ error: 'Tournament not found' });
      return;
    }
    res.send(result);
  });
};