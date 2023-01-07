import { JSDOM } from 'jsdom'
import { posts } from '@prisma/client'
import prisma from '../prisma/prisma'
import { HackTeamPages } from './posts-util-type'

export async function fetchPostData(shortId: string) {
  const response = await fetch(`https://hackmd.io/@gdsc-niu/${shortId}`)
  const dom = new JSDOM(await response.text())
  const doc = dom.window.document
  const content = doc.getElementById('doc')?.innerHTML!
  // const meta = doc.querySelector('meta[name="description"]')?.getAttribute('content')
  const frontTitle = content.split('#')[0]
  const subImageUrl = frontTitle.substring(frontTitle.indexOf('![](') + 4, frontTitle.indexOf(')'))
  const titleImage = subImageUrl.includes('http') ? subImageUrl : ''
  const description = frontTitle.substring(frontTitle.indexOf('&lt;!-- description[') + 20, frontTitle.indexOf('] --&gt'))
  const bookMarked = frontTitle.includes('&lt;!-- marked --&gt')

  return {
    title: doc.title.replace(' - HackMD', '')!,
    titleImage: titleImage,
    content: content,
    description: description,
    bookMarked: bookMarked,
  }

  //https://hackmd.io/@gdsc-news/BkYkUj4Ki
}

export async function getPostData(shortId: string) {
  const data = await prisma.posts.findFirst({ where: { shortId: shortId } })
  if (data) {
    return serializeData(data)
  }
  return null
}

export async function getAllPosts() {
  const teamPages = (await (await fetch(`https://hackmd.io/api/@gdsc-niu/overview`)).json()) as HackTeamPages
  const allPosts = await Promise.all(
    teamPages.notes.map(async (notes) => {
      // return await fetchPostData(notes.shortId)
      const { title, titleImage, content, description, bookMarked } = await fetchPostData(notes.shortId)
      const user = notes.lastchangeuser
        ? await prisma.users.upsert({
            where: { userPath: notes.lastchangeuser.userpath },
            update: {},
            create: { userPath: notes.lastchangeuser.userpath, name: notes.lastchangeuser.name, photo: notes.lastchangeuser.photo.includes('data:image/svg+xml') ? notes.lastchangeuser.photo : null },
          })
        : null

      const data = {
        shortId: notes.shortId,
        title: title,
        titleImage: titleImage,
        content: content.split(`# ${title}`)[1],
        description: description,
        publishedAt: notes.publishedAt,
        lastChangeAt: notes.lastchangeAt,
        lastChangeUser: user?.id,
        tags: notes.tags,
        bookMarked: bookMarked,
        liked: notes.likedCount,
      }
      //TODO check lastChangeAt
      return await prisma.posts.upsert({
        where: { shortId: notes.shortId },
        update: data,
        create: data,
      })
    })
  )

  return serializeData(allPosts)
}

export async function getShortId() {
  return await prisma.posts.findMany({ select: { shortId: true } })
}

//TODO 繼續完成 NEWS 頁面, 想一下描述與圖片怎麼處理
export async function getMarkedPosts() {
  return serializeData(await prisma.posts.findMany({ where: { bookMarked: true } }))
}

function serializeData(obj: posts[] | posts) {
  if (Array.isArray(obj)) {
    return JSON.parse(JSON.stringify(obj)) as posts[]
  }

  return JSON.parse(JSON.stringify(obj)) as posts
}
