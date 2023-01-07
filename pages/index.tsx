import { GetStaticProps } from 'next'
import Intro from '../components/home-page/intro'
import Post from '../components/home-page/posts'
import { getMarkedPosts } from '../lib/posts-util'
import { posts as PostType } from '@prisma/client'

function HomePage(props: { posts: PostType[] }) {
  return (
    <>
      <Intro />
      <Post posts={props.posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pinPosts = await getMarkedPosts()
  //TODO check revalidate time
  return {
    props: {
      posts: pinPosts,
    },
    revalidate: 10800,
  }
}

export default HomePage
