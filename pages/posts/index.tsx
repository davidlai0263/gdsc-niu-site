import { GetStaticProps } from 'next'
import AllPost from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-util'
import { posts as PostType } from '@prisma/client'

function AllPostPage(props: { posts: PostType[] }) {
  return (
    <>
      <AllPost posts={props.posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts()
  //TODO check revalidate time
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 10800,
  }
}

export default AllPostPage
