import PostsGrid from '../posts/posts-grid'
import { posts as PostType } from '@prisma/client'
import { Box, Divider, Typography } from '@mui/material'

function Post(props: { posts: PostType[] }) {
  return (
    <section>
      <Box sx={{ p: { md: '1rem 4rem', xs: '1rem 2rem' } }}>
        <Typography variant="h4" sx={{ pt: 1, pb: 1, textAlign: 'center' }}>
          News
        </Typography>
        <Divider />

        <PostsGrid posts={props.posts} />
      </Box>
    </section>
  )
}

export default Post
