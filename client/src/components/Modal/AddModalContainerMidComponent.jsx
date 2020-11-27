/* eslint-disable */
import React, { Component } from "react";
import styled, {keyframes} from 'styled-components';
import AddTextContainerComponent from './AddTextContainerComponent.jsx';
import AlternateAddTextContainerComponent from './AlternateAddTextContainerComponent.jsx';

const AddModalContainerMidDiv = styled.div`
  height: 160px;
  padding: 32px 16px;
  overflow-y: auto;
`;

const AddTextContainerBot = styled.div`
  padding-top: 8px;
`;

const AddTextContainerBotInner = styled.div`
  display: flex;
  color: rgb(113, 113, 113);
  font-size: 12px;
  line-height: 16px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
`;

class AddModalContainerMidComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      showAddTextContainer: true,
      showAlternateAddTextContainer: false,
    }

    this.changeTextContainer = this.changeTextContainer.bind(this);
  }

  changeTextContainer(event) {
    const {
      showAddTextContainer,
      showAlternateAddTextContainer
    } = this.state;
    if (!this.props.name) {
      this.setState({
        showAddTextContainer: !showAddTextContainer,
        showAlternateAddTextContainer: !showAlternateAddTextContainer
      })
    }
  }

  render () {
    const {
      showAddTextContainer,
      showAlternateAddTextContainer
    } = this.state;
    const {
      onInputChange,
      name,
    } = this.props;
    return (
      <AddModalContainerMidDiv onClick={this.changeTextContainer}>
        {showAddTextContainer ?
          <AddTextContainerComponent
          showAddTextContainer={showAddTextContainer}
          >
          </AddTextContainerComponent>
        : null}
        {showAlternateAddTextContainer ?
          <AlternateAddTextContainerComponent
          name={name}
          onInputChange={onInputChange}
          >
          </AlternateAddTextContainerComponent>
        : null}
        <AddTextContainerBot>
          <AddTextContainerBotInner>
            50 characters maximum
          </AddTextContainerBotInner>
        </AddTextContainerBot>
      </AddModalContainerMidDiv>
    )
  }
}

export default AddModalContainerMidComponent;