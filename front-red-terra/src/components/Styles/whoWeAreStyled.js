import styled, { css } from "styled-components";

export const ContainerBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 64%;
    @media screen and (max-width: 868px) {
      width: 90%;
    }
  }
  margin-bottom: 40px;
`;

export const ContainerTextInit = styled.div`
  margin-top: 50px;
  margin-right: 250px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  & + & {
    margin-top: 0;
  }

  @media screen and (max-width: 1360px) {
    margin-right: 0;
  }
  @media screen and (max-width: 868px) {
    width: 100%;
  }
`;
export const PInit = styled.p`
  font-size: 40px;
  color: #6c757d;
  line-height: 47px;
  max-width: 60%;
`;

export const PTop = styled.p`
  font-size: 20px;
  color: #6c757d;
  font-weight: 900;
`;

export const ContainerText = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  width: 728px;

  @media screen and (max-width: 868px) {
    width: 100%;
  }
`;
export const H1 = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 41px;
  color: #343a40;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
`;
export const P = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: #6c757d;
  padding-bottom: 10px;
`;

export const ContainerTeam = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  padding-bottom: 90px;

  @media screen and (max-width: 1360px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;
export const H2 = styled.h2`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 30px;
  color: #343a40;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
`;
export const ContainerItemTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ImgTeam = styled.img`
  width: 300px;
  max-width: 100%;
  object-fit: cover;
  height: 300px;
  background-color: #e9ecef;
  border: none;
`;
export const H3Team = styled.h3`
  font-size: 1rem;
  font-weight: 900;
  color: rgb(223 82 22);
  padding-top: 10px;
  padding-bottom: 5px;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
`;
export const PBoldTeam = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #343a40;
  padding-bottom: 20px;
`;
export const PTeam = styled.p`
  font-size: 1rem;
  color: #6c757d;
  padding-bottom: 20px;
`;

export const ContainerNews = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 90px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;
export const ContainerTextNews = styled.div`
  margin-bottom: 10px;
`;
export const H3 = styled.h3`
  font-weight: 500;
  font-size: 18px;
  color: #6c757d;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
`;
export const A = styled.a`
  color: #007bff;
`;

export const ContainerTitleClients = styled.div`
  display: flex;
  @media screen and (max-width: 868px) {
    display: block;
  }
`;

export const ContainerTitleAwards = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 50px;
  @media screen and (max-width: 868px) {
    display: block;
  }
`;
export const BoxBtn = styled.div`
  flex: 1;
`;

export const ContainerClients = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  @media screen and (max-width: 868px) {
    display: block;
  }
`;

export const ContainerAwardsImg = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: all 0.5s ease-out;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50%;
      min-width: 125px;
    }
  }
`;
export const ContainerItemClients = styled.div`
  display: flex;
  transition: all 0.5s ease-out;
  width: 100%;

  @media screen and (max-width: 868px) {
    width: auto;
  }
`;
export const BoxShadow = styled.div`
  padding: 30px;
  margin: 50px 0;
  height: fit-content;
  box-shadow: 0px 4px 9px rgba(12, 68, 204, 0.1);
  background-color: #f0f0f0;
  width: calc(100% - 30px);
`;
export const H3Client = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #292d33;
  text-transform: uppercase;
`;
export const PClient = styled.p`
  font-size: 16px;
  color: #6c757d;
  padding-top: 5px;
  padding-bottom: 20px;
`;

export const ContainerAwards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  overflow: hidden;

  & > div {
    flex-basis: calc(25% - 3.75px);
  }

  @media screen and (max-width: 868px) {
    & > div {
      flex-basis: calc(50% - 2.5px);
    }
  }
`;
export const ImgAwards = styled.img``;
