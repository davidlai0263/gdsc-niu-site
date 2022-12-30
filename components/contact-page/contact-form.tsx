import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function ContactForm() {
  return (
    <section>
      <Typography variant="h4" component="h2" sx={{ m: 2, textAlign: 'center' }}>
        Contact Us
      </Typography>
      <Box display="flex" justifyContent="center">
        <Box component="form" noValidate autoComplete="off" display="flex" flexDirection="column" maxWidth="500px" justifyContent="center">
          <TextField id="email" type="email" label="email" sx={{ pt: 1, height: '4rem', width: '100%' }} />
          <TextField id="name" type="name" label="text" sx={{ pt: 1, height: '4rem', width: '100%' }} />
          <TextField id="message" label="message" multiline sx={{ pt: 1, height: '4rem', width: '100%' }} />
        </Box>
      </Box>
    </section>
  )
}

export default ContactForm
