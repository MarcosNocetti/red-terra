import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  padding: 10px;
  font-size: 16px;
  background-color: #6C757DDD;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &.visible {
    display: block;
    opacity: 1;
  }

  &.hidden {
    opacity: 0;
  }

  &:hover {
    background-color: #6C757D;
  }
`;

function ButtonFloating() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      onClick={handleClick}
      className={isVisible ? 'visible' : 'hidden'}
    >
      <IoIosArrowUp/>
    </Button>
  );
}

export default ButtonFloating