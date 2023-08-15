import { FormEvent, useState, useEffect } from "react";
import {
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createRndRequest } from "../../store/modules/whoWeAre/actions";
import Loader from "../../components/Loader";
import { Form } from "../../components/Form";

function CreateClientReview() {
  const dispatch = useDispatch();
  const [title] = useState("");
  const [description] = useState("");
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [personName, setPersonName] = useState("");
  const [whoWeAreId, setWhoWeAreId] = useState("");
  const [language, setLanguage] = useState("en");

  const { loading } = useSelector((state: any) => state.whoWeAre);
  const [form, setForm] = useState([
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

  useEffect(() => {
    setForm([
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

  useEffect(() => {
    if(language === "en") {
      setWhoWeAreId("1")
    } else {
      setWhoWeAreId("2")
    }
  }, [language]);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    const Form: any = {
      whoWeAreId,
      title,
      description,
      personName,
      language,
      text,
      url
    };

    dispatch(createRndRequest(Form));
  }

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          Create rdn
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />

        {loading ? (
          <Loader />
        ) : (
          <Form
            fields={form}
            buttonLabel={"save"}
            submitCallback={handleSubmit}
          />
        )}
      </Box>
    </>
  );
}

export default CreateClientReview;
