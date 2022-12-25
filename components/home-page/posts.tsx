import PostsGrid from '../posts/posts-grid'
import { PostDataType } from '../../lib/posts-util'
import { Box, Divider } from '@mui/material'

function Post(props: { posts: PostDataType[] }) {
  return (
    <section>
      <Box sx={{ p: { md: '1rem 4rem 1rem 4rem', xs: '1rem 2rem 1rem 2rem' } }}>
        <h2>News</h2>
        <Divider />

        <PostsGrid posts={props.posts} />
      </Box>
    </section>
  )
}

export default Post
