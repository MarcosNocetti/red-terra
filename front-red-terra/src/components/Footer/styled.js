import styled from "styled-components";

export const ContainerFooter = styled.footer`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  font-size: 0.9rem;

  @media screen and (max-width: 768px) {
    padding: 0px 10px;
  }
`

export const Center = styled.div`
  background: #DFDFDF;
  display: flex;
  align-items: center;
  justify-content: center;
  
  > div {
    width: 64%;
    @media screen and (max-width: 868px) { 
      width: 100%;
    }
  }
`

export const TextFooter = styled.p`
  color: #6C757D;
`

export const ContainerLink = styled.div`
  display: flex;
  align-items: center;
`

export const Follow = styled.p`
  font-weight: 700;
  display: none;
  padding: 0px 60px 0px 0px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const Icons = styled.img`
  width: 16px;
  height: 16px;
`

export const FooterLink = styled.a`
  margin-right: 25px;

  @media screen and (max-width: 768px) {
    margin: 10px;
  }
  
  :hover {
    opacity: 0.5;
  }
`