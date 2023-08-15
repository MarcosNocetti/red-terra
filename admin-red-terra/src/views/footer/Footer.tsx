import {
  Box,
  Divider,
  Grid,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import {
  footerRequest,
  getFooterRequest,
} from '../../store/modules/footer/actions';
import Tabs from '../../components/Tabs/Tabs';

function Footer() {
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [language, setLanguage] = useState('en');
  const [value, setValue] = useState(0);
  const [copyright, setCopyright] = useState('');
  const labels: ('English' | 'Português')[] = ['English', 'Português'];
  const dispatch = useDispatch();

  const { footer, loading } = useSelector((state: any) => state.footer);

  useEffect(() => {
    dispatch(getFooterRequest(language));
  }, [dispatch, language]);

  useEffect(() => {
    footer && setCopyright(footer.copyright);
  }, [footer]);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const Form: any = {
      copyright,
      language,
    };
    Form.id = String(footer.id);

    setIsFormTouched(false);
    dispatch(footerRequest(Form, Form.id));
  }

  function handleChangeData(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    cb: (data: string) => void
  ) {
    event.preventDefault();

    setIsFormTouched(true);
    const data = event.currentTarget.value as string;
    cb(data);
  }

  const handleChangeValue = (event: React.SyntheticEvent, newValue: number) => {
    if (!isFormTouched) {
      setLanguage(language === 'en' ? 'br' : 'en');
      setValue(value ? 0 : 1);
    } else if (window.confirm('Se trocar de aba perderá todo o progresso')) {
      setLanguage(language === 'en' ? 'br' : 'en');
      setValue(value ? 0 : 1);
      setIsFormTouched(false);
    }
  };

  return (
    <>
      <Box>
        <Typography variant='h4' component='h1'>
          Footer
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
                  required
                  fullWidth
                  id='copyright'
                  label='Copyright'
                  name='copyright'
                  autoComplete='copyright'
                  value={copyright}
                  multiline
                  onChange={(event) => handleChangeData(event, setCopyright)}
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

export default Footer;
