import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'storage/posts')

export interface PostDataType {
  slug: string
  title: string
  date: string
  image: string
  excerpt: string
  isPin: boolean
  content: string
}

function getPostData(fileName: string) {
  const filePath = path.join(postDirectory, fileName)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)

  const postSlug = fileName.replace(/\.md$/, '')
  const postData = { slug: postSlug, ...data, content } as PostDataType

  return postData
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postDirectory)
  const allPosts = postFiles.map((postFile) => getPostData(postFile))
  const sortedPots = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))

  return sortedPots
}

export function getPinPosts() {
  const allPosts = getAllPosts()
  const pinPosts = allPosts.filter((post) => post.isPin)

  return pinPosts
}
