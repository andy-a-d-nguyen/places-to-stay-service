/* eslint-disable */
import React, { Component } from "react";
import {
  CloseButtonContainer,
  CloseButton,
  CloseButtonInnerSpan,
  CloseButtonSVG,
} from './CloseButtonStyledComponents.jsx';

const AddModalCloseButtonComponent = ({closeAddModal}) => {
  return (
    <CloseButtonContainer>
      <CloseButton
        type='button'
        onClick={closeAddModal}
      >
        <CloseButtonInnerSpan>
          <CloseButtonSVG
            viewBox="0 0 32 32"
          >
            <path d="m6 6 20 20">
            </path>
            <path d="m26 6-20 20">
            </path>
          </CloseButtonSVG>
        </CloseButtonInnerSpan>
      </CloseButton>
    </CloseButtonContainer>
  )
}

export default AddModalCloseButtonComponent;
