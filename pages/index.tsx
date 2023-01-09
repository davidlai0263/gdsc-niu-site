import { GetStaticProps } from 'next'
import Intro from '../components/home-page/intro'
import Post from '../components/home-page/posts'
import { getMarkedPosts } from '../lib/posts-util'
import { posts as PostType } from '@prisma/client'
import { UpcomingGrid } from '../components/event-page/event'
import { getAllEvent, Event } from '../lib/event-util'
import { Box, Divider, Typography } from '@mui/material'

function HomePage(props: { posts: PostType[]; upcomingEvent: Event[] }) {
  return (
    <>
      <Intro />
      <Post posts={props.posts} />
      {props.upcomingEvent.length > 0 ? (
        <Box>
          <Typography variant="h4" sx={{ pt: 1, pb: 1, textAlign: 'center' }}>
            Upcoming Event
          </Typography>
          <Divider />
          <Box display="flex" justifyContent="center">
            <UpcomingGrid events={props.upcomingEvent} />
          </Box>
        </Box>
      ) : null}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pinPosts = await getMarkedPosts()
  const events = await getAllEvent()

  return {
    props: {
      posts: pinPosts,
      upcomingEvent: events.upcoming,
    },
    revalidate: 60 * 30,
  }
}

export default HomePage
