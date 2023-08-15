import React, { useEffect, useState } from "react";
import { navigate, Link } from "gatsby";
import { Provider, useSelector } from "react-redux";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import { useWhatsHappeningRequest } from "../store/hooks/whatsHappening";
import { useNewsRelationRequest } from "../store/hooks/newsRelation";
import {
  Container,
  NewsHeader,
  Title,
  SubTitle,
  NewsContent,
  ShareContainer,
  ChangePostContainer,
  ChangePostActionContainer,
  RedCartaContainer,
} from "../components/Styles/newsStyled";
import SEO from "../components/Seo";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import store from "../store";
import DOMPurify from "dompurify";
import facebook from "../assets/images/footer/facebook.png";
import twitter from "../assets/images/footer/twitter.png";
import arrowFront from "../assets/images/arrow-front.svg";
import arrowBack from "../assets/images/arrow-back.svg";

const months = {
  en: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  br: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
};

function News({ props }) {
  const [news, setNews] = useState();
  const [previous, setPrevious] = useState();
  const [next, setNext] = useState();
  const [lastRedCarta, setLastRedCarta] = useState();
  const [shareUrl, setShareUrl] = useState();
  const { whatsHappening } = useSelector((state) => state.whatsHappening);
  const { newsRelation } = useSelector((state) => state.newsRelation);
  const { language } = useSelector((state) => state.language);

  useEffect(() => {
    if (props.location && props.location.hash && whatsHappening) {
      const idHash = props.location.hash.slice(1);
      if (!idHash) {
        navigate("/whatsHappening");
        return;
      } else {
        const whatsHappeningNews = whatsHappening[language].news;
        for (let i = 0; i < whatsHappeningNews.length; i++) {
          if (whatsHappeningNews[i].id === Number(idHash)) {
            setNews(whatsHappeningNews[i]);
            setNext(
              whatsHappeningNews.length - 1 > i
                ? whatsHappeningNews[i + 1]
                : null
            );
            setPrevious(0 < i ? whatsHappeningNews[i - 1] : null);
            break;
          }
        }

        let lastRedCarta;
        whatsHappening[language].redCarta.forEach((redCarta) => {
          const redCartaDate = new Date(redCarta.monthYear);
          const lastRedCartaDate = new Date(lastRedCarta?.monthYear);
          if (lastRedCarta && redCartaDate > lastRedCartaDate) {
            lastRedCarta = redCarta;
          } else if (!lastRedCarta) {
            lastRedCarta = redCarta;
          }
        });
        setLastRedCarta(lastRedCarta);
      }
    }
  }, [props.location, whatsHappening]);

  useEffect(() => {
    if (newsRelation && news && newsRelation[language]) {
      const whatsHappeningNews = whatsHappening[language].news;
      for (let i = 0; i < whatsHappeningNews.length; i++) {
        if (newsRelation[language].id === whatsHappeningNews[i].id) {
          setNews(whatsHappeningNews[i]);
          setNext(
            whatsHappeningNews.length - 1 > i ? whatsHappeningNews[i + 1] : null
          );
          setPrevious(0 < i ? whatsHappeningNews[i - 1] : null);
          break;
        }
      }
    }
  }, [language]);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, [news, lastRedCarta]);

  useWhatsHappeningRequest();
  useNewsRelationRequest(props.location.hash.slice(1));

  function formatSubtitle(createdAt) {
    const date = new Date(createdAt);
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const formattedDate = months[language][monthIndex] + " " + year;
    return formattedDate;
  }

  function formatPreviousNextDate(createdAt) {
    const date = new Date(createdAt);
    const monthIndex = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate =
      months[language][monthIndex] + " " + ("0" + day).slice(-2) + ", " + year;
    return formattedDate;
  }

  return (
    <main
      style={{
        overflowX: "hidden",
      }}
    >
      <SEO
        description="Red Terra Studios news page"
        lang={language}
        meta=""
        title="Red Terra Studios news"
        keywords={news?.title}
      />
      <GlobalStyle />
      <Header primary={false} />

      {news && (
        <>
          <Container>
            <NewsHeader>
              <img src={news.imageUrl} />
            </NewsHeader>

            <div>
              <Title>{news.title}</Title>
              <SubTitle>{formatSubtitle(news.createdAt)}</SubTitle>

              <NewsContent
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(news.text),
                }}
              ></NewsContent>

              <ShareContainer>
                <h1>Share</h1>
                <div>
                  <FacebookShareButton title={news.title} url={shareUrl}>
                    <img src={facebook} />
                  </FacebookShareButton>
                  <TwitterShareButton title={news.title} url={shareUrl}>
                    <img src={twitter} />
                  </TwitterShareButton>
                </div>
              </ShareContainer>

              <ChangePostContainer>
                {previous && (
                  <div>
                    <ChangePostActionContainer>
                      <Link to={`/news/#${previous.id}`}>
                        <img src={arrowBack} />
                        <div>
                          <p>Previous Post</p>
                          <h1>{previous.title}</h1>
                          <h2>{formatPreviousNextDate(previous.createdAt)}</h2>
                        </div>
                      </Link>
                    </ChangePostActionContainer>
                  </div>
                )}
                {next && (
                  <div>
                    <ChangePostActionContainer className="right">
                      <Link to={`/news/#${next.id}`}>
                        <div>
                          <p>Next Post</p>
                          <h1>{next.title}</h1>
                          <h2>{formatPreviousNextDate(next.createdAt)}</h2>
                        </div>
                        <img src={arrowFront} />
                      </Link>
                    </ChangePostActionContainer>
                  </div>
                )}
              </ChangePostContainer>
            </div>
          </Container>
          {lastRedCarta && (
            <RedCartaContainer>
              <div>
                <div>
                  <h1>the red carta</h1>
                  <p>
                    Every month our Managing Director Gideon Boulting will share
                    thoughts inspired by the Red Terra Studios mission of
                    reprensentation, inclusion, truth and the powerful personal
                    and inspiring life stories, true crime, social critique,
                    indigenous peoples, climate change and the arts.
                  </p>
                </div>
                <Link to={`/whatsHappening/#${lastRedCarta.id}`}>
                  <div className="image">
                    <div></div>
                    <img src={lastRedCarta.imageUrl} />
                    <h1>{lastRedCarta.title}</h1>
                    <h2>{lastRedCarta?.monthYear}</h2>
                  </div>
                </Link>
              </div>
            </RedCartaContainer>
          )}
        </>
      )}

      <Footer />
    </main>
  );
}

export default function news(props) {
  return (
    <Provider store={store}>
      <News props={props} />
    </Provider>
  );
}

export const Head = () => <title>Red Terra Studios</title>;
