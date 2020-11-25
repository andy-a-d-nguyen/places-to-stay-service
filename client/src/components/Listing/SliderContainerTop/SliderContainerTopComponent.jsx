/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import LeftArrowComponent from './LeftArrowComponent.jsx';
import RightArrowComponent from './RightArrowComponent.jsx';

const SliderContainerTop = styled.div`
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
`;

// .sliderContainerTop_left1_1
const SliderContainerTopLeft = styled.div`
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
`;

// .sliderContainerTop_left1_1_1 h2
const SliderContainerTopLeftHeading = styled.h2`
  color: inherit;
  font-size: 1em;
  font-weight: inherit;
  line-height: inherit;
  margin: 0px;
  padding: 0px;
`;

// .sliderContainerTop_right div
const SliderContainerTopRight = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  white-space: nowrap;
`;

const SliderContainerTopComponent = ({moveLeft, moveRight}) => {
  // console.log(moveLeft);
  return (
    <SliderContainerTop>
      <div styles={{paddingBottom: '0px'}}>
        <SliderContainerTopLeft>
          <section>
            <SliderContainerTopLeftHeading>
              More places to stay
            </SliderContainerTopLeftHeading>
          </section>
        </SliderContainerTopLeft>
      </div>
      <SliderContainerTopRight>
        <LeftArrowComponent moveLeft={moveLeft}>
        </LeftArrowComponent>
        <RightArrowComponent moveRight={moveRight}>
        </RightArrowComponent>
      </SliderContainerTopRight>
    </SliderContainerTop>
  )
}

export default SliderContainerTopComponent;