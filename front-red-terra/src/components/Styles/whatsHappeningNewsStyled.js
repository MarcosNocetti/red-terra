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
  }
`;

export const H1 = styled.h1`
  font-size: 40px;
  color: #495057;
  margin-top: 100px;
  margin-bottom: 50px;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  @media screen and (max-width: 868px) {
    display: block;
  }
`;
export const RowCards = styled.div`
  width: 100%;
`;
export const ContainerCards = styled.div`
  margin-bottom: 70px;
`;
export const PCardsDate = styled.p`
  font-size: 16px;
  color: #343a40;
  font-weight: 900;
`;
export const H2Cards = styled(Link)`
  font-size: 24px;
  color: #6c757d;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  margin-bottom: 15px;
  &:hover {
    color: #6c757ddd;
  }
`;
export const ImgCards = styled.img`
  width: 100%;
  height: 50%;
  margin: 15px 0px 30px 0px;
`;
export const PCards = styled.p`
  font-size: 20px;
  color: #6c757d;
`;
