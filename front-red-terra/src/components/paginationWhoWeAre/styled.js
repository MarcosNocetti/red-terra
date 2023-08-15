import styled from 'styled-components';

export const PaginationView = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  align-items: center;
  text-align: center;

  button {
    width: 110px;
    height: 60px;
    font-weight: 400;
    font-size: 16px;
    margin: 0 10px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: transparent;
    color: #100502;
    background: #e9ecef;
    border: none;
  }

  button:disabled {
    cursor: default;
    color: #aaa;
  }

  button:hover:not(:disabled) {
    background: #dee2e6;
    transform: translateY(-2px);
  }
`;
