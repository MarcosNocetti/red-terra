import {
  Box,
  Divider,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import Tabs from "../../components/Tabs/Tabs";
import { useDispatch, useSelector } from "react-redux";
import {
  getHeadersRequest,
  updateHeaderRequest,
} from "../../store/modules/headers/actions";
import Loader from "../../components/Loader";

function Header() {
  const dispatch = useDispatch();
  const [isFormTouched, setIsFormTouched] = useState(false);
  const labels: ("English" | "Português")[] = ["English", "Português"];
  const [imageUrl, setImageUrl] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const { loading, headers } = useSelector((state: any) => state.headers);
  const [headerValue, setHeaderValue] = useState(0)

  const handleChangeValue = (event: React.SyntheticEvent, newValue: number) => {
    if (!isFormTouched) {
      setHeaderValue(newValue);
    } else if (window.confirm("Se trocar de aba perderá todo o progresso")) {
      setHeaderValue(newValue);
      setIsFormTouched(false);
    }
  };

  useEffect(() => {
    dispatch(getHeadersRequest());
  }, [dispatch]);

  useEffect(() => {
    if (headers?.length) {
      setImageUrl(headers[headerValue].imageUrl)
      setTextColor(headers[headerValue].textColor)
      setBackgroundColor(headers[headerValue].backgroundColor)
    }
  }, [headers, headerValue])

  function handleChangeData(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    cb: (data: string) => void
  ) {
    event.preventDefault();

    setIsFormTouched(true);
    const data = event.currentTarget.value as string;
    cb(data);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const Form: any = {
      imageUrl,
      backgroundColor,
      textColor,
    };
    Form.id = String(headers.id);

    setIsFormTouched(false);
    dispatch(updateHeaderRequest(headers, Form, Form.id));
  }

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          Who We Are
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />

        {loading ? (
          <Loader />
        ) : (
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Tabs
              labels={labels}
              value={headerValue}
              handleChange={handleChangeValue}
            />
            <Grid
              container
              spacing={0}
              sx={{ justifyContent: "space-between" }}
            >
              <Grid item xs={7.9}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="imageUrl"
                  label="Image url"
                  name="imageUrl"
                  autoComplete="imageUrl"
                  disabled
                  value={imageUrl || ""}
                />
              </Grid>
              <Grid item xs={3.9}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="image"
                  name="image"
                  autoComplete="image"
                  type="file"
                  onChange={(event) => handleChangeData(event, setImageUrl)}
                />
              </Grid>
              <Grid item xs={5.9}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="backgroundColor"
                  label="Background color"
                  name="backgroundColor"
                  autoComplete="backgroundColor"
                  value={backgroundColor || ""}
                  onChange={(event) => handleChangeData(event, setBackgroundColor)}
                />
              </Grid>
              <Grid item xs={5.9}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="textColor"
                  label="Text color"
                  name="textColor"
                  autoComplete="textColor"
                  placeholder="Text color"
                  value={textColor || ""}
                  onChange={(event) => handleChangeData(event, setTextColor)}
                />
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

export default Header;