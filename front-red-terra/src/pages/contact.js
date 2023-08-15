import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import {
  ContainerBody,
  H1,
  BoxTelephone,
  PTitle,
  ADescription,
  BoxEmail,
  P,
  PBold,
  PFooter,
  AEmail,
} from "../components/Styles/ContactStyled";
import { Provider, useSelector } from "react-redux";
import { useFooterRequest } from "../store/hooks/footer";
import { useContactRequest } from "../store/hooks/contact";
import { useWhatsHappeningRequest } from "../store/hooks/whatsHappening";
import { useWhatWeDoRequest } from "../store/hooks/whatWeDo";
import { useWhoWeAreRequest } from "../store/hooks/whoWeAre";
import { useAwardsRequest } from "../store/hooks/awards";
import store from "../store";
import Loader from "../components/loader";
import SEO from "../components/Seo";

function ContactComponent() {
  const [selectedContactData, setSelectedContactData] = useState();
  const { contact } = useSelector((state) => state.contact);
  const { language } = useSelector((state) => state.language);

  useFooterRequest();
  useContactRequest();
  useWhatsHappeningRequest();
  useWhatWeDoRequest();
  useWhoWeAreRequest();
  useAwardsRequest();

  useEffect(() => {
    if (contact) {
      setSelectedContactData(contact[language]);
    }
  }, [contact, language]);

  function handleWhatsappLink() {
    const telefoneLimpo = selectedContactData?.telephone.replace(/\D/g, "");
    return `https://wa.me/${telefoneLimpo}`;
  }

  return (
    <main>
      <SEO
        description="Red Terra Studios contact page"
        lang={language}
        meta=""
        title="Red Terra Studios contact"
      />
      <GlobalStyle />
      <Header />
      {contact ? (
        <>
          <Banner img={selectedContactData?.bannerUrl} />
          <ContainerBody>
            <div>
              <H1>{language === "en" ? "Contact" : "Contato"}</H1>
              <BoxTelephone>
                <PTitle>{language === "en" ? "Telephone" : "Telefone"}</PTitle>
                <ADescription href={handleWhatsappLink()} target="_blank">
                  {selectedContactData?.telephone}
                </ADescription>
              </BoxTelephone>
              <BoxEmail>
                <PTitle>E-mail</PTitle>
                <AEmail href={`mailto:${selectedContactData?.email}`}>
                  {selectedContactData?.email}
                </AEmail>
              </BoxEmail>

              <div>
                {selectedContactData?.description &&
                  selectedContactData?.description
                    .split("\n\n")
                    .map((paragraph) => <P>{paragraph}</P>)}

                <PBold>"{selectedContactData?.quote}"</PBold>
                <PFooter>{selectedContactData?.quoteAuthor}</PFooter>
              </div>
            </div>
          </ContainerBody>

          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default function contact() {
  return (
    <Provider store={store}>
      <ContactComponent />
    </Provider>
  );
}

export const Head = () => <title>Red Terra Studios</title>;
