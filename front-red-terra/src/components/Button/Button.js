import styled from "styled-components";
import { Link } from "gatsby";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#FFFFFF' : '#DEE2E6')};
  white-space: nowrap;
  padding: 20px 30px;
  color: #100502;
  font-size: 1rem ;
  font-weight: 700;
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: 30px;  
  margin: ${({ big }) => (big ? '0px 15px' : '0')};
  &:hover {
    background: ${({ primary }) => (primary ? '#DEE2E6' : '#DFDFDF')};
    transform: translateY(-2px);
  }
`