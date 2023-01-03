import { contacts } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/prisma'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name, message } = JSON.parse(req.body) as { email: string; name: string; message: string }
    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      res.status(422).json({ message: 'Invalid input.' })
    }

    const validData = { email: email, name: name, message: message }

    try {
      const result = await prisma.contacts.create({ data: { ...validData } })
      res.status(201).json({ message: 'Successfully stored message.', validData: validData, result: result })
    } catch (error) {
      res.status(500).json({ message: 'create failed', error: error })
    }
  }
}

export default handler
