import styled from 'styled-components'

export const ContainerBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 64%;
    @media screen and (max-width: 868px) { 
      width: 90%;
    }

    > div {
      width: 600px;
      @media screen and (max-width: 868px) { 
        width: 100%;
      }
    }
  }
`

export const H1 = styled.h1`
  color: #343A40;
  font-size: 40px;
  margin-top: 100px;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
`

export const BoxTelephone = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`
export const PTitle = styled.p`
  color: #6C757D;
  font-size: 1rem;
`
export const PDescription = styled.p`
  color: #343A40;
  font-size: 1rem;
  font-weight: 700;
`

export const BoxEmail = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
`

export const P = styled.p`
  color: #6C757D;
  font-size: 1rem;
  line-height: 24px;
  padding-bottom: 5px;
`

export const PBold = styled.p`
  color: #343A40;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 40px;
  line-height: 24px;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
`
export const PFooter = styled.p`
  color: #343A40;
  font-size: 1rem;
  font-weight: 900;
  margin-bottom: 40px;
`