import { Box, Divider, Typography } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAwardRequest } from "../../store/modules/awards/actions";
import { Form } from "../../components/Form";
import Loader from "../../components/Loader";
import { getDocumentaryRequest } from "../../store/modules/whatWeDo/actions";

function CreateAward() {
  const dispatch = useDispatch();
  const [label, setLabel] = useState("");
  const [imageUrl, setImageUrl] = useState<any>("");
  const [whoWeAreId, setWhoWeAreId] = useState("");
  const [language, setLanguage] = useState("en");
  const [documentaryId, setDocumentaryId] = useState("");
  const [valuesDocumentary, setValuesDocumentary] = useState([]);
  const { loading } = useSelector((state: any) => state.awards);
  const { documentary } = useSelector((state: any) => state.whatWeDo);

  useEffect(() => {
    dispatch(getDocumentaryRequest());
  }, [dispatch]);

  useEffect(() => {
    if (documentary) {
      setValuesDocumentary(documentary);
    }
  }, [documentary]);

  const [awardForm, setAwardForm] = useState([
    {
      label: "Name",
      type: "text",
      cb: setLabel,
      defaultValue: label,
      spacing: 3.9,
      required: true,
    },
    {
      label: "Language",
      type: "combobox",
      cb: setLanguage,
      defaultValue: language,
      spacing: 3.9,
      required: true,
    },
    {
      label: "Documentary",
      type: "comboboxValue",
      cb: setDocumentaryId,
      defaultValue: documentaryId,
      spacing: 3.9,
      required: true,
      valueCombobox: valuesDocumentary,
    },
    {
      label: "Image",
      type: "image",
      cb: setImageUrl,
      defaultValue: imageUrl,
      required: false,
    },
  ]);

  useEffect(() => {
    setAwardForm([
      {
        label: "Name",
        type: "text",
        cb: setLabel,
        defaultValue: label,
        spacing: 3.9,
        required: true,
      },
      {
        label: "Language",
        type: "combobox",
        cb: setLanguage,
        defaultValue: language,
        spacing: 3.9,
        required: true,
      },
      {
        label: "Documentary",
        type: "comboboxValue",
        cb: setDocumentaryId,
        defaultValue: documentaryId,
        spacing: 3.9,
        required: true,
        valueCombobox: valuesDocumentary,
      },
      {
        label: "Image",
        type: "image",
        cb: setImageUrl,
        defaultValue: imageUrl,
        required: false,
      },
    ]);
  }, [
    label,
    language,
    documentary,
    imageUrl,
    documentaryId,
    valuesDocumentary,
  ]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const award: any = {
      name: label,
      label,
      imageUrl,
      language,
      whoWeAreId
    };

    award.documentaryId = String(documentaryId)

    dispatch(createAwardRequest(award));
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
          Create Award
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />

        {loading ? (
          <Loader />
        ) : (
          <Form
            fields={awardForm}
            buttonLabel={"save"}
            submitCallback={handleSubmit}
          />
        )}
      </Box>
    </>
  );
}

export default CreateAward;
