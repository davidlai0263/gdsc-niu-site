import { Typography, Box, TextField, Button } from '@mui/material'
import { FormEvent, useState } from 'react'
import { green, red, grey } from '@mui/material/colors'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

function ContactForm() {
  const [email, setEmail] = useState<{ value: string; error: boolean }>({ value: '', error: false })
  const [name, setName] = useState<{ value: string; error: boolean }>({ value: '', error: false })
  const [message, setMessage] = useState<{ value: string; error: boolean }>({ value: '', error: false })
  const [isSubmit, setIsSubmit] = useState(0)

  function sendMessageHandler(event: FormEvent) {
    event.preventDefault()

    if (!email.value.includes('@')) {
      setEmail((prev) => ({ ...prev, error: true }))
    } else {
      setEmail((prev) => ({ ...prev, error: false }))
    }

    if (!name.value) {
      setName((prev) => ({ ...prev, error: true }))
    } else {
      setName((prev) => ({ ...prev, error: false }))
    }

    if (!message.value) {
      setMessage((prev) => ({ ...prev, error: true }))
    } else {
      setMessage((prev) => ({ ...prev, error: false }))
    }

    if (email.value.includes('@') && name.value && message.value) {
      console.log('send post')
      fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          email: email.value,
          name: name.value,
          message: message.value,
        }),
      }).then((response) => {
        if (response.status === 201) {
          setIsSubmit(1)
        } else {
          setIsSubmit(2)
        }
      })
    }
  }

  if (isSubmit === 1) {
    return (
      <Box sx={{ m: 4, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <CheckCircleOutlineIcon sx={{ m: 1, width: { md: '120px', xs: '80px' }, height: { md: '120px', xs: '80px' }, color: green[500] }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          完成
        </Typography>
        <Typography sx={{ mb: 1 }}>我們會盡快回復您的訊息</Typography>
        <Button
          variant="contained"
          sx={{ m: 2, backgroundColor: grey[500] }}
          onClick={(event) => {
            setIsSubmit(0)
          }}
        >
          <ArrowBackIcon />
          <Typography sx={{ mr: 1 }}>返回</Typography>
        </Button>
      </Box>
    )
  }
  if (isSubmit === 2) {
    return (
      <Box sx={{ m: 4, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <ErrorOutlineIcon sx={{ m: 1, width: { md: '150px', xs: '100px' }, height: { md: '150px', xs: '100px' }, color: red[500] }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          失敗
        </Typography>
        <Typography sx={{ mb: 1 }}>請重新嘗試</Typography>
        <Button
          variant="contained"
          sx={{ m: 2, backgroundColor: grey[500] }}
          onClick={(event) => {
            setIsSubmit(0)
          }}
        >
          <ArrowBackIcon />
          <Typography>返回</Typography>
        </Button>
      </Box>
    )
  }

  return (
    <section>
      <Box sx={{ p: { md: '2rem 4rem ', xs: '2rem' } }}>
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
          Contact Us
        </Typography>
        <Box component="form" onSubmit={sendMessageHandler} noValidate autoComplete="off" display="flex" mt={2} alignItems="center" flexDirection="column">
          <Box display="flex" flexDirection="column" width="100%" maxWidth="500px" alignItems="center">
            <TextField
              type="email"
              value={email.value}
              label="email"
              required
              error={email.error}
              helperText={email.error ? 'email 格式錯誤' : null}
              onChange={(event) => {
                setEmail((prev) => ({ ...prev, value: event.target.value }))
              }}
              sx={{ flex: 1, mt: 3, height: '4rem', width: '100%' }}
            />
            <TextField
              type="name"
              label="name"
              value={name.value}
              required
              error={name.error}
              helperText={name.error ? '不能為空' : null}
              onChange={(event) => {
                setName((prev) => ({ ...prev, value: event.target.value }))
              }}
              sx={{ flex: 1, mt: 3, height: '4rem', width: '100%' }}
            />
            <TextField
              type="text"
              value={message.value}
              label="message"
              required
              helperText={message.error ? '不能為空' : null}
              error={message.error}
              onChange={(event) => {
                setMessage((prev) => ({ ...prev, value: event.target.value }))
              }}
              multiline
              sx={{ flex: 1, mt: 3, height: '4rem', width: '100%' }}
            />
          </Box>
          <Button type="submit" variant="contained" sx={{ mt: 3, width: '100%', maxWidth: '500px' }}>
            <Typography>送出</Typography>
          </Button>
        </Box>
      </Box>
    </section>
  )
}

export default ContactForm

// function sendMessageHandler(event: SyntheticEvent) {
//   event.preventDefault()

//   const target = event.target as typeof event.target & {
//     email: { value: string }
//     name: { value: string }
//     message: { value: string }
//   }

//   console.log(target.email.value)
// }
