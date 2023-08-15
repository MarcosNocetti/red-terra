import React, { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import {
  ContainerWhatHappening,
  H1,
  ContainerCards,
  PCardsDate,
  H2Cards,
  ContainerRedCarta,
  RedCartaCenter,
  CenterText,
  H2RedCarta,
  PTop,
  NewsContainer,
  NewsCard,
  NewsCardContent,
  LoadMoreContainer,
  LoadMoreButton,
  NewsImageContainer,
} from "../components/Styles/whatsHappeningStyled";
import { Provider, useSelector } from "react-redux";
import { useFooterRequest } from "../store/hooks/footer";
import { useContactRequest } from "../store/hooks/contact";
import { useWhatsHappeningRequest } from "../store/hooks/whatsHappening";
import { useWhatWeDoRequest } from "../store/hooks/whatWeDo";
import { useWhoWeAreRequest } from "../store/hooks/whoWeAre";
import { useAwardsRequest } from "../store/hooks/awards";
import { handleDate } from "../utils/handleDate";
import { RedCartaDropdown } from "../components/RedCartaDropdown";
import store from "../store";
import ButtonFloating from "../components/ButtonFloating/ButtonFloating";
import Loader from "../components/loader";
import SEO from "../components/Seo";
import { NewsArchiveContainer } from "../components/Styles/whatsHappeningNewsArchive";
import { handleMonthNumberToName } from "../utils/handleMonthNumberToName";
import Footer from "../components/Footer/Footer";

function WhatsHappeningComponent({ props }) {
  const { whatsHappening } = useSelector((state) => state.whatsHappening);
  const { language } = useSelector((state) => state.language);
  const [dataNews, setDataNews] = useState([]);
  const [minMonth, setMinMonth] = useState(new Date().getMonth() + 1);
  const [minYear, setMinYear] = useState(new Date().getFullYear());
  const [selectedArchive, setSelectedArchive] = useState();

  useEffect(() => {}, [props.location, whatsHappening]);

  useEffect(() => {
    if (whatsHappening) {
      const reversed = filterObjectsByMinMonth();
      setDataNews(reversed);
      whatsHappening[language]?.news && setDataNews(reversed);
    }
  }, [whatsHappening, language]);

  useEffect(() => {}, [dataNews, selectedArchive]);

  function filterObjectsByMinMonth(month = minMonth) {
    let newsByMinMonth = [];
    let newMinMonth = month;
    let newMinYear = minYear;

    while (!newsByMinMonth.length) {
      newsByMinMonth = whatsHappening[language]?.news.filter((obj) => {
        const date = new Date(obj.createdAt);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return month >= newMinMonth && year >= newMinYear;
      });

      if (!newsByMinMonth.length) {
        if (newMinMonth === 1) {
          newMinMonth = 12;
          newMinYear = minYear - 1;
        } else {
          newMinMonth -= 1;
        }
      }
    }

    setMinMonth(newMinMonth);
    setMinYear(newMinYear);

    return newsByMinMonth.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  function loadMoreNews() {
    setDataNews(filterObjectsByMinMonth(minMonth - 1));
  }

  function archiveDates() {
    const archiveDatesFiltered = whatsHappening[language]?.news.map((obj) => {
      const date = new Date(obj.createdAt);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return { month, year };
    });

    return Array.from(
      new Set(
        archiveDatesFiltered
          .sort((a, b) => {
            if (a.year === b.year) {
              return b.month - a.month;
            } else {
              return a.year - b.year;
            }
          })
          .map(
            ({ month, year }) =>
              `${handleMonthNumberToName(month, language)} ${year}`
          )
      )
    ).slice(-12);
  }

  function filterNewsByArchiveDate(archiveDate) {
    const [archiveDateMonth, archiveDateYear] = archiveDate.split(" ");

    const filteredObjects = whatsHappening[language]?.news
      .filter((obj) => {
        const date = new Date(obj.createdAt);
        const month = date.toLocaleString("en-US", { month: "long" });
        const year = date.getFullYear();

        return (
          month === archiveDateMonth && year.toString() === archiveDateYear
        );
      })
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setDataNews(filteredObjects);
  }

  function handleClickArchiveDate(archiveDate) {
    if (selectedArchive === archiveDate) {
      setSelectedArchive(null);
      setDataNews(filterObjectsByMinMonth());
    } else {
      setSelectedArchive(archiveDate);
      filterNewsByArchiveDate(archiveDate);
    }
  }

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
        description="Red Terra Studios whats happening page"
        lang={language}
        meta=""
        title="Red Terra Studios whats happening"
      />
      {whatsHappening ? (
        <>
          <Banner
            img={
              whatsHappening &&
              whatsHappening[language]?.bannerUrl &&
              whatsHappening[language].bannerUrl
            }
          />
          <ContainerWhatHappening>
            <div>
              <H1>
                {whatsHappening &&
                  whatsHappening[language]?.title &&
                  whatsHappening[language].title}
              </H1>
              <NewsContainer>
                {dataNews &&
                  dataNews.map(({ createdAt, title, imageUrl, id }, index) => (
                    <ContainerCards
                      className={
                        index === 0
                          ? "first"
                          : index === dataNews.length - 1 &&
                            dataNews.length % 2 === 0
                          ? "last"
                          : ""
                      }
                      to={`/news/#${id}`}
                      key={index}
                    >
                      <NewsCard>
                        <NewsImageContainer
                          style={{ backgroundImage: `url(${imageUrl})` }}
                        ></NewsImageContainer>
                        <NewsCardContent>
                          <H2Cards>{title}</H2Cards>
                          <PCardsDate>{handleDate(createdAt)}</PCardsDate>
                        </NewsCardContent>
                      </NewsCard>
                    </ContainerCards>
                  ))}
              </NewsContainer>
              <LoadMoreContainer>
                <LoadMoreButton
                  type="button"
                  onClick={loadMoreNews}
                  disabled={
                    dataNews?.length ===
                      whatsHappening[language]?.news.length || selectedArchive
                  }
                >
                  {language === "en" ? `Load more` : "Carregar mais"}
                </LoadMoreButton>
              </LoadMoreContainer>

              <NewsArchiveContainer>
                <h1>{language === "en" ? "Archive" : "Arquivo"}</h1>
                {whatsHappening[language]?.news &&
                  archiveDates().map((archiveDate, index) => (
                    <button
                      key={index}
                      className={
                        selectedArchive === archiveDate ? "selected" : ""
                      }
                      onClick={() => {
                        handleClickArchiveDate(archiveDate);
                      }}
                      type="button"
                    >
                      {archiveDate}
                    </button>
                  ))}
              </NewsArchiveContainer>
            </div>
          </ContainerWhatHappening>

          <ContainerRedCarta>
            <RedCartaCenter>
              <CenterText>
                <div>
                  <div>
                    <H2RedCarta>
                      {language === "en" ? `THE RED CARTA` : "A RED CARTA"}
                    </H2RedCarta>
                  </div>
                  <PTop>
                    {language === "en"
                      ? "Every month the Red Terra collective shares thoughts inspired by their mission of REPRESENTATION, INCLUSION, TRUTH and the pillars of their slate of powerful personal and inspiring life stories, true crime, social critique, indigenous peoples, climate change and the arts."
                      : "Todos os meses, o coletivo Red Terra compartilhará pensamentos inspirados na missão RED TERRA de REPRESENTAÇÃO, INCLUSÃO, VERDADE e os pilares da RED TERRA em compartilhar poderosas histórias de vida pessoais e inspiradoras, crimes reais, crítica social, povos indígenas, mudança climática e as artes."}
                  </PTop>

                  <div>
                    <RedCartaDropdown
                      redCartas={whatsHappening[language]?.redCarta}
                      selectedRedCarta={props.location.hash.slice(1)}
                    />
                  </div>
                </div>
              </CenterText>
            </RedCartaCenter>
          </ContainerRedCarta>
        </>
      ) : (
        <Loader />
      )}

      <ButtonFloating />
      <Footer />
    </main>
  );
}

export default function WhatsHappening(props) {
  return (
    <Provider store={store}>
      <WhatsHappeningComponent props={props} />
    </Provider>
  );
}

export const Head = () => <title>Red Terra Studios</title>;
