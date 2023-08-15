import styled from "styled-components";

export const Container = styled.div`
  margin-top: -80px;
  padding-top: 130px;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 64%;
    @media screen and (max-width: 868px) {
      width: 90%;
    }
  }
`;
export const ContainerVideo = styled.div`
  width: 100%;
  height: 600px;
  background: #000;
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
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #6c757d;
`;

export const H2 = styled.h2`
  font-size: 16px;
  font-weight: 900;
  line-height: 18.8px;
  color: #6c757d;
  text-transform: uppercase;
`;

export const A = styled.a`
  color: #007bff;
`;

export const ContainerTextFooter = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const ContainerText = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;
