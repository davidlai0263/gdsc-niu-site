import PostItem from './post-item'
import { PostDataType } from '../../lib/posts-util'
import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

function PostsGrid(props: { posts: PostDataType[] }) {
  const { posts } = props

  return (
    <Grid container spacing={3} m={1}>
      {posts.map((post) => (
        <Grid key={post.slug} xs={4}>
          <PostItem post={post} />
        </Grid>
      ))}
    </Grid>
  )
}

export default PostsGrid
