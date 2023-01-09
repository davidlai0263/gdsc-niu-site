import { Box, Avatar, Typography, Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { CardDetail } from '../../lib/about-util'
import Image from 'next/image'
import { grey } from '@mui/material/colors'
import { Events, Event } from '../../lib/event-util'
import Link from 'next/link'
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark'

// const nameFontStyle = {
//   fontFamily: 'Google Sans',
//   textAlign: 'center',
//   fontSize: '20px',
// }
// const introFontStyle = {
//   fontFamily: 'Google Sans',
//   textAlign: 'center',
//   fontSize: '14px',
// }
const avatarSx = {
  my: 2,
  width: '100%',
  height: '100%',
  maxWidth: 200,
}

function Event(props: { events: Events }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{ p: { md: '2rem 4rem ', xs: '2rem' } }}>
      <Typography variant="h4" mb={2} component="h2" sx={{ textAlign: 'center' }}>
        Upcoming Event
      </Typography>

      <UpcomingGrid events={props.events.upcoming} />

      <Typography variant="h4" mt={10} mb={2} component="h2" sx={{ textAlign: 'center' }}>
        Past Event
      </Typography>

      <PastGrid events={props.events.past} />
    </Box>
  )
}

export function UpcomingGrid(props: { events: Event[] }) {
  if (props.events.length == 0) {
    return (
      <Typography variant="h5" color={grey[700]} fontWeight={700} textAlign="center">
        敬請期待!
      </Typography>
    )
  }
  return (
    <Grid container rowSpacing={12} spacing={4} width="100%" maxWidth={1200} justifyContent="center">
      {props.events.map((item, index) => {
        return (
          <Grid xs={12} md={3} key={`upcoming-grid-${index}`} style={{ textDecoration: 'none' }} display="flex" justifyContent="center">
            <Box width={300} height={400} textAlign="center">
              <Box display="flex" justifyContent="center">
                <Avatar sx={avatarSx}>
                  <Image src={item.photo} alt={item.title} width={200} height={200} />
                </Avatar>
              </Box>
              <Typography variant="subtitle1" color={grey[700]} textAlign="center">
                {item.date}
              </Typography>
              <Typography variant="h6" color={grey[700]} fontWeight={700} textAlign="center">
                {item.title}
              </Typography>
              <Typography variant="subtitle2" color={grey[700]} textAlign="center">
                {item.type}
              </Typography>
              <Button variant="contained" href={item.url} LinkComponent={Link} target="_blank" sx={{ mt: 1 }}>
                View Detail
              </Button>
            </Box>
          </Grid>
        )
      })}
    </Grid>
  )
}

function PastGrid(props: { events: Event[] }) {
  return (
    <Grid container rowSpacing={12} spacing={12} justifyContent="center" width="100%" maxWidth={1200}>
      {props.events.map((item, index) => {
        return (
          <Link href={item.url} target="_blank" key={`past-grid-${index}`} style={{ textDecoration: 'none' }}>
            <Grid md={6} xs={12} key={`past-grid-${index}`}>
              <Box width={300} height={300}>
                <Box display="flex" justifyContent="center">
                  <Avatar sx={avatarSx}>
                    <Image src={item.photo} alt={item.title} width={200} height={200} />
                  </Avatar>
                </Box>
                <Typography variant="subtitle1" color={grey[700]} textAlign="center">
                  {item.date}
                </Typography>
                <Typography variant="h6" color={grey[700]} fontWeight={700} textAlign="center">
                  {item.title}
                </Typography>
                <Typography variant="subtitle2" color={grey[700]} textAlign="center">
                  {item.type}
                </Typography>
              </Box>
            </Grid>
          </Link>
        )
      })}
    </Grid>
  )
}

export default Event
