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
import { updateRdnRequest } from "../../store/modules/whoWeAre/actions";

function EditRdn() {
  const dispatch = useDispatch();
  const [title] = useState("");
  const [description] = useState("");
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [personName, setPersonName] = useState("");
  const [whoWeAreId, setWhoWeAreId] = useState("");
  const [language, setLanguage] = useState("en");

  const { rdn, loading } = useSelector((state: any) => state.whoWeAre);
  const [rdnForm, setRdnForm] = useState<any>();
  const { id } = useParams();

  useEffect(() => {
    if (rdn?.length) {
      const selected = rdn.filter(
        (link: any) => String(link.id) === id
      )[0];
      setText(selected.text);
      setUrl(selected.url);
      setPersonName(selected.personName);
      setWhoWeAreId(selected.whoWeAreId);
      setLanguage(selected.language);

      setRdnForm([
        {
          label: "language",
          type: "combobox",
          cb: setLanguage,
          defaultValue: language,
          spacing: 3.9,
          required: true,
        },
        {
          label: "url",
          type: "text",
          cb: setUrl,
          defaultValue: url,
          spacing: 3.9,
          required: true,
        },
        {
          label: "personName",
          type: "text",
          cb: setPersonName,
          defaultValue: personName,
          spacing: 12,
          required: true,
        },
        {
          label: "text",
          type: "text",
          cb: setText,
          defaultValue: text,
          spacing: 12,
          required: true,
        },
      ]);
    }
  }, []);

  useEffect(() => {
    setRdnForm([
      {
        label: "language",
        type: "combobox",
        cb: setLanguage,
        defaultValue: language,
        spacing: 5.9,
        required: true,
      },
      {
        label: "url",
        type: "text",
        cb: setUrl,
        defaultValue: url,
        spacing: 5.9,
        required: true,
      },
      {
        label: "personName",
        type: "text",
        cb: setPersonName,
        defaultValue: personName,
        spacing: 12,
        required: true,
      },
      {
        label: "text",
        type: "text",
        cb: setText,
        defaultValue: text,
        spacing: 12,
        required: true,
      },
    ]);
  }, [whoWeAreId, language, url, personName, text]);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    const Form: any = {
      whoWeAreId,
      language,
      url,
      title,
      description,
      personName,
      text
    };
    Form.whoWeAreId = String(whoWeAreId)
    Form.id = String(id)
    

    dispatch(updateRdnRequest(Form, Form.id));
  }

  useEffect(() => {
    if(language === "en") {
      setWhoWeAreId("1")
    } else {
      setWhoWeAreId("2")
    }
  }, [language]);

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          Edit rdn
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />

        {loading ? (
          <Loader />
        ) : (
          rdnForm?.length && (
            <Form
              fields={rdnForm}
              buttonLabel={'save'}
              submitCallback={handleSubmit}
            />
          )
        )}


      </Box>
    </>
  );
}

export default EditRdn;
