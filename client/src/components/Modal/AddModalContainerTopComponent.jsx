/* eslint-disable */
import React, { Component } from "react";
import {
  ModalContainerTopHeader,
  ModalContainerTopLeftDiv,
  ModalContainerTopMidDiv,
  ModalContainerTopMidH1,
  ModalContainerTopMidH1InnerDiv,
  ModalContainerTopRightDiv,
} from './ModalContainerTopStyledComponents.jsx';

const AddModalContainerTopComponent = () => {
  return (
    <ModalContainerTopHeader>
      <ModalContainerTopLeftDiv>
      </ModalContainerTopLeftDiv>
      <ModalContainerTopMidDiv>
        <ModalContainerTopMidH1>
          <ModalContainerTopMidH1InnerDiv>
            Name this list
          </ModalContainerTopMidH1InnerDiv>
        </ModalContainerTopMidH1>
      </ModalContainerTopMidDiv>
      <ModalContainerTopRightDiv>
      </ModalContainerTopRightDiv>
    </ModalContainerTopHeader>
  )
}

export default AddModalContainerTopComponent;
