import Link from 'next/link'
import Image from 'next/image'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography, Box } from '@mui/material'
import { PostDataType } from '../../lib/posts-util'

function PostItem(props: { post: PostDataType }) {
  const { title, image, excerpt, date, slug } = props.post
  const formattedDate = new Date(date).toLocaleDateString('zh-TW', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ width: '100%', maxWidth: 400, textAlign: 'center' }}>
        <CardActionArea href={linkPath} LinkComponent={Link}>
          <CardMedia sx={{ height: 140 }} image={imagePath} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {formattedDate}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {excerpt}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}

export default PostItem
