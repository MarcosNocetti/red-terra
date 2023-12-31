import styled from 'styled-components'

export const IframeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* proporção 16:9 */
  height: 0;
  overflow: hidden;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`