import styled from "styled-components";

export const ContainerRedCarta = styled.div`
  height: 100%;
  width: 100%;
  background-color: #b94412;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -80px;
`;
export const RedCartaCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  > div {
    width: 64%;
    @media screen and (max-width: 868px) {
      width: 90%;
    }
  }
`;
export const Cards = styled.div`
  width: 70%;
  @media screen and (max-width: 868px) {
    width: 100%;
  }
  margin-bottom: 100px;
`;
export const H2RedCarta = styled.h2`
  font-size: 40px;
  color: #fff;
  padding-top: 180px;
  padding-bottom: 5px;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
`;
export const PTop = styled.p`
  font-size: 16px;
  color: #fff;
  padding-bottom: 50px;
  width: 70%;
  @media screen and (max-width: 868px) {
    width: 100%;
  }
`;
export const PRedCarta = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  padding-bottom: 10px;
  line-height: 30px;
`;
export const PBottom = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  padding-bottom: 10px;
  line-height: 30px;
`;

export const ImgCards = styled.img`
  width: 100%;
  height: 50%;
  margin: 30px 0;
`;
