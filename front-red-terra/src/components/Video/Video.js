import React from 'react';
import { IframeWrapper } from './styled';

const Video = ({ url }) => {
  return (
    <IframeWrapper>
      <iframe
        src={
          url.includes('vimeo') ? url : `https://www.youtube.com/embed/${url}`
        }
      ></iframe>
    </IframeWrapper>
  );
};

export default Video;
