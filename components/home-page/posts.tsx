import PostsGrid from '../posts/posts.grid'
import { PostDataType } from '../../lib/posts-util'

function Post(props: { posts: PostDataType[] }) {
  return (
    <section>
      <h2>News</h2>
      <PostsGrid posts={props.posts} />
    </section>
  )
}

export default Post
