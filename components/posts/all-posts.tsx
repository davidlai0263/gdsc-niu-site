import { PostDataType } from '../../lib/posts-util'
import PostsGrid from './posts.grid'

function AllPost(props: { posts: PostDataType[] }) {
  return (
    <section>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  )
}

export default AllPost
