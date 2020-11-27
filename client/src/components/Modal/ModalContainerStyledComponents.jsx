/* eslint-disable */
import styled, {keyframes} from 'styled-components';

const ModalContainerWrapper = styled.div`
  -webkit-box-align: center;
  padding: 40px;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  z-index: 2000;
  position: fixed;
  inset: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ModalContainerAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(0px, 100%);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 568px;
  border-radius: 12px;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  background: rgb(255, 255, 255);
  position: relative;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-name: ModalContainerAnimation;
`;

export {
  ModalContainer,
  ModalContainerAnimation,
  ModalContainerWrapper,
}