import {
  Box,
  Divider,
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';
import Tabs from '../../components/Tabs/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import {
  getWhatWeDoRequest,
  updateWhatWeDoRequest,
} from '../../store/modules/whatWeDo/actions';
import Loader from '../../components/Loader';
import useConvertImageToBase64 from '../../hooks/convertBase64';
import { statusBase64Request } from '../../store/modules/convertBase64/actions';
import { upload } from '../../helpers/s3';

function WhatWeDo() {
  const dispatch = useDispatch();
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [value, setValue] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const labels: ('English' | 'Português')[] = ['English', 'Português'];
  const [bannerUrl, setBannerUrl] = useState('');
  const [base64Value, setBase64Value] = useState<any>('');
  const [creditTitle, setCreditTitle] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [headerId] = useState('1');
  const [language, setLanguage] = useState('en');
  const { whatWeDo, loading } = useSelector((state: any) => state.whatWeDo);
  const { result, convertImageToBase64 } = useConvertImageToBase64();
  const { base64 } = useSelector((state: any) => state.base64);

  const handleChangeValue = (event: React.SyntheticEvent, newValue: number) => {
    if (!isFormTouched) {
      setValue(newValue);
      setSelectedLanguage(selectedLanguage === 'en' ? 'br' : 'en');
      setLanguage(selectedLanguage === 'en' ? 'br' : 'en');
    } else if (window.confirm('Se trocar de aba perderá todo o progresso')) {
      setValue(newValue);
      setSelectedLanguage(selectedLanguage === 'en' ? 'br' : 'en');
      setLanguage(selectedLanguage === 'en' ? 'br' : 'en');
      setIsFormTouched(false);
    }
  };

  useEffect(() => {
    dispatch(getWhatWeDoRequest(selectedLanguage));
  }, [dispatch, selectedLanguage]);

  useEffect(() => {
    if (whatWeDo) {
      setBannerUrl(whatWeDo.bannerUrl);
      setCreditTitle(whatWeDo.creditTitle);
      setTitle(whatWeDo.title);
      setText(whatWeDo.text);
      setLanguage(whatWeDo.language);
    }
  }, [whatWeDo]);

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

  async function handleChangeData(event: any, cb: any) {
    event.preventDefault();

    setIsFormTouched(true);
    const imageFile = event.target.files?.[0];
    if (imageFile) {
      return cb((await upload(imageFile)).Location);
    }
    cb(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const Form: any = {
      bannerUrl,
      creditTitle,
      title,
      text,
      headerId,
      language,
    };
    Form.id = String(whatWeDo.id);
    dispatch(updateWhatWeDoRequest(Form, Form.id));
    setIsFormTouched(false);
  }

  return (
    <>
      <Box>
        <Typography variant='h4' component='h1'>
          What we do
        </Typography>
        <Divider sx={{ marginBottom: '2rem' }} />

        {loading ? (
          <Loader />
        ) : (
          <Box component='form' onSubmit={handleSubmit} noValidate>
            <Tabs
              labels={labels}
              value={value}
              handleChange={handleChangeValue}
            />
            <Grid
              container
              spacing={0}
              sx={{ justifyContent: 'space-between' }}
            >
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  fullWidth
                  id='bannerUrl'
                  name='bannerUrl'
                  autoComplete='bannerUrl'
                  type='file'
                  helperText={
                    selectedLanguage === 'en'
                      ? 'For a better user experience, images should not exceed 300kb and use the .webp format.'
                      : 'Para uma melhor experiência do usuário, as imagens não devem exceder 300kb e utilizar o formato .webp.'
                  }
                  onChange={(event) => handleChangeData(event, setBannerUrl)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='creditTitle'
                  label='Credit title'
                  name='creditTitle'
                  autoComplete='creditTitle'
                  value={creditTitle}
                  onChange={(event) => handleChangeData(event, setCreditTitle)}
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
                  onChange={(event) => handleChangeData(event, setTitle)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='text'
                  label='Text'
                  name='text'
                  autoComplete='text'
                  value={text}
                  multiline
                  onChange={(event) => handleChangeData(event, setText)}
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
        )}
      </Box>
    </>
  );
}

export default WhatWeDo;
