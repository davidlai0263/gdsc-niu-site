import { Box, Avatar, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { CardDetail } from '../../lib/about-util'
import Image from 'next/image'
import { grey } from '@mui/material/colors'

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

function About(props: { cardDetails: CardDetail[] }) {
  return (
    <Box sx={{ p: { md: '2rem 4rem ', xs: '2rem' } }}>
      <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
        Organizers
      </Typography>
      <Box display="flex" justifyContent="center">
        <AboutGrid cardDetails={props.cardDetails} />
      </Box>
    </Box>
  )
}

function AboutGrid(props: { cardDetails: CardDetail[] }) {
  return (
    <Grid container rowSpacing={5} spacing={4} m={1} width="100%" maxWidth={1200}>
      {props.cardDetails.map((item, index) => {
        return (
          <Grid xs={12} md={3} key={`organizer-grid-${index}`}>
            <Box display="flex" justifyContent="center">
              <Avatar sx={avatarSx}>
                <Image src={item.photo} alt={item.title} width={200} height={200} />
              </Avatar>
            </Box>
            <Typography variant="h6" color={grey[700]} fontWeight={700} textAlign="center">
              {item.name}
            </Typography>
            <Typography variant="subtitle1" color={grey[700]} textAlign="center">
              {item.company}
            </Typography>
            <Typography variant="subtitle2" color={grey[700]} textAlign="center">
              {item.title}
            </Typography>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default About
