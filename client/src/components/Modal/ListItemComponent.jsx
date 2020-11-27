/* eslint-disable */
import React, { Component } from "react";
import styled, {keyframes} from 'styled-components';
import ListItemHeartComponent from './ListItemHeartComponent.jsx';

const ListItemButton = styled.button`
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

const ListItemContainer = styled.div`
  -webkit-box-align: center;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
`;

const ListItemContainerLeftDiv = styled.div`
  margin-right: 16px;
  width: 64px;
  height: 64px;
  background: rgb(221, 221, 221);
  border-radius: 4px;
`;

const ListItemNameContainer = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: rgb(34, 34, 34);
  margin-bottom: 4px;
`;

const ListItemContainerMidDiv = styled.div`
  flex: 1 1 0%;
`;

const ListItemComponent = ({listName, index, handleLikeList}) => {
  // console.log(listName);
  return (
    <div>
      <ListItemButton type='button'>
        <ListItemContainer>
          <ListItemContainerLeftDiv>
          </ListItemContainerLeftDiv>
          <ListItemContainerMidDiv>
            <ListItemNameContainer>
              {listName.listName}
            </ListItemNameContainer>
          </ListItemContainerMidDiv>
          <ListItemHeartComponent
            listName={listName}
            index={index}
            handleLikeList={handleLikeList}
          >
          </ListItemHeartComponent>
        </ListItemContainer>
      </ListItemButton>
    </div>
  )
}

export default ListItemComponent;