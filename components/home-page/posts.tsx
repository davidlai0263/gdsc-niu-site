import PostsGrid from '../posts/posts.grid'
import { PostDataType } from '../../lib/posts-util'
import { Box } from '@mui/material'

function Post(props: { posts: PostDataType[] }) {
  return (
    <section>
      <h2 style={{ marginLeft: '64px' }}>News</h2>
      <PostsGrid posts={props.posts} />
    </section>
  )
}

export default Post
