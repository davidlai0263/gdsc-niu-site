import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import ButtonBase from '@mui/material/ButtonBase'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
import { Button } from '@mui/material'

const pages = [
  { display: 'Home', path: '/' },
  { display: 'News', path: '/posts' },
  { display: 'Event', path: '/' },
  { display: 'About', path: '/' },
  { display: 'Contact', path: '/contact' },
]

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar component="nav" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link href="/">
              <img src={'/gdscniu.svg'} alt="GDSC NIU Logo" width={300} />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
            {pages.map((page) => (
              <ButtonBase key={page.path} href={page.path} LinkComponent={Link} sx={{ color: '#5F6368', height: 70, width: 100, fontSize: 16, fontFamily: '"Roboto","Helvetica","Arial",sans-serif' }}>
                {page.display}
              </ButtonBase>
            ))}
          </Box>
          {/* Desktop */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* Menu鈕 */}

            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            {/* Menu清單 */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link key={page.path} href={page.path} style={{ textDecoration: 'none' }}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: '#5F6368' }}>
                      {page.display}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center', alignItems: 'center' }}>
              <Link href="/">
                <img src={'/gdscniu.svg'} alt="GDSC NIU Logo" height={70} />
              </Link>
            </Box>
          </Box>
          {/* Phone */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
