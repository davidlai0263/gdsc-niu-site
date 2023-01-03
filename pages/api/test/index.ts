import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/prisma'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // await prisma.users.deleteMany()
  // const create = await prisma.users.create({
  //   data: {
  //     name: 'peilun',
  //     googleId: '46679555',
  //     email: 'peilun2016@gmail.com',
  //     socialAccount: { github: '#peilun_', ig: 'peter' },
  //     userpreference: {
  //       create: {
  //         emailUpdates: true,
  //       },
  //     },
  //   },
  //   include: {
  //     userpreference: true,
  //   },
  // })

  // const createMany = await prisma.users.createMany({
  //   data: {
  //     name: 'peilun',
  //     googleId: `${Math.floor(2016 * Math.random())}`,
  //     email: `peilun${Math.floor(2016 * Math.random())}@gmail.com`,
  //     socialAccount: { github: '#peilun_', ig: 'peter' },
  //   },
  // })

  // res.status(200).json(createMany)

  const find = await prisma.users.update({
    where: { email: 'peilun1128@gmail.com' },
    data: {
      userpreference: {
        update: {
          emailUpdates: true,
        },
      },
    },
  })
  res.status(200).json(find)
}

export default handler
