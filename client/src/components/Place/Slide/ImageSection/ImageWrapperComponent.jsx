/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

// .imageWrapper1_1 div class="_hxt6u1e"
const ImageWrapper = styled.div`
  padding-top: 66.6667%;
  position: relative;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

// .imageWrapper1_1_1 div class="_4626ulj"
const ImageWrapperInner = styled.div`
  -webkit-box-pack: center;
  -webkit-box-align: center;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

// class="_91slf2a"
const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: static;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;

`;

// .imageWrapper1_1_1_1 div class="_1xzy2"
const ImageWrapperInnerBot = styled.div`
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex: 1 1 0%;
  visibility: hidden;

`;

// class="_1coc2b2"
const ImageWrapperInnerBot2nd = styled.div`
  -webkit-box-pack: center;
  display: flex;
  justify-content: center;
  white-space: nowrap;

`;
const ImageWrapperComponent = ({props}) => {
  // console.log(props);
  const {pictureURL} = props.place;
  // console.log(pictureURL);
  return (
    <ImageWrapper
      aria-busy='false'>
      <ImageWrapperInner>
        <Image
          loading='lazy'
          aria-hidden='true'
          src={pictureURL}
        >
        </Image>
        <ImageWrapperInnerBot>

        </ImageWrapperInnerBot>
        <ImageWrapperInnerBot2nd>

        </ImageWrapperInnerBot2nd>
      </ImageWrapperInner>
    </ImageWrapper>
  )
}

export default ImageWrapperComponent;