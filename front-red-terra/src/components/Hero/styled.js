import styled from 'styled-components'

export const HeroContainer = styled.div`
  background: #0C0C0C;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  margin-top: -80px;
`

export const VideoHero = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`