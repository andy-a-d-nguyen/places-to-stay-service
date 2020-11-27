/* eslint-disable */
import styled, {keyframes} from 'styled-components';

const CloseButtonContainer = styled.div`
  top: 24px;
  position: absolute;
  display: flex;
  left: 24px;
`;

const CloseButton = styled.button`
appearance: none;
  display: inline-block;
  border-radius: 50%;
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  color: rgb(34, 34, 34);
  cursor: pointer;
  touch-action: manipulation;
  position: relative;
  background: transparent;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;

  &::{
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

const CloseButtonInnerSpan = styled.span`
  position: relative;
`;

const CloseButtonSVG = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 3;
  overflow: visible;
`;

export {
  CloseButtonContainer,
  CloseButton,
  CloseButtonInnerSpan,
  CloseButtonSVG,
}