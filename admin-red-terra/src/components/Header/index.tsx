import { AppBar } from './styles'
import { INavigationProps } from '../../interfaces/navigationProps'
import { Tooltip } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { signOutRequest } from '../../store/modules/auth/actions'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Header(props: INavigationProps) {
  const { open, toggleDrawer } = props
  const { signed, userData } = useSelector((state: any) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!signed) {
      navigate('/signin')
    }
  }, [signed, userData, navigate])

  function handleSignOut(): void {
    dispatch(signOutRequest())
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            p: '24px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Red Terra
            </Typography>
          </>
          <>
            <Toolbar
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'center',
                gap: '0.25rem'
              }}
            >
              <Typography
                component="h1"
                variant="h6"
                sx={{ lineHeight: '100%', fontSize: '1rem' }}
              >
                {userData.name}
              </Typography>
              <Typography
                component="h1"
                variant="h6"
                sx={{
                  lineHeight: '100%',
                  fontSize: '0.7rem',
                  fontWeight: 'normal'
                }}
              >
                {userData.email}
              </Typography>
            </Toolbar>
            <Tooltip title="Sair">
              <IconButton onClick={handleSignOut}>
                <LogoutIcon sx={{ color: '#fff' }} />
              </IconButton>
            </Tooltip>
          </>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
