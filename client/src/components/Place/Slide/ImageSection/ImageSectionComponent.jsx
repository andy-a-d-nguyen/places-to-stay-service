/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import ImageWrapperComponent from './ImageWrapperComponent.jsx';
import ImageWrapper2ndComponent from './ImageWrapper2ndComponent.jsx';

const ImageSectionWrapper = styled.div`
  border-radius: 8px;
  contain: content;
  position: relative;
  mask-image: -webkit-radial-gradient(center, white, black);
  pointer-events: none;
  overflow: hidden;

  &::after{
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    border-radius: inherit;
    border: 1px solid rgba(0, 0, 0, 0.1);
    pointer-events: none;

  }
`;

const ImageSectionComponent = ({props, handleLike}) => {
  const handleClick = (event) => {
    console.log('ImageSectionComponent');
  }
  return (
    <ImageSectionWrapper
    >
      <div
        className="_uhlm2"
        style={{
          display: 'block',
      }}
      >
        <ImageWrapperComponent props={props}>
        </ImageWrapperComponent>
      </div>
      <ImageWrapper2ndComponent
        props={props}
        handleLike={handleLike}>
      </ImageWrapper2ndComponent>
    </ImageSectionWrapper>
  )
}

export default ImageSectionComponent;