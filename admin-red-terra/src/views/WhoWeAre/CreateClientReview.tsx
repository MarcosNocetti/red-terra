import { FormEvent, useState, useEffect } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createClientReviewRequest } from '../../store/modules/whoWeAre/actions';
import Loader from '../../components/Loader';
import { Form } from '../../components/Form';

function CreateClientReview() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [personName] = useState('');
  const [review, setReview] = useState('');
  const [whoWeAreId, setWhoWeAreId] = useState('');
  const [language, setLanguage] = useState('en');

  const { loading } = useSelector((state: any) => state.whoWeAre);
  const [form, setForm] = useState([
    {
      label: 'Name',
      type: 'text',
      cb: setName,
      defaultValue: name,
      spacing: 12,
      required: true,
    },
    {
      label: 'Position',
      type: 'text',
      cb: setPosition,
      defaultValue: position,
      spacing: 7.9,
      required: true,
    },
    {
      label: 'language',
      type: 'combobox',
      cb: setLanguage,
      defaultValue: language,
      spacing: 3.9,
      required: true,
    },
    {
      label: 'review',
      type: 'textEditor',
      cb: setReview,
      defaultValue: review,
      spacing: 12,
      required: true,
    },
  ]);

  useEffect(() => {
    setForm([
      {
        label: 'Name',
        type: 'text',
        cb: setName,
        defaultValue: name,
        spacing: 12,
        required: true,
      },
      {
        label: 'Position',
        type: 'text',
        cb: setPosition,
        defaultValue: position,
        spacing: 7.9,
        required: true,
      },
      {
        label: 'language',
        type: 'combobox',
        cb: setLanguage,
        defaultValue: language,
        spacing: 3.9,
        required: true,
      },
      {
        label: 'review',
        type: 'textEditor',
        cb: setReview,
        defaultValue: review,
        spacing: 12,
        required: true,
      },
    ]);
  }, [whoWeAreId, name, position, language, review]);

  useEffect(() => {
    if (language === 'en') {
      setWhoWeAreId('1');
    } else {
      setWhoWeAreId('2');
    }
  }, [language]);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    const Form: any = {
      whoWeAreId,
      name,
      position,
      personName,
      review,
      language,
    };

    dispatch(createClientReviewRequest(Form));
  }

  return (
    <>
      <Box>
        <Typography variant='h4' component='h1'>
          Create Client Review
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

export default CreateClientReview;
