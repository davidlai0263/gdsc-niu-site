import PostItem from './post-item'
import { posts as PostType } from '@prisma/client'
import Grid from '@mui/material/Unstable_Grid2'

function PostsGrid(props: { posts: PostType[] }) {
  const { posts } = props

  return (
    <Grid container rowSpacing={5} spacing={4} m={1}>
      {posts.map((post) => (
        <Grid key={post.shortId} xs={12} md={4}>
          <PostItem post={post} />
        </Grid>
      ))}
    </Grid>
  )
}

export default PostsGrid
