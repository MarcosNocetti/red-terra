import React from "react";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import {
  ContainerBody,
  H1,
  P,
  GridContainer,
  ContainerItems,
  GridItem,
  TextItem,
  H1Item,
  PItem,
  ContainerText,
  ContainerTextFooter,
  H2,
  H3,
  GridContainerText,
  ContentOverlay,
} from "../components/Styles/whatWeDoStyled";
import { Provider, useSelector } from "react-redux";
import store from "../store";
import { useFooterRequest } from "../store/hooks/footer";
import { useContactRequest } from "../store/hooks/contact";
import { useWhatsHappeningRequest } from "../store/hooks/whatsHappening";
import { useWhatWeDoRequest } from "../store/hooks/whatWeDo";
import { useWhoWeAreRequest } from "../store/hooks/whoWeAre";
import { useAwardsRequest } from "../store/hooks/awards";
import ButtonFloating from "../components/ButtonFloating/ButtonFloating";
import Loader from "../components/loader";
import SEO from "../components/Seo";
import DOMPurify from "dompurify";

const WhatWeDoComponent = () => {
  const { whatWeDo } = useSelector((state) => state.whatWeDo);
  const { language } = useSelector((state) => state.language);

  useFooterRequest();
  useContactRequest();
  useWhatsHappeningRequest();
  useWhatWeDoRequest();
  useWhoWeAreRequest();
  useAwardsRequest();

  return (
    <main>
      <GlobalStyle />
      <Header />
      <SEO
        description="Red Terra Studios what we do page"
        lang={language}
        meta=""
        title="Red Terra Studios what we do"
      />
      {whatWeDo ? (
        <>
          <Banner
            img={
              whatWeDo &&
              whatWeDo[language]?.bannerUrl &&
              whatWeDo[language].bannerUrl
            }
          />

          <ContainerBody>
            <div>
              <ContainerText>
                <H1>
                  {whatWeDo &&
                    whatWeDo[language]?.title &&
                    whatWeDo[language].title}
                </H1>

                {whatWeDo &&
                  whatWeDo[language]?.text &&
                  whatWeDo[language].text
                    .split("\n\n")
                    .map((paragraph, index) => {
                      return (
                        <P
                          key={index}
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              paragraph.replace(/\n/g, "<br />")
                            ),
                          }}
                        ></P>
                      );
                    })}
              </ContainerText>
            </div>
          </ContainerBody>

          <GridContainer>
            {whatWeDo &&
              whatWeDo[language]?.documentaries &&
              whatWeDo[language].documentaries.map((documentarie) => (
                <ContainerItems
                  to={`/videos/#${documentarie.id}`}
                  key={documentarie.id}
                >
                  {documentarie.imageUrl ? (
                    <GridItem src={documentarie.imageUrl} />
                  ) : (
                    <GridItem />
                  )}
                  <ContentOverlay />
                  <TextItem>
                    <H1Item>{documentarie.name}</H1Item>
                    <PItem>{documentarie.availability}</PItem>
                  </TextItem>
                </ContainerItems>
              ))}
          </GridContainer>

          <ContainerBody>
            <div>
              <H2>
                {whatWeDo &&
                  whatWeDo[language]?.creditTitle &&
                  whatWeDo[language].creditTitle}
              </H2>

              <GridContainerText>
                {whatWeDo &&
                  whatWeDo[language]?.credits &&
                  whatWeDo[language].credits.map((credit) => (
                    <ContainerTextFooter key={credit.id}>
                      <H3>{credit.subtitle}</H3>
                      <P>{credit.text}</P>
                    </ContainerTextFooter>
                  ))}
              </GridContainerText>
            </div>
          </ContainerBody>
          <ButtonFloating />

          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default function whatWeDo() {
  return (
    <Provider store={store}>
      <WhatWeDoComponent />
    </Provider>
  );
}

export const Head = () => <title>Red Terra Studios</title>;
