import { Box, ButtonBase, Chip, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const welcomeTextStyle = {
  fontSize: 24,
  my: 1,
}
const welcomeTextStyleXs = {
  fontSize: 24,
  mt: 1,
}

function Intro() {
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'block' }, m: 0, p: 0 }} >
        <Box sx={{ display: 'flex', height: '80vh' }}>
          <Box
            bgcolor='white'
            sx={{
              width: '30vw',
              height: '80vh',
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
                }}
              ></Chip>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={welcomeTextStyle}>歡迎來到</Typography>
              <Typography sx={welcomeTextStyle}>國立宜蘭大學</Typography>
              <Box display='flex'>
                <Typography sx={{ ...welcomeTextStyle, ":first-letter": { color: '#4586F3', fontWeight: 'bold' } }}>Google</Typography>
                <Typography sx={{ ...welcomeTextStyle, ":first-letter": { color: '#EB4334', fontWeight: 'bold' } }}>Developer</Typography>
              </Box>
              <Box display='flex'>
                <Typography sx={{ ...welcomeTextStyle, ":first-letter": { color: '#FBBD06', fontWeight: 'bold' } }}>Student</Typography>
                <Typography sx={{ ...welcomeTextStyle, ":first-letter": { color: '#35AA53', fontWeight: 'bold' } }}>Clubs</Typography>
              </Box>
              <Typography sx={{ ...welcomeTextStyle, mt: 10, fontWeight: 'bold' }}>網站建置中 敬請期待！</Typography>
            </Box>
          </Box>
          <img src={'/cover.jpg'} alt="Background Image" style={{ objectFit: 'cover', objectPosition: 'left', overflow: 'hidden' }} />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <ButtonBase sx={{ flexGrow: 1, height: 150, bgcolor: '#4586F3' }} href={'/events'} LinkComponent={Link}>
            <Typography color="white" sx={{ fontFamily: 'Google Sans', fontSize: 22 }}>EVENTS</Typography>
          </ButtonBase>
          <ButtonBase sx={{ flexGrow: 1, height: 150, bgcolor: '#EB4334' }} href={'/news'} LinkComponent={Link}>
            <Typography color="white" sx={{ fontFamily: 'Google Sans', fontSize: 22 }}>NEWS</Typography>
          </ButtonBase>
          <ButtonBase sx={{ flexGrow: 1, height: 150, bgcolor: '#FBBD06' }} href={'/about'} LinkComponent={Link}>
            <Typography color="white" sx={{ fontFamily: 'Google Sans', fontSize: 22 }}>ABOUT</Typography>
          </ButtonBase>
          <ButtonBase sx={{ flexGrow: 1, height: 150, bgcolor: '#35AA53' }} href={'/contact'} LinkComponent={Link}>
            <Typography color="white" sx={{ fontFamily: 'Google Sans', fontSize: 22 }}>CONTACT</Typography>
          </ButtonBase>
        </Box>
      </Box>
      {/* 以上為Desktop */}

      <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ width: '100%' }}>
          <img src={'/gdscniu_border.svg'} alt="GDSC NIU Logo with border" />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography sx={welcomeTextStyleXs}>歡迎來到</Typography>
          <Typography sx={welcomeTextStyleXs}>國立宜蘭大學</Typography>
          <Box display='flex'>
            <Typography sx={{ ...welcomeTextStyle, ":first-letter": { color: '#4586F3', fontWeight: 'bold' } }}>Google</Typography>
            <Typography sx={{ ...welcomeTextStyle, ":first-letter": { color: '#EB4334', fontWeight: 'bold' } }}>Developer</Typography>
          </Box>
          <Box display='flex'>
            <Typography sx={{ ...welcomeTextStyle, ":first-letter": { color: '#FBBD06', fontWeight: 'bold' } }}>Student</Typography>
            <Typography sx={{ ...welcomeTextStyle, ":first-letter": { color: '#35AA53', fontWeight: 'bold' } }}>Clubs</Typography>
          </Box>
          <Typography sx={{ ...welcomeTextStyleXs, mt: 4, fontWeight: 'bold' }}>網站建置中 敬請期待！</Typography>
        </Box>
      </Box>
    </>
  )
}

export default Intro
