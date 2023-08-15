import { Box, CircularProgress } from '@mui/material'

function Loader() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default Loader
