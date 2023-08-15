import { FormEvent, useState, useEffect } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  createDocumentaryRequest,
  getDocumentaryRequest,
} from '../../store/modules/whatWeDo/actions';
import Loader from '../../components/Loader';
import { Form } from '../../components/Form';

function CreateDocumentary() {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [whatWeDoId, setWhatWeDoId] = useState('');
  const [language, setLanguage] = useState('en');
  const [videoUrl, setVideoUrl] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [sinopseUrl, setSinopseUrl] = useState('');
  const [base64Value, setBase64Value] = useState<any>('');
  const [sinopseUrlLabel, setSinopseUrlLabel] = useState('');
  const [availability, setAvailability] = useState('');
  const [documentaryId, setDocumentaryId] = useState('');
  const [valuesDocumentary, setValuesDocumentary] = useState([]);
  const { loading, documentary } = useSelector((state: any) => state.whatWeDo);
  const { base64 } = useSelector((state: any) => state.base64);

  useEffect(() => {
    dispatch(getDocumentaryRequest());
  }, [dispatch]);

  useEffect(() => {
    if (documentary) {
      const type = language == 'en' ? 'br' : 'en';
      const selectedDocumentary = documentary?.filter((documentary: any) => {
        return documentary.language === type;
      });
      setValuesDocumentary(selectedDocumentary);
    }
  }, [documentary, language]);

  const [form, setForm] = useState([
    {
      label: 'image',
      type: 'image',
      cb: setImageUrl,
      defaultValue: imageUrl,
      spacing: 12,
      required: true,
    },
    {
      label: 'Name',
      type: 'text',
      cb: setName,
      defaultValue: name,
      spacing: 3.9,
      required: true,
    },
    {
      label: 'Language',
      type: 'combobox',
      cb: setLanguage,
      defaultValue: language,
      spacing: 3.9,
      required: true,
    },
    {
      label: 'URL Video',
      type: 'text',
      cb: setVideoUrl,
      defaultValue: videoUrl,
      spacing: 12,
      required: true,
    },
    {
      label: 'Sinopse',
      type: 'textEditor',
      cb: setSinopse,
      defaultValue: sinopse,
      spacing: 12,
      required: true,
    },
    {
      label: 'URL Sinopse',
      type: 'text',
      cb: setSinopseUrl,
      defaultValue: sinopseUrl,
      spacing: 5.9,
      required: true,
    },
    {
      label: 'URL Sinopse Label',
      type: 'text',
      cb: setSinopseUrlLabel,
      defaultValue: sinopseUrlLabel,
      spacing: 5.9,
      required: true,
    },
    {
      label: 'Availability',
      type: 'text',
      cb: setAvailability,
      defaultValue: availability,
      spacing: 12,
      required: true,
    },
    {
      label: 'Relation, documentary',
      type: 'comboboxValue',
      cb: setDocumentaryId,
      defaultValue: documentaryId,
      spacing: 12,
      valueCombobox: valuesDocumentary,
    },
  ]);

  useEffect(() => {
    setForm([
      {
        label: 'image',
        type: 'image',
        cb: setImageUrl,
        defaultValue: imageUrl,
        spacing: 12,
        required: true,
      },
      {
        label: 'Name',
        type: 'text',
        cb: setName,
        defaultValue: name,
        spacing: 5.9,
        required: true,
      },
      {
        label: 'Language',
        type: 'combobox',
        cb: setLanguage,
        defaultValue: language,
        spacing: 5.9,
        required: true,
      },
      {
        label: 'URL Video',
        type: 'text',
        cb: setVideoUrl,
        defaultValue: videoUrl,
        spacing: 12,
        required: true,
      },
      {
        label: 'Sinopse',
        type: 'textEditor',
        cb: setSinopse,
        defaultValue: sinopse,
        spacing: 12,
        required: true,
      },
      {
        label: 'URL Sinopse',
        type: 'text',
        cb: setSinopseUrl,
        defaultValue: sinopseUrl,
        spacing: 5.9,
        required: true,
      },
      {
        label: 'URL Sinopse Label',
        type: 'text',
        cb: setSinopseUrlLabel,
        defaultValue: sinopseUrlLabel,
        spacing: 5.9,
        required: true,
      },
      {
        label: 'Availability',
        type: 'text',
        cb: setAvailability,
        defaultValue: availability,
        spacing: 12,
        required: true,
      },
      {
        label: 'Relation documentary',
        type: 'comboboxValue',
        cb: setDocumentaryId,
        defaultValue: documentaryId,
        spacing: 12,
        valueCombobox: valuesDocumentary,
      },
    ]);
  }, [
    imageUrl,
    name,
    language,
    videoUrl,
    sinopse,
    sinopseUrl,
    sinopseUrlLabel,
    availability,
    documentaryId,
    valuesDocumentary,
  ]);

  useEffect(() => {
    if (language === 'en') {
      setWhatWeDoId('1');
    } else {
      setWhatWeDoId('2');
    }
  }, [language]);

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
    const Form: any = {
      whatWeDoId,
      imageUrl,
      name,
      videoUrl,
      sinopse,
      sinopseUrl,
      sinopseUrlLabel,
      availability,
      language,
      relationId: String(documentaryId),
    };
    documentaryId === '' && delete Form.relationId;

    Form.active = true;

    dispatch(createDocumentaryRequest(Form));
  }

  return (
    <>
      <Box>
        <Typography variant='h4' component='h1'>
          Create documentary
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

export default CreateDocumentary;
