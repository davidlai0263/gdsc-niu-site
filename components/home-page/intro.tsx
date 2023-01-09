import { Box, ButtonBase, Chip, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import coverPic from '../../public/cover.jpg'

function Intro() {
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', m: 0, p: 0 }}>
        <Box sx={{ display: 'flex' }}>
          <Box
            bgcolor="white"
            sx={{
              width: '30vw',
              maxWidth: '432px',
            }}
          >
            <img src={'/gdscniu_border.svg'} alt="GDSC NIU Logo with border" />
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
              <Chip
                label="國立宜蘭大學 — Google 學生開發者社群"
                style={{ fontSize: 20, fontWeight: 'bold' }}
                sx={{
                  color: 'white',
                  bgcolor: '#4586F3',
                  mr: 2,
                  ml: 2,
                }}
              ></Chip>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ my: 1 }}>
                歡迎來到
              </Typography>
              <Typography variant="h5" sx={{ my: 1 }}>
                國立宜蘭大學
              </Typography>
              <Box display="flex">
                <Typography variant="h5" sx={{ mt: 1, ':first-letter': { color: '#4586F3', fontWeight: 'bold' } }}>
                  Google
                </Typography>
                <Typography variant="h5" sx={{ mt: 1, ':first-letter': { color: '#EB4334', fontWeight: 'bold' } }}>
                  Developer
                </Typography>
              </Box>
              <Box display="flex">
                <Typography variant="h5" sx={{ mt: 1, ':first-letter': { color: '#FBBD06', fontWeight: 'bold' } }}>
                  Student
                </Typography>
                <Typography variant="h5" sx={{ mt: 1, ':first-letter': { color: '#35AA53', fontWeight: 'bold' } }}>
                  Clubs
                </Typography>
              </Box>
            </Box>
          </Box>
          <Image src={coverPic} alt="Background Image" style={{ width: '100%', height: '80vh', objectFit: 'cover', overflow: 'hidden' }} />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <ButtonBase sx={{ flexGrow: 1, height: 150, bgcolor: '#4586F3' }} href={'/event'} LinkComponent={Link}>
            <Typography variant="h5" component="h2" color="white">
              EVENTS
            </Typography>
          </ButtonBase>
          <ButtonBase sx={{ flexGrow: 1, height: 150, bgcolor: '#EB4334' }} href={'/posts'} LinkComponent={Link}>
            <Typography variant="h5" component="h2" color="white">
              NEWS
            </Typography>
          </ButtonBase>
          <ButtonBase sx={{ flexGrow: 1, height: 150, bgcolor: '#FBBD06' }} href={'/about'} LinkComponent={Link}>
            <Typography variant="h5" component="h2" color="white">
              ABOUT
            </Typography>
          </ButtonBase>
          <ButtonBase sx={{ flexGrow: 1, height: 150, bgcolor: '#35AA53' }} href={'/contact'} LinkComponent={Link}>
            <Typography variant="h5" component="h2" color="white">
              CONTACT
            </Typography>
          </ButtonBase>
        </Box>
      </Box>
      {/* 以上為Desktop */}

      <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ width: '100%' }}>
          <img src={'/gdscniu_border.svg'} alt="GDSC NIU Logo with border" />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ my: 1 }}>
            歡迎來到
          </Typography>
          <Typography variant="h5" sx={{ my: 1 }}>
            國立宜蘭大學
          </Typography>
          <Box display="flex">
            <Typography variant="h5" sx={{ mt: 1, ':first-letter': { color: '#4586F3', fontWeight: 'bold' } }}>
              Google
            </Typography>
            <Typography variant="h5" sx={{ mt: 1, ':first-letter': { color: '#EB4334', fontWeight: 'bold' } }}>
              Developer
            </Typography>
          </Box>
          <Box display="flex">
            <Typography variant="h5" sx={{ mt: 1, ':first-letter': { color: '#FBBD06', fontWeight: 'bold' } }}>
              Student
            </Typography>
            <Typography variant="h5" sx={{ mt: 1, ':first-letter': { color: '#35AA53', fontWeight: 'bold' } }}>
              Clubs
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Intro
