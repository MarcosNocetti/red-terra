import { FormEvent, useState, useEffect } from "react";
import { Box, Divider, Typography, TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateLinkRequest } from "../../store/modules/headers/actions";

function EditLink() {
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [link, setLink] = useState<any>();
  const [label, setLabel] = useState("");
  const { links } = useSelector((state: any) => state.headers);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    setLink(links.filter((link: any) => String(link.id) === id)[0]);
    setLabel(links.filter((link: any) => String(link.id) === id)[0].label);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const updatedData: any = { ...link };

    updatedData.label = label;

    dispatch(
      updateLinkRequest(
        link,
        {
          ...updatedData,
          id: String(id),
          headerId: String(updatedData.headerId)
        },
        String(id)
      )
    )
  }

  function handleChangeData(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    cb: (data: string) => void
  ) {
    event.preventDefault();

    setIsFormTouched(true);
    const data = event.currentTarget.value as string;
    cb(data);
  }

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          Edit Link
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />
        {link && (
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="label"
              label="label"
              name="label"
              autoComplete="label"
              value={label}
              onChange={(event) => handleChangeData(event, setLabel)}
            />

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

export default EditLink;
