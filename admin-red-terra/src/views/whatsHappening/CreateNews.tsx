import {
  AlertColor,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewsRequest,
  getNewsRequest,
} from "../../store/modules/whatsHappening/actions";
import Loader from "../../components/Loader";
import useConvertImageToBase64 from "../../hooks/convertBase64";
import { statusBase64Request } from "../../store/modules/convertBase64/actions";
import { upload } from "../../helpers/s3";
import { TextEditor } from "../../components/TextEditor";
import { months } from "../../constants/months";

function CreateNews() {
  const dispatch = useDispatch();
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [base64Value, setBase64Value] = useState<any>("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isRedCarta, setIsRedCarta] = useState();
  const [linkUrl, setLinkUrl] = useState("");
  const [backgroundColor] = useState("");
  const [whatsHappeningId, setWhatsHappeningId] = useState("");
  const [newsRelationId, setNewsRelationId] = useState("");
  const [textColor] = useState("");
  const [language, setLanguage] = useState<"en" | "br">("en");
  const [month, setMonth] = useState<any>();
  const [year, setYear] = useState<any>();
  const [error, setError] = useState<{
    type: AlertColor;
    text: string;
    open: boolean;
  } | null>();
  const [valuesNews, setValuesNews] = useState([]);
  const { news, loading } = useSelector((state: any) => state.whatsHappening);
  const { base64 } = useSelector((state: any) => state.base64);
  const { result, convertImageToBase64 } = useConvertImageToBase64();

  useEffect(() => {
    dispatch(getNewsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (news) {
      const type = language == "en" ? "br" : "en";
      const selectedNews = news?.filter((news: any) => {
        return news.language === type;
      });
      setValuesNews(selectedNews);
    }
  }, [news, language]);

  useEffect(() => {
    if (language === "en") {
      setWhatsHappeningId("1");
    } else {
      setWhatsHappeningId("2");
    }
    if (isRedCarta) {
      setMonth(null);
      setYear(null);
    }
  }, [language]);

  useEffect(() => {
    if (result) {
      dispatch(statusBase64Request(result));
    }
  }, [dispatch, result]);

  useEffect(() => {
    if (base64?.error) {
      setBase64Value("");
      return;
    }
    if (base64?.base64Image) {
      setBase64Value(base64.base64Image);
    }
  }, [base64]);

  useEffect(() => {
    setTimeout(() => setError(null), 5000);
  }, [error]);

  async function handleChangeData(event: any, cb: any) {
    event.preventDefault();

    setIsFormTouched(true);
    const imageFile = event.target.files?.[0];
    if (imageFile) {
      return cb((await upload(imageFile)).Location);
    }
    cb(event.target.value);
  }

  function handleChangeCheck(event: any, cb: any) {
    event.preventDefault();
    cb(event.target.checked);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    const newForm: any = {
      imageUrl,
      title,
      backgroundColor,
      text,
      textColor,
      language,
      isRedCarta,
      whatsHappeningId,
      linkUrl,
      relationId: String(newsRelationId),
    };

    if (isRedCarta) {
      if (!month || !year) {
        setError({
          open: true,
          text: "Red Carta must have month and year.",
          type: "error",
        });
        return;
      }

      newForm.monthYear = `${month} ${year}`;
    }

    dispatch(createNewsRequest(newForm));
  }

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          Create news
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />

        {loading ? (
          <Loader />
        ) : (
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid
              container
              spacing={0}
              sx={{ justifyContent: "space-between" }}
            >
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="imageUrl"
                  name="image"
                  autoComplete="imageUrl"
                  type="file"
                  helperText={
                    "For a better user experience, images should not exceed 300kb and use the .webp format."
                  }
                  onChange={(event) => handleChangeData(event, setImageUrl)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="Language">Language</InputLabel>
                  <Select
                    labelId="Language"
                    id="Language"
                    label="Language"
                    value={language}
                    onChange={(event: any) =>
                      handleChangeData(event, setLanguage)
                    }
                  >
                    <MenuItem value="en">🇺🇲 EN</MenuItem>
                    <MenuItem value="br">🇧🇷 BR</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="linkUrl"
                  label="Link URL"
                  name="linkUrl"
                  autoComplete="linkUrl"
                  value={linkUrl}
                  onChange={(event) => handleChangeData(event, setLinkUrl)}
                />
              </Grid>
              <Grid item xs={7.9}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  autoComplete="title"
                  value={title}
                  onChange={(event) => handleChangeData(event, setTitle)}
                />
              </Grid>
              <Grid
                item
                xs={3.9}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(event: any) =>
                        handleChangeCheck(event, setIsRedCarta)
                      }
                    />
                  }
                  label="Red Carta"
                />
              </Grid>
              {isRedCarta && (
                <>
                  <Grid item xs={5.9} style={{ margin: "8px 0 16px" }}>
                    <FormControl fullWidth>
                      <InputLabel id="Month">Month</InputLabel>
                      <Select
                        labelId="Month"
                        id="Month"
                        label="Month"
                        value={month}
                        required
                        onChange={(event: any) =>
                          handleChangeData(event, setMonth)
                        }
                      >
                        {months.map((month) => (
                          <MenuItem value={month}>{month}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={5.9} style={{ margin: "8px 0 16px" }}>
                    <FormControl fullWidth>
                      <InputLabel id="Year">Year</InputLabel>
                      <Select
                        labelId="Year"
                        id="Year"
                        label="Year"
                        value={year}
                        required
                        onChange={(event: any) =>
                          handleChangeData(event, setYear)
                        }
                      >
                        <MenuItem value={new Date().getFullYear() - 1}>
                          {new Date().getFullYear() - 1}
                        </MenuItem>
                        <MenuItem
                          value={new Date().getFullYear()}
                          defaultChecked
                        >
                          {new Date().getFullYear()}
                        </MenuItem>
                        <MenuItem value={new Date().getFullYear() + 1}>
                          {new Date().getFullYear() + 1}
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </>
              )}
              <Grid item xs={12} style={{ marginTop: 16, marginBottom: 24 }}>
                <FormControl fullWidth>
                  <InputLabel id="newsRelationId">Relation news</InputLabel>
                  <Select
                    labelId="newsRelationId"
                    id="newsRelationId"
                    label="Relation news"
                    value={newsRelationId}
                    onChange={(event: any) =>
                      handleChangeData(event, setNewsRelationId)
                    }
                  >
                    {valuesNews?.map((value: any) => (
                      <MenuItem value={value.id}>
                        {value.language === "en" ? "🇺🇲 EN" : "🇧🇷 BR"} -{" "}
                        {value.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextEditor value={text} onChange={(value) => setText(value)} />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
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

export default CreateNews;
