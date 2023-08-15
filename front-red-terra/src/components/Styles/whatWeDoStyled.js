import styled from 'styled-components'
import { Link } from "gatsby";

export const ContainerBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 64%;
    @media screen and (max-width: 868px) { 
      width: 90%;
    }
  }
`

export const ContainerText = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  width: 700px;

  @media screen and (max-width: 868px) { 
    width: 100%;
  }
`
export const H1 = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 41px;
  color: #343A40;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
`
export const P = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: #6C757D;
  padding-bottom: 10px;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) { 
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) { 
    grid-template-columns: 1fr;
  }
`

export const GridItem = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
export const ContentOverlay = styled.div`
  background: #B94412;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
`
export const TextItem = styled.div`
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  @media screen and (max-width: 868px) { 
    opacity: 1;
  }
`
export const ContainerItems = styled(Link)`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  height: 100%;

  &:hover {
    ${GridItem} {
      transform: scale(1.1);
    }
    ${ContentOverlay} {
      opacity: 0.3;
    }
    ${TextItem} {
      top: 50%;
      left: 50%;
      opacity: 1;
    }
  }
`

export const H1Item = styled.h1`
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 32px;
  font-family: 'Oswald', sans-serif;
`
export const PItem = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 20px;
`

export const H2 = styled.h2`
  font-size: 32px;
  font-weight: 500;
  margin-top: 140px;
  margin-bottom: 45px;
  color: #343A40;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
`
export const H3 = styled.h3`
  font-weight: 500;
  font-size: 18px;
  color: #6C757D;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
`
export const ContainerTextFooter = styled.div`
  margin-bottom: 10px;
  align-self: start;
`
export const GridContainerText = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 90px;

  @media screen and (max-width: 1200px) { 
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) { 
    grid-template-columns: 1fr;
  }
`