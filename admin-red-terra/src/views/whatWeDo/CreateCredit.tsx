import { FormEvent, useEffect, useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createCreditRequest } from '../../store/modules/whatWeDo/actions';
import Loader from '../../components/Loader';
import { Form } from '../../components/Form';

function CreateCredit() {
  const dispatch = useDispatch();
  const [whatWeDoId, setWhatWeDoId] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('en');
  const { loading } = useSelector((state: any) => state.whatWeDo);
  const [form, setForm] = useState([
    {
      label: 'Language',
      type: 'combobox',
      cb: setLanguage,
      defaultValue: language,
      spacing: 5.9,
      required: true,
    },
    {
      label: 'Title',
      type: 'text',
      cb: setTitle,
      defaultValue: title,
      spacing: 12,
      required: true,
    },
    {
      label: 'Text',
      type: 'textEditor',
      cb: setText,
      defaultValue: text,
      spacing: 12,
      required: true,
    },
  ]);

  useEffect(() => {
    setForm([
      {
        label: 'Language',
        type: 'combobox',
        cb: setLanguage,
        defaultValue: language,
        spacing: 12,
        required: true,
      },
      {
        label: 'Title',
        type: 'text',
        cb: setTitle,
        defaultValue: title,
        spacing: 12,
        required: true,
      },
      {
        label: 'Text',
        type: 'textEditor',
        cb: setText,
        defaultValue: text,
        spacing: 12,
        required: true,
      },
    ]);
  }, [whatWeDoId, language, title, text]);

  useEffect(() => {
    if (language === 'en') {
      setWhatWeDoId('1');
    } else {
      setWhatWeDoId('2');
    }
  }, [language]);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    dispatch(createCreditRequest(title, text, whatWeDoId, language));
  }

  return (
    <>
      <Box>
        <Typography variant='h4' component='h1'>
          Create credit
        </Typography>
        <Divider sx={{ marginBottom: '2rem' }} />

        {loading ? (
          <Loader />
        ) : (
          <Form
            fields={form}
            buttonLabel={'save'}
            submitCallback={handleSubmit}
          />
        )}
      </Box>
    </>
  );
}

export default CreateCredit;
