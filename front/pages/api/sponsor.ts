import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import { RestartAlt } from '@mui/icons-material'

type Data = {
  name: string
}

export default async function sponsor(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const fileContents = fs.readFile(
      'src/json/sponsor.json',
      'utf8',
      (err, data) => {
        if (err) {
          res.status(500)
        }
        res.status(200).json(JSON.parse(data))
      }
    )
  } else if (req.method === 'POST') {
    post(req, res)
  } else {
    res.status(404)
  }
}

async function post(req: NextApiRequest, res: NextApiResponse<Data>) {
  fs.readFile('src/json/sponsor.json', (err, data) => {
    if (err) {
      res.status(500)
    }
    const sponsor = JSON.parse(data.toString())

    sponsor.push({
      categorie: req.body.categorie,
      description: req.body.description,
      imagePath: req.body.imagePath + '.webp',
    })

    fs.writeFile('src/json/sponsor.json', JSON.stringify(sponsor), (err) => {
      if (err) res.status(500)
      res.status(200)
    })
  })
}
