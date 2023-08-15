import styled from "styled-components";

export const NewsArchiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #6c757d;

  h1 {
    font-size: 32px;
    line-height: 40px;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    margin-bottom: 24px;
  }

  button {
    border: none;
    background: none;
    color: #6c757d;
    font-size: 24px;
    line-height: 32px;
    font-family: "Public Sans", sans-serif;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      color: #565656;
    }

    &.selected {
      color: #b94412;
    }
  }
`;
