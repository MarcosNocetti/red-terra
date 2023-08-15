import { Box, Divider, Typography } from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form } from '../../components/Form';
import Loader from '../../components/Loader';
import { updateClientReviewRequest } from '../../store/modules/whoWeAre/actions';

function EditClientReview() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [personName, setPersonName] = useState('');
  const [review, setReview] = useState('');
  const [whoWeAreId, setWhoWeAreId] = useState('');
  const [language, setLanguage] = useState('en');

  const { clientReview, loading } = useSelector((state: any) => state.whoWeAre);
  const [clientReviewForm, setClientReviewForm] = useState<any>();
  const { id } = useParams();

  useEffect(() => {
    if (clientReview?.length) {
      const selected = clientReview.filter(
        (link: any) => String(link.id) === id
      )[0];
      setName(selected.name);
      setPosition(selected.position);
      setPersonName(selected.personName);
      setReview(selected.review);
      setWhoWeAreId(selected.whoWeAreId);
      setLanguage(selected.language);
      setClientReviewForm([
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
    }
  }, []);

  useEffect(() => {
    setClientReviewForm([
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
  }, [whoWeAreId, name, position, language, personName, review]);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    const Form: any = {
      whoWeAreId,
      name,
      position,
      language,
      personName,
      review,
    };
    Form.whoWeAreId = String(whoWeAreId);
    Form.id = String(id);

    dispatch(updateClientReviewRequest(Form, Form.id));
  }

  useEffect(() => {
    if (language === 'en') {
      setWhoWeAreId('1');
    } else {
      setWhoWeAreId('2');
    }
  }, [language]);

  return (
    <>
      <Box>
        <Typography variant='h4' component='h1'>
          Edit client reviews
        </Typography>
        <Divider sx={{ marginBottom: '2rem' }} />

        {loading ? (
          <Loader />
        ) : (
          clientReviewForm?.length && (
            <Form
              fields={clientReviewForm}
              buttonLabel={'save'}
              submitCallback={handleSubmit}
            />
          )
        )}
      </Box>
    </>
  );
}

export default EditClientReview;
