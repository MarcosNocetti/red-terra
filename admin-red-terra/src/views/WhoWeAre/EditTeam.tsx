import { Box, Divider, Typography } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Form } from "../../components/Form";
import Loader from "../../components/Loader";
import { updateTeamRequest } from "../../store/modules/whoWeAre/actions";

function EditTeam() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [base64Value, setBase64Value] = useState<any>("");
  const [whoWeAreId, setWhoWeAreId] = useState("");
  const [language, setLanguage] = useState("en");

  const { team, loading } = useSelector((state: any) => state.whoWeAre);
  const [teamForm, setTeamForm] = useState<any>();
  const { id } = useParams();
  const { base64 } = useSelector((state: any) => state.base64);

  useEffect(() => {
    if (team?.length) {
      const selected = team.filter((link: any) => String(link.id) === id)[0];
      setName(selected.name);
      setPosition(selected.position);
      setResume(selected.resume);
      setUrl(selected.url);
      setPhotoUrl(selected.photoUrl);
      setWhoWeAreId(selected.whoWeAreId);
      setLanguage(selected.language);
      setTeamForm([
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
    }
  }, []);

  useEffect(() => {
    setTeamForm([
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
  }, [whoWeAreId, name, position, language, resume, url, photoUrl]);

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
      language,
      resume,
      url: String(url),
      photoUrl,
    };
    Form.whoWeAreId = String(whoWeAreId);
    Form.id = String(id);

    dispatch(updateTeamRequest(Form, Form.id));
  }

  useEffect(() => {
    if (language === "en") {
      setWhoWeAreId("1");
    } else {
      setWhoWeAreId("2");
    }
  }, [language]);

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          Edit team
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />

        {loading ? (
          <Loader />
        ) : (
          teamForm?.length && (
            <Form
              fields={teamForm}
              buttonLabel={"save"}
              submitCallback={handleSubmit}
            />
          )
        )}

      </Box>
    </>
  );
}

export default EditTeam;
