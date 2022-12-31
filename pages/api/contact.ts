import { NextApiRequest, NextApiResponse } from 'next'

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name, message } = JSON.parse(req.body) as { email: string; name: string; message: string }
    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      res.status(422).json({ message: 'Invalid input.' })
      return
    }

    const validData = { email: email, name: name, message: message }
    res.status(201).json({ message: 'Successfully stored message.', validData: validData })
    return
  }
}

export default handler
