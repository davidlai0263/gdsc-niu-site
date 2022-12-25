import { GetStaticProps } from 'next'
import Intro from '../components/home-page/intro'
import Post from '../components/home-page/posts'
import { getPinPosts, PostDataType } from '../lib/posts-util'

function HomePage(props: { posts: PostDataType[] }) {
  return (
    <>
      <Intro />
      <Post posts={props.posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pinPosts = getPinPosts()
  //TODO check revalidate time
  return {
    props: {
      posts: pinPosts,
    },
    revalidate: 60,
  }
}

export default HomePage
