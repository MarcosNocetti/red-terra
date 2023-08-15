import { Box, Divider, Typography } from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAwardRequest } from '../../store/modules/awards/actions';
import { Form } from '../../components/Form';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import { getDocumentaryRequest } from '../../store/modules/whatWeDo/actions';

function CreateAward() {
  const dispatch = useDispatch();
  const [label, setLabel] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [base64Value, setBase64Value] = useState<any>("");
  const [language, setLanguage] = useState('en');
  const [documentaryId, setDocumentaryId] = useState("");
  const [valuesDocumentary, setValuesDocumentary] = useState([]);
  const [whoWeAreId, setWhoWeAreId] = useState("");
  const [awardForm, setAwardForm] = useState<any>(null);
  const { awards, loading } = useSelector((state: any) => state.awards);
  const { id } = useParams();
  const { documentary } = useSelector((state: any) => state.whatWeDo);
  const { base64 } = useSelector((state: any) => state.base64);

  useEffect(() => {
    dispatch(getDocumentaryRequest());
  }, [dispatch]);

  useEffect(() => {
    if(documentary) {
      setValuesDocumentary(documentary);
    }
  }, [documentary]);

  useEffect(() => {
    if (awards?.length) {
      const selectedAward = awards.filter(
        (link: any) => String(link.id) === id
      )[0];
      setLabel(selectedAward.name);
      setLanguage(selectedAward.language);
      setDocumentaryId(selectedAward?.documentaryId);
      setWhoWeAreId(selectedAward?.whoWeAreId)
      setImageUrl(selectedAward.imageUrl);
      setAwardForm([
        {
          label: 'Name',
          type: 'text',
          cb: setLabel,
          defaultValue: label,
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
          label: 'Documentary',
          type: 'comboboxValue',
          cb: setDocumentaryId,
          defaultValue: documentaryId,
          spacing: 3.9,
          required: true,
          valueCombobox: valuesDocumentary
        },
        {
          label: 'Image',
          type: 'image',
          cb: setImageUrl,
          defaultValue: imageUrl,
          required: false,
        },
      ]);
    }
  }, []);

  useEffect(() => {
    if(base64?.error) {
      setBase64Value('')
      return
    }
    if(base64?.base64Image) {
      setBase64Value(base64.base64Image)
    }
  }, [base64])

  useEffect(() => {
    setAwardForm([
      {
        label: 'Name',
        type: 'text',
        cb: setLabel,
        defaultValue: label,
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
        label: 'Documentary',
        type: 'comboboxValue',
        cb: setDocumentaryId,
        defaultValue: documentaryId,
        spacing: 3.9,
        required: true,
        valueCombobox: valuesDocumentary
      },
      {
        label: 'Image',
        type: 'image',
        cb: setImageUrl,
        defaultValue: imageUrl,
        required: false,
      },
    ]);
  }, [label, language, documentaryId, imageUrl, valuesDocumentary]);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    const award: any = {
      name: label,
      label,
      imageUrl,
      language,
      documentaryId,
      whoWeAreId
    };
    award.id = String(id)

    dispatch(updateAwardRequest(awards, award, String(id)));
  }

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          Edit Award
        </Typography>
        <Divider sx={{ marginBottom: '2rem' }} />

        {loading ? (
          <Loader />
        ) : (
          awardForm?.length && (
            <Form
              fields={awardForm}
              buttonLabel={'save'}
              submitCallback={handleSubmit}
            />
          )
        )}
      </Box>
    </>
  );
}

export default CreateAward;
