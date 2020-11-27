/* eslint-disable */
import React, { Component } from "react";
import {
  CloseButtonContainer,
  CloseButton,
  CloseButtonInnerSpan,
  CloseButtonSVG,
} from './CloseButtonStyledComponents.jsx';

const CloseButtonComponent = ({closeModal}) => {
  return (
    <CloseButtonContainer>
      <CloseButton
        type='button'
        onClick={closeModal}
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

export default CloseButtonComponent;