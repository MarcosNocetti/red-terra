import React, { useEffect, useState } from 'react';
import { HeroContainer, VideoHero } from './styled';

const Hero = ({ muted }) => {
  const [dimensions, setDimensions] = useState();
  const [video, setVideo] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      }
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (dimensions?.width < dimensions?.height) {
      setVideo('https://redterra.s3.amazonaws.com/RedEarth+Colorido+9x16.m4v');
      return;
    }
    if (dimensions?.width > dimensions?.height) {
      setVideo('https://redterra.s3.amazonaws.com/Redearth+optimized.mp4');
    }
  }, [dimensions]);

  return (
    <HeroContainer>
      <VideoHero
        src={video}
        controls={!muted}
        autoPlay={muted}
        playsInline
        loop
        muted={muted}
      ></VideoHero>
    </HeroContainer>
  );
};

export default Hero;
