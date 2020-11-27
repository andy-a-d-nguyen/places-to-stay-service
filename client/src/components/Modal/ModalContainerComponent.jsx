/* eslint-disable */
import React, { Component } from "react";
import CloseButtonComponent from './CloseButtonComponent.jsx';
import ModalContainerTopComponent from './ModalContainerTopComponent.jsx';
import ModalContainerMidComponent from './ModalContainerMidComponent.jsx';
import {ModalContainerBotComponent} from './ModalContainerBotComponent.jsx';
import {
  ModalContainer,
  ModalContainerWrapper,
  ModalContainerAnimation,
} from './ModalContainerStyledComponents.jsx'

const ModalContainerComponent = ({closeModal, handleAddList, listNames, handleLikeList}) => {
  return (
    <ModalContainerWrapper>
      <ModalContainer>
        <CloseButtonComponent
          closeModal={closeModal}>
        </CloseButtonComponent>
        <ModalContainerTopComponent>
        </ModalContainerTopComponent>
        <ModalContainerMidComponent
          handleAddList={handleAddList}
          listNames={listNames}
          handleLikeList={handleLikeList}
        >
        </ModalContainerMidComponent>
        <ModalContainerBotComponent
          closeModal={closeModal}>
        </ModalContainerBotComponent>
      </ModalContainer>
    </ModalContainerWrapper>
  )
}

export default ModalContainerComponent;