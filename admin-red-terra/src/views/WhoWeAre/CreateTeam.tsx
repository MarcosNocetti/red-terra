import { FormEvent, useState, useEffect } from "react";
import {
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createTeamRequest } from "../../store/modules/whoWeAre/actions";
import Loader from "../../components/Loader";
import { Form } from "../../components/Form";

function CreateTeam() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [base64Value, setBase64Value] = useState<any>("");
  const [whoWeAreId, setWhoWeAreId] = useState("");
  const [language, setLanguage] = useState("en");

  const { loading } = useSelector((state: any) => state.whoWeAre);
  const { base64 } = useSelector((state: any) => state.base64);
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
      label: "name",
      type: "text",
      cb: setName,
      defaultValue: name,
      spacing: 5.9,
      required: true,
    },
    {
      label: "position",
      type: "text",
      cb: setPosition,
      defaultValue: position,
      spacing: 12,
      required: true,
    },
    {
      label: "resume",
      type: "text",
      cb: setResume,
      defaultValue: resume,
      spacing: 12,
      required: true,
    },
    {
      label: "url",
      type: "text",
      cb: setUrl,
      defaultValue: url,
      spacing: 12,
      required: true,
    },
    {
      label: "photo Url",
      type: "image",
      cb: setPhotoUrl,
      defaultValue: photoUrl,
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
        label: "name",
        type: "text",
        cb: setName,
        defaultValue: name,
        spacing: 5.9,
        required: true,
      },
      {
        label: "position",
        type: "text",
        cb: setPosition,
        defaultValue: position,
        spacing: 12,
        required: true,
      },
      {
        label: "resume",
        type: "text",
        cb: setResume,
        defaultValue: resume,
        spacing: 12,
        required: true,
      },
      {
        label: "url",
        type: "text",
        cb: setUrl,
        defaultValue: url,
        spacing: 12,
        required: true,
      },
      {
        label: "photo Url",
        type: "image",
        cb: setPhotoUrl,
        defaultValue: photoUrl,
        spacing: 12,
        required: true,
      },
    ]);
  }, [whoWeAreId, language, name, position, resume, url, photoUrl]);

  useEffect(() => {
    if(language === "en") {
      setWhoWeAreId("1")
    } else {
      setWhoWeAreId("2")
    }
  }, [language]);

  useEffect(() => {
    if(base64?.error) {
      setBase64Value('')
      return
    }
    if(base64?.base64Image) {
      setBase64Value(base64.base64Image)
    }
  }, [base64])

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    const Form: any = {
      whoWeAreId,
      name,
      position,
      resume,
      language,
      url: String(url),
      photoUrl
    };

    dispatch(createTeamRequest(Form));
  }

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          Create Team Person
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

export default CreateTeam;
