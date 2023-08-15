import styled from "styled-components";

export const RedCartaDropdownContainer = styled.div`
  width: 100% !important;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  header {
    height: 75px;
    background-color: #b94412;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    display: flex;
    align-items: center;
    cursor: pointer;

    div {
      width: 64%;
      margin: auto;
      @media screen and (max-width: 868px) {
        width: 90%;
      }

      h1 {
        font-weight: 700;
        font-size: 34px;
        line-height: 40px;
        color: #fff;
      }
    }

    &.selected {
      background-color: #a43a0c;
    }
  }

  div {
    div:has(img) {
      height: 500px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      div {
        display: flex;
        align-items: flex-end;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0) 91.51%
        );
        z-index: 9999;

        h1 {
          color: #fff;
          font-weight: 700;
          font-size: 48px;
          line-height: 64px;
          width: 64%;
          margin: 0 auto;
          @media screen and (max-width: 868px) {
            width: 90%;
          }
        }
      }
    }

    div:not(:has(img)) {
      width: 64%;
      margin: auto;
      @media screen and (max-width: 868px) {
        width: 90%;
      }

      p {
        @import url("https://fonts.googleapis.com/css2?family=Public+Sans&display=swap");
        width: 100%;
        margin: 0;
        padding: 50px 0 80px;
        font-weight: 300;
        font-size: 22px;
        line-height: 30px;
        color: #fff;
      }

      button {
        background: none;
        border: none;
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;
        letter-spacing: -0.02em;
        color: #fff;
        margin-bottom: 32px;
        cursor: pointer;
      }
    }
  }

  div.hidden {
    display: none;
  }
`;
