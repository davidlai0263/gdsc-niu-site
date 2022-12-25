import PostsGrid from '../posts/posts.grid'
import { PostDataType } from '../../lib/posts-util'
import { Box } from '@mui/material'

function Post(props: { posts: PostDataType[] }) {
  return (
    <section>
      <Box p={'2rem 6rem 2rem 6rem'}>
        <h2>News</h2>
        <PostsGrid posts={props.posts} />
      </Box>
    </section>
  )
}

export default Post
