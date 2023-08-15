import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import {
  getHomeRequest,
  homeResetBaseStateRequest,
  updateHomeRequest
} from '../store/modules/home/actions'

function Home() {
  const [isFormTouched, setIsFormTouched] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')
  const { home, loading } = useSelector((state: any) => state.home)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHomeRequest())

    return () => {
      dispatch(homeResetBaseStateRequest())
    }
  }, [])

  useEffect(() => {
    if (home) {
      setVideoUrl(home.videoUrl)
    }
  }, [home])

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    const videoUrl = event.currentTarget.videoUrl.value as string

    dispatch(updateHomeRequest(videoUrl))
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box>
          <Typography variant="h4" component="h1">
            Home
          </Typography>
          <Divider sx={{ marginBottom: '2rem' }} />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid
              container
              spacing={0}
              sx={{ justifyContent: 'space-between' }}
            >
              <Grid item xs={7.9}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="videoUrl"
                  label="Video url"
                  name="videoUrl"
                  autoComplete="videoUrl"
                  value={videoUrl}
                  onChange={() => setIsFormTouched(true)}
                  disabled
                />
              </Grid>
              <Grid item xs={3.9}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="video"
                  name="video"
                  autoComplete="video"
                  type="file"
                  onChange={() => setIsFormTouched(true)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!isFormTouched}
            >
              Save
            </Button>
          </Box>
        </Box>
      )}
    </>
  )
}

export default Home
