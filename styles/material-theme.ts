import { createTheme } from '@mui/material/styles'
import { Roboto } from '@next/font/google'

export const themeFont = Roboto({ weight: '400' })
const theme = createTheme({
  typography: {
    fontFamily: themeFont.style.fontFamily,
  },
})

export default theme
