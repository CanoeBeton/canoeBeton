// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

type Data = {
  name: string
}

export default async function team(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const fileContents = fs.readFile('src/json/team.json', 'utf8', (err, data) => {
      if (err) res.status(500)
      res.status(200).json(JSON.parse(data))
    })
  } else if (req.method === 'POST') {
    post(req, res)
  } else {
    res.status(404)
  }
}

async function post(req: NextApiRequest, res: NextApiResponse<Data>) {
  fs.readFile('src/json/team.json', (err, data) => {
    if (err) res.status(500)
    const team = JSON.parse(data.toString())

    // Add the new member to the array
    team.push({
      name: req.body.name,
      role: req.body.role,
      description: req.body.description,
      imagePath: 'Respos/' + req.body.imagePath + '.webp',
    })

    // Write the updated array back to the JSON file
    fs.writeFile('src/json/team.json', JSON.stringify(team), (err) => {
      if (err) res.status(500)
      res.status(200)
    })
  })
}
