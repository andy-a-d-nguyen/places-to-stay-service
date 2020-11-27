/* eslint-disable */
import React, { Component } from "react";
import styled, {keyframes} from 'styled-components';

const AlternateAddTextContainer = styled.div`
  position: relative;
  cursor: text;
  display: flex;
  height: 56px;
  width: 100%;
  margin: 0px;
  border: none;
  color: rgb(34, 34, 34);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  outline: none;
`;

const AddTextContainerLabel = styled.label`
  position: relative;
  flex: 1 1 0%;
  padding: 0px;
`;

const AlternateAddTextContainerLabelTopDiv = styled.div`
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
  transform: translateY(-8px) scale(0.75);
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

const AlternateAddTextContainerLabelBotDivInner = styled.div`
  display: flex;
  opacity: 1;
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

  &:focus {
    color: rgb(34, 34, 34);
  }
`;

class AlternateAddTextContainerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onInputChange(event.target.value);
  }
  render() {
    return (
        <AlternateAddTextContainer>
          <AddTextContainerLabel>
            <AlternateAddTextContainerLabelTopDiv>
              <AddTextContainerLabelTopDivInner>
                Name
              </AddTextContainerLabelTopDivInner>
            </AlternateAddTextContainerLabelTopDiv>
            <AddTextContainerLabelBotDiv>
              <AlternateAddTextContainerLabelBotDivInner>
                <AddTextContainerLabelBotDivInnerInput
                  className='focus-visible'
                  maxlength='50'
                  type='text'
                  value={this.props.name}
                  onChange={this.handleChange}
                >
                </AddTextContainerLabelBotDivInnerInput>
              </AlternateAddTextContainerLabelBotDivInner>
            </AddTextContainerLabelBotDiv>
          </AddTextContainerLabel>
        </AlternateAddTextContainer>
    )
  }
}

export default AlternateAddTextContainerComponent;