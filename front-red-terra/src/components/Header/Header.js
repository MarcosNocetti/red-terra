import React, { useEffect, useState } from "react";
import {
  MainHeader,
  NavBar,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  Close,
  MobileMenu,
  Menu,
  MenuLogo,
  LogoImg,
  MenuLink,
  MenuFollow,
  MenuIcons,
  TextFollow,
  ALink,
  Icons,
  Center,
  LinkLogo,
  LanguageButton,
  LanguageContainer,
  MenuLanguage,
} from "./styled";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/slices/languageSlice";
import LogoWhite from "../../assets/images/redterra_white_logo.webp";
import Logo from "../../assets/images/redterra_logo.webp";
import instagram from "../../assets/images/Header/Vector (4).png";
import facebook from "../../assets/images/Header/Vector (3).png";
import linkedin from "../../assets/images/Header/Vector (1).png";
import twitter from "../../assets/images/Header/Vector.png";
import youtube from "../../assets/images/Header/Vector (2).png";
import vimeo from "../../assets/images/Header/vimeo.png";
import store from "../../store";

const HeaderComponent = ({ primary }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const { language } = useSelector((state) => state.language);
  const { footer } = useSelector((state) => state.footer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(footer);
  }, [footer]);

  function handleToggleLanguage() {
    dispatch(setLanguage());
  }

  function selectIcon(label) {
    switch (label) {
      case "Facebook":
        return facebook;
      case "Instagram":
        return instagram;
      case "Linkedin":
        return linkedin;
      case "Twitter":
        return twitter;
      case "Youtube":
        return youtube;
      case "Vimeo":
        return vimeo;
      default:
        return;
    }
  }

  return (
    <MainHeader primary={primary} menuIsVisible={menuIsVisible}>
      <Center>
        <div>
          <NavBar menuIsVisible={menuIsVisible}>
            <LinkLogo primary={primary} to="/">
              <NavLogo src={primary ? Logo : LogoWhite} />
            </LinkLogo>
            <Bars
              primary={primary}
              menuIsVisible={menuIsVisible}
              onClick={() => setMenuIsVisible(true)}
            />
            <NavMenu>
              <NavLink
                primary={primary}
                to="/whatWeDo"
                activeStyle={{ textDecoration: "underline", fontWeight: 600 }}
              >
                {language === "en" ? "What We Do" : "O Que Fazemos"}
              </NavLink>
              <NavLink
                primary={primary}
                to="/whoWeAre"
                activeStyle={{ textDecoration: "underline", fontWeight: 600 }}
              >
                {language === "en" ? "Who We Are" : "Quem Somos"}
              </NavLink>
              <NavLink
                primary={primary}
                to="/whatsHappening"
                activeStyle={{ textDecoration: "underline", fontWeight: 600 }}
              >
                {language === "en" ? `What's Happening` : "Novidades"}
              </NavLink>
              <NavLink
                primary={primary}
                to="/contact"
                activeStyle={{ textDecoration: "underline", fontWeight: 600 }}
              >
                {language === "en" ? "Contact" : "Contato"}
              </NavLink>

              <LanguageContainer primary={primary}>
                <LanguageButton
                  onClick={() => language === "br" && handleToggleLanguage()}
                  className={language === "en" ? "active" : null}
                >
                  EN
                </LanguageButton>{" "}
                |{" "}
                <LanguageButton
                  onClick={() => language === "en" && handleToggleLanguage()}
                  className={language === "br" ? "active" : null}
                >
                  BR
                </LanguageButton>
              </LanguageContainer>
            </NavMenu>
          </NavBar>
        </div>
      </Center>

      <MobileMenu menuIsVisible={menuIsVisible}>
        <Menu>
          <MenuLogo>
            <LogoImg src={LogoWhite} />
          </MenuLogo>
          <Close
            primary={primary}
            menuIsVisible={menuIsVisible}
            onClick={() => setMenuIsVisible(false)}
          />
          <MenuLink to="/" activeStyle={{ textDecoration: "underline" }}>
            Home
          </MenuLink>
          <MenuLink
            to="/whatWeDo"
            activeStyle={{ textDecoration: "underline" }}
          >
            {language === "en" ? "What we do" : "O que fazemos"}
          </MenuLink>
          <MenuLink
            to="/whoWeAre"
            activeStyle={{ textDecoration: "underline" }}
          >
            {language === "en" ? "Who we are" : "Quem somos"}
          </MenuLink>
          <MenuLink
            to="/whatsHappening"
            activeStyle={{ textDecoration: "underline" }}
          >
            {language === "en" ? `What's Happening` : "Notícias"}
          </MenuLink>
          <MenuLink to="/contact" activeStyle={{ textDecoration: "underline" }}>
            {language === "en" ? "Contact" : "Contato"}
          </MenuLink>
          <MenuLanguage>
            <LanguageButton
              onClick={() => language === "br" && handleToggleLanguage()}
              className={language === "en" ? "active" : null}
            >
              EN
            </LanguageButton>
            <LanguageButton
              onClick={() => language === "en" && handleToggleLanguage()}
              className={language === "br" ? "active" : null}
            >
              BR
            </LanguageButton>
          </MenuLanguage>
        </Menu>
        <MenuFollow>
          <TextFollow>Follow us</TextFollow>
          <MenuIcons>
            {footer?.links &&
              language &&
              footer.links.map(
                ({ link, label }, index) =>
                  link && (
                    <ALink key={index} href={link} target="_blank">
                      <Icons src={selectIcon(label)} />
                    </ALink>
                  )
              )}
          </MenuIcons>
        </MenuFollow>
      </MobileMenu>
    </MainHeader>
  );
};

export default function Header({ primary }) {
  return (
    <Provider store={store}>
      <HeaderComponent primary={primary} />
    </Provider>
  );
}
