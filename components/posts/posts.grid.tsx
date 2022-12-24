import PostItem from './post-item'
import { PostDataType } from '../../lib/posts-util'
import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

function PostsGrid(props: { posts: PostDataType[] }) {
  const { posts } = props

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} spacing={1} sx={{ width: '100%' }}>
        {posts.map((post) => (
          <Grid key={post.slug} xs={6}>
            <PostItem post={post} />
            <PostItem post={post} />
            <PostItem post={post} />
            <PostItem post={post} />
            <PostItem post={post} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PostsGrid
