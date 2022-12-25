import PostsGrid from '../posts/posts.grid'
import { PostDataType } from '../../lib/posts-util'
import { Box } from '@mui/material'

function Post(props: { posts: PostDataType[] }) {
  return (
    <section>
      <Box sx={{ p: { md: '1rem 4rem 1rem 4rem', xs: '1rem 2rem 1rem 2rem' } }}>
        <Box sx={{ display: { md: 'block', xs: 'none' } }}>
          <h2>News</h2>
        </Box>

        <PostsGrid posts={props.posts} />
      </Box>
    </section>
  )
}

export default Post
