import { GetStaticProps } from 'next'
import AllPost from '../../components/posts/all-posts'
import { PostDataType, getAllPosts } from '../../lib/posts-util'

function AllPostPage(props: { posts: PostDataType[] }) {
  return (
    <>
      <AllPost posts={props.posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts()
  //TODO check revalidate time
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60,
  }
}

export default AllPostPage
