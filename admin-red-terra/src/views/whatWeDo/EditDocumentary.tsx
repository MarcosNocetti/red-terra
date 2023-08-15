import { Box, Divider, Typography } from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form } from '../../components/Form';
import Loader from '../../components/Loader';
import {
  getDocumentaryRequest,
  updateDocumentaryRequest,
} from '../../store/modules/whatWeDo/actions';
import { getDocumentaryByRelationRequest } from '../../store/modules/whatWeDo/actions';

function EditDocumentary() {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [whatWeDoId, setWhatWeDoId] = useState('');
  const [language, setLanguage] = useState('en');
  const [videoUrl, setVideoUrl] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [sinopseUrl, setSinopseUrl] = useState('');
  const [sinopseUrlLabel, setSinopseUrlLabel] = useState('');
  const [base64Value, setBase64Value] = useState<any>('');
  const [availability, setAvailability] = useState('');
  const [documentaryId, setDocumentaryId] = useState('');
  const [valuesDocumentary, setValuesDocumentary] = useState([]);

  const { documentary, loading, documentaryRelation } = useSelector(
    (state: any) => state.whatWeDo
  );
  const [documentaryForm, setDocumentaryForm] = useState<any>();
  const { id } = useParams();
  const { base64 } = useSelector((state: any) => state.base64);

  useEffect(() => {
    dispatch(getDocumentaryByRelationRequest(String(id)));
    dispatch(getDocumentaryRequest());
  }, [dispatch]);

  useEffect(() => {
    if (documentary) {
      const type = language == 'en' ? 'br' : 'en';
      const selectedDocumentary = documentary.filter((documentary: any) => {
        return documentary.language === type;
      });
      setValuesDocumentary(selectedDocumentary);
    }
  }, [documentary]);

  useEffect(() => {
    if (documentaryRelation) {
      const idRelation =
        language === 'en'
          ? documentaryRelation[0]?.documentaryBrId
          : documentaryRelation[0]?.documentaryEnId;
      if (idRelation) {
        setDocumentaryId(String(idRelation));
      } else {
        setDocumentaryId('');
      }
    }
  }, [documentaryRelation]);

  useEffect(() => {
    if (documentary?.length) {
      const selectedDocumentary = documentary.filter(
        (link: any) => String(link.id) === id
      )[0];
      setImageUrl(selectedDocumentary.imageUrl);
      setWhatWeDoId(selectedDocumentary.whatWeDoId);
      setName(selectedDocumentary.name);
      setLanguage(selectedDocumentary.language);
      setVideoUrl(selectedDocumentary.videoUrl);
      setSinopse(selectedDocumentary.sinopse);
      setSinopseUrl(selectedDocumentary.sinopseUrl);
      setSinopseUrlLabel(selectedDocumentary.sinopseUrlLabel);
      setAvailability(selectedDocumentary.availability);
      setDocumentaryForm([
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
          disabled: true,
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
          required: true,
          valueCombobox: valuesDocumentary,
        },
      ]);
    }
  }, []);

  useEffect(() => {
    setDocumentaryForm([
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
        disabled: true,
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
        required: true,
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
      imageUrl,
      whatWeDoId,
      name,
      language,
      videoUrl,
      sinopse,
      sinopseUrl,
      sinopseUrlLabel,
      availability,
      relationId: String(documentaryId),
    };
    documentaryId === '' && delete Form.relationId;
    Form.active = true;
    Form.id = String(id);

    dispatch(updateDocumentaryRequest(Form, Form.id));
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
          Edit documentary
        </Typography>
        <Divider sx={{ marginBottom: '2rem' }} />

        {loading ? (
          <Loader />
        ) : (
          documentaryForm?.length && (
            <Form
              fields={documentaryForm}
              buttonLabel={'save'}
              submitCallback={handleSubmit}
            />
          )
        )}
      </Box>
    </>
  );
}

export default EditDocumentary;
