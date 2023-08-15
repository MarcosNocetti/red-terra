import {
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useConvertImageToBase64 from '../hooks/convertBase64';
import { statusBase64Request } from '../store/modules/convertBase64/actions';
import { upload } from '../helpers/s3';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function Form({ fields, buttonLabel, submitCallback }: any) {
  const dispatch = useDispatch();
  const [isFormTouched, setIsFormTouched] = useState(false);
  const { result, convertImageToBase64 } = useConvertImageToBase64();

  useEffect(() => {}, [...fields?.map((field: any) => field.defaultValue)]);

  function handleSubmit(event: any) {
    event.preventDefault();

    submitCallback(new FormData(event.currentTarget));
  }

  useEffect(() => {
    if (result) {
      dispatch(statusBase64Request(result));
    }
  }, [dispatch, result]);

  async function handleChangeInput(event: any, cb: any) {
    event.preventDefault();

    setIsFormTouched(true);
    const imageFile = event.target.files?.[0];
    if (imageFile) {
      return cb((await upload(imageFile)).Location);
    }
    cb(event.target.value);
  }

  return (
    <Box component='form' onSubmit={handleSubmit} noValidate>
      <Grid container spacing={0} sx={{ justifyContent: 'space-between' }}>
        {fields.map(
          (field: {
            label: string;
            type: string;
            cb?: any;
            defaultValue?: string;
            spacing?: number;
            required?: boolean;
            valueCombobox?: any;
            disabled?: boolean;
          }) =>
            field.type === 'image' ? (
              <>
                <Grid item xs={12}>
                  <TextField
                    margin='normal'
                    fullWidth
                    id='image'
                    name='image'
                    autoComplete='image'
                    type='file'
                    helperText='For a better user experience, images should not exceed 300kb and use the .webp format.'
                    onChange={(event: any) =>
                      handleChangeInput(event, field.cb)
                    }
                  />
                </Grid>
              </>
            ) : field.type === 'combobox' ? (
              <Grid item xs={field.spacing || 5.9} style={{ marginTop: 16 }}>
                <FormControl fullWidth>
                  <InputLabel
                    id={field.label.toLowerCase().split(' ').join('_')}
                  >
                    {field.label}
                  </InputLabel>
                  <Select
                    labelId={field.label.toLowerCase().split(' ').join('_')}
                    id={field.label.toLowerCase().split(' ').join('_')}
                    label={field.label}
                    value={field.defaultValue || null}
                    onChange={(event: any) =>
                      handleChangeInput(event, field.cb)
                    }
                    disabled={field.disabled}
                  >
                    <MenuItem value='en'>🇺🇲 EN</MenuItem>
                    <MenuItem value='br'>🇧🇷 BR</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            ) : field.type === 'comboboxValue' ? (
              <Grid item xs={field.spacing || 5.9} style={{ marginTop: 16 }}>
                <FormControl fullWidth>
                  <InputLabel
                    id={field.label.toLowerCase().split(' ').join('_')}
                  >
                    {field.label}
                  </InputLabel>
                  <Select
                    labelId={field.label.toLowerCase().split(' ').join('_')}
                    id={field.label.toLowerCase().split(' ').join('_')}
                    label={field.label}
                    value={field.defaultValue || null}
                    onChange={(event: any) =>
                      handleChangeInput(event, field.cb)
                    }
                  >
                    {field.valueCombobox?.map((value: any) => (
                      <MenuItem value={value.id}>
                        {value.language === 'en' ? '🇺🇲 EN' : '🇧🇷 BR'} -{' '}
                        {value.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            ) : field.type === 'checkBox' ? (
              <Grid
                item
                xs={field.spacing || 5.9}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(event: any) =>
                        handleChangeInput(event, field.cb)
                      }
                    />
                  }
                  label={field.label}
                />
              </Grid>
            ) : field.type === 'textEditor' ? (
              <Grid item xs={field.spacing || 5.9}>
                <ReactQuill />
              </Grid>
            ) : (
              <Grid item xs={field.spacing || 5.9}>
                <TextField
                  margin='normal'
                  required={field.required}
                  fullWidth
                  id={field.label.toLowerCase().split(' ').join('_')}
                  label={field.label}
                  name={field.label.toLowerCase().split(' ').join('_')}
                  value={field.defaultValue || null}
                  type={field.type}
                  onChange={(event: any) => handleChangeInput(event, field.cb)}
                />
              </Grid>
            )
        )}
      </Grid>
      <Button
        type='submit'
        fullWidth
        variant='contained'
        sx={{ mt: 3, mb: 2 }}
        disabled={!isFormTouched}
      >
        {buttonLabel}
      </Button>
    </Box>
  );
}
