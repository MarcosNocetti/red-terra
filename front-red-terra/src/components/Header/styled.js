import styled from "styled-components";
import { Link } from "gatsby";
import { VscChromeClose, VscThreeBars } from "react-icons/vsc";

export const MainHeader = styled.header`
  background: ${({ primary }) =>
    primary ? "transparente" : "linear-gradient(#000000BF, #00000000)"};
  z-index: 100;
  position: relative;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 64%;
    @media screen and (max-width: 868px) {
      width: 100%;
    }
  }
`;

export const NavBar = styled.nav`
  height: 80px;
  display: ${({ menuIsVisible }) => (menuIsVisible ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;
export const NavMenu = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavLogo = styled.img`
  height: 45px;
`;
export const NavLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css2?family=Public+Sans&display=swap");

  color: ${({ primary }) => (primary ? "#343A40" : "#fff")};
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-family: "Public Sans", sans-serif;
  font-weight: bolder;

  &:hover {
    text-decoration: underline;
  }
`;
export const BtnLanguage = styled(Link)`
  color: ${({ primary }) => (primary ? "#343A40" : "#fff")};
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  > span {
    font-weight: bold;
  }

  :hover {
    text-decoration: underline;
  }
`;
export const Bars = styled(VscThreeBars)`
  display: none;
  color: ${({ primary }) => (primary ? "#343A40" : "#fff")};

  @media screen and (max-width: 768px) {
    display: ${({ menuIsVisible }) => (menuIsVisible ? "none" : "block")};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const Close = styled(VscChromeClose)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: ${({ menuIsVisible }) => (menuIsVisible ? "block" : "none")};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const MobileMenu = styled.div`
  display: ${({ menuIsVisible }) => (menuIsVisible ? "flex" : "none")};
  position: fixed;
  width: 100%;
  height: 100vh;
  padding: 0 16px 50px;
  flex-direction: column;
  justify-content: space-between;
  background: #6c757d;
`;
export const MenuLogo = styled.div`
  height: 76px;
  display: flex;
  align-items: center;
`;
export const LogoImg = styled.img`
  height: 45px;
`;
export const Menu = styled.div`
  display: flex;
  flex-flow: column;
`;
export const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem 0;
  text-align: center;
  border-bottom: solid 1px;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;
export const LinkLogo = styled(Link)`
  @media screen and (max-width: 868px) {
    padding: 0 1rem;
  }
`;
export const MenuFollow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TextFollow = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
`;
export const MenuIcons = styled.div`
  align-items: center;
`;
export const ALink = styled.a`
  padding-left: 10px;
`;
export const Icons = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
`;
export const MenuLanguage = styled.div`
  color: #fff;
  text-decoration: none;
  display: flex;
  padding: 1rem 0;
  text-align: center;
  justify-content: center;
  border-bottom: solid 1px;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;
export const LanguageContainer = styled.div`
  color: ${({ primary }) => (primary ? "#343A40" : "#fff")};
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 4px;
`;

export const LanguageButton = styled.p`
  cursor: pointer;
  @media screen and (max-width: 868px) {
    padding: 0 1rem;
  }
  &.active {
    font-weight: bold;
  }
`;
