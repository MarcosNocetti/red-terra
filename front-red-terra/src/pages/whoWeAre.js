import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import {
  ContainerBody,
  ContainerTextInit,
  PInit,
  PTop,
  ContainerText,
  H1,
  P,
  ContainerTeam,
  H2,
  ContainerItemTeam,
  ImgTeam,
  H3Team,
  PBoldTeam,
  PTeam,
  ContainerNews,
  ContainerTextNews,
  H3,
  ContainerTitleClients,
  BoxBtn,
  ContainerClients,
  ContainerItemClients,
  BoxShadow,
  H3Client,
  PClient,
  ContainerAwards,
  ImgAwards,
  ContainerTitleAwards,
  ContainerAwardsImg,
} from "../components/Styles/whoWeAreStyled";
import { Button } from "../components/Button/Button";
import { Provider, useSelector } from "react-redux";
import store from "../store";
import { useFooterRequest } from "../store/hooks/footer";
import { useContactRequest } from "../store/hooks/contact";
import { useWhatsHappeningRequest } from "../store/hooks/whatsHappening";
import { useWhatWeDoRequest } from "../store/hooks/whatWeDo";
import { useWhoWeAreRequest } from "../store/hooks/whoWeAre";
import { useAwardsRequest } from "../store/hooks/awards";
import PaginationWhoWeAre from "../components/paginationWhoWeAre/PaginationWhoWeAre";
import ButtonFloating from "../components/ButtonFloating/ButtonFloating";
import Loader from "../components/loader";
import SEO from "../components/Seo";

const WhoWeAreComponent = () => {
  const { whoWeAre } = useSelector((state) => state.whoWeAre);
  const { awards } = useSelector((state) => state.awards);
  const { language } = useSelector((state) => state.language);

  useEffect(() => {}, [awards, whoWeAre, language]);

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
        description="Red Terra Studios who we are page"
        lang={language}
        meta=""
        title="Red Terra Studios who we are"
      />
      {whoWeAre ? (
        <>
          <Banner
            img={
              whoWeAre &&
              whoWeAre[language]?.bannerUrl &&
              whoWeAre[language].bannerUrl
            }
          />

          <ContainerBody>
            <div>
              <ContainerTextInit>
                <PInit>
                  "
                  {whoWeAre &&
                    whoWeAre[language]?.quote &&
                    whoWeAre[language].quote}
                  "
                </PInit>
              </ContainerTextInit>
              <ContainerTextInit>
                <PTop>
                  {whoWeAre &&
                    whoWeAre[language]?.quoteAuthor &&
                    whoWeAre[language].quoteAuthor}
                </PTop>
              </ContainerTextInit>

              <ContainerText>
                <H1>
                  {whoWeAre &&
                    whoWeAre[language]?.title &&
                    whoWeAre[language].title}
                </H1>
                {whoWeAre &&
                  whoWeAre[language]?.text &&
                  whoWeAre[language].text
                    .split("\n\n")
                    .map((paragraph) => <P>{paragraph}</P>)}
              </ContainerText>

              <H2>
                {whoWeAre &&
                  whoWeAre[language]?.teamTitle &&
                  whoWeAre[language].teamTitle}
              </H2>
              <ContainerTeam>
                {whoWeAre &&
                  whoWeAre[language]?.teamPeople &&
                  whoWeAre[language].teamPeople.map(
                    ({ name, position, resume, url, photoUrl }) => (
                      <ContainerItemTeam>
                        {photoUrl ? <ImgTeam src={photoUrl} /> : <ImgTeam />}
                        <H3Team>{name}</H3Team>
                        <PBoldTeam>
                          {position
                            .split(" ")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() +
                                word.slice(1).toLowerCase()
                            )
                            .join(" ")}
                        </PBoldTeam>
                        <PTeam>{resume}</PTeam>
                        {url && (
                          <Button target="_blank" to={url}>
                            IMDB
                          </Button>
                        )}
                      </ContainerItemTeam>
                    )
                  )}
              </ContainerTeam>

              <H2>
                {whoWeAre &&
                  whoWeAre[language]?.rdnTitle &&
                  whoWeAre[language].rdnTitle}
              </H2>
              <P>
                {whoWeAre &&
                  whoWeAre[language]?.rdnDescription &&
                  whoWeAre[language].rdnDescription}
              </P>

              <ContainerNews>
                {whoWeAre &&
                  whoWeAre[language]?.rdns &&
                  whoWeAre[language].rdns.map(({ personName, text }) => (
                    <ContainerTextNews>
                      <H3>{personName}</H3>
                      <P>{text}</P>
                    </ContainerTextNews>
                  ))}
              </ContainerNews>

              <ClientSlider
                messages={
                  whoWeAre[language]?.clientReviews.length
                    ? whoWeAre[language].clientReviews
                    : []
                }
                title={
                  whoWeAre &&
                  whoWeAre[language]?.creditTitle &&
                  whoWeAre[language].creditTitle
                }
              />

              <AwardSlider
                awards={awards ? awards[language] : []}
                title={
                  whoWeAre &&
                  whoWeAre[language]?.creditTitle &&
                  whoWeAre[language].creditTitle
                }
              />
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

function AwardSlider({ awards, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [screenWidth, setScreenWidth] = useState();
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {}, [awards, currentIndex, translate]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (screenWidth > 1360) {
      setPostsPerPage(4);
    }

    if (screenWidth <= 1360) {
      setPostsPerPage(3);
    }

    if (screenWidth <= 868) {
      setPostsPerPage(2);
    }
  }, [screenWidth]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setScreenWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  function nextSlide() {
    if (currentIndex < awards.length - 1) {
      setTranslate((prevState) => prevState - 100 / postsPerPage);
      setCurrentIndex((prevState) => ++prevState);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      setTranslate((prevState) => prevState + 100 / postsPerPage);
      setCurrentIndex((prevState) => --prevState);
    }
  }

  return (
    awards.length && (
      <ContainerAwards>
        <ContainerTitleAwards>
          <BoxBtn>
            <H2>{title}</H2>
          </BoxBtn>
          <PaginationWhoWeAre
            totalPosts={awards.length}
            currentPage={currentIndex}
            postsPerPage={postsPerPage}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
          />
        </ContainerTitleAwards>

        <ContainerAwardsImg style={{ transform: `translateX(${translate}%)` }}>
          {awards.map((award, i) => (
            <div key={i} style={{ minWidth: `${100 / postsPerPage}%` }}>
              <img src={award?.imageUrl} />
            </div>
          ))}
        </ContainerAwardsImg>
      </ContainerAwards>
    )
  );
}

function ClientSlider({ messages, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [screenWidth, setScreenWidth] = useState();
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {}, [messages, currentIndex, translate]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (screenWidth > 1360) {
      setPostsPerPage(3);
    }

    if (screenWidth <= 1360) {
      setPostsPerPage(2);
    }

    if (screenWidth <= 868) {
      setPostsPerPage(1);
    }
  }, [screenWidth]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setScreenWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  function nextSlide() {
    if (currentIndex < messages.length - 1) {
      setTranslate((prevState) => prevState - 100 / postsPerPage);
      setCurrentIndex((prevState) => ++prevState);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      setTranslate((prevState) => prevState + 100 / postsPerPage);
      setCurrentIndex((prevState) => --prevState);
    }
  }

  return (
    messages?.length && (
      <d>
        <ContainerTitleClients>
          <BoxBtn>
            <H2>
              <H2>{title}</H2>
            </H2>
          </BoxBtn>
          <PaginationWhoWeAre
            totalPosts={messages.length}
            currentPage={currentIndex}
            postsPerPage={postsPerPage}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
          />
        </ContainerTitleClients>

        <ContainerClients>
          <ContainerItemClients
            style={{ transform: `translateX(${translate}%)` }}
          >
            {messages.map(({ name, position, review }, i) => (
              <div
                key={i}
                style={{
                  minWidth: `${100 / postsPerPage}% `,
                  display: "flex",
                  alignIitems: "center",
                  justifyContent: "center",
                }}
              >
                <BoxShadow>
                  <H3Client>{name}</H3Client>
                  <PClient>{position}</PClient>
                  <P>{review}</P>
                </BoxShadow>
              </div>
            ))}
          </ContainerItemClients>
        </ContainerClients>
      </d>
    )
  );
}

export default function whoWeAre() {
  return (
    <Provider store={store}>
      <WhoWeAreComponent />
    </Provider>
  );
}

export const Head = () => <title>Red Terra Studios</title>;
