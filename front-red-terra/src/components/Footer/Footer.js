import React from "react";
import {
  ContainerFooter,
  TextFooter,
  ContainerLink,
  FooterLink,
  Icons,
  Center,
} from "./styled";
import { useFooterRequest } from "../../store/hooks/footer";
import facebook from "../../assets/images/footer/facebook.png";
import instagram from "../../assets/images/footer/instagram.png";
import linkedin from "../../assets/images/footer/linkedin.png";
import twitter from "../../assets/images/footer/twitter.png";
import youtube from "../../assets/images/footer/youtube.png";
import vimeo from "../../assets/images/footer/vimeo.png";
import { useSelector } from "react-redux";

const Footer = () => {
  const { footer } = useSelector((state) => state.footer);
  const { language } = useSelector((state) => state.language);

  useFooterRequest();

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
    <Center>
      <div>
        <ContainerFooter>
          <TextFooter>
            {footer && language && footer[language]?.copyright}
          </TextFooter>
          <ContainerLink>
            {footer?.links &&
              language &&
              footer.links.map(
                ({ link, label }, index) =>
                  link && (
                    <FooterLink key={index} href={link} target="_blank">
                      <Icons src={selectIcon(label)} />
                    </FooterLink>
                  )
              )}
          </ContainerLink>
        </ContainerFooter>
      </div>
    </Center>
  );
};

export default Footer;
