import {
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Form } from "../../components/Form";
import Loader from "../../components/Loader";
import { updateLinksRequest } from "../../store/modules/footer/actions";

function EditFooterLink() {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");
  const [label, setLabel] = useState("");
  const [link, setLink] = useState("");

  const { footerLinks, loading } = useSelector((state: any) => state.footer);
  const [footerLinksForm, setFooterLinksForm] = useState<any>();
  const { id } = useParams();

  useEffect(() => {
    if (footerLinks?.length) {
      const selected = footerLinks.filter(
        (link: any) => String(link.id) === id
      )[0];
      setImageUrl(selected.imageUrl);
      setLabel(selected.label);
      setLink(selected.link);
      setFooterLinksForm([
        {
          label: "Redirect",
          type: "text",
          cb: setLink,
          defaultValue: link,
          spacing: 12,
          required: true,
        }
      ]);
    }
  }, []);

  useEffect(() => {
    setFooterLinksForm([
      {
        label: "Redirect",
        type: "text",
        cb: setLink,
        defaultValue: link,
        spacing: 12,
        required: true,
      }
    ]);
  }, [imageUrl, label, link]);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    const Form: any = {
      imageUrl,
      label,
      link,
    };
    Form.id = String(id)
    

    dispatch(updateLinksRequest(Form, Form.id));
  }

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          Edit footer link 
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />

        {loading ? (
          <Loader />
        ) : (
          footerLinksForm?.length && (
            <Form
              fields={footerLinksForm}
              buttonLabel={'save'}
              submitCallback={handleSubmit}
            />
          )
        )}
      </Box>
    </>
  );
}

export default EditFooterLink;
