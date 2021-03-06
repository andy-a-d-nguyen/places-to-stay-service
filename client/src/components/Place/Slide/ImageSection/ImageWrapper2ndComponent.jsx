/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import HeartComponent from './HeartComponent/HeartComponent.jsx';

const ImageWrapper2ndWrapper = styled.div`
  -webkit-box-pack: justify;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  position: absolute;
  pointer-events: none;
`;

const ImageWrapperInnerTop = styled.div`
  padding: 8px;
  -webkit-box-pack: justify;
  display: flex;
  justify-content: space-between;

`;

const HeartContainerWrapper = styled.div`
  pointer-events: auto;
  margin-top: -5px;
  margin-right: -3px;
`;

const ImageWrapper2ndComponent =
({props,handleLike}) => {
  const handleClick = (event) => {
    console.log('ImageWrapper2ndComponent');
  };
  return (
    <ImageWrapper2ndWrapper
    >
      <ImageWrapperInnerTop>
        <div>
        </div>
        <HeartContainerWrapper>
          <HeartComponent
            props={props}
            handleLike={handleLike}
          >
          </HeartComponent>
        </HeartContainerWrapper>
      </ImageWrapperInnerTop>
    </ImageWrapper2ndWrapper>
  );
};

export default ImageWrapper2ndComponent;
