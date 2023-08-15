import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
`;

const LoaderInner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ffffff;
  border-top: 4px solid #80878E;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => {
  return (
      <LoaderWrapper>
        <LoaderInner />
      </LoaderWrapper>
  );
}

export default Loader;