/* eslint-disable */
import React, { Component } from "react";
import styled, {keyframes} from 'styled-components';

const AddTextContainer = styled.div`
  position: relative;
  cursor: text;
  display: ${props => props.showAddTextContainer ? 'flex' : 'none'};
  height: 56px;
  width: 100%;
  margin: 0px;
  border: none;
  color: rgb(34, 34, 34);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: rgb(176, 176, 176) 0px 0px 0px 1px inset;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
`;

const AddTextContainerLabel = styled.label`
  position: relative;
  flex: 1 1 0%;
  padding: 0px;
`;

const AddTextContainerLabelTopDiv = styled.div`
  position: absolute;
  top: 18px;
  left: 12px;
  right: 12px;
  margin: 0px;
  padding: 0px;
  color: rgb(113, 113, 113);
  pointer-events: none;
  transform-origin: 0% 0%;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  transition: -ms-transform 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s, -webkit-transform 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s, transform 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
`;

const AddTextContainerLabelTopDivInner = styled.div`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const AddTextContainerLabelBotDiv = styled.div`
  direction: ltr;
  unicode-bidi: isolate;
`;

const AddTextContainerLabelBotDivInner = styled.div`
  display: flex;
  opacity: 0;
`;

const AddTextContainerLabelBotDivInnerInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 0px;
  margin: 26px 12px 10px;
  min-height: 1px;
  color: inherit;
  background-color: transparent;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  appearance: none;
`;

const AddTextContainerComponent = ({showAddTextContainer}) => {
  return (
    <AddTextContainer
      showAddTextContainer={showAddTextContainer}
    >
      <AddTextContainerLabel>
        <AddTextContainerLabelTopDiv>
          <AddTextContainerLabelTopDivInner>
            Name
          </AddTextContainerLabelTopDivInner>
        </AddTextContainerLabelTopDiv>
      </AddTextContainerLabel>
    </AddTextContainer>
  )
}

export default AddTextContainerComponent;