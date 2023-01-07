import Link from 'next/link'
import Image from 'next/image'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography, Box } from '@mui/material'
import { posts as PostType } from '@prisma/client'

function PostItem(props: { post: PostType }) {
  const { title, titleImage, description, publishedAt, shortId } = props.post
  const formattedDate = new Date(publishedAt).toLocaleDateString('zh-TW', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const imagePath = titleImage.length > 0 ? titleImage : 'images/posts/deafult_corver.webp'
  const linkPath = `/posts/${shortId}`

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ width: '100%', maxWidth: 440, textAlign: 'center' }}>
        <CardActionArea href={linkPath} LinkComponent={Link}>
          <CardMedia sx={{ height: 140 }} image={imagePath} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" noWrap>
              {title}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {formattedDate}
            </Typography>
            <Typography variant="body2" color="text.secondary" height={50}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}

export default PostItem
