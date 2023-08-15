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
  getWhoWeAreRequest,
  updateWhoWeAreRequest,
} from '../../store/modules/whoWeAre/actions';
import Loader from '../../components/Loader';
import useConvertImageToBase64 from '../../hooks/convertBase64';
import { statusBase64Request } from '../../store/modules/convertBase64/actions';
import { upload } from '../../helpers/s3';

function WhoWeAre() {
  const dispatch = useDispatch();
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [value, setValue] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const labels: ('English' | 'Português')[] = ['English', 'Português'];
  const [headerId] = useState('1');
  const [language, setLanguage] = useState('');
  const [bannerUrl, setBannerUrl] = useState('');
  const [base64Value, setBase64Value] = useState<any>('');
  const [creditTitle, setCreditTitle] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [quote, setQuote] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');
  const [teamTitle, setTeamTitle] = useState('');
  const [rdnTitle, setRdnTitle] = useState('');
  const [rdnDescription, setRdnDescription] = useState('');
  const [clientReviewTitle, setClientReviewTitle] = useState('');

  const { whoWeAre, loading } = useSelector((state: any) => state.whoWeAre);
  const { result, convertImageToBase64 } = useConvertImageToBase64();
  const { base64 } = useSelector((state: any) => state.base64);

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

  useEffect(() => {
    dispatch(getWhoWeAreRequest(selectedLanguage));
  }, [dispatch, selectedLanguage]);

  useEffect(() => {
    if (whoWeAre) {
      setLanguage(whoWeAre.language);
      setBannerUrl(whoWeAre.bannerUrl);
      setCreditTitle(whoWeAre.creditTitle);
      setTitle(whoWeAre.title);
      setText(whoWeAre.text);
      setQuote(whoWeAre.quote);
      setQuoteAuthor(whoWeAre.quoteAuthor);
      setRdnTitle(whoWeAre.rdnTitle);
      setTeamTitle(whoWeAre.teamTitle);
      setRdnDescription(whoWeAre.rdnDescription);
      setClientReviewTitle(whoWeAre.clientReviewTitle);
    }
  }, [whoWeAre]);

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
      headerId,
      language,
      bannerUrl,
      creditTitle,
      title,
      text,
      quote,
      quoteAuthor,
      teamTitle,
      rdnTitle,
      rdnDescription,
      clientReviewTitle,
    };
    Form.id = String(whoWeAre.id);

    setIsFormTouched(false);
    dispatch(updateWhoWeAreRequest(Form, Form.id));
  }

  return (
    <>
      <Box>
        <Typography variant='h4' component='h1'>
          Who We Are
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
              <Grid item xs={5.9}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='quote'
                  label='quote'
                  name='quote'
                  autoComplete='quote'
                  value={quote}
                  multiline
                  onChange={(event) => handleChangeData(event, setQuote)}
                />
              </Grid>
              <Grid item xs={5.9}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='quoteAuthor'
                  label='Quote Author'
                  name='quoteAuthor'
                  autoComplete='quoteAuthor'
                  value={quoteAuthor}
                  multiline
                  onChange={(event) => handleChangeData(event, setQuoteAuthor)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='teamTitle'
                  label='Team Title'
                  name='teamTitle'
                  autoComplete='teamTitle'
                  value={teamTitle}
                  onChange={(event) => handleChangeData(event, setTeamTitle)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='creditTitle'
                  label='Credit Title'
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
                  id='rdnTitle'
                  label='rdn Title'
                  name='rdnTitle'
                  autoComplete='rdnTitle'
                  value={rdnTitle}
                  onChange={(event) => handleChangeData(event, setRdnTitle)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='rdnDescription'
                  label='rdn Description'
                  name='rdnDescription'
                  autoComplete='rdnDescription'
                  value={rdnDescription}
                  multiline
                  onChange={(event) =>
                    handleChangeData(event, setRdnDescription)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='clientReviewTitle'
                  label='Client Review Title'
                  name='clientReviewTitle'
                  autoComplete='clientReviewTitle'
                  value={clientReviewTitle}
                  onChange={(event) =>
                    handleChangeData(event, setClientReviewTitle)
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
        )}
      </Box>
    </>
  );
}

export default WhoWeAre;
