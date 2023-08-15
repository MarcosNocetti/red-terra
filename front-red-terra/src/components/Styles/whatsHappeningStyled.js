import { Link } from "gatsby";
import styled from "styled-components";

export const ContainerWhatHappening = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 64%;
    @media screen and (max-width: 868px) {
      width: 90%;
    }
    margin-bottom: 100px;
  }
`;

export const H1 = styled.h1`
  font-size: 40px;
  color: #343a40;
  margin-top: 100px;
  margin-bottom: 50px;
  font-weight: 500;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
`;

export const NewsContainer = styled.div`
  display: grid;
  grid-gap: 4px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 870px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerCards = styled(Link)`
  grid-column: span 1;

  &:hover {
    h2 {
      color: #ddd;
    }
  }

  &.first,
  &.last {
    width: 100%;
    grid-column: span 2;
  }
`;

export const NewsCard = styled.div`
  height: 400px;
  position: relative;
  overflow: hidden;
`;

export const NewsImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-position: center;
  background-size: cover;
  transition: transform 0.3s ease;

  ${NewsCard}:hover & {
    transform: scale(1.1);
  }
`;

export const NewsCardContent = styled.div`
  padding: 0 30px 30px 30px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 91.51%
  );
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover > p,
  &:hover > h2 {
    color: rgb(220, 220, 220);
  }

  @media (max-width: 870px) {
    padding: 16px;
  }
`;

export const PCardsDate = styled.p`
  font-size: 24px;
  color: #fff;
  line-height: 28px;
  font-weight: 700;

  @media (max-width: 870px) {
    font-size: 24px;
  }
`;
export const H2Cards = styled.h2`
  font-size: 40px;
  color: #fff;
  font-weight: 500;
  line-height: 48px;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  margin-bottom: 15px;

  @media (max-width: 870px) {
    font-size: 32px;
  }
`;
export const ImgCards = styled.img`
  width: 100%;
  height: 50%;
  margin: 15px 0px 30px 0px;
`;
export const LoadMoreContainer = styled.div`
  margin: 60px 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoadMoreButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  width: 122px;
  height: 50px;
  background: #495057;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: none;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;

  &:disabled {
    display: none;
  }
  li {
    margin-left: 20px;
  }
`;
export const RowLatestNews = styled.div`
  width: 40%;
  margin-left: 60px;
  @media screen and (max-width: 868px) {
    width: 100%;
    margin-left: 0px;
  }
`;
export const H2LatestNews = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #343a40;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
`;
export const PLatestNews = styled.p`
  font-size: 1rem;
  color: #6c757d;
  padding: 15px 0;
  border-bottom: 1px solid #dfdfdf;
  &:hover {
    color: #6c757ddd;
  }
`;

export const ContainerRedCarta = styled.div`
  background: #b94412;
`;
export const RedCartaCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CenterText = styled.div`
  div > div:has(h2),
  div > h3 {
    width: 64%;
    margin: auto;
    @media screen and (max-width: 868px) {
      width: 90%;
    }
  }
  div > p {
    @import url("https://fonts.googleapis.com/css2?family=Public+Sans&display=swap");
    width: 100%;
    margin: 0;
    padding: 50px 0 80px;
    font-weight: 300;
    font-size: 22px;
    line-height: 30px;
    color: #fff;
  }
`;
export const H2RedCarta = styled.h2`
  font-size: 40px;
  color: #fff;
  font-weight: 500;
  padding-top: 80px;
  padding-bottom: 20px;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
`;
export const PTop = styled.h3`
  font-size: 20px;
  color: #fff;
  padding-bottom: 80px;
  line-height: 28px;
  font-weight: 400;
`;
export const A = styled.a`
  text-decoration: none;
`;
