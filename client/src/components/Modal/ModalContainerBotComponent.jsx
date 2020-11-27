/* eslint-disable */
import React, { Component } from "react";
import styled, {keyframes} from 'styled-components';

const ModalContainerBotFooter = styled.footer`
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  display: flex;
  flex: 0 0 auto;
  border-top: 1px solid rgb(235, 235, 235);
  padding: 16px 24px;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 20px;
`;

const DoneButton = styled.button`
cursor: pointer;
  display: inline-block;
  margin: 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: auto;
  touch-action: manipulation;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 8px;
  outline: none;
  padding: 14px 24px;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  border: none;
  background: rgb(34, 34, 34);
  color: rgb(255, 255, 255);
`;

const ModalContainerBotComponent = ({closeModal}) => {
  return (
    <ModalContainerBotFooter>
      <div style={{
        width: '100%',
        textAlign: 'right',
      }}>
        <DoneButton
          type='button'
          onClick={closeModal}
        >
          Done
        </DoneButton>
      </div>
    </ModalContainerBotFooter>
  )
}

export {
  ModalContainerBotComponent,
  ModalContainerBotFooter,
};