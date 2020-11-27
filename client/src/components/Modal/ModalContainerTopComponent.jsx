/* eslint-disable */
import React, { Component } from "react";
import styled, {keyframes} from 'styled-components';
import {
  ModalContainerTopHeader,
  ModalContainerTopLeftDiv,
  ModalContainerTopMidDiv,
  ModalContainerTopMidH1,
  ModalContainerTopMidH1InnerDiv,
  ModalContainerTopRightDiv,
} from './ModalContainerTopStyledComponents.jsx';

export const ModalContainerTopComponent = () => {
  return (
    <ModalContainerTopHeader>
      <ModalContainerTopLeftDiv>
      </ModalContainerTopLeftDiv>
      <ModalContainerTopMidDiv>
        <ModalContainerTopMidH1>
          <ModalContainerTopMidH1InnerDiv>
            Save to a list
          </ModalContainerTopMidH1InnerDiv>
        </ModalContainerTopMidH1>
      </ModalContainerTopMidDiv>
      <ModalContainerTopRightDiv>
      </ModalContainerTopRightDiv>
    </ModalContainerTopHeader>
  )
}

export default ModalContainerTopComponent;