import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';
import TabPanel from '../../components/Tabs/TabPanel';
import Tabs from '../../components/Tabs/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import {
  getWhatsHappeningRequest,
  updateWhatsHappeningRequest,
} from '../../store/modules/whatsHappening/actions';
import useConvertImageToBase64 from '../../hooks/convertBase64';
import { statusBase64Request } from '../../store/modules/convertBase64/actions';
import { upload } from '../../helpers/s3';

function WhatsHappening() {
  const [value, setValue] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [bannerUrl, setBannerUrl] = useState('');
  const [title, setTitle] = useState('');
  const [base64Value, setBase64Value] = useState<any>('');

  const { whatsHappening, loading } = useSelector(
    (state: any) => state.whatsHappening
  );
  const { result, convertImageToBase64 } = useConvertImageToBase64();
  const { base64 } = useSelector((state: any) => state.base64);

  const dispatch = useDispatch();
  const labels: ('English' | 'Português')[] = ['English', 'Português'];

  useEffect(() => {
    dispatch(getWhatsHappeningRequest(selectedLanguage));
  }, [dispatch, selectedLanguage]);

  useEffect(() => {
    whatsHappening && setBannerUrl(whatsHappening.bannerUrl);
    whatsHappening && setTitle(whatsHappening.title);
  }, [whatsHappening]);

  useEffect(() => {
    if (result) {
      dispatch(statusBase64Request(result));
    }
  }, [dispatch, result]);

  useEffect(() => {
    if (base64?.error) {
      setBase64Value('');
      return;
    }
    if (base64?.base64Image) {
      setBase64Value(base64.base64Image);
    }
  }, [base64]);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get('title') as string;
    const id = String(whatsHappening.id);
    const language = selectedLanguage;

    const updateWhatsHappening = {
      id,
      bannerUrl,
      title,
      language,
    };

    dispatch(updateWhatsHappeningRequest(updateWhatsHappening, id));
    setIsFormTouched(false);
  }

  async function handleChangeData(event: any, cb: any) {
    event.preventDefault();

    setIsFormTouched(true);
    const imageFile = event.target.files?.[0];
    if (imageFile) {
      return cb((await upload(imageFile)).Location);
    }
    cb(event.target.value);
  }

  const handleChangeValue = (event: React.SyntheticEvent, newValue: number) => {
    if (!isFormTouched) {
      setValue(newValue);
      setSelectedLanguage(selectedLanguage === 'en' ? 'br' : 'en');
    } else if (window.confirm('Se trocar de aba perderá todo o progresso')) {
      setValue(newValue);
      setSelectedLanguage(selectedLanguage === 'en' ? 'br' : 'en');
      setIsFormTouched(false);
    }
  };

  return (
    <>
      <Box>
        <Typography variant='h4' component='h1'>
          Whats Happening
        </Typography>
        <Divider sx={{ marginBottom: '2rem' }} />
        {loading ? (
          <Loader />
        ) : (
          <Box sx={{ width: '100%' }}>
            <Tabs
              labels={labels}
              value={value}
              handleChange={handleChangeValue}
            />
            {labels.map((label: 'English' | 'Português', i: number) => (
              <>
                <TabPanel value={value} index={i}>
                  <Box component='form' onSubmit={handleSubmit} noValidate>
                    <Grid
                      container
                      spacing={0}
                      sx={{ justifyContent: 'space-between' }}
                    >
                      <Grid item xs={12}>
                        <TextField
                          margin='normal'
                          fullWidth
                          id='image'
                          name='image'
                          autoComplete='image'
                          type='file'
                          helperText={
                            selectedLanguage === 'en'
                              ? 'For a better user experience, images should not exceed 300kb and use the .webp format.'
                              : 'Para uma melhor experiência do usuário, as imagens não devem exceder 300kb e utilizar o formato .webp.'
                          }
                          onBlur={() => setIsFormTouched(true)}
                          onChange={(event) =>
                            handleChangeData(event, setBannerUrl)
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          margin='normal'
                          required
                          fullWidth
                          id='title'
                          label='Title'
                          name='title'
                          autoComplete='title'
                          value={title}
                          onChange={(event) =>
                            handleChangeData(event, setTitle)
                          }
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type='submit'
                      fullWidth
                      variant='contained'
                      sx={{ mt: 3, mb: 2 }}
                      disabled={!isFormTouched}
                    >
                      save
                    </Button>
                  </Box>
                </TabPanel>
              </>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
}

export default WhatsHappening;
