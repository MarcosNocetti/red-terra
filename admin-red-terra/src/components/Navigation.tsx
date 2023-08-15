import { Box, Container, Toolbar } from '@mui/material'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

function Navigation(): JSX.Element {
  const [open, setOpen] = useState(true)
  const toggleDrawer = (): void => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Header open={open} toggleDrawer={toggleDrawer} />

      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto'
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
}

export default Navigation
