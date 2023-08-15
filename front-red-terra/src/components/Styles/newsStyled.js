import styled from "styled-components";

export const Container = styled.div`
  margin-top: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    width: 64%;
    @media screen and (max-width: 868px) {
      width: 90%;
    }
  }
`;

export const NewsHeader = styled.div`
  width: 100vw !important;
  margin-bottom: 36px;
  z-index: -1;
  overflow: hidden;
  height: 35vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 32px;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  font-style: normal;
  color: #495057;
`;

export const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  font-family: "Oswald";
  font-style: normal;
  color: #495057;
`;

export const NewsContent = styled.p`
  font-family: "Public Sans", sans-serif;
  font-style: normal;
  font-size: 20px;
  line-height: 28px;
  width: 100%;
  color: #6c757d;
  margin: 24px 0;
`;

export const ShareContainer = styled.div`
  h1 {
    font-family: "Public Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #495057;
    margin-bottom: 8px;
  }

  div {
    display: flex;
    gap: 16px;

    button {
      background-color: #6c757d !important;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      height: 28px;
      width: 28px;

      img {
        height: 14px;
        width: 14px;
        filter: brightness(500%);
      }
    }
  }

  @media (max-width: 870px) {
    div {
      gap: 24px;

      button {
        background-color: #6c757d !important;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        height: 36px;
        width: 36px;

        img {
          height: 18px;
          width: 18px;
        }
      }
    }
  }
`;

export const ChangePostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 32px 0;

  div {
    display: flex;
    width: 100%;

    div {
      font-family: "Public Sans", sans-serif;
      font-style: normal;
      font-weight: 500;
      color: #6c757d;

      p {
        font-size: 16px;
      }

      h1 {
        font-size: 20px;
      }

      h2 {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 700px) {
    flex-wrap: wrap;
    gap: 32px;
  }
`;

export const ChangePostActionContainer = styled.div`
  width: 100%;

  a {
    display: flex;
    align-items: center;
    flex: 1;
    text-decoration: none;

    img {
      cursor: pointer;
      height: 70%;

      &:hover + div {
        text-decoration: underline;
      }
    }

    div {
      cursor: pointer;
      width: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      padding: 0 16px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  &.right {
    a {
      justify-content: flex-end;
    }
  }
`;

export const RedCartaContainer = styled.div`
  width: 100%;
  height: 350px;
  background: #b94412;

  div {
    height: inherit;
    width: 64%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;

    div {
      height: inherit;
      width: 50%;
      flex: 1;
      padding: 32px 24px;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-family: "Oswald", sans-serif;
        font-size: 32px;
        text-transform: uppercase;
        font-weight: 500;
        margin-bottom: 8px;
      }

      p {
        font-family: "Public sans", sans-serif;
        font-size: 16px;
        line-height: 140%;
      }
    }

    a {
      height: inherit;
      width: 50%;
      flex: 1;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-decoration: none;
      position: relative;
      z-index: 2;

      div {
        padding: 32px;
        margin: 0;
        width: 100%;
        font-weight: 700;
        justify-content: flex-end;
        position: relative;
        z-index: 2;

        h1 {
          font-family: "Oswald", sans-serif;
          font-size: 32px;
          text-transform: uppercase;
          font-weight: 500;
          margin-bottom: 8px;
        }

        p {
          font-family: "Public sans", sans-serif;
          font-size: 16px;
          line-height: 140%;
        }

        div {
          position: absolute;
          height: 100%;
          width: 100%;
          margin: -32px;
          background: rgb(0, 0, 0);
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 40%,
            rgba(0, 0, 0, 0.8) 100%
          );
          z-index: 1;
        }

        h1 {
          font-family: "Public Sans", sans-serif;
          font-size: 32px;
          text-transform: uppercase;
          font-weight: 700;
          z-index: 2;
        }

        h2 {
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          z-index: 2;
        }

        img {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          z-index: 0;
          margin: -32px;
        }
      }
    }
  }

  @media (max-width: 870px) {
    height: unset;

    div {
      min-height: 20vh;
      width: 100%;
      flex-direction: column;

      a {
        width: 100%;
      }

      div {
        width: 100%;
        padding: 16px 5%;
        text-align: justify;

        &.image {
          height: 20vh;
          padding: 16px;

          h1 {
            font-size: 24px;
          }

          div,
          img {
            height: 20vh;
            margin: -16px;
          }
        }
      }
    }
  }
`;
