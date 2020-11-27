/* eslint-disable */
import React, { Component } from "react";
import {
  ModalContainerWrapper,
  ModalContainerAnimation,
  ModalContainer,
} from './ModalContainerStyledComponents.jsx';
import AddModalCloseButtonComponent from './AddModalCloseButtonComponent.jsx';
import AddModalContainerTopComponent from './AddModalContainerTopComponent.jsx';
import AddModalContainerMidComponent from './AddModalContainerMidComponent.jsx';
import AddModalContainerBotComponent from './AddModalContainerBotComponent.jsx';

class AddModalContainerComponent extends Component {
  constructor(props) {
    super(props);

    const {showAddModal} = this.props;

    this.state = {
      showAddModal: showAddModal,
    }
  }
  render() {
    const {
      showAddModal,
      closeAddModal,
      onInputChange,
      onInputSubmit,
      name
    } = this.props;

    return (
      <ModalContainerWrapper>
        <ModalContainer>
          <AddModalCloseButtonComponent
            closeAddModal={closeAddModal}
          >
          </AddModalCloseButtonComponent>
          <AddModalContainerTopComponent>
          </AddModalContainerTopComponent>
          <AddModalContainerMidComponent
            onInputChange={onInputChange}
            name={name}
          >
          </AddModalContainerMidComponent>
          <AddModalContainerBotComponent
            onInputSubmit={onInputSubmit}
            name={name}
          >
          </AddModalContainerBotComponent>
        </ModalContainer>
      </ModalContainerWrapper>
    )
  }
}

export default AddModalContainerComponent;