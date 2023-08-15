import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IContact } from '../interfaces/contact';
import {
  contactResetBaseStateRequest,
  getContactsRequest,
  updateContactRequest,
} from '../store/modules/contacts/actions';
import Loader from '../components/Loader';
import Tabs from '../components/Tabs/Tabs';
import useConvertImageToBase64 from '../hooks/convertBase64';
import { statusBase64Request } from '../store/modules/convertBase64/actions';
import { upload } from '../helpers/s3';

function Contact() {
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [value, setValue] = useState(0);
  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);
  const [bannerUrl, setBannerUrl] = useState('');
  const [base64Value, setBase64Value] = useState<any>('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [quote, setQuote] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');
  const labels: ('English' | 'Português')[] = ['English', 'Português'];
  const { contacts, success, message, loading } = useSelector(
    (state: any) => state.contacts
  );
  const { result, convertImageToBase64 } = useConvertImageToBase64();
  const { base64 } = useSelector((state: any) => state.base64);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsRequest());

    return () => {
      dispatch(contactResetBaseStateRequest());
    };
  }, []);

  useEffect(() => {
    if (selectedContact) {
      setBannerUrl(selectedContact.bannerUrl);
      setEmail(selectedContact.email);
      setDescription(selectedContact.description);
      setQuote(selectedContact.quote);
      setQuoteAuthor(selectedContact.quoteAuthor);
      setTelephone(selectedContact.telephone);
    }
  }, [selectedContact]);

  useEffect(() => {
    if (contacts?.length) {
      setSelectedContact(
        (prevState: any) =>
          contacts.filter((contact: any) =>
            !!prevState ? contact.id === value + 1 : contact
          )[0]
      );
    }
  }, [contacts, value]);

  useEffect(() => {
    if (success && message?.length) {
      setIsFormTouched(false);
    }
  }, [success]);

  useEffect(() => {
    if (result) {
      dispatch(statusBase64Request(result));
    }
  }, [dispatch, result]);

  const handleChangeValue = (event: React.SyntheticEvent, newValue: number) => {
    if (!isFormTouched) {
      setSelectedLanguage(selectedLanguage === 'en' ? 'br' : 'en');
      setValue(value ? 0 : 1);
    } else if (window.confirm('Se trocar de aba perderá todo o progresso')) {
      setSelectedLanguage(selectedLanguage === 'en' ? 'br' : 'en');
      setValue(value ? 0 : 1);
      setIsFormTouched(false);
    }
  };

  async function handleChangeInput(event: any, cb: any) {
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

    if (selectedContact) {
      dispatch(
        updateContactRequest(
          contacts,
          {
            ...selectedContact,
            id: String(selectedContact.id),
            bannerUrl: base64Value === '' ? bannerUrl : base64Value,
            telephone: telephone,
            email: email,
            description: description,
            quote: quote,
            quoteAuthor: quoteAuthor,
          },
          selectedContact.id
        )
      );
    }
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box>
          <Typography variant='h4' component='h1'>
            Contact
          </Typography>
          <Divider sx={{ marginBottom: '2rem' }} />
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
                  id='image'
                  name='image'
                  autoComplete='image'
                  type='file'
                  helperText={
                    selectedLanguage === 'en'
                      ? 'For a better user experience, images should not exceed 300kb and use the .webp format.'
                      : 'Para uma melhor experiência do usuário, as imagens não devem exceder 300kb e utilizar o formato .webp.'
                  }
                  onChange={(event) => handleChangeInput(event, setBannerUrl)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='description'
                  label='Description'
                  name='description'
                  type=''
                  autoComplete='description'
                  value={description || ''}
                  onChange={(event) => handleChangeInput(event, setDescription)}
                  multiline
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='quote'
                  label='Quote'
                  name='quote'
                  autoComplete='quote'
                  value={quote || ''}
                  onChange={(event) => handleChangeInput(event, setQuote)}
                  multiline
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='quoteAuthor'
                  label='Quote author'
                  name='quoteAuthor'
                  autoComplete='quoteAuthor'
                  value={quoteAuthor || ''}
                  onChange={(event) => handleChangeInput(event, setQuoteAuthor)}
                />
              </Grid>
              <Grid item xs={5.9}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='E-mail'
                  name='email'
                  autoComplete='email'
                  value={email || ''}
                  onChange={(event) => handleChangeInput(event, setEmail)}
                />
              </Grid>
              <Grid item xs={5.9}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='telephone'
                  label='Telephone'
                  name='telephone'
                  autoComplete='telephone'
                  value={telephone || ''}
                  onChange={(event) => handleChangeInput(event, setTelephone)}
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
              Save
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Contact;
