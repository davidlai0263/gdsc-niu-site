import { PostDataType } from '../../lib/posts-util'
import PostsGrid from './posts-grid'
import { Box, Typography } from '@mui/material'

function AllPost(props: { posts: PostDataType[] }) {
  return (
    <section>
      <Box sx={{ p: { md: '1rem 4rem 1rem 4rem', xs: '1rem 2rem 1rem 2rem' } }}>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          All Posts
        </Typography>
        <PostsGrid posts={props.posts} />
      </Box>
    </section>
  )
}

export default AllPost
