import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import {
  Container,
  H1,
  ContainerText,
  ContainerTextFooter,
  H2,
  P,
  A,
  ContainerVideo,
} from "../components/Styles/videosStyled";
import Video from "../components/Video/Video";
import { Provider, useSelector } from "react-redux";
import store from "../store";
import { navigate } from "gatsby";
import { useDocumentaryRelationRequest } from "../store/hooks/documentaryRelation";
import SEO from "../components/Seo";

function Videos({ props }) {
  const [id, setId] = useState();
  const { documentaryRelation } = useSelector(
    (state) => state.documentaryRelation
  );
  const { language } = useSelector((state) => state.language);

  useEffect(() => {
    if (props.location && props.location.hash) {
      const idHash = props.location.hash.slice(1);
      if (!idHash) {
        navigate("/whatWeDo");
        return;
      }
      setId(idHash);
    }
  }, [props.location]);

  useDocumentaryRelationRequest(id);

  return (
    <main>
      <SEO
        description="Red Terra Studios video page"
        lang={language}
        meta=""
        title="Red Terra Studios video"
        keywords={documentaryRelation && documentaryRelation[language]?.name}
      />
      <GlobalStyle />
      {documentaryRelation && (
        <>
          <Header primary="true" />

          <Container>
            <div>
              <H1>
                {documentaryRelation[language]?.name &&
                  documentaryRelation[language].name}
              </H1>

              {documentaryRelation[language]?.videoUrl ? (
                <Video
                  url={
                    documentaryRelation[language].videoUrl.includes("v=")
                      ? documentaryRelation[language].videoUrl.split("v=")[1]
                      : documentaryRelation[language].videoUrl
                  }
                />
              ) : (
                <ContainerVideo />
              )}

              <ContainerText>
                <ContainerTextFooter>
                  <H2>Sinopse</H2>
                  <P>
                    {documentaryRelation[language]?.sinopse &&
                      documentaryRelation[language].sinopse}
                  </P>
                  {documentaryRelation[language]?.sinopseUrl && (
                    <A
                      href={documentaryRelation[language].sinopseUrl}
                      target="_blank"
                    >
                      {documentaryRelation[language].sinopseUrlLabel
                        ? documentaryRelation[language].sinopseUrlLabel
                        : "More on IMDB.com"}
                    </A>
                  )}
                </ContainerTextFooter>
                <ContainerTextFooter>
                  <H2>{language === "en" ? "Awards" : "Prêmios"}</H2>
                  {documentaryRelation[language]?.awards.map(
                    (award) => award?.name && <P>{award.name}</P>
                  )}
                </ContainerTextFooter>
              </ContainerText>
            </div>
          </Container>

          <Footer />
        </>
      )}
    </main>
  );
}

export default function videos(props) {
  return (
    <Provider store={store}>
      <Videos props={props} />
    </Provider>
  );
}

export const Head = () => <title>Red Terra Studios</title>;
