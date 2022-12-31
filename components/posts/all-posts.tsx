import { PostDataType } from '../../lib/posts-util'
import PostsGrid from './posts-grid'
import { Box, Typography } from '@mui/material'

function AllPost(props: { posts: PostDataType[] }) {
  return (
    <section>
      <Box sx={{ p: { md: '2rem 4rem ', xs: '2rem' } }}>
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
          All Posts
        </Typography>
        <PostsGrid posts={props.posts} />
      </Box>
    </section>
  )
}

export default AllPost
