import PostsGrid from '../posts/posts-grid'
import { PostDataType } from '../../lib/posts-util'
import { Box, Divider, Typography } from '@mui/material'

function Post(props: { posts: PostDataType[] }) {
  return (
    <section>
      <Box sx={{ p: { md: '1rem 4rem', xs: '1rem 2rem' } }}>
        <Typography variant="h3" sx={{ pt: 1, textAlign: 'center' }}>
          News
        </Typography>
        <Divider />

        <PostsGrid posts={props.posts} />
      </Box>
    </section>
  )
}

export default Post
