import styled from "styled-components";

export const BannerHeader = styled.div`
  width: 100%;
  height: ${({ small }) => (small ? "440px" : "660px")};
  margin-top: ${({ bottom }) => (bottom ? "0px" : "-80px")};
  background: ${(props) => `url('${props.background}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1360px) {
    background-position: left;
    height: ${({ small }) => (small ? "333px" : "500px")};
  }

  @media screen and (max-width: 1200px) {
    background-position: left;
    height: ${({ small }) => (small ? "200px" : "300px")};
    height: 300px;
  }
`;
