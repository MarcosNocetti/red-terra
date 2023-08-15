import styled from 'styled-components'

export const PaginationView = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  align-items: center;
  text-align: center;

  button {
    width: 40px;
    height: 40px;
    font-weight: 400;
    font-size: 16px;
    margin: 0 10px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: transparent;
    color: #100502;
    background: #E9ECEF;
    border: none;
  }

  button.active {
    font-weight: 900;
    background: #eee;
    color: #100502;
    border: none;
  }
`