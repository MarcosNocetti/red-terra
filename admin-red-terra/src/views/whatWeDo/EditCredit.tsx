import { Box, Divider, Typography } from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form } from '../../components/Form';
import Loader from '../../components/Loader';
import { updateCreditRequest } from '../../store/modules/whatWeDo/actions';

function EditCredit() {
  const dispatch = useDispatch();
  const [whatWeDoId, setWhatWeDoId] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('en');

  const { credit, loading } = useSelector((state: any) => state.whatWeDo);
  const [creditForm, setCreditForm] = useState<any>();
  const { id } = useParams();

  useEffect(() => {
    if (credit?.length) {
      const selectedCredit = credit.filter(
        (link: any) => String(link.id) === id
      )[0];
      setWhatWeDoId(selectedCredit.whatWeDoId);
      setLanguage(selectedCredit.language);
      setSubtitle(selectedCredit.subtitle);
      setText(selectedCredit.text);
      setCreditForm([
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
          cb: setSubtitle,
          defaultValue: subtitle,
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
    }
  }, []);

  useEffect(() => {
    setCreditForm([
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
        cb: setSubtitle,
        defaultValue: subtitle,
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
  }, [whatWeDoId, subtitle, text, language]);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    const Form: any = {
      subtitle,
      text,
      language,
    };
    Form.whatWeDoId = String(whatWeDoId);
    Form.id = String(id);

    dispatch(updateCreditRequest(Form, Form.id));
  }

  useEffect(() => {
    if (language === 'en') {
      setWhatWeDoId('1');
    } else {
      setWhatWeDoId('2');
    }
  }, [language]);

  return (
    <>
      <Box>
        <Typography variant='h4' component='h1'>
          Edit credit
        </Typography>
        <Divider sx={{ marginBottom: '2rem' }} />

        {loading ? (
          <Loader />
        ) : (
          creditForm?.length && (
            <Form
              fields={creditForm}
              buttonLabel={'save'}
              submitCallback={handleSubmit}
            />
          )
        )}
      </Box>
    </>
  );
}

export default EditCredit;
