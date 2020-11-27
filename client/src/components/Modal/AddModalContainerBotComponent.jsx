/* eslint-disable */
import React, { Component } from "react";
import styled, {keyframes} from 'styled-components';
import {ModalContainerBotFooter} from './ModalContainerBotComponent.jsx';

const CreateButton = styled.button`
  display: inline-block;
  margin: 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 8px;
  outline: none;
  padding: 14px 24px;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  width: 100%;

  &:disabled {
    cursor: not-allowed;
    opacity: 1;
    border: none;
    background: rgb(221, 221, 221);
    color: rgb(255, 255, 255);
  }
`;

const AddModalContainerBotComponent = ({name, onInputSubmit}) => {
  return (
    <ModalContainerBotFooter>
      <CreateButton
        className={name.length === 0 ? 'disabled' : ''}
        onClick={onInputSubmit}>
        Create
      </CreateButton>
    </ModalContainerBotFooter>
  )
}

export default AddModalContainerBotComponent;