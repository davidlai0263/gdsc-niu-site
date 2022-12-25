import { PostDataType } from '../../lib/posts-util'
import PostsGrid from './posts-grid'
import { Box } from '@mui/system'

function AllPost(props: { posts: PostDataType[] }) {
  return (
    <section>
      <Box sx={{ p: { md: '1rem 4rem 1rem 4rem', xs: '1rem 2rem 1rem 2rem' } }}>
        <h1 style={{ textAlign: 'center' }}>All Posts</h1>
        <PostsGrid posts={props.posts} />
      </Box>
    </section>
  )
}

export default AllPost
