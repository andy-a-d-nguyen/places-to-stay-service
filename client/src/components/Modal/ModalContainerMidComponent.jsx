/* eslint-disable */
import React, { Component } from "react";
import styled, {keyframes} from 'styled-components';
import ListItemComponent from './ListItemComponent.jsx';

const ModalContainerMidDiv = styled.div`
  padding: 20px 16px;
  overflow-y: auto;
`;

const NewListButton = styled.button`
  cursor: pointer;
  position: relative;
  touch-action: manipulation;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  border-radius: 0px;
  outline: none;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  background: transparent;
  border: none;
  color: inherit;
  display: block;
  margin: 0px;
  padding: 0px;
  text-align: inherit;
  text-decoration: none;
  height: 100%;
  width: 100%;
`;

const NewListButtonInnerDiv = styled.div`
  -webkit-box-align: center;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
`;

const PlusBoxContainerWrapper = styled.div`
  margin-right: 16px;
  width: 64px;
  height: 64px;
  background: rgb(221, 221, 221);
  border-radius: 4px;
`;

const PlusBoxContainer = styled.div`
  -webkit-box-pack: center;
  -webkit-box-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 4px;
  background-color: rgb(34, 34, 34);
`;

const PlusBoxSVG = styled.svg`
  display: block;
  height: 32px;
  width: 32px;
  fill: rgb(255, 255, 255);
`;

const ModalContainerMidDivBot = styled.div`
  position: absolute;
  bottom: 96px;
  left: 0px;
  right: 0px;
  text-align: center;
`;

const TextContainerWrapper = styled.div`
  flex: 1 1 0%;
`;

const TextContainer = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: rgb(34, 34, 34);
  margin-bottom: 4px;
`;

const TextContainerBot = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(34, 34, 34);
`;

const ModalContainerMidComponent = ({handleAddList, listNames, handleLikeList}) => {
  return (
    <ModalContainerMidDiv>
      <div>
        <NewListButton
          type='button'
          onClick={handleAddList}
        >
          <NewListButtonInnerDiv>
            <PlusBoxContainerWrapper>
              <PlusBoxContainer>
                <PlusBoxSVG viewBox="0 0 32 32">
                  <path d="M28,17H17V28H15V17H4V15H15V4h2V15H28Z">
                  </path>
                </PlusBoxSVG>
              </PlusBoxContainer>
            </PlusBoxContainerWrapper>
            <TextContainerWrapper>
              <TextContainer>
                Create a new list
              </TextContainer>
              <TextContainerBot>
              </TextContainerBot>
            </TextContainerWrapper>
          </NewListButtonInnerDiv>
        </NewListButton>
      </div>
      {listNames.map((listName, index) => {
        return (
        <ListItemComponent
          listName={listName}
          key={index}
          index={index}
          handleLikeList={handleLikeList}
        >
        </ListItemComponent>)
      })}
      <ModalContainerMidDivBot>
      </ModalContainerMidDivBot>
    </ModalContainerMidDiv>
  )
}

export default ModalContainerMidComponent;